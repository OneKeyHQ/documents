---
sidebar_position: 1
id: introduction
title: 简介
description: OneKey 浏览器插件简单介绍
slug: /
---

欢迎使用 OneKey 浏览器插件的开发人员文档，本文档用于学习为 OneKey 浏览器插件开发 Dapp 应用程序。

- 您可以在我们的[官方网站](https://onekey.so/)上找到 OneKey 各客户端的最新版本。
- 有关使用 OneKey 的帮助，请访问我们的[用户支持站点](https://help.onekey.so/) 。
- 有关最新消息，请关注我们的 [Twitter](https://twitter.com/OneKeyHQ) 或 [Reddit](https://www.reddit.com/r/OneKeyHQ) 页面。
- 要了解如何为 OneKey 项目本身做出贡献，请访问我们的 [Github](https://github.com/OneKeyHQ) 。

## 为什么使用 OneKey 浏览器插件

使用 OneKey 浏览器插件是为了满足基于以太坊的安全和可用网站的需求。特别的，它提供一种简单的方式处理帐户管理并将用户连接到区块链。

- [从这里开始](Extension/Guide/getting-started)
- [了解有关我们的 JavaScript Provider API 的更多信息](Extension/API%20Reference/ethereum-provider)
- [了解有关 RPC API 的更多信息](Extension/API%20Reference/rpc-api)

## 帐户管理

OneKey 浏览器插件允许用户以各种方式（包括硬件钱包）管理帐户及其密钥，同时将其与站点上下文隔离。与将用户密钥存储在单个中央服务器甚至本地存储上相比，这是一个很大的安全性改进，它可以防止[大规模盗窃事件的发生](https://www.ccn.com/cryptocurrency-exchange-etherdelta-hacked-in-dns-hijacking-scheme/)。

此安全功能还为开发人员带来了便利：对于开发人员，您只需与可识别 Web3 兼容浏览器用户（如 OneKey 用户）的全局可用 `ethereum` API 交互。每次请求事务签名（如 `eth_sendTransaction`,`eth_signTypedData` 或其他方法交互)，OneKey 浏览器插件将以一种尽可能易懂的方式提示用户，这样可以使用户保持完全知情。

即使出现攻击者，攻击者也只能尝试对单个用户进行网络钓鱼，而不是进行大规模黑客攻击。

## 连接区块链

OneKey 浏览器插件已预先加载了与以太坊区块链和几个测试网络的快速连接，这使您可以在不同步整个节点的情况下开始使用。同时仍提供可靠安全性的升级和使用您自定义的区块链网络的选项。

如今，OneKey 浏览器插件和[与太坊兼容的 JSON RPC API](https://eth.wiki/json-rpc/API) 的任何区块链都兼容，包括自定义和私有区块链。对于开发者，我们建议运行像 [Ganache](https://www.trufflesuite.com/ganache) 之类的测试区块链。

我们知道，人们不断有兴趣使用 OneKey 浏览器插件连接到新的私有区块链，并且我们正在努力与这些众多选项更轻松地集成。
