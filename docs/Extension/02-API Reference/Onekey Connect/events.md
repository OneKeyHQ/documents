## Handling events

Once user grants permission for hosting page to communicate with API OneKeyConnect will emits events
about device state.
Events can be distinguished by "type" field of event object (TODO structure)
Constants of all types can be imported from package

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

## List of published events

`device-connect` 
`device-disconnect` 
`device-changed` 
