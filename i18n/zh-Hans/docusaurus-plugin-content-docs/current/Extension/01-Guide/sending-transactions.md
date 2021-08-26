---
sidebar_position: 6
---

# 发送交易

交易是对区块链的正式的写入行为。

它们总是在 OneKey 浏览器插件中通过调用 `eth_sendTransaction` 方法来启动。它们可能涉及简单的以太币或其他代币的发送行为，可能创建新的智能合约或以多种方式更改区块链上的状态。

它们始终由区块链账户的签名来启动，也就是说任何一笔交易行为都需要账户密钥对中私钥的签名。

在 OneKey 浏览器插件中，可以直接使用 `onekey.request` 方法来唤醒并发送交易，同时构造类似这样的 `options` 对象：

```javascript
const transactionParameters = {
  nonce: '0x00', // 会被 OneKey 浏览器插件舍弃
  gasPrice: '0x09184e72a000', // 自定义 gas 费，会在确认时出现在弹窗中
  gas: '0x2710', // 自定义 gas 费，会在确认时出现在弹窗中
  to: '0x0000000000000000000000000000000000000000', // 发送到的账户地址，合约交易处理时可不填，普通交易必填
  from: onekey.selectedAddress, // 当前用户激活地址
  value: '0x00', // 发送代币的数量
  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // 可选参数，但是初始化合约时需要此内容
  chainId: '0x3', // 目前此参数会由浏览器插件自动补全，但我们建议您操作时构造此参数
};

// txHash 是一个十六进制字符串，因为需要发送 RPC 请求，所以他有可能会失败并抛出错误
const txHash = await onekey.request({
  method: 'eth_sendTransaction',
  params: [transactionParameters],
});
```

## 示例

```html
<button class="enableEthereumButton btn">
  Enable Ethereum
</button>
<button class="sendEthButton btn">Send Eth</button>
```

```javascript
const ethereumButton = document.querySelector('.enableEthereumButton');
const sendEthButton = document.querySelector('.sendEthButton');

let accounts = [];

// 发送 eth 到对应地址
sendEthButton.addEventListener('click', () => {
  onekey
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
          value: '0x29a2241af62c0000',
          gasPrice: '0x09184e72a000',
          gas: '0x2710',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);
});

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  accounts = await onekey.request({ method: 'eth_requestAccounts' });
}
```

## 交易参数

OneKey 浏览器插件为您处理和添加了许多交易相关的参数，以下是所有参数相关的介绍。

### nonce [传入此参数会被忽略]

OneKey 浏览器插件中将忽略此字段。

在以太坊中，每笔交易都有一个随机数 nonce。这样一来，每个交易只能由区块链处理一次。另外，当前交易要想成为有效交易，则随机数必须为 0。当前置随机数存在时，则必须先处理先前编号的交易。

这意味着区块链会始终按给定帐户的顺序处理交易，因此增加随机数是一个非常敏感的问题，尤其是当用户与多个应用程序通过同一帐户使用待处理交易进行交互时（可能跨多个帐户设备）。

由于这些原因，OneKey 浏览器插件当前无法为应用程序开发人员提供任何自定义其 nonce 的方法，而是帮助用户自己管理其事务队列。

### gasPrice [可选参数]

可选参数，指代燃料费，但最好在私有区块链上使用。

在以太坊中，未处理完成的交易会将其燃料价格作为一种拍卖竞标价格提供给矿工，矿工如果将该交易包含在一个区块，则会得到对应交易的燃料费。这意味着高昂的燃料价格可能意味着更快的处理速度，但也意味着更昂贵的交易。

OneKey 浏览器插件帮助用户在以太坊主网络和流行的测试网络上选择具有竞争力的燃料价格。我们使用 GasNow 维护的 API，并允许用户在其燃料价格的 “慢”，“中” 和 “快速” 选项之间进行选择。

我们无法了解所有区块链网络上的燃料价格，因为它需要进行深入分析。因此，虽然您可以放心地在我们的主要托管网络上忽略此参数，但是如果在您的应用程序比我们更了解目标网络的情况下，您也可以通过传入参数来使用一个更建议的燃料价格。

### gas [可选参数]

可选参数，指代燃料限额 gasLimit，对 Dapp 开发人员而言很少有用。

燃料限额是一个高度可选的参数，我们会为此自动计算一个合理的价格。

### to [部分情况下可选]

十六进制编码的以太坊地址。与收件人的交易必填（合约创建非必填）。

当没有 `to` 参数但有 `value` 参数时，就会发生合约创建事件。

### value [可选参数]

在要发送的网络中，货币数量的十六进制编码值。在以太坊主网络上是 [eth](https://www.ethereum.org/eth)，以 _wei_ 命名，**1 wei** 等同于 **1e-18 eth**。

请注意，以太坊中经常使用的这些数字比本地 JavaScript 数字具有更高的精度。如果直接使用 JavaScript 中的数字类型可能会导致无法预料的行为。因此，我们强烈建议在处理用于区块链的值时使用 [BN.js](https://github.com/indutny/bn.js/) 来处理数字相关的计算。

### data [部分情况下可选]

创建智能合约时需要此参数。此字段还用于指定合约方法及其参数。

您可以了解有关如何在 [solidity ABI 规范](https://solidity.readthedocs.io/en/develop/abi-spec.html) 上对数据进行编码。

### chainId [传入此参数会被忽略]

当前，链 ID 是由用户在 OneKey 浏览器插件中当前选择的网络。由 `ethereum.networkVersion` 处派生。将来，我们可能会允许一种同时连接到多个网络的方法，这时此参数将变得很重要，因此建议您现在构造交易时包含它。
