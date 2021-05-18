---
sidebar_position: 2
id: getting-started
title: Getting Started
description: Handling assets in Docusaurus Markdown
---

要为OneKey Extension开发，请在您的开发计算机上安装OneKey Extension。[在此处下载](https://onekey.so/plugin/) 。

:::警告快速提示...
本指南假定您具有HTML，CSS和JavaScript的中级知识。
:::

一旦安装并运行OneKey，您应该发现新的浏览器选项卡在开发人员控制台中具有“ window.ethereum”对象。
这是您的网站与OneKey交互的方式。

您可以在[此处](/Extension/API%20Reference/ethereum-provider)查看该对象的完整API。
请注意，在** 2020年的整个过程中**，我们将对该API进行重大更改，建议您参考其文档。

## 基本注意事项

### Web3浏览器检测

要验证浏览器是否正在运行OneKey，请将以下代码片段复制并粘贴到Web浏览器的开发者控制台中：

```javascript
if (typeof window.ethereum !== 'undefined') {
    console.log('OneKey is installed!');
}
```

您可以在[此处](/Extension/API%20Reference/ethereum-provider)查看`window.ethereum`对象的完整API。

### 运行测试网络

在OneKey的右上方菜单中，选择当前连接到的网络。在几种流行的默认设置中，您会发现“自定义RPC”和“ Localhost 8545”。这些都可用于连接到测试区块链，例如[ganache](https://www.trufflesuite.com/ganache)。如果您已通过npm i -g ganache-cli && ganache-cli安装了npm，则可以快速安装并启动Ganache。

Ganache具有一些很棒的功能，可以在不同的状态下启动您的应用程序。如果您的应用程序以-m标志开头，则可以为它提供与OneKey中相同的种子短语，并且测试网络将为您的前10个帐户中的每个帐户提供100个测试以太币，这使开始工作变得更加容易。

由于您的种子短语可以控制所有帐户，因此可能值得保留至少一个种子短语进行开发，与用于存储实际价值的任何短语分开。使用OneKey管理多个种子短语的一种简单方法是使用多个浏览器配置文件，每个配置文件都可以具有自己的干净扩展安装。

#### 重置您的本地现时计算

如果您正在运行测试区块链并重新启动它，则可能会意外混淆OneKey，因为它会计算下一个[nonce](./sending-transactions.html#nonce-ignored)
基于网络状态和已知的已发送事务。

要清除OneKey的交易队列并有效地重置其现时计算，可以使用“设置”(位于右上角的三明治菜单中)中的“重置帐户”按钮。

### 检测一键

如果要将OneKey与其他与以太坊兼容的浏览器区分开，可以使用`ethereum.isOneKey`检测OneKey。

### 用户状态

当前，与此API交互时需要考虑一些有状态的事情：

-当前的网络是什么？
-当前帐户是什么？

这两个都可以作为“ ethereum.networkVersion”和“ ethereum.selectedAddress”同步使用。
您也可以使用事件来监听更改，请参见([API参考](./ethereum-provider.html))。

### 连接到OneKey

“连接”或“登录” OneKey实际上意味着“访问用户的以太坊帐户”。

您应该“仅” **发起连接请求以响应直接的用户操作，例如单击按钮。
连接请求待处理时，您应该“始终”禁用“连接”按钮。
您绝对不要在页面加载时发起连接请求。

我们建议您提供一个按钮，以允许用户将OneKey连接到您的dapp。
单击此按钮应调用以下方法：

```javascript
ethereum.request({ method: 'eth_requestAccounts' });
```

**例子：**

<EthConnectButton />

::::tabs :options="{ useUrlFragment: false }"

:::tab HTML

```html
<button class="enableEthereumButton">Enable Ethereum</button>
```

:::

:::tab JavaScript

```javascript
const ethereumButton = document.querySelector('.enableEthereumButton');

ethereumButton.addEventListener('click', () => {
    //Will Start the metamask extension
    ethereum.request({ method: 'eth_requestAccounts' });
});
```

:::

::::

此承诺兑现功能可以使用一系列以十六进制为前缀的以太坊地址进行解析，这些地址可以在发送交易时用作通用帐户参考。

随着时间的流逝，该方法将不断发展壮大，以包括各种其他参数，以帮助您的站点在安装过程中向用户请求其所需的所有安装。

由于它返回一个promise，因此，如果您使用的是“ async”功能，则可以这样登录：

```javascript
const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
const account = accounts[0];
// We currently only ever provide a single account,
// but the array gives us some room to grow.
```

**例子：**

<EthAsyncConnectButton />

::::tabs :options="{ useUrlFragment: false }"

:::tab HTML

```html
<button class="enableEthereumButton">Enable Ethereum</button>
<h2>Account: <span class="showAccount"></span></h2>
```

:::

:::tab JavaScript

```javascript
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  showAccount.innerHTML = account;
}
```

:::

::::

## 选择便利图书馆

存在便利库的原因多种多样。

其中一些简化了特定用户界面元素的创建，一些完全管理了用户帐户的入职，另一些则为您提供了与智能合约进行交互的各种方法，以用于从承诺，回调到强类型的各种API偏好。 ，等等。

提供者API本身非常简单，并且可以包装
[以太坊JSON-RPC](https://eth.wiki/json-rpc/API#json-rpc-methods)
格式化的消息，这就是为什么开发人员通常使用便捷库进行交互的原因
与供应商合作，例如 [ethers](https://www.npmjs.com/package/ethers), [web3.js](https://www.npmjs.com/package/web3),
[truffle](https://www.trufflesuite.com/), [Embark](https://framework.embarklabs.io/) 或其他。通过这些工具，
您通常可以找到足够的文档来与提供程序进行交互，而无需阅读此较低级别的API。
