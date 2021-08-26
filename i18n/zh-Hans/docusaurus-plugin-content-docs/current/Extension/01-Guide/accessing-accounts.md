---
sidebar_position: 5
---

# 访问帐户

用户账户在以太坊的各种环境中都可以使用，包括用作标识符和签署交易。为了请求用户签名或让用户批准交易，必须能够访问用户的帐户。下面的“钱包方法”涉及签名和批准交易，并且都需要发送帐户作为功能参数。

- `eth_sendTransaction`
- `eth_sign` (不安全且不建议使用，OneKey 硬件钱包不支持此方法，OneKey 浏览器插件软件钱包支持此方法)
- `eth_personalSign`
- `eth_signTypedData`

[连接到用户](./getting-started.html)之后，您随时可以通过选中 `ethereum.selectedAddress` 来重新检查当前帐户。

**例子：**

如果您希望在地址更改时收到通知，我们可以监听一个事件，您可以订阅：

```javascript
onekey.on('accountsChanged', function (accounts) {
  // 这里可以基于 accounts[0] 来刷新您的用户界面
});
```

如果返回数组中的第一个帐户不是您期望的帐户，则应该通知用户。将来，帐户数组可能包含多个帐户。但是，数组中的第一个帐户将继续被视为用户的 「当前选定」 帐户。
