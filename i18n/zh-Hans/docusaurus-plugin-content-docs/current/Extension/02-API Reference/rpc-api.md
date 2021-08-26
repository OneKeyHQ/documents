---
sidebar_position: 3
---

# RPC API

OneKey 浏览器插件使用 [`onekey.request(args)`方法](./onekey-provider.html＃onekey-request-args) 包装 RPC API。

该 API 基于所有以太坊客户端公开的接口，以及越来越多的其他钱包可能支持或可能不支持的方法。

:::tip 提示
所有 RPC 方法请求都可以返回错误。确保每次调用 `onekey.request(args)` 时都要处理错误。
:::

## 以太坊 JSON-RPC 方法

有关以太坊 JSON-RPC API，请参阅[以太坊 Wiki](https://eth.wiki/json-rpc/API#json-rpc-methods)。

此 API 的重要方法包括：

- [`eth_accounts`](https://eth.wiki/json-rpc/API#eth_accounts)
- [`eth_call`](https://eth.wiki/json-rpc/API#eth_call)
- [`eth_getBalance`](https://eth.wiki/json-rpc/API#eth_getbalance)
- [`eth_sendTransaction`](https://eth.wiki/json-rpc/API#eth_sendtransaction)
- [`eth_sign`](https://eth.wiki/json-rpc/API#eth_sign)

## 权限

OneKey 浏览器插件通过 [EIP-2255](https://eips.ethereum.org/EIPS/eip-2255) 引入了 Web3 电子钱包权限。在此权限系统中，每个 RPC 方法都是 _restricted_ 或 _open_。如果方法受到限制，则外部 _domain_（例如 Web3 站点）必须具有相应的权限才能调用它。同时，开放方法不需要调用权限，但可能需要用户确认才能成功（例如 `eth_sendTransaction`）。

当前，唯一的权限是 `eth_accounts`，它允许您访问用户的以太坊地址，将来我们会添加更多权限。

在底层，权限是与 JSON 兼容的普通对象，具有许多字段，这些字段大多数由 OneKey 浏览器插件在内部使用。以下界面列出了调用者可能感兴趣的字段：

```typescript
interface Web3WalletPermission {
  // 权限对应的方法名
  parentCapability: string;

  // 授予权限的日期，UNIX 纪元时间
  date?: number;
}
```

权限系统在 [`rpc-cap`模块](https://github.com/onekeyhq/rpc-cap) 中实现。如果您有兴趣了解有关此启发式权限系统背后的理论的更多信息，我们建议您查看 [EIP-2255](https://eips.ethereum.org/EIPS/eip-2255)。

### eth_requestAccounts

:::tip EIP-1102
此方法由[EIP-1102](https://eips.ethereum.org/EIPS/eip-1102)指定。它等效于已弃用的 [`onekey.enable()`](./ethereum-provider.html#ethereum-enable) API 方法。

在内部逻辑中，它为 [eth_accounts] 权限调用 [`wallet_requestPermissions`](＃wallet-requestpermissions)。由于目前只有 `eth_accounts` 权限，因此您现在只需要此方法。
:::

#### 返回

`string []` 十六进制以太坊地址字符串的数组。

#### 概述

请求用户提供一个以太坊地址以作为标识。返回一个 Promise，它解析为单个以太坊地址字符串的数组。如果用户拒绝该请求，则 Promise 将拒绝并显示 “4001” 错误。

该请求将导致出现一个 OneKey 浏览器插件弹出窗口。您只应响应用户的操作（例如单击按钮）来请求用户的帐户。在请求仍处于挂起状态时，应始终禁用调用请求的按钮。

如果您无法检索用户的帐户，则应鼓励用户发起帐户请求。

#### 示例

```javascript
document.getElementById('connectButton', connect);

function connect() {
  onekey
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 用户拒绝错误
        console.log('请连接 OneKey 浏览器插件');
      } else {
        console.error(error);
      }
    });
}
```

### wallet_getPermissions

#### 返回

`Web3WalletPermission[]` - 调用方权限的数组。

#### 描述

获取调用者的当前权限。返回一个 Promise，该 Promise 解析为一个 `Web3WalletPermission` 对象数组。如果调用者没有权限，则该数组将为空。

### wallet_requestPermissions

#### 参数

- `Array<RequestedPermissions>` - 请求的权限。

```typescript
interface RequestedPermissions {
  [methodName: string]: {}; // 一个空对象，用于未来的扩展
}
```

#### 返回

`Web3WalletPermission[]` - 调用方权限的数组。

#### 描述

向用户请求给定的权限。返回一个 Promise，该 Promise 解析为`Web3WalletPermission`对象的非空数组，对应于调用者的当前权限。如果用户拒绝该请求，则 Promise 将拒绝并显示 `4001` 错误。

该请求将导致出现一个 OneKey 浏览器插件弹出窗口。您仅应请求权限来响应用户操作，例如单击按钮。

#### 例子

```javascript
document.getElementById('requestPermissionsButton', requestPermissions);

function requestPermissions() {
  onekey
    .request({
      method: 'wallet_requestPermissions',
      params: [{ eth_accounts: {} }],
    })
    .then((permissions) => {
      const accountsPermission = permissions.find((permission) => permission.parentCapability === 'eth_accounts');
      if (accountsPermission) {
        console.log('eth_accounts permission successfully requested!');
      }
    })
    .catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 用户拒绝错误
        console.log('Permissions needed to continue.');
      } else {
        console.error(error);
      }
    });
}
```

## 其他 RPC 方法

### eth_decrypt

#### 参数

- `Array`
  - `string` - 加密的消息。
  - `string` - 可以解密消息的以太坊账户的地址。

#### 返回

字符串 - 解密的消息。

#### 简介

请求 OneKey 浏览器插件解密给定的加密消息。必须使用给定以太坊地址的公共加密密钥对消息进行加密。返回一个解析为已解密消息的 Promise，如果解密尝试失败，则该 Promise 进入 reject 状态。

有关更多信息，请参见 [`eth_getEncryptionPublicKey`](＃eth-getencryptionpublickey)。

#### 例子

```javascript
onekey
  .request({
    method: 'eth_decrypt',
    params: [encryptedMessage, accounts[0]],
  })
  .then((decryptedMessage) => console.log('The decrypted message is:', decryptedMessage))
  .catch((error) => console.log(error.message));
```

### eth_getEncryptionPublicKey

#### 参数

- `Array`
  - `string` - 以太坊账户的地址，应该获取其加密密钥。

#### 返回

字符串 - 指定的以太坊账户的公共加密密钥。

#### 简介

请求用户共享其公共加密密钥。返回一个解析为公共加密密钥的 Promise，或者如果用户拒绝了该请求，则拒绝该 Promise。

公钥是使用 `X25519_XSalsa20_Poly1305 算法` 的 [`nacl`](https://github.com/dchest/tweetnacl-js) 实现从与指定用户帐户相关联的熵计算得出的。

#### 例子

```javascript
let encryptionPublicKey;

onekey
  .request({
    method: 'eth_getEncryptionPublicKey',
    params: [accounts[0]], // you must have access to the specified account
  })
  .then((result) => {
    encryptionPublicKey = result;
  })
  .catch((error) => {
    if (error.code === 4001) {
      // EIP-1193 userRejectedRequest error
      console.log("We can't encrypt anything without the key.");
    } else {
      console.error(error);
    }
  });
```

#### 加密

```javascript
const ethUtil = require('ethereumjs-util');

const encryptedMessage = ethUtil.bufferToHex(
  Buffer.from(
    JSON.stringify(sigUtil.encrypt(encryptionPublicKey, { data: 'Hello world!' }, 'x25519-xsalsa20-poly1305')),
    'utf8',
  ),
);
```

### wallet_addEthereumChain

:::tip EIP-3085
这个方法基于 [EIP-3085](https://eips.ethereum.org/EIPS/eip-3085) 规范.
:::

#### 参数

- `Array`
  - `AddEthereumChainParameter` - 将链的信息和内容添加至 OneKey 浏览器插件

对于 `rpcUrls` 和 `blockExplorerUrls` 数组, 至少需要一个元素，同时也只有第一个元素目前会被应用

```typescript
interface AddEthereumChainParameter {
  chainId: string; // 一个 0x 开头的十六进制字符串
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 字符长度
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // 暂时无用
}
```

#### 返回

`null` - 成功返回 null，失败则返回对应错误

#### 描述

创建一个确认信息，要求用户将指定的链添加到 OneKey 浏览器插件。一旦添加了链，用户可以选择切换到该链。

与导致确认出现的任何方法一样，`wallet_addEthereumChain` 应该仅由于直接用户操作（例如单击按钮）而被调用。

OneKey 浏览器插件严格验证此方法的参数，并将拒绝该请求如果任何参数格式错误。此外，在以下情况下，OneKey 浏览器插件将拒绝该请求：

- 如果 RPC 端点不响应 RPC 调用。
- 如果在调用 `eth_chainId` 时 RPC 端点返回了不同的链 ID。
- 如果链 ID 已经存在于任何默认的 OneKey 浏览器插件链。

OneKey 浏览器插件目前尚不支持使用不带 18 个小数位的本国货币的链，但将来可能会这样做。


### wallet_watchAsset

:::tip EIP-747
此方法基于 [EIP-747](https://eips.ethereum.org/EIPS/eip-747) 规范。
:::

#### 参数

- `WatchAssetParams` - 需要观察的资产数据

#### 返回

`boolean` - 返回 `true` 则代表成功，其他错误情况返回 `false`

#### 描述

请求用户在 OneKey 浏览器插件中添加某个地址的资产。返回一个 “布尔值”，指示是否成功添加了该资产。

大多数以太坊钱包都支持某资产代币的地址合集，通常是从中心化的令牌注册表中获取的。 `wallet_watchAsset` 使 Web3 应用程序开发人员可以在运行时要求其用户跟踪其钱包中的令牌。

添加后，令牌就无法与通过传统方法（例如默认配置）添加的令牌区分开。

#### 示例

```javascript
onekey.request({
  method: 'wallet_watchAsset',
  params: {
    type: 'ERC20',
    options: {
      address: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
      symbol: 'FOO',
      decimals: 18,
      image: 'https://foo.io/token-image.svg',
    },
  },
});
  .then((success) => {
    if (success) {
      console.log('FOO successfully added to wallet!')
    } else {
      throw new Error('Something went wrong.')
    }
  })
  .catch(console.error)
```
