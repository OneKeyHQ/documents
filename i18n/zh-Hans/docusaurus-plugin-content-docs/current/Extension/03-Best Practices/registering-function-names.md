---
sidebar_position: 1
---

# 注册合约的方法名称

OneKey 浏览器插件使用功能签名的奇偶校验链上注册表在确认插件中显示方法名称。

对于许多常见的方法名称，例如 `tokenMethod`，这种方法使 OneKey 浏览器插件可以通过其 [方法签名](https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html) 成功查找方法名称。但是，有时您使用的方法不在该链上的注册表中，因此 OneKey 浏览器插件只会向用户显示「合约互动」。

要将合同的功能名称添加到此注册表中，以使其显示在 OneKey 浏览器插件界面中，请执行以下步骤。

1. 转到[etherscan 上的 Mainnet 奇偶校验签名注册合同](https://etherscan.io/address/0x44691b39d1a75dc4e0a0346cbb15e310e6ed1e86#writeContract)

2. 连接 OneKey 浏览器插件

3. 使用 etherscan 的写协定功能将字符串值（不带引号或空格）输入到寄存器功能。例如：

```
getOwners()
execTransaction(address，uint256，bytes，uint8，uint256，uint256，uint256，address，address，bytes)
```

4. 点击「写」

5. 批准 OneKey 浏览器插件中的交易（您只需支付燃料费用）

## 检查核实

`ethers.utils.keccak256('getOwners()')=> 0xa0e67e2bdc0a6d8a09ccd6c353c9df590807ad66ff5e6630c4f31a86dfa84821`

- 取前 10 个字符：`0xa0e67e2b`
- 将它们输入到[检查此演示应用程序](https://jennypollack.github.io/function_signature_registry/)中，以检查链上注册表
- 仅 Mainnet 或 Rinkeby

### 使用 remix.ethereum.org

- 将合约代码从[bokky 的博客文章](https://www.bokconsulting.com.au/blog/a-quick-look-at-paritys-signature-registry-contract/)中粘贴到 [remix](https：//remix.ethereum.org)。
- 根据合约设置正确的编译器版本。
- 使用 remix 的写入功能将其添加到注册表中。
- 您可以通过加载签名注册表合同来查看 [remix](https://remix.ethereum.org) 上的 **FUNCTIONHASHES** 部分，然后单击“编译”选项卡上的“详细信息”按钮。

### 使用 `eth-method-registry`

- 您还可以使用部署在 Rinkeby 上的[签名注册表](https://rinkeby.etherscan.io/address/0x0c0831fb1ec7442485fb41a033ba188389a990b4)
- [`eth-method-registry`](https://github.com/onekeyhq/eth-method-registry) 用于在 OneKey 浏览器插件中查找方法。
- 请注意，无论用户使用什么网络，OneKey 浏览器插件都会从 Mainnet 的 eth-method-registry 端点读取数据。
- 有关更多详细信息，请参见[此 StackExchange 答案](https://ethereum.stackexchange.com/questions/59678/metamask-shows-unknown-function-when-calling-method-send-function)。
