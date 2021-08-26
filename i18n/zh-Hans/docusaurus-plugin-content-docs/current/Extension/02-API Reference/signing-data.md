---
sidebar_position: 4
---

# 签名数据

由于 OneKey 浏览器插件使每个用户都可以使用加密密钥，因此网站可以将这些签名用于多种用途。以下是与特定用例相关的一些指南：

- [认证网站](https://medium.com/hackernoon/writing-for-blockchain-wallet-signature-request-messages-6ede721160d5)
- 认证用户是否是当前地址的所有者

## 使用 OneKey 浏览器插件签名数据

如果您想跳到一些有效的签名示例，请[可以访问此存储库](https://github.com/danfinlay/js-eth-personal-sign-examples)。

如果您想阅读我们对这些方法的 JavaScript 实现，则可以在 npm 软件包 [eth-sig-util](https://github.com/onekeyhq/eth-sig-util) 中找到它们。

请注意，OneKey 浏览器插件同时支持**软件钱包**和 **OneKey 硬件钱包**来签署交易。

但 OneKey 硬件钱包目前仅支持使用 「personal_sign」 方法签名的数据。

如果在使用硬件钱包的账户登录网站或 Dapp 时遇到问题，则该站点可能会要求您通过不支持的方法对数据进行签名，在这种情况下，我们建议您使用标准的 OneKey 浏览器插件软件帐户。

## 历史简介

OneKey 浏览器插件当前有六种签名方法，您可能想知道这些方法的历史。对这些方法的历史进行研究对于分散式标准出现具有一定的借鉴意义。我们目前支持的六种方法（五种类型）是：

- `eth_sign`
- `personal_sign`
- `signTypedData`（目前与 `signTypedData_v1` 相同）
- `signTypedData_v1`
- `signTypedData_v3`
- `signTypedData_v4`

随着时间的流逝，后续可能还会有更多方法。

特别地，方法 `eth_sign` 是一种开放式签名方法，它允许对任意哈希进行签名，这意味着它可用于对交易或任何其他数据进行签名，从而使其具有危险的网络钓鱼风险。

因此，我们对使用此方法的用户显示一条警告，并且通常不鼓励在生产活动中使用此方法。但是，某些应用程序为了使其易于使用而使用了此签名方法。因此，为了不破坏部分项目的工作流，我们将继续对其进行支持。

最终，有人提出了 `personal_sign` [spec](https://github.com/ethereum/go-ethereum/pull/2940)，它在数据上添加了前缀，因此无法模拟交易。我们还使该方法能够在以 UTF-8 编码时显示人类可读的文本，使其成为站点登录的流行选择。

但是，文本前缀使这些签名在链上进行验证非常昂贵，因此在 [0xProtocol](https://0x.org/) 团队和 [SpankChain](https://spankchain.com/)，编写了 [EIP-712](https://eips.ethereum.org/EIPS/eip-712) 规范。

EIP-712 和其他分散式标准生态系统的奇怪之处在于，该提案在保留相同 EIP 的情况下进行了多次更改。这意味着我们最初实现为 “signTypedData” 的是最早提出的版本，而其他组织和插件则使用相同的方法名称实现了更高的版本。

为了避免客户端之间的兼容性问题，我们建议使用方法名为 `signTypedData_v1` 和 `signTypedData_v3`。缺少的 `v2` 表示由 Cipher 浏览器实现的中间设计，因此，如果开发人员有足够的需求，我们就有实现它的空间。

将来，将方法名称包含其确切建议的哈希值可能会有所帮助，因为在分散的生态系统中，对于给定名称应映射的内容，没有绝对的真实来源。取而代之的是，我们被迫发明新的协作模式，在此模式下我们可以不断前进和创新，同时避免通过改变字面含义来避免创建脆弱的生态系统。

## signTypedData_v1

该规范的早期版本缺乏一些后期的安全性改进，大部分场景下我们应该直接使用 [signTypedData_v3](＃sign-typed-data-v3)。

也称为 `signTypedData`，最初于 2017 年 10 月在[此博客文章](https://medium.com/OneKey 浏览器插件/scaling-web3-with-signtypeddata-91d6efc8b290)中出现，这种方法是原始的以状态通道为中心的签名方法。

`signTypedData` 系列具有一些主要的设计特点：

- 链上的验证十分便宜
- 部分签名信息仍然可以被肉眼读取
- 很难被钓鱼的签名

如果对您而言链上可验证性成本是当务之急，那么您可能需要考虑这一种签名方式。

## signTypedData_v3

方法 `signTypedData_v3` 当前代表 [EIP-712 规范](https://eips.ethereum.org/EIPS/eip-712) 的部分实现，使其成为签署廉价验证数据的最安全方法。

这并不意味着它是完美的，并且在原型阶段我们已经有一个 “v4 实现”（它支持递归结构和数组），为了保持兼容所以我们使用此命名方式。

## signTypedData_v4

方法 `signTypedData_v4` 当前表示 [EIP-712 规范](https://eips.ethereum.org/EIPS/eip-712) 的最新版本，增加了对数组的支持，并对结构的方式进行了修正和重新编码。

这并不意味着它是完美的，或许未来也会有一个 “v5” 版本，但是我们确实打算使用这种命名空间前缀并使其保持兼容。


### signTypedData 的参数

- `domain`，此参数非常重要，主要作用：

  - 仅接受特定的网站 / 合约
  - 确保签名仅在有实际含义的地方才有效
  - 允许您有一个唯一的合约来验证地址
  - 通过信息限制签名的有效位置
  - 通过有效性的领域，可能是合同，网址等。
  - 需要在此处具体输入 DApp 告诉您的内容
  - 确保您的签名不与其他签名冲突

- `chainId`：chainId 告诉您您在哪个链上，这很重要，因为：
  - 确保在 Rinkeby 上签名的签名在另一条链（例如以太坊主网上）上无效。
- message：主要用于 UX(用户体验)目的。
  - 例如，作为用户，您正在使用 Ether Mail 应用程序，并且出现一个对话框来进行加密猫的交换，由于签名上的名称，这将引起您的怀疑。
- verifyingContract：这是额外的保证层。即使两个开发人员最终使用相同的名称创建一个应用程序，他们也永远不会拥有相同的合同地址。(您可以添加另一个字段“ salt”，但这完全是多余的，不必要的) 如果不确定名称，将显示负责消息验证的合同，此字段还将带有一个网址。
- version ：告诉您 domain 对象的当前版本。

`message`：完全开放式的结构，每个字段都是可选的。

以下是使用 OneKey 浏览器插件对输入的数据进行签名的示例。参考[这里](https://github.com/danfinlay/js-eth-personal-sign-examples)

### 示例

```html
<div>
  <h3>Sign Typed Data V4</h3>
  <button type="button" id="signTypedDataV4Button">sign typed data v4</button>
</div>
```

```javascript
signTypedDataV4Button.addEventListener('click', function (event) {
  event.preventDefault();

  const msgParams = JSON.stringify({
    domain: {
      // Defining the chain aka Rinkeby testnet or Ethereum Main Net
      chainId: 1,
      // Give a user friendly name to the specific contract you are signing for.
      name: 'Ether Mail',
      // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
      verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
      // Just let's you know the latest version. Definitely make sure the field name is correct.
      version: '1',
    },

    // Defining the message signing data content.
    message: {
      /*
       - Anything you want. Just a JSON Blob that encodes the data you want to send
       - No required fields
       - This is DApp Specific
       - Be as explicit as possible when building out the message schema.
      */
      contents: 'Hello, Bob!',
      attachedMoneyInEth: 4.2,
      from: {
        name: 'Cow',
        wallets: ['0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826', '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF'],
      },
      to: [
        {
          name: 'Bob',
          wallets: [
            '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
            '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',
            '0xB0B0b0b0b0b0B000000000000000000000000000',
          ],
        },
      ],
    },
    // Refers to the keys of the *types* object below.
    primaryType: 'Mail',
    types: {
      // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
      EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'verifyingContract', type: 'address' },
      ],
      // Not an EIP712Domain definition
      Group: [
        { name: 'name', type: 'string' },
        { name: 'members', type: 'Person[]' },
      ],
      // Refer to PrimaryType
      Mail: [
        { name: 'from', type: 'Person' },
        { name: 'to', type: 'Person[]' },
        { name: 'contents', type: 'string' },
      ],
      // Not an EIP712Domain definition
      Person: [
        { name: 'name', type: 'string' },
        { name: 'wallets', type: 'address[]' },
      ],
    },
  });

  var from = web3.eth.accounts[0];

  var params = [from, msgParams];
  var method = 'eth_signTypedData_v4';

  web3.currentProvider.sendAsync(
    {
      method,
      params,
      from,
    },
    function (err, result) {
      if (err) return console.dir(err);
      if (result.error) {
        alert(result.error.message);
      }
      if (result.error) return console.error('ERROR', result);
      console.log('TYPED SIGNED:' + JSON.stringify(result.result));

      const recovered = sigUtil.recoverTypedSignature_v4({
        data: JSON.parse(msgParams),
        sig: result.result,
      });

      if (ethUtil.toChecksumAddress(recovered) === ethUtil.toChecksumAddress(from)) {
        alert('Successfully recovered signer as ' + from);
      } else {
        alert('Failed to verify signer when comparing ' + result + ' to ' + from);
      }
    },
  );
});
```
