---
sidebar_position: 1
id: getting-started
title: Getting Started
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

## 初始化

ES6

```javascript
import OneKeyConnect from '@onekeyhq/connect';
```

CommonJS

```javascript
var OneKeyConnect = require('@onekeyhq/connect').default;
```

## API方法

* [方法列表](方法)

## 处理事件

* [事件](事件)

## 运行本地版本(开发/稳定)

-克隆存储库：`git clone git@github.com：OneKeyHQ/connect.git`
-安装node_modules：`yarn`
-运行localhost服务器：`yarn dev`

Initialize in project

```javascript
OneKeyConnect.init({
    connectSrc: 'https://localhost:8088/',
    lazyLoad: true, // this param will prevent iframe injection until OneKeyConnect.method will be called
    manifest: {
        email: 'hi@onekey.so',
        appUrl: 'https://onekey.so',
    }
})
```

## 运行本地版本(自定义分支)

为了运行未发布到npm注册表的分支，并且此分支需要更改(大多数情况是在将新方法添加到OneKeyConnect接口时发生的)

* `git checkout custom-feature-branch`
* `yarn build:npm`

在您的项目中安装构建的lib：

### 使用`yarn link`

* cd ./npm && yarn link
*在您的项目中：`yarn install @onekeyhq/connect`

### 使用本地文件

*在您的项目中：`yarn install @onekeyhq/connect@file:/[local-path-to-repository]/npm`
