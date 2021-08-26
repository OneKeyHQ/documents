---
sidebar_position: 2
id: getting-started
title: 准备开始
---

要为 OneKey 浏览器插件开发，请在您的开发计算机上安装最新的浏览器插件。[在此处下载](https://onekey.so/plugin/)

:::warning 提示
本指南假定您具有 HTML，CSS 和 JavaScript 的中级知识。
:::

一旦安装并运行 OneKey 浏览器插件，您应该发现新的浏览器选项卡在开发人员控制台中具有 `window.ethereum` 对象，这是您的网站与 OneKey 浏览器插件交互的方式。

**您可以在[此处](/Extension/API%20Reference/ethereum-provider)查看该对象的完整 API。**

## 基本注意事项

### Web3 浏览器检测

要验证浏览器是否正在运行 OneKey 浏览器插件，请将以下代码片段复制并粘贴到 Web 浏览器的开发者控制台中：

```javascript
if (typeof window.ethereum !== 'undefined') {
  console.log('OneKey is installed!');
}
```

### 运行测试网络

在 OneKey 浏览器插件的右上方菜单中，可以选择当前连接到的网络。在几种流行的默认设置中，您会发现「自定义 RPC」和「Localhost 8545」。这些都可用于连接到测试区块链，例如通过使用 [ganache](https://www.trufflesuite.com/ganache) 工具。

如果您已通过 `npm i -g ganache-cli && ganache-cli` 安装了它的 npm 模块，则可以快速安装并启动 Ganache。

Ganache 具有一些很棒的功能，可以在不同的状态下启动您的应用程序。使用 `-m` 参数，在 OneKey 浏览器插件中使用对应生成的助记词。您会发现测试网络将为您的前 10 个帐户中的每个帐户提供 100 个测试以太币，这使得开始工作变得更加容易。

由于您的助记词可以控制所有帐户，因此可能得保留至少一个账户进行开发，与用于存储实际代币的任何助记词分开。使用 OneKey 浏览器插件管理多个助记词的一种简单方法是使用多个浏览器配置文件，每个配置文件都可以具有自己的独立的扩展安装。

#### 重置您的本地记录

如果您正在运行测试区块链并重新启动它，则可能会意外混淆现有的 OneKey 浏览器插件，因为它会计算下一个 [nonce](./sending-transactions.html#nonce-ignored) 基于网络状态和已知的事件发送事务。

要清除 OneKey 浏览器插件的交易队列并有效地重置其当前的记录，可以使用「设置」（位于右上角的菜单中）中的「重置帐户」按钮。

### 检测到 OneKey 浏览器插件并一键启动

如果要将 OneKey 浏览器插件与其他与以太坊兼容的浏览器插件区分开，可以使用 `ethereum.isOneKey` 检测是否是 OneKey 浏览器插件。

### 用户状态

当前，与此 API 交互时需要考虑一些有状态的事情：

- 当前的网络是什么？
- 当前帐户是什么？

这两个都可以作为 `ethereum.networkVersion` 和 `ethereum.selectedAddress` 来获取并同步使用。您也可以使用事件来监听更改，请参见（[API 参考](./ethereum-provider.html)）。

### 连接到 OneKey 浏览器插件

**连接**或**登录** OneKey 实际上意味着**访问安装 OneKey 浏览器插件用户中存在以太坊帐户**。

我们建议您**仅**在发起连接请求以响应直接的用户操作，例如单击按钮。连接请求待处理时，您应该**始终**禁用**连接**按钮，建议您绝对不要在页面加载时就直接发起连接请求。

我们建议您提供一个按钮，以允许用户将 OneKey 浏览器插件连接到您的 Dapp。单击此按钮应调用以下方法：

```javascript
ethereum.request({ method: 'eth_requestAccounts' });
```

**例子：**

```html
<button class="enableEthereumButton">Enable Ethereum</button>
```

```javascript
const ethereumButton = document.querySelector('.enableEthereumButton');

ethereumButton.addEventListener('click', () => {
  // 调用这个函数，如果用户安装有 OneKey 浏览器插件的话，则会唤醒插件并选择内部的账户
  ethereum.request({ method: 'eth_requestAccounts' });
});
```

这个 promise 函数功能可以使用一系列以十六进制为前缀的以太坊地址进行解析，这些地址可以在发送交易时用作通用帐户参考。

随着时间的推移，这个方法将不断添加内容，以包括各种其他参数，以帮助您的站点在安装过程中向用户请求其所需的所有类型。

由于它返回一个 promise，因此，如果您开发的网页支持 async 功能语法，则可以这样使用：

```javascript
// 可以在 ethereum.request 的返回值中读取到一个账户数组

// 1. 支持 async 语法
const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
const account = accounts[0];

// 2. 如果不支持 async 使用 promise 本身的 .then 进行连接
ethereum.request({ method: 'eth_requestAccounts' }).then((accounts) => {
  const account = accounts[0];
});
```

**完整的连接并获取账户的例子：**

```html
<button class="enableEthereumButton">Enable Ethereum</button>
<h2>Account: <span class="showAccount"></span></h2>
```

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

## 选择便利的第三方库

一些第三方库简化了特定用户界面元素的创建，另一些则完全管理了用户帐户的接入连接，还有一些则为您提供了与智能合约进行交互的各种方法，以用于从 `promise`，`callback` 到 typescript 强类型的各种 API 约束等等。

**Provider API** 本身非常简单，并且可以包装 [以太坊 JSON-RPC](https://eth.wiki/json-rpc/API#json-rpc-methods) 格式化的消息，这就是为什么开发人员通常使用第三方库进行交互的原因，例如 [ethers](https://www.npmjs.com/package/ethers), [web3.js](https://www.npmjs.com/package/web3), [truffle](https://www.trufflesuite.com/), [Embark](https://framework.embarklabs.io/) 等。通过这些工具，您通常可以找到足够的文档来与提供程序进行交互，而无需阅读此较低级别的 API。
