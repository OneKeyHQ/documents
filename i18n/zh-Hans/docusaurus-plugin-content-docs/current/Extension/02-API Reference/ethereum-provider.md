---
sidebar_position: 1
---

# 注入对象的 API

:::tip 提示
阅读我们建议所有 web3 网站开发人员阅读[基本用法](#基本用法)部分。
:::

OneKey 浏览器插件会将全局的 `window.ethereum` 变量注入用户访问的网站中。

该 API 允许网站请求用户的以太坊帐户，从用户连接的区块链中读取数据，并建议用户签署消息和交易。`ethereum` 对象的存在指示以太坊用户。我们建议在任何平台或浏览器上使用[`@onekeyhq/detect-provider`](https://npmjs.com/package/@onekeyhq/detect-provider) 检测是否是我们的 `ethereum` 对象。

以太坊 JavaScript 注入的对象 API 内容由 [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) 指定。

```javascript
// 这个模块会进行检测，确认注入的内容是否是 OneKey 浏览器插件注入的
import detectEthereumProvider from '@onekeyhq/detect-provider';

const provider = await detectEthereumProvider();

if (provider) {
  // provider === window.ethereum
  startApp(provider); // 初始化 APP
} else {
  console.log('Please install OneKey 浏览器插件!');
}
```

## 基本用法

为了使任何 Dapp Web 应用程序和网站正常工作，您必须：

- 检测以太坊对象是否注入（`window.ethereum`）
- 检测用户连接到哪个以太坊网络
- 获取用户连接的以太坊账户

此页面顶部的代码段足以检测对象是否正确注入。您可以通过查看[使用提供程序部分](#使用提供程序部分)中的代码片段来学习如何完成另外两个代码。

创建完整功能的 web3 应用程序所需的全部是提供者 API。

就是说，许多开发人员使用第三方模块，例如 [ethers](https://www.npmjs.com/package/ethers) ，而不是直接使用提供程序。如果您需要比此 API 提供的抽象更高的抽象，我们建议您使用第三方库。

## 链的 ID

这些是默认情况下 OneKey 浏览器插件支持的 EVM 链的 ID，有关更多信息，请查阅 [chainid.network](https://chainid.network)。

| 十六进制  | 十进制 | 网络                      |
| ---- | ------- | -------------------------- |
| 0x1  | 1       | Ethereum 以太坊主网          |
| 0x38 | 56      | BSC 币安智能链主网           |
| 0x80 | 128     | HECO 火币生态链主网            |
| 0x41 | 65      | OEC 欧易交易链主网              |
| 0x89 | 137     | Polygon 主网              |
| 0xfa | 250     | Fantom 主网              |
| 0x64 | 100     | xDai 主网              |
| 0x3  | 3       | Ropsten 测试网             |
| 0x2a | 42      | kovan 测试网              |
| 0x4  | 4       | Rinkeby 测试网            |

## 方法

### ethereum.isConnected()

:::tip 提示
请注意，此方法与用户帐户无关。
:::

关于一个 web3 网站是否可以访问该用户的帐户，您可能经常遇到“已连接”一词。但是，在提供程序界面中，“已连接”和“已断开连接”是指提供程序是否可以向当前链发出 RPC 请求。 :::

```typescript
ethereum.isConnected(): boolean;
```

如果提供程序已连接到当前链，则返回`true`，否则返回`false` 。

如果未连接提供程序，则必须重新加载页面才能重新建立连接。有关更多信息，请参见[`connect`](#connect)和[`disconnect`](#disconnect)事件。

### ethereum.request(args)

```typescript
interface RequestArguments {
  method: string;
  params?: unknown[] | object;
}

ethereum.request(args: RequestArguments): Promise<unknown>;
```

使用 `request` 通过 OneKey 浏览器插件将 RPC 请求提交给以太坊链。它返回一个 Promise，解析为 RPC 方法调用的结果。

参数和返回值将因 RPC 方法而异。实际上，如果一个方法具有 `params` 参数，则它们几乎总是类型为`Array<any>`。

如果请求由于任何原因而失败，则 Promise 将拒绝并返回 [以太坊 RPC 错误](#errors)。

除了许多可能不支持的方法外，OneKey 浏览器插件还支持大多数标准化的以太坊 RPC 方法。其他钱包支持。有关详细信息，请参见 OneKey 浏览器插件 [RPC API](./rpc-api.html) 。

#### 示例

```javascript
params: [
  {
    from: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
    to: '0xd46e8dd67c5d32be8058bb8eb970870f07244567',
    gas: '0x76c0', // 30400
    gasPrice: '0x9184e72a000', // 10000000000000
    value: '0x9184e72a', // 2441406250
    data: '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',
  },
];

ethereum
  .request({
    method: 'eth_sendTransaction',
    params,
  })
  .then((result) => {
    // RPC 返回的结果会作为 result
    // 当方法成功时，会返回一个十六进制的字符串作为交易哈希
  })
  .catch((error) => {
    // 如果交易失败，则 Promise 会 reject 并返回一个错误
  });
```

## 事件

OneKey 浏览器插件 提供程序实现了[Node.js `EventEmitter`](https://nodejs.org/api/events.html) API。本节详细介绍了通过该 API 发出的事件。在其他地方有无数的`EventEmitter`指南，但是您可以监听这样的事件：

```javascript
ethereum.on('accountsChanged', (accounts) => {
  // 当有账户变化时，则会触发这个回调函数
  // "accounts" 永远是一个数组，但是有可能是空的
});

ethereum.on('chainChanged', (chainId) => {
  // 处理当有了一条新的选中的链时，会触发这里的回调函数
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

当 OneKey 浏览器插件 提供程序首次能够将 RPC 请求提交到链时，它将发出此事件。我们建议使用 connect 事件处理程序和[ethereum.isConnected()方法](＃ethereum-isconnected)，以确定何时 / 是否连接了注入 API。

### 断开连接

```typescript
ethereum.on('disconnect', handler: (error: ProviderRpcError) => void);
```

如果 OneKey 浏览器插件提供程序无法将 RPC 请求提交到任何链，它将发出此事件。通常，这只会由于网络连接问题或某些无法预料的错误而发生。

一旦发出 “disconnect”，在重新建立与链的连接之前，API 将不接受任何新请求，这需要重新加载页面。您还可以使用[`ethereum.isConnected()`方法](#ethereum-isconnected)来确定提供程序是否断开连接。

### accountsChanged 事件

```typescript
ethereum.on('accountsChanged', handler: (accounts: Array<string>) => void);
```

每当 `eth_accounts` RPC 方法的返回值更改时，OneKey 浏览器插件都会发出此事件。 `eth_accounts` 返回一个为空或包含单个帐户地址的数组。返回的地址（如果有）是允许调用者访问的最近使用的帐户的地址。调用者通过其 URL *origin* 进行标识，这意味着所有具有相同来源的站点都共享相同的权限。

这意味着，每当用户的公开帐户地址发生更改时，就会发出 “accountsChanged” 事件。

:::tip 提示
我们计划允许 `eth_accounts` 数组在不久的将来能够包含多个地址。
:::

### chainChanged 事件

:::tip 提示
有关 OneKey 浏览器插件的默认链及其链 ID，请参见[链的 ID](#链的\ ID)。
:::

```typescript
ethereum.on('chainChanged', handler: (chainId: string) => void);
```

当前连接的链发生更改时，OneKey 浏览器插件将发出此事件。

所有 RPC 请求都将提交到当前连接的链。因此，通过监听此事件来跟踪当前链的 ID 是至关重要的。

```javascript
ethereum.on('chainChanged', (_chainId) => window.location.reload());
```

### message 事件

```typescript
interface ProviderMessage {
  type: string;
  data: unknown;
}

ethereum.on('message', handler: (message: ProviderMessage) => void);
```

当 OneKey 浏览器插件收到一些应通知消费者的消息时，它将发出此事件。消息的类型由 `type` 字符串标识。

RPC 订阅更新是 `message` 事件的常见用例。例如，如果您使用 “eth_subscribe” 创建订阅，则每个订阅更新将作为带有 “eth_subscription” 类型的 “message” 事件发出。

## 错误

OneKey 浏览器插件引发或返回的所有错误均遵循以下界面：

```typescript
interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}
```

[`ethereum.request(args)`方法](#ethereum-request-args)急切地抛出错误。您通常可以使用错误的 code 属性来确定请求失败的原因。常用代码及其含义包括：

- `4001`
  - 请求被用户拒绝
- `-32602`
  - 参数无效
- `-32603`
  - 内部错误

有关错误的完整列表，请参阅 [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193#provider-errors) 和 [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474＃error-codes)。

:::tip 提示
[`eth-rpc-errors`](https://npmjs.com/package/eth-rpc-errors) 包实现了 OneKey 浏览器插件程序抛出的所有 RPC 错误，并可以帮助您确定其含义。
:::
