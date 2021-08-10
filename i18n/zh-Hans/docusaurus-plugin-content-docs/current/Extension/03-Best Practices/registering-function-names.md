---
sidebar_position: 1
---

# 注册合同的方法名称

OneKey使用功能签名的奇偶校验链上注册表在确认屏幕上显示方法名称。
对于许多常见的方法名称，例如令牌方法，这使OneKey可以通过其[方法签名](https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html)成功查找方法名称。
但是，有时您使用的方法不在该链上注册表中，因此OneKey只会向用户显示“合同互动”。

要将合同的功能名称添加到此注册表中，以使其显示在OneKey界面中，请执行以下步骤。

1.转到[etherscan上的Mainnet奇偶校验签名注册合同](https://etherscan.io/address/0x44691b39d1a75dc4e0a0346cbb15e310e6ed1e86#writeContract)

2.连接OneKey

3.使用etherscan的写协定功能将字符串值(不带引号或空格)输入到寄存器功能

例如：

`getOwners()`

execTransaction(address，uint256，bytes，uint8，uint256，uint256，uint256，address，address，bytes)`

4.点击“写”

5.批准OneKey中的交易(您只需支付汽油费)

## 核实

`ethers.utils.keccak256('getOwners()')=> 0xa0e67e2bdc0a6d8a09ccd6c353c9df590807ad66ff5e6630c4f31a86dfa84821`

-取前10个字符：`0xa0e67e2b`
-将它们输入到[检查此演示应用程序](https://jennypollack.github.io/function_signature_registry/)中，以检查链上注册表
-仅Mainnet或Rinkeby

### 使用remix.ethereum.org

-将合同代码从[bokky的博客文章](https://www.bokconsulting.com.au/blog/a-quick-look-at-paritys-signature-registry-contract/)中粘贴到[remix](https：//remix.ethereum.org)。
-根据合同设置正确的编译器版本。
-使用remix的写入功能将其添加到注册表中。
-您可以通过加载签名注册表合同来查看[remix](https://remix.ethereum.org)上的FUNCTIONHASHES部分，然后单击“编译”选项卡上的“详细信息”按钮。

### 使用`eth-method-registry`

-您还可以使用部署在Rinkeby上的[签名注册表](https://rinkeby.etherscan.io/address/0x0c0831fb1ec7442485fb41a033ba188389a990b4)
-[`eth-method-registry`](https://github.com/OneKey/eth-method-registry)用于在OneKey中查找方法。
-请注意，无论用户使用什么网络，OneKey都会从Mainnet的eth-method-registry端点读取数据。
-有关更多详细信息，请参见[此StackExchange答案](https://ethereum.stackexchange.com/questions/59678/metamask-shows-unknown-function-when-calling-method-send-function)。
