---
sidebar_position: 4
---

# 初始化 Dapp

一旦有了基本的开发环境[搭建](./Getting-Started)，就可以开始与一些智能合约进行交互了。与智能合约进行通信时，无论使用什么第三方库，都需要满足一些基本要求：

## 合约网络

如果您未连接到正确的区块链网络，则不会有任何将交易发送到合约处，因此请确保您区块链网络选择的正确性！

许多聪明的 Dapp 都能识别用户的当前网络，并对应进行跳转！例如，如果您检测连接的是测试网络，即使您访问正式环境的地址，Dapp 也可以对应跳转到测试网络版本，这使用户可以轻松地“试用”您的系统而无需花费真金白银！

## 合约地址

以太坊中的每个账户都有一个地址，无论是外部的密钥对账户还是智能合约。为了使任何智能合约库都能与您的合约进行通信，这些第三方库都需要知道确切的地址。

## 合约 ABI

在以太坊中，[ABI 规范](https://solidity.readthedocs.io/en/develop/abi-spec.html) 是一种以您的用户界面有意义的方式对智能合约的界面进行编码的方法。它是一个描述方法的对象数组，当您将其和地址输入到「合同抽象库」中时，此 “ABI” 会告诉这些库要提供的方法以及如何编写事务以调用这些方法。

示例库包括：

- [ethers](https://www.npmjs.com/package/ethers)
- [web3.js](https://www.npmjs.com/package/web3)
- [Embark](https://framework.embarklabs.io/)
- [ethjs](https://www.npmjs.com/package/ethjs)
- [truffle](https://www.trufflesuite.com/)

## 合约字节码

如果您的 Web 应用程序需要发布预先编译的新智能合约，则可能需要包含一些“字节码”。在这种情况下，您必须发布后才知道合约地址。您需要监听要处理的交易，然后从完成的交易中提取最终合约的地址。

如果从字节码到发布合约，如果您想与之交互，您仍将需要一个 `ABI`。

## 合约源代码

如果您的网站允许用户编辑智能合约源代码并进行编译，例如 [Remix](http://remix.ethereum.org/) ，则可以导入整个编译器，在这种情况下，您将从该源代码中获取您的字节码和 ABI，最终您将从发布该字节码的已完成交易中获取合约的地址。
