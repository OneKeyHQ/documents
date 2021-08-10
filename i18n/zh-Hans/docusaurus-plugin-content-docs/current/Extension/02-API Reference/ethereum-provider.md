---
sidebar_position: 1
---

# 以太坊提供商API

::: tip提示推荐阅读
我们建议所有web3网站开发人员阅读[基本用法](#基本用法)部分。
:::

::: tip最近的重大提供商更改
如果您是以太坊应用程序开发人员，并且正在寻找有关我们2021年1月提供商API更改的信息，
有关更多详细信息，请参见我们的[迁移指南](./provider-migration.html)。
:::

OneKey将全局API注入其用户在“ window.ethereum”访问的网站中。
该API允许网站请求用户的以太坊帐户，从用户连接的区块链中读取数据，并建议用户签署消息和交易。
提供者对象的存在指示以太坊用户。
我们建议在任何平台或浏览器上使用[`@onekey/detect-provider`](https://npmjs.com/package/@onekey/detect-provider) 检测我们的提供商。

以太坊JavaScript提供程序API由[EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) 指定。

```javascript
// This function detects most providers injected at window.ethereum
import detectEthereumProvider from '@onekey/detect-provider';

const provider = await detectEthereumProvider();

if (provider) {
  // From now on, this should always be true:
  // provider === window.ethereum
  startApp(provider); // initialize your app
} else {
  console.log('Please install OneKey!');
}
```

## 目录

[[toc]]

## 基本用法

为了使任何不平凡的以太坊Web应用程序(也称为dapp，web3网站等)正常工作，您必须：

-检测以太坊提供商(`window.ethereum`)
-检测用户连接到哪个以太坊网络
-获取用户的以太坊账户

此页面顶部的代码段足以检测提供者。
您可以通过查看[使用提供程序部分](#使用提供程序部分)中的代码片段来学习如何完成另外两个代码。

创建完整功能的web3应用程序所需的全部是提供者API。

就是说，许多开发人员使用便利库，例如[ethers](https://www.npmjs.com/package/ethers) ，而不是直接使用提供程序。
如果您需要比此API提供的抽象更高的抽象，我们建议您使用便捷库。

## 链ID

这些是默认情况下OneKey支持的以太坊链的ID。
有关更多信息，请咨询[chainid.network](https://chainid.network).

| Hex  | Decimal | Network                         |
| ---- | ------- | ------------------------------- |
| 0x1  | 1       | Ethereum Main Network (Mainnet) |
| 0x3  | 3       | Ropsten Test Network            |
| 0x4  | 4       | Rinkeby Test Network            |
| 0x5  | 5       | Goerli Test Network             |
| 0x2a | 42      | Kovan Test Network              |
| 0x38 | 56      | Kovan Test Network              |
| 0x80 | 128     | Kovan Test Network              |
| 0x89 | 137     | Kovan Test Network              |

## 特性

### ethereum.isOneKey

:::警告注意
此属性是非标准的。非OneKey提供者也可以将此属性设置为“ true”。
:::

如果用户已安装OneKey，则为true。

## 方法

### ethereum.isConnected()

::: tip提示
请注意，此方法与用户帐户无关。

关于一个web3网站是否可以访问该用户的帐户，您可能经常遇到“已连接”一词。
但是，在提供程序界面中，“已连接”和“已断开连接”是指提供程序是否可以向当前链发出RPC请求。
:::

```typescript
ethereum.isConnected(): boolean;
```

如果提供程序已连接到当前链，则返回`true`，否则返回`false` 。

如果未连接提供程序，则必须重新加载页面才能重新建立连接。
有关更多信息，请参见[`connect`](#connect)和[`disconnect`](#disconnect)事件。

### ethereum.request(args)

```typescript
interface RequestArguments {
  method: string;
  params?: unknown[] | object;
}

ethereum.request(args: RequestArguments): Promise<unknown>;
```

使用`request`通过OneKey将RPC请求提交给以太坊。
它返回一个Promise，解析为RPC方法调用的结果。

参数和返回值将因RPC方法而异。
实际上，如果一个方法具有任何`params` ，则它们几乎总是类型为`Array<any>`。

如果请求由于任何原因而失败，则Promise将拒绝并返回[以太坊RPC错误](#errors)。

除了许多可能不支持的方法外，OneKey还支持大多数标准化的以太坊RPC方法。
其他钱包支持。
有关详细信息，请参见OneKey [RPC API documentation](./rpc-api.html) 。

#### 示例

```javascript
params: [
  {
    from: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
    to: '0xd46e8dd67c5d32be8058bb8eb970870f07244567',
    gas: '0x76c0', // 30400
    gasPrice: '0x9184e72a000', // 10000000000000
    value: '0x9184e72a', // 2441406250
    data:
      '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',
  },
];

ethereum
  .request({
    method: 'eth_sendTransaction',
    params,
  })
  .then((result) => {
    // The result varies by by RPC method.
    // For example, this method will return a transaction hash hexadecimal string on success.
  })
  .catch((error) => {
    // If the request fails, the Promise will reject with an error.
  });
```

## 事件

OneKey提供程序实现了[Node.js `EventEmitter`](https://nodejs.org/api/events.html) API。
本节详细介绍了通过该API发出的事件。
在其他地方有无数的`EventEmitter`指南，但是您可以监听这样的事件：

```javascript
ethereum.on('accountsChanged', (accounts) => {
  // Handle the new accounts, or lack thereof.
  // "accounts" will always be an array, but it can be empty.
});

ethereum.on('chainChanged', (chainId) => {
  // Handle the new chain.
  // Correctly handling chain changes can be complicated.
  // We recommend reloading the page unless you have good reason not to.
  window.location.reload();
});
```

### 连接

```typescript
interface ConnectInfo {
  chainId: string;
}

ethereum.on('connect', handler: (connectInfo: ConnectInfo) => void);
```

当OneKey提供程序首次能够将RPC请求提交到链时，它将发出此事件。
我们建议使用connect事件处理程序和[ethereum.isConnected()方法](＃ethereum-isconnected)，以确定何时/是否连接了提供程序。

### 断开连接

```typescript
ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);
```

如果OneKey提供程序无法将RPC请求提交到任何链，它将发出此事件。
通常，这只会由于网络连接问题或某些无法预料的错误而发生。

一旦发出“ disconnect”，在重新建立与链的连接之前，提供者将不接受任何新请求，这需要重新加载页面。
您还可以使用[`ethereum.isConnected()`方法](#ethereum-isconnected)来确定提供程序是否断开连接。

### accountsChanged

```typescript
ethereum.on('accountsChanged', handler: (accounts: Array<string>) => void);
```

每当`eth_accounts` RPC方法的返回值更改时，OneKey提供程序都会发出此事件。
eth_accounts返回一个为空或包含单个帐户地址的数组。
返回的地址(如果有)是允许呼叫者访问的最近使用的帐户的地址。
呼叫者通过其URL _origin_进行标识，这意味着所有具有相同来源的站点都共享相同的权限。

这意味着，每当用户的公开帐户地址发生更改时，就会发出“ accountsChanged”。

:::tip 提示
我们计划允许eth_accounts数组在不久的将来能够包含多个地址。
:::

### chainChanged

:::tip 提示
有关OneKey的默认链及其链ID，请参见[链ID部分](#chain-ids)。
:::

```typescript
ethereum.on('chainChanged', handler: (chainId: string) => void);
```

当前连接的链发生更改时，OneKey提供程序将发出此事件。

所有RPC请求都将提交到当前连接的链。
因此，通过侦听此事件来跟踪当前链ID是至关重要的。

除非您有充分的理由，否则我们强烈建议您重新加载有关链式更改的页面。

```javascript
ethereum.on('chainChanged', (_chainId) => window.location.reload());
```

### 信息

```typescript
interface ProviderMessage {
  type: string;
  data: unknown;
}

ethereum.on('message', handler: (message: ProviderMessage) => void);
```

当OneKey提供程序收到一些应通知消费者的消息时，它将发出此事件。
消息的类型由`type`字符串标识。

RPC订阅更新是`message`事件的常见用例。
例如，如果您使用“ eth_subscribe”创建订阅，则每个订阅更新将作为带有“ eth_subscription”类型的“ message”事件发出。

## 错误

OneKey提供程序引发或返回的所有错误均遵循以下界面：

```typescript
interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}
```

[`ethereum.request(args)`方法](#ethereum-request-args)急切地抛出错误。
您通常可以使用错误的code属性来确定请求失败的原因。
常用代码及其含义包括：

- `4001`
  - 请求被用户拒绝
- `-32602`
  - 参数无效
- `-32603`
  - 内部错误

有关错误的完整列表，请参阅[EIP-1193](https://eips.ethereum.org/EIPS/eip-1193#provider-errors) 和[EIP-1474](https：//eips.ethereum。 org/EIPS/eip-1474＃error-codes)。

:::tip 提示
[`eth-rpc-errors`](https://npmjs.com/package/eth-rpc-errors) 包实现了OneKey提供程序抛出的所有RPC错误，并可以帮助您确定其含义。
:::

## 使用提供者

此代码段说明了如何满足web3网站的三个最常见的要求：

-检测以太坊提供商(`window.ethereum`)
-检测用户连接到哪个以太坊网络
-获取用户的以太坊账户

<<< @/docs/snippets/handleProvider.js

## 实验性API

:::警告
不能保证本节中定义的方法和属性将保持稳定。
需要您自担风险使用它。
:::

我们在`ethereum._metamask`属性下公开了一些OneKey特定的实验方法。

## 实验方法

### ethereum.\_metamask.isUnlocked()

```typescript
ethereum._metamask.isUnlocked(): Promise<boolean>;
```

该方法返回一个Promise，该Promise解析为一个布尔值，指示用户是否已解锁OneKey。
必须解锁OneKey才能执行涉及用户帐户的任何操作。
请注意，此方法不指示用户是否向呼叫者公开了任何帐户。

##旧版API

:::警告
在实践中，您绝对不应“依赖”这些方法，属性或事件中的任何一个。
:::

本部分记录了我们的旧版提供程序API。
在2020年通过[EIP-1193](https://eips.ethereum.org/EIPS/eip-1193)对提供商API进行标准化之前，OneKey仅支持此API。
因此，您可能会发现使用此API的web3站点，或其他实现此API的提供程序。

##旧版属性

### ethereum.chainId(已弃用)

:::警告
此属性是非标准的，因此已弃用。

如果您需要检索当前的链ID，请使用[`ethereum.request({方法：'eth_chainId'})`](＃ethereum-request-args)。
另请参阅[`chainChanged`](＃chainchanged)事件以获取有关如何处理链ID的更多信息。

此属性的值可以随时更改。
:::

代表当前链ID的十六进制字符串。

### ethereum.networkVersion(已弃用)

:::警告
与网络ID相比，您应该始终首选链ID。

如果必须获取网络ID，请使用[`ethereum.request({方法：'net_version'})`](＃ethereum-request-args)。

此属性的值可以随时更改。
:::

代表当前区块链网络ID的十进制字符串。

### ethereum.selectedAddress(已弃用)

:::警告
请改用[`ethereum.request({方法：'eth_accounts'})`](＃ethereum-request-args)。

此属性的值可以随时更改。
:::

返回代表用户“当前选定”地址的十六进制字符串。

“当前选定的”地址是`eth_accounts`返回的数组中的第一项。

##传统方法

### ethereum.enable()(已弃用)

:::警告
请改用[`ethereum.request({方法：'eth_requestAccounts'})`](＃ethereum-request-args)。
:::

ethereum.request({方法：'eth_requestAccounts'})的别名。

### ethereum.sendAsync()(不推荐使用)

:::警告
请改用[`ethereum.request()`](＃ethereum-request-args)。
:::

```typescript
interface JsonRpcRequest {
  id: string | undefined;
  jsonrpc: '2.0';
  method: string;
  params?: Array<any>;
}

interface JsonRpcResponse {
  id: string | undefined;
  jsonrpc: '2.0';
  method: string;
  result?: unknown;
  error?: Error;
}

type JsonRpcCallback = (error: Error, response: JsonRpcResponse) => unknown;

ethereum.sendAsync(payload: JsonRpcRequest, callback: JsonRpcCallback): void;
```

这是ethereum.request的祖先。它仅适用于JSON-RPC方法，并将JSON-RPC请求有效负载对象和错误优先的回调函数作为其参数。

有关详细信息，请参见[以太坊JSON-RPC API](https://eips.ethereum.org/EIPS/eip-1474)。

### ethereum.send()(已弃用)

：：：警告
请改用[`ethereum.request()`](＃ethereum-request-args)。
:::

```typescript
ethereum.send(
  methodOrPayload: string | JsonRpcRequest,
  paramsOrCallback: Array<unknown> | JsonRpcCallback,
): Promise<JsonRpcResponse> | void;
```

此方法的行为不可预测，应不惜一切代价避免使用。
它实际上是[`ethereum.sendAsync()`](＃ethereum-sendasync-deprecated)的重载版本。

`ethereum.send()`可以通过三种不同的方式调用：

```typescript
// 1.
ethereum.send(payload: JsonRpcRequest, callback: JsonRpcCallback): void;

// 2.
ethereum.send(method: string, params?: Array<unknown>): Promise<JsonRpcResponse>;

// 3.
ethereum.send(payload: JsonRpcRequest): unknown;
```

您可以想到这些签名如下：

1.该签名与`ethereum.sendAsync()`完全一样。

2.这个签名就像一个异步的“ ethereum.sendAsync()”，以“ method”和“ params”作为参数，而不是JSON-RPC负载和回调

3.此签名使您可以同步调用以下RPC方法：

   - `eth_accounts`
   - `eth_coinbase`
   - `eth_uninstallFilter`
   - `net_version`

## 传统活动

### 关闭(已弃用)

:::警告
使用[`disconnect`](＃disconnect)代替。
:::

```typescript
ethereum.on('close', handler: (error: Error) => void);
```

### chainIdChanged(不建议使用)

:::警告
使用[`chainChanged`](＃chainchanged)代替。
:::

[`chainChanged`](#chainchanged)的别名拼写错误。

```typescript
ethereum.on('chainChanged', handler: (chainId: string) => void);
```

### networkChanged(已弃用)

:::警告
使用[`chainChanged`](＃chainchanged)代替。
:::

像[`chainChanged`](＃chainchanged)一样，但是带有`networkId`。
网络ID不安全，[EIP-155](https://eips.ethereum.org/EIPS/eip-155)已有效地弃用了链ID。
除非您知道自己在做什么，否则请避免使用它们。

```typescript
ethereum.on('networkChanged', handler: (networkId: string) => void);
```

### 通知(已弃用)

:::警告
使用[`message`](＃message)代替。
:::

```typescript
ethereum.on('notification', handler: (payload: any) => void);
```
