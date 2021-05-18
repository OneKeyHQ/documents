---
sidebar_position: 1
---

## 安装

将库安装为npm模块：
```shell
npm install @onekeyhq/connect
```
或者
```shell
yarn add @onekeyhq/connect
```

包括库作为内联脚本：
```html
<script src="https://connect.onekey.so/7/trezor-connect.js"></script>
```

## 初始化

ES6
```javascript
import OneKeyConnect from '@onekeyhq/connect';
```

CommonJS
```javascript
var OneKeyConnect = require('@onekeyhq/connect').default;
```

Inline
```javascript
var OneKeyConnect = window.OneKeyConnect;
```

## OneKey Connect清单
从Trezor Connect 7开始，我们实现了一项新功能-Trezor Connect Manifest，该功能要求您作为Trezor Connect集成商，才能与我们共享您的电子邮件和应用程序URL。
这为我们提供了**在需要任何维护的情况下与您联系的能力。**
此订阅是强制性的。如果未提供清单，则Trezor Connect引发错误，显示为“未设置清单。更多信息，请访问https://github.com/trezor/connect/blob/develop/docs/index.md”。
```javascript
OneKeyConnect.manifest({
    email: 'developer@xyz.com',
    appUrl: 'http://your.application.com'
})
```

## API方法

* [方法列表](方法)

##处理事件

* [事件](事件)

##运行本地版本(开发/稳定)
-克隆存储库：`git clone git@github.com：OneKeyHQ/connect.git`
-安装node_modules：`yarn`
-运行localhost服务器：`yarn dev`

Initialize in project
```javascript
OneKeyConnect.init({
    connectSrc: 'https://localhost:8088/',
    lazyLoad: true, // this param will prevent iframe injection until OneKeyConnect.method will be called
    manifest: {
        email: 'developer@xyz.com',
        appUrl: 'http://your.application.com',
    }
})
```

##运行本地版本(自定义分支)
为了运行未发布到npm注册表的分支，并且此分支需要更改(大多数情况是在将新方法添加到OneKeyConnect接口时发生的)
- git checkout `custom-feature-branch`
- yarn build:npm

在您的项目中安装构建的lib：
####使用`yarn link`
* cd ./npm && yarn link
*在您的项目中：`yarn install @onekeyhq/connect`
####使用本地文件
*在您的项目中：`yarn install @onekeyhq/connect@file:/[local-path-to-repository]/npm`

