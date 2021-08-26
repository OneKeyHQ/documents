---
sidebar_position: 4
---

# 从 MetaMask 迁移

如果之前已经有与最新 MetaMask （MetaMask v8 版本及以上）兼容的 Dapp，那么兼容当前的 OneKey 浏览器插件就会非常容易。

MetaMask 中会通过注入 `window.ethereum` 对象，使得页面操作 metamask 中用户的账户和获取配置信息。同样的，OneKey 浏览器插件中的 `window.onekey` API 大范围的保持了与 `window.ethereum` 兼容的同时，也会注入 `window.ethereum` 来保证其他 Dapp 与 OneKey 浏览器插件的兼容。

用户可以在 OneKey 浏览器插件 **v2.0.1及以上** 的版本中，手动开启「替代 MetaMask」来防止与 MetaMask 共同安装时可能出现的冲突现象。

## 最佳实践

推荐 Dapp 开发者在内部方法调用时，完全区分 `window.onekey` 和 `window.ethereum` 两个对象，即：

- 希望 OneKey 浏览器插件触发的相关逻辑完全使用 `window.onekey` 进行后续操作
- 希望 MetaMask 浏览器插件触发的相关逻辑完全使用 `window.ethereum` 进行后续操作，同时通过下面这段 JS 代码，可以确保用户唤醒的是 MetaMask

```js
// 如果希望操作 MetaMask 相关 provider 的方法和逻辑
if (window.ethereum && window.ethereum.switchProvider) {
  window.ethereum.switchProvider('metamask');
}
// 执行完 switchProvider 之后，后续操作 window.ethereum 一定是 metamask 注入到页面当中的
```

## 其他方案

当然，为了兼容早期的未进行 `window.onekey` 兼容的 Dapp 启动 OneKey 插件，OneKey 浏览器插件同时也会给页面添加 `window.ethereum` 来辅助进行操作。

使用 `window.ethereum.switchProvider` 方法，能够在 OneKey 浏览器插件注入的变量和 MetaMask 注入的变量进行显示的切换。

:::warning 特别注意
`window.ethereum.switchProvider` 是 OneKey 浏览器插件 **v2.0.1 及以后** 的版本新增内容，同时也是 OneKey 浏览器插件独有的方法。

如果用户未安装 OneKey 浏览器插件仅安装 MetaMask 则方法不存在，调用前请务必进行方法存在的判断。
:::

```js
// 连接 MetaMask
function showInstallMessage(){
  alert('Please Install MetaMask here: https://metamask.io/');
}

if (!window.ethereum) {
  showInstallMessage();
  return;
}

// DO NOT call methods or accessing properties before switchProvider()
if (window.ethereum && window.ethereum.switchProvider) {
  window.ethereum.switchProvider('metamask');
}

if (!window.ethereum.isMetaMask) {
  showInstallMessage();
  return;
}

// call window.ethereum methods...
```

```js
// 连接 OneKey
function showInstallMessage(){
  alert('Please Install MetaMask here: https://onekey.so/');
}

if (!window.ethereum) {
  showInstallMessage();
  return;
}

// DO NOT call methods or accessing properties before switchProvider()
if (window.ethereum && window.ethereum.switchProvider) {
  window.ethereum.switchProvider('onekey');
}

if (!window.ethereum.isOneKey) {
  showInstallMessage();
  return;
}

// call window.ethereum methods...
```

:::warning 特别注意
开发者必须确保所有访问 `window.ethereum` 的相关业务代码，一定是在 `switchProvider` 之后执行的。

否则在 `switchProvider` 之前执行的代码，因为 `window.ethereum` 所对应插件实例的不确定性，将可能导致异常。
:::