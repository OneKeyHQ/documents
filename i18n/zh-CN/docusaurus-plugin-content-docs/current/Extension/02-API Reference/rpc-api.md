---
sidebar_position: 3
---

# RPC API

MetaMask使用[`ethereum.request(args)`方法](./ethereum-provider.html＃ethereum-request-args)包装RPC API。

该API基于所有以太坊客户端公开的接口，以及越来越多的其他钱包可能支持或可能不支持的方法。

::: tip提示
所有RPC方法请求都可以返回错误。
确保每次调用`ethereum.request(args)`时都要处理错误。
:::

＃＃ 目录

[[toc]]

## 以太坊JSON-RPC方法

有关以太坊JSON-RPC API，请参阅[以太坊Wiki](https://eth.wiki/json-rpc/API#json-rpc-methods)。

此API的重要方法包括：

- [`eth_accounts`](https://eth.wiki/json-rpc/API#eth_accounts)
- [`eth_call`](https://eth.wiki/json-rpc/API#eth_call)
- [`eth_getBalance`](https://eth.wiki/json-rpc/API#eth_getbalance)
- [`eth_sendTransaction`](https://eth.wiki/json-rpc/API#eth_sendtransaction)
- [`eth_sign`](https://eth.wiki/json-rpc/API#eth_sign)

## 权限

MetaMask通过[EIP-2255](https://eips.ethereum.org/EIPS/eip-2255)引入了Web3电子钱包权限。
在此权限系统中，每个RPC方法都是_restricted_或_open_。
如果方法受到限制，则外部_domain_(例如Web3站点)必须具有相应的权限才能调用它。
同时，开放方法不需要调用权限，但可能需要用户确认才能成功(例如eth_sendTransaction)。

当前，唯一的权限是`eth_accounts`，它允许您访问用户的以太坊地址。
将来会添加更多权限。

在底层，权限是与JSON兼容的普通对象，具有许多字段，这些字段大多数由MetaMask在内部使用。
以下界面列出了消费者可能感兴趣的字段：

```typescript
interface Web3WalletPermission {
  // The name of the method corresponding to the permission
  parentCapability: string;

  // The date the permission was granted, in UNIX epoch time
  date?: number;
}
```

权限系统在[`rpc-cap`包](https://github.com/MetaMask/rpc-cap)中实现。
如果您有兴趣了解有关此_capability_启发式权限系统背后的理论的更多信息，我们建议您查看[EIP-2255](https://eips.ethereum.org/EIPS/eip-2255)。

### eth_request帐户

:::提示EIP-1102
此方法由[EIP-1102](https://eips.ethereum.org/EIPS/eip-1102)指定。
它等效于已弃用的[`ethereum.enable()`](./ethereum-provider.html＃ethereum-enable)提供者API方法。

在幕后，它为[eth_accounts]权限调用[`wallet_requestPermissions`](＃wallet-requestpermissions)。
由于目前只有eth_accounts`权限，因此您现在只需要此方法。
:::

#### 返回

string []-单个十六进制以太坊地址字符串的数组。

#### 描述

请求用户提供一个以太坊地址以作为标识。
返回一个Promise，它解析为单个以太坊地址字符串的数组。
如果用户拒绝该请求，则Promise将拒绝并显示“ 4001”错误。

该请求将导致出现一个MetaMask弹出窗口。
您只应响应用户的操作(例如单击按钮)来请求用户的帐户。
在请求仍处于挂起状态时，应始终禁用导致调度请求的按钮。

如果您无法检索用户的帐户，则应鼓励用户发起帐户请求。

#### 示例

```javascript
document.getElementById('connectButton', connect);

function connect() {
  ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log('Please connect to MetaMask.');
      } else {
        console.error(error);
      }
    });
}
```

### wallet_getPermissions

::: tip平台可用性
此RPC方法在MetaMask Mobile中尚不可用。
:::

#### 返回

Web3WalletPermission []-调用方权限的数组。

#### 描述

获取呼叫者的当前权限。
返回一个Promise，该Promise解析为一个Web3WalletPermission对象数组。
如果调用者没有权限，则该数组将为空。

### wallet_requestPermissions

::: tip平台可用性
此RPC方法在MetaMask Mobile中尚不可用。
:::

#### 参数

-`Array`

0.`RequestedPermissions`-请求的权限。

```typescript
interface RequestedPermissions {
  [methodName: string]: {}; // an empty object, for future extensibility
}
```

####返回

Web3WalletPermission []-调用方权限的数组。

#### 描述

向用户请求给定的权限。
返回一个Promise，该Promise解析为`Web3WalletPermission`对象的非空数组，对应于调用者的当前权限。
如果用户拒绝该请求，则Promise将拒绝并显示“ 4001”错误。

该请求将导致出现一个MetaMask弹出窗口。
您仅应请求权限来响应用户操作，例如单击按钮。

#### 例子

```javascript
document.getElementById('requestPermissionsButton', requestPermissions);

function requestPermissions() {
  ethereum
    .request({
      method: 'wallet_requestPermissions',
      params: [{ eth_accounts: {} }],
    })
    .then((permissions) => {
      const accountsPermission = permissions.find(
        (permission) => permission.parentCapability === 'eth_accounts'
      );
      if (accountsPermission) {
        console.log('eth_accounts permission successfully requested!');
      }
    })
    .catch((error) => {
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log('Permissions needed to continue.');
      } else {
        console.error(error);
      }
    });
}
```

##其他RPC方法

### eth_decrypt

::: tip平台可用性
此RPC方法在MetaMask Mobile中尚不可用。
:::

#### 参数

-`Array`

0.`string`-加密的消息。
1.`string`-可以解密消息的以太坊账户的地址。

#### 返回

字符串-解密的消息。

#### 描述

请求MetaMask解密给定的加密消息。
必须使用给定以太坊地址的公共加密密钥对消息进行加密。
返回一个解析为已解密消息的Promise，如果解密尝试失败，则拒绝该Promise。

有关更多信息，请参见[`eth_getEncryptionPublicKey`](＃eth-getencryptionpublickey)。

#### 例子

```javascript
ethereum
  .request({
    method: 'eth_decrypt',
    params: [encryptedMessage, accounts[0]],
  })
  .then((decryptedMessage) =>
    console.log('The decrypted message is:', decryptedMessage)
  )
  .catch((error) => console.log(error.message));
```

### eth_getEncryptionPublicKey

::: tip平台可用性
此RPC方法在MetaMask Mobile中尚不可用。
:::

#### 参数

-`Array`

0.`string`-以太坊账户的地址，应该获取其加密密钥。

####返回

字符串-指定的以太坊账户的公共加密密钥。

#### 描述

请求用户共享其公共加密密钥。
返回一个解析为公共加密密钥的Promise，或者如果用户拒绝了该请求，则拒绝该Promise。

公钥是使用X25519_XSalsa20_Poly1305算法的[`nacl`](https://github.com/dchest/tweetnacl-js)实现从与指定用户帐户相关联的熵计算得出的。

#### 例子

```javascript
let encryptionPublicKey;

ethereum
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

#### Encrypting

The point of the encryption key is of course to encrypt things.
Here's an example of how to encrypt a message using [`eth-sig-util`](https://github.com/MetaMask/eth-sig-util):

```javascript
const ethUtil = require('ethereumjs-util');

const encryptedMessage = ethUtil.bufferToHex(
  Buffer.from(
    JSON.stringify(
      sigUtil.encrypt(
        encryptionPublicKey,
        { data: 'Hello world!' },
        'x25519-xsalsa20-poly1305'
      )
    ),
    'utf8'
  )
);
```

### wallet_addEthereumChain

:::tip EIP-3085
This method is specified by [EIP-3085](https://eips.ethereum.org/EIPS/eip-3085).
:::

#### Parameters

- `Array`

  0. `AddEthereumChainParameter` - Metadata about the chain that will be added to MetaMask.

For the `rpcUrls` and `blockExplorerUrls` arrays, at least one element is required, and only the first element will be used.

```typescript
interface AddEthereumChainParameter {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}
```

#### Returns

`null` - The method returns `null` if the request was successful, and an error otherwise.

#### Description

创建一个确认，要求用户将指定的链添加到MetaMask。
一旦添加了链，用户可以选择切换到链。

与导致确认出现的任何方法一样，`wallet_addEthereumChain`
应该仅由于直接用户操作(例如单击按钮)而被调用。

MetaMask严格验证此方法的参数，并将拒绝该请求
如果任何参数格式错误。
此外，在以下情况下，MetaMask将拒绝该请求：

-如果RPC端点不响应RPC调用。
-如果在调用`eth_chainId`时RPC端点返回了不同的链ID。
-如果链ID对应于任何默认的MetaMask链。

MetaMask尚不支持使用不带18个小数位的本国货币的链，
但将来可能会这样做。

### wallet_registerOnboarding

:::tip Tip
As an API consumer, you are unlikely to have to call this method yourself.
Please see the [Onboarding Library documentation](./onboarding-library.html) for more information.
:::

#### Returns

`boolean` - `true` if the request was successful, `false` otherwise.

#### Description

将请求站点注册为MetaMask作为入职发起者。
返回解析为true的Promise，如果有错误，则拒绝。

此方法旨在在安装MetaMask之后但未完成MetaMask入门之前调用。
您可以使用此方法通知MetaMask您是建议安装MetaMask的人。
这样，在入职完成后，MetaMask会将用户重定向到您的站点。

而不是直接调用此方法，您应该使用[`@metamask/onboarding` library](https://github.com/MetaMask/metamask-onboarding).

### wallet_watchAsset

:::tip EIP-747
This method is specified by [EIP-747](https://eips.ethereum.org/EIPS/eip-747).
:::

#### Parameters

- `WatchAssetParams` - The metadata of the asset to watch.

<<< @/docs/snippets/WatchAssetParams.ts

#### Returns

`boolean` - `true` if the the token was added, `false` otherwise.

#### Description

请求用户在MetaMask中跟踪令牌。
返回一个“布尔值”，指示是否成功添加了令牌。

大多数以太坊钱包都支持某些令牌集，通常是从中央策划的令牌注册表中获取的。
wallet_watchAsset使Web3应用程序开发人员可以在运行时要求其用户跟踪其钱包中的令牌。
添加后，令牌就无法与通过传统方法(例如集中式注册表)添加的令牌区分开。

#### Example

```javascript
ethereum.request({
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

## Mobile Specific RPC Methods

### wallet_scanQRCode

#### Parameters

- `Array`

  0. `string` - (optional) A regular expression for matching arbitrary QR code strings

#### Returns

`string` - The string corresponding to the scanned QR code.

#### Description

请求用户使用其设备相机扫描QR码。
返回一个Promise，该Promise解析为一个字符串，与以下任意一个匹配：

1. regex参数(如果提供)
   2.以太坊地址(如果未提供正则表达式参数)

如果两个条件都不满足，则Promise将拒绝并显示错误。

MetaMask之前根据建议的[EIP-945](https://github.com/ethereum/EIPs/issues/945) 引入了此功能。
在将该功能重新引入此RPC方法之前，该功能已被暂时删除。

#### Example

```javascript
ethereum
  .request({
    method: 'wallet_scanQRCode',
    // The regex string must be valid input to the RegExp constructor, if provided
    params: ['\\D'],
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```
