## Reset device
Perform device setup and generate new seed.

ES6
```javascript
const result = await OneKeyConnect.resetDevice(params);
```

CommonJS
```javascript
OneKeyConnect.resetDevice(params).then(function(result) {

});
```

### Params
[****Optional common params****](./commonParams)
<br/>
* `strength` — *optional* `number` Accepted values are [128|192|256]. Default is set to `256`
* `label` — *optional* `string`
* `u2fCounter` — *optional* `number`. Default value is set to current time stamp in seconds.
* `pinProtection` — *optional* `boolean`
* `passphraseProtection` — *optional* `boolean`
* `skipBackup` — *optional* `boolean`
* `noBackup` — *optional* `boolean` create a seedless device

### Example
```javascript
OneKeyConnect.resetDevice({
    label: 'My fancy Trezor',
});
```

### Result
```javascript
{
    success: true,
    payload: {
        message: 'Device successfully initialized'
    }
}
```
Error
```javascript
{
    success: false,
    payload: {
        error: string // error message
    }
}
```
