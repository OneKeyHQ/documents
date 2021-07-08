---
sidebar_position: 6
---

# 发送交易

交易是对区块链的正式行动。 它们总是在MetaMask中通过调用eth_sendTransaction方法来启动。 它们可能涉及简单的以太币发送，可能导致发送令牌，创建新的智能合约或以多种方式更改区块链上的状态。 它们始终由_external account_或简单密钥对的签名启动。

在MetaMask中，直接使用`ethereum.request`方法，发送交易将涉及到组成这样的options对象：

```javascript
const transactionParameters = {
  nonce: '0x00', // ignored by MetaMask
  gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
  gas: '0x2710', // customizable by user during MetaMask confirmation.
  to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
  from: ethereum.selectedAddress, // must match user's active address.
  value: '0x00', // Only required to send ether to the recipient from the initiating external account.
  data:
    '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
  chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
};

// txHash is a hex string
// As with any RPC call, it may throw an error
const txHash = await ethereum.request({
  method: 'eth_sendTransaction',
  params: [transactionParameters],
});
```

## 示例

```
<SendTransaction />
```

::::tabs :options="{ useUrlFragment: false }"

:::tab HTML

```html
<button class="enableEthereumButton btn">Enable Ethereum</button>
<button class="sendEthButton btn">Send Eth</button>
```

:::

:::tab JavaScript

```javascript
const ethereumButton = document.querySelector('.enableEthereumButton');
const sendEthButton = document.querySelector('.sendEthButton');

let accounts = [];

//Sending Ethereum to an address
sendEthButton.addEventListener('click', () => {
  ethereum
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
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}
```

:::

::::

## 交易参数

MetaMask为您处理了许多交易参数，但是最好知道所有参数的作用。

### Nonce [忽略]

MetaMask将忽略此字段。

在以太坊中，每笔交易都有一个随机数。这样一来，每个交易只能由区块链处理一次。另外，要成为有效交易，随机数必须为0，或者必须已经处理了具有先前编号的交易。

这意味着始终按给定帐户的顺序处理交易，因此增加随机数是一个非常敏感的问题，很容易搞砸，尤其是当用户与多个应用程序通过同一帐户使用待处理交易进行交互时(可能跨多个帐户)设备。

由于这些原因，MetaMask当前无法为应用程序开发人员提供任何自定义其建议的事务随机数的方法，而是帮助用户自己管理其事务队列。

### 汽油价格[可选]

可选参数-最好在私有区块链上使用。

在以太坊中，未决交易池将其汽油价格作为一种拍卖竞标价格提供给验证者，以将该交易包含在一个区块中以换取交易费。这意味着高昂的天然气价格可能意味着更快的处理速度，但也意味着更昂贵的交易。

MetaMask帮助用户在以太坊主网络和流行的测试网络上选择具有竞争力的天然气价格。我们向MyCrypto的朋友维护的API发出请求，并允许用户在其汽油价格的“慢”，“中”和“快速”选项之间进行选择。

我们无法了解所有区块链上的天然气市场，因为它需要进行深入分析。因此，虽然您可以放心地在我们的主要托管网络上忽略此参数，但是在您的应用程序比我们更了解目标网络的情况下，您可能希望建议一个汽油价格。

### 气体限制[可选]

可选参数。对Dapp开发人员而言很少有用。

煤气限额是一个高度可选的参数，我们会为此自动计算一个合理的价格。您可能会知道，由于某种原因，您的智能合约会从自定义气体限制中受益。

### 到[半可选]

十六进制编码的以太坊地址。与收件人的交易(除合同创建外的所有交易)必填。

当没有“到”价值但有“数据”价值时，就会发生合同创建。

### 值[可选]

要发送的网络本地货币的十六进制编码值。在以太坊主网络上，这是[ether](https://www.ethereum.org/eth)，以_wei_命名，后者是1e-18醚。

请注意，以太坊中经常使用的这些数字比本地JavaScript数字具有更高的精度，并且如果无法预料，可能会导致无法预料的行为。因此，我们强烈建议在处理用于区块链的值时使用[BN.js](https://github.com/indutny/bn.js/)。

### 数据[半可选]

创建智能合约所需。

此字段还用于指定合同方法及其参数。您可以了解有关如何在[solidity ABI规范](https://solidity.readthedocs.io/en/develop/abi-spec.html)上对数据进行编码的更多信息。

### 链ID [当前已忽略]

当前，链ID由用户当前选择的网络在ethereum.networkVersion处派生。将来，我们可能会允许一种同时连接到多个网络的方法，这时此参数将变得很重要，因此习惯于现在包含它可能会很有用。
