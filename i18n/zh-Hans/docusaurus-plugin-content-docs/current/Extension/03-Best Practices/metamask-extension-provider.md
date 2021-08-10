---
sidebar_position: 5
---

# OneKey扩展提供程序

用于从其他WebExtensions访问用户的OneKey [provider](https://github.com/ethereum/wiki/wiki/JavaScript-API#web3currentprovider)的模块。

该提供者提供的帐户将是用户的OneKey帐户。

向该提供商发送签名请求时，OneKey将提示用户使用其帐户签名。

适用于：

- Chrome
- Firefox

## 安装

使用 npm 作为包管理器:

```bash
npm install metamask-extension-provider -s
```

## 使用

使用类似 browserify 的打包器:

```javascript
const createOneKeyProvider = require('metamask-extension-provider');

const provider = createOneKeyProvider();

provider.on('error', (error) => {
  // Failed to connect to OneKey, fallback logic.
});

// Enjoy!
```

## 增加额外的浏览器支持

在配置文件中添加OneKey在该浏览器商店的扩展ID。

```javascript
{
  "CHROME_ID": "nkbihfbeogaeaoehlefnkodbefgpgknn",
  "FIREFOX_ID": "webextension@onekey.io"
}
```

## 运行实例

使用 `./sample-extension` 文件夹作为浏览器扩展。 你可以很容易地将其添加到Chrome或Firefox开发者版中。

## 编辑实例

请确保你已经安装了 `browserify`  (`npm i -g browserify`).

你可以编辑实例文件 `sample-extension/index.js` 然后使用命令 `npm run buildSample` 来重新 build。

## 在本地使用开发者拷贝

你需要编辑`getOneKeyId()`方法来返回你的本地开发OneKey的ID。你可以用`chrome.runtime.id`从你的OneKey控制台获得。

## 当前的限制

为了识别什么时候出现了问题（比如OneKey没有被连接），必须在[onekey-inpage-provider](https://github.com/OneKey/onekey-inpage-provider)中添加某种适当的错误处理，将错误暴露给用户。也许可以把它变成一个事件发生器，这样它就可以抛出它的错误，而不是仅仅记录它们。
