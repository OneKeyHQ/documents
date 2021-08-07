---
sidebar_position: 2
---

# 提供商迁移指南

::: tip 注意 MetaMask 用户如果您是 MetaMask 用户，尝试使用尚未迁移到新 API 的旧版以太坊网站，请参阅[MetaMask 旧版 Web3 扩展](＃using-the-metamask-legacy-web3-extension)上的部分。

除了这些旧版网站，MetaMask 用户无需采取任何措施。 :::

在 2021 年 1 月，我们对提供程序 API 进行了一些重大更改，并删除了注入的“ window.web3”。这些更改自版本开始在所有平台上均有效：

- MetaMask 浏览器扩展的“ 9.0.2”
- MetaMask Mobile 的 1.0.9

本指南介绍了如何迁移到新的提供程序 API，以及如何替换我们的“ window.web3”。要了解我们为什么进行这些更改，请参阅[this blog post](https://medium.com/metamask/breaking-changes-to-the-metamask-provider-are-here-7b11c9388be9)。

## 目录

[[toc]]

## 重大更改摘要

### `window.web3`移除

作为重大更改的一部分，我们停止将 web3.0.js 版本 0.20.7 作为 window.web3 注入到网页中。 MetaMask 仍在“ window.web3”处注入一个虚拟对象，以便在网站尝试访问“ window.web3”时发出警告。

### `window.ethereum` API 更改

我们对`window.ethereum` API 进行了以下重大更改：

*确保由 eth_chainId 返回的链 ID **不是** 0 填充 *例如，无论链 ID 是返回的还是可访问的，我们总是返回 0x1 而不是 0x01。 *请注意，此*only*会影响[默认以太坊链](./ethereum-provider.html＃chain-ids)*except* Kovan，其链 ID 格式正确(`0x2a`)。 *停止发出`chainIdChanged`，而改为发出`chainChanged`。 _删除以下实验方法： _`ethereum._metamask.isEnabled` *`ethereum._metamask.isApproved` *删除`ethereum.publicConfigStore`对象 *尽管有此名称，但从未将其用于公共消费。删除它可能会影响那些不直接使用它的人，例如如果您使用的另一个库依赖于该对象。 *删除`ethereum.autoRefreshOnNetworkChange`属性 *消费者仍然可以在提供程序上设置此属性，它不会做任何事情。 *弃用`web3.currentProvider`方法 \*使用[@ metamask/detect-provider](https://github.com/MetaMask/detect-provider)检测当前提供者。

## 替换`window.web3`

:::警告页面不再因链式更改而重新加载自从我们删除了“ window.web3”以来，MetaMask 不再根据链条/网络更改自动重新加载页面。

有关详细信息，请参见[处理删除 ethereum.autoRefreshOnNetworkChange]](＃handling-the-removal-of-ethereum-autorefreshonnetworkchange)。 :::

由于历史原因，MetaMask 将[`web3 @ 0.20.7`](https://github.com/ethereum/web3.js/tree/0.20.7)注入了所有网页。该版本的“ web3”已被弃用，[存在已知的安全问题](https://github.com/ethereum/web3.js/issues/3065)，不再由[web3.js](https：//github.com/ethereum/web3.js/)团队。因此，我们决定删除此库。

如果您的网站依赖于我们的`window.web3`对象，则必须进行迁移。请继续阅读以了解您的选择。有些简单到只需一行更改。

::: tip 提示无论选择哪种迁移方式，您都可能需要阅读“ web3@0.20.7”文档，该文档可在[此处](https://github.com/ethereum/web3.js/blob/0.20.7/DOCUMENTATION.md)。 :::

### 直接使用`window.ethereum`

对于许多 web3 网站，`window.ethereum`提供的 API 就足够了。大部分的 web3 API 都简单地映射到 RPC 方法，所有这些都可以使用[`ethereum.request()`](./ethereum-provider.html＃ethereum-request-args)进行请求。例如，以下是首先使用“ window.web3”执行的几个动作，然后使用“ window.ethereum”执行的等效动作。

<<< @/docs/snippets/web3ToProvider.js

### 使用更新的便利库

如果您决定需要便利库，则必须将“ window.web3”的用法转换为更新的便利库。我们建议使用[`ethers`](https://npmjs.com/package/ethers)([documentation](https://docs.ethers.io/))。

### 使用`@onekey/legacy-web3`

:::警告我们强烈建议您在求助于此之前，先考虑另外两个迁移路径之一。它不是面向未来的，因此我们不会在其中添加新功能。 :::

最后，如果您只是想让您的 web3 网站继续工作，我们创建了[`@ metamask/legacy-web3`](https://npmjs.com/package/@onekey/legacy-web3)。这个软件包是对我们的`window.web3`的直接替代，您甚至可以在所有平台上删除`window.web3`之前，也可以将其添加到您的网站中。

@ metamask/legacy-web3 应该与我们注入的 window.web3 完全一样，包括刷新链/网络更改页面，但是*我们不能保证它能完美地工作*。我们不会修复web3@0.20.7和 MetaMask 本身之间的任何将来的不兼容性，也不会修复web3@0.20.7本身的任何错误。

有关安装和使用说明，请参阅[npm 列表](https://npmjs.com/package/@onekey/legacy-web3)。

### 使用 MetaMask 旧版 Web3 扩展

我们为仍然希望注入“ window.web3”的网站的所有用户创建了[** MetaMask 传统 Web3 扩展**](https://github.com/MetaMask/legacy-web3-extension)。如果您将此扩展程序与常规的 MetaMask 钱包扩展程序一起安装，则依赖我们旧的 window.web3 API 的网站应重新开始运行。

与常规扩展程序一样，仅从官方浏览器扩展程序商店安装非常重要。请点击下面的相关链接，在浏览器中安装 Legacy Web3 扩展程序：

- [Chrome，勇敢者](https://chrome.google.com/webstore/detail/metamask-legacy-web3/dgoegggfhkapjphahmgihfgemkgecdgl)
- [边缘](https://microsoftedge.microsoft.com/addons/detail/metamask-legacy-web3/obkfjbjkiofoponpkmphnpaaadebfloh?hl=zh-cn)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/metamask-legacy-web3/)

## 迁移到新的提供程序 API

### 处理`eth_chainId`返回值

eth*chainId` RPC 方法现在可以返回格式正确的值，例如 0x1 和 0x2，而不是\_incorrectly*格式的值，例如 0x01 和 0x02。 MetaMask 的 eth*chainId 实现用于返回[默认以太坊链](./ethereum-provider.html＃chain-ids)\_except* Kovan 的 0 填充值。如果您期望`eth_chainId`中填充 0 的链 ID 值，请确保更新代码以使用正确的格式。

有关链 ID 及其处理方式的更多详细信息，请参见[`chainChanged`事件](./ethereum-provider.html＃chainchanged)。

### 处理删除`chainIdChanged`

chainIdChanged 是 chainChanged 的错字。要进行迁移，只需监听`chainChanged`即可：

```javascript
// Instead of this:
ethereum.on('chainIdChanged', (chainId) => {
  /* handle the chainId */
});

// Do this:
ethereum.on('chainChanged', (chainId) => {
  /* handle the chainId */
});
```

### 处理`isEnabled()`和`isApproved()`的移除

在发布新的提供程序 API 之前，我们添加了\_metamask.isEnabled 和\_metamask.isApproved 方法使 web3 网站能够检查它们是否具有[访问用户帐户的权限](./rpc-api.html＃eth-requestaccounts)。 “ isEnabled”和“ isApproved”的功能相同，不同之处在于“ isApproved”是“ async”。可以说这些方法从来没有那么有用，随着 MetaMask 的[permission system](./rpc-api.html＃permissions)的引入，它们变得完全多余。

我们建议您通过以下方式检查帐户访问权限：

1.您可以调用[wallet_getPermissions` RPC 方法](./rpc-api.html＃wallet-getpermissions)并检查`eth_accounts`权限。

2.您可以调用 eth_accounts RPC 方法和[ethereum.\_metamask.isUnlocked()方法](./ethereum-provider.html＃ethereum-metamask-isunlocked)。

\*您必须先解锁 MetaMask 才能访问用户的帐户。如果由 eth_accounts 返回的数组为空，请使用 isUnlocked()检查 MetaMask 是否被锁定。

\*如果 MetaMask 已解锁，但您仍然没有收到任何帐户，那么该使用[eth_requestAccounts` RPC 方法](./rpc-api.html＃eth-requestaccounts)请求帐户了。

### 处理删除`ethereum.publicConfigStore`

如何处理此更改取决于是否以及如何依赖于`publicConfigStore`。我们已经看到了侦听提供程序状态更改“ publicConfigStore”数据事件并直接访问“ publicConfigStore”内部状态的示例。

我们建议您在代码及其依赖项中搜索对`publicConfigStore`的引用。如果找到任何参考，则应该了解它的用途，然后迁移到[推荐的提供程序 API 之一](./ethereum-provider.html＃using-the-provider)。如果找不到任何参考，则此更改不会影响您。

尽管您的依赖项可能使用`publicConfigStore`，但我们已确认以下通用库的最新版本(截至 2021 年 1 月)不受此更改的影响：

- `ethers`
- `web3` (web3.js)

### 处理删除`ethereum.autoRefreshOnNetworkChange`

ethereum.autoRefreshOnNetworkChange 是一个可变的布尔属性，用于控制 MetaMask 是否在链/网络更改时重新加载页面。但是，仅当脚本访问`window.web3`上的属性时，才导致重新加载页面。因此，该属性与“ window.web3”一起被删除。

尽管如此，我们仍然建议您在链更改时重新加载页面。默认情况下，某些便利程序库(例如[ethers](https://www.npmjs.com/package/ethers))将继续重新加载页面。如果您不使用这样的便利库，则必须手动重新加载页面。有关详细信息，请参见[`chainChanged`事件](./ethereum-provider.html＃chainchanged)。
