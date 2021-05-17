---
sidebar_position: 5
---

# 访问帐户

用户账户在以太坊的各种环境中都可以使用，包括用作标识符和签署交易。为了请求用户签名或让用户批准交易，必须能够访问用户的帐户。下面的“钱包方法”涉及签名或交易批准，并且都需要发送帐户作为功能参数。

- `eth_sendTransaction`
- `eth_sign`（不安全且不建议使用）
- `eth_personalSign`
- `eth_signTypedData`

[连接到用户](./getting-started.html)之后，您随时可以通过选中`ethereum.selectedAddress`来重新检查当前帐户。

**例子：**
<ChangeAccount />

如果您希望在地址更改时收到通知，我们可以举办一个活动，您可以订阅：
```javascript
ethereum.on('accountsChanged', function (accounts) {
    // Time to reload your interface with accounts[0]!
});
```

如果返回数组中的第一个帐户不是您期望的帐户，则应通知用户！
将来，帐户数组可能包含多个帐户。
但是，阵列中的第一个帐户将继续被视为用户的“选定”帐户。
