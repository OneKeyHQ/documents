---
sidebar_position: 2
---

## 处理事件

一旦用户授予托管页面与API通信的权限，OneKeyConnect就会发出事件
关于设备状态。
可以通过事件对象的“类型”字段(TODO结构)来区分事件
可以从包中导入所有类型的常量

ES6
```javascript
import OneKeyConnect, { DEVICE_EVENT, DEVICE } from '@onekeyhq/connect';

OneKeyConnect.on(DEVICE_EVENT, (event) => {
    if (event.type === DEVICE.CONNECT) {

    } else if (event.type === DEVICE.DISCONNECT) {

    }
});
```

CommonJS
```javascript
var OneKeyConnect = require('@onekeyhq/connect').default;
var DEVICE_EVENT = require('@onekeyhq/connect').DEVICE_EVENT;
var DEVICE = require('@onekeyhq/connect').DEVICE;

OneKeyConnect.on(DEVICE_EVENT, (event) => {
    if (event.type === DEVICE.CONNECT) {

    } else if (event.type === DEVICE.DISCONNECT) {

    }
});
```

Inline
```javascript
window.OneKeyConnect.on('DEVICE_EVENT', (event) => {
    if (event.type === 'device-connect') {

    } else if (event.type === 'device-disconnect') {

    }
});
```

## 已发布事件列表

`device-connect` 
`device-disconnect` 
`device-changed` 
