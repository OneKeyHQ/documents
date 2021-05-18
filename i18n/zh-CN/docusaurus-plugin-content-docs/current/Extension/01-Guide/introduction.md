---
sidebar_position: 1
id: introduction
title: Introduction
description: Introduction to OneKey Extension
slug: /
---

欢迎使用OneKey的开发人员文档。本文档用于学习为OneKey开发应用程序。

-您可以在我们的[官方网站](https://onekey.so/) 上找到OneKey的最新版本。
-有关使用OneKey的帮助，请访问我们的[用户支持站点](https://help.onekey.so/) 。
-有关最新消息，请关注我们的[Twitter](https://twitter.com/OneKeyHQ) 或[Reddit](https://www.reddit.com/r/OneKeyHQ) 页面。
-要了解如何为OneKey项目本身做出贡献，请访问我们的[内部文档](https://github.com/OneKeyHQ/onekey-extension/tree/master/docs) 。

::: tip最近的重大提供商更改
如果您是以太坊应用程序开发人员，并且正在寻找有关我们2021年1月提供商API更改的信息，
有关更多详细信息，请参见我们的[迁移指南](Extension/API%20Reference/provider-migration) 。
:::

## 为什么使用OneKey

创建OneKey是为了满足基于以太坊的安全和可用网站的需求。特别是，它处理帐户管理并将用户连接到区块链。

-[从这里开始](Extension/Guide/getting-started)
-[了解有关我们的JavaScript Provider API的更多信息](Extension/API%20Reference/ethereum-provider)
-[了解有关RPC API的更多信息](Extension/API%20Reference/rpc-api)

## 帐户管理

OneKey允许用户以各种方式(包括硬件钱包)管理帐户及其密钥，同时将其与站点上下文隔离。与将用户密钥存储在单个中央服务器甚至本地存储上相比，这是一个很大的安全性改进，它可以允许[大量帐户盗窃](https://www.ccn.com/cryptocurrency-exchange-etherdelta-hacked -in-dns-hijacking-scheme/)。

此安全功能还为开发人员带来了便利：对于开发人员，您只需与可识别Web3兼容浏览器用户(如OneKey用户)的全局可用“ ethereum” API交互，以及在每次请求事务签名(如“ eth_sendTransaction”时)进行交互即可。 ，“ eth_signTypedData”或其他)，OneKey将以一种尽可能易懂的方式提示用户。这样可以使用户保持知情，并让攻击者可以尝试对单个用户进行网络钓鱼，而不是进行大规模黑客攻击(尽管[DNS hacks仍然可以用于大规模网络钓鱼](https://medium.com/metamask/new-phishing-strategy-成为常见的1b1123837168)。

## 区块链连接

OneKey已通过我们[Infura](https://infura.io/) 上的朋友预先加载了与以太坊区块链和几个测试网络的快速连接。这使您可以在不同步整个节点的情况下开始使用，同时仍提供升级安全性和使用您选择的区块链提供程序的选项。

如今，OneKey与公开了[以太坊兼容的JSON RPC API](https://eth.wiki/json-rpc/API) 的任何区块链都兼容，包括自定义和私有区块链。对于开发，我们建议运行像[Ganache](https://www.trufflesuite.com/ganache)之类的测试区块链。

我们知道，人们不断有兴趣将OneKey连接到新的私有区块链，并且我们正在努力与这些众多选项更轻松地集成。

## 新的Dapp开发人员

- [Learning Solidity](https://karl.tech/learning-solidity-part-1-deploy-a-contract/) by karl Floersch
- [CryptoZombies](https://cryptozombies.io/)
