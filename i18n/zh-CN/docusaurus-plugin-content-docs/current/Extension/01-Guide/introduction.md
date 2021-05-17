---
sidebar_position: 1
id: introduction
title: Introduction
description: Introduction to OneKey Extension
slug: /
---

Welcome to OneKey’s Developer Documentation. This documentation is for learning to develop applications for OneKey.

- You can find the latest version of OneKey on our [official website](https://onekey.so/).
- For help using OneKey, visit our [User Support Site](https://help.onekey.so/).
- For up to the minute news, follow our [Twitter](https://twitter.com/OneKeyHQ) or [Reddit](https://www.reddit.com/r/OneKeyHQ) pages.
- To learn how to contribute to the OneKey project itself, visit our [Internal Docs](https://github.com/OneKeyHQ/onekey-extension/tree/master/docs).

:::tip Recent Breaking Provider Changes
If you are an Ethereum application developer and are looking for information about our January 2021 provider API changes,
please see our [Migration Guide](Extension/API%20Reference/provider-migration) for more details.
:::

## Why OneKey

OneKey was created to meet the needs of secure and usable Ethereum-based web sites. In particular, it handles account management and connecting the user to the blockchain.

- [Get started here](Extension/Guide/getting-started)
- [Learn more about our JavaScript Provider API](Extension/API%20Reference/ethereum-provider)
- [Learn more about our RPC API](Extension/API%20Reference/rpc-api)

## Account Management

OneKey allows users to manage accounts and their keys in a variety of ways, including hardware wallets, while isolating them from the site context. This is a great security improvement over storing the user keys on a single central server, or even in local storage, which can allow for [mass account thefts](https://www.ccn.com/cryptocurrency-exchange-etherdelta-hacked-in-dns-hijacking-scheme/).

This security feature also comes with developer convenience: For developers, you simply interact with the globally available `ethereum` API that identifies the users of web3-compatible browsers (like OneKey users), and whenever you request a transaction signature (like `eth_sendTransaction`, `eth_signTypedData`, or others), OneKey will prompt the user in as comprehensible a way as possible. This keeps users informed, and leaves attackers left trying to phish individual users rather than performing mass hacks (although [DNS hacks can still be used for phishing en masse](https://medium.com/metamask/new-phishing-strategy-becoming-common-1b1123837168)).

## Blockchain Connection

OneKey comes pre-loaded with fast connections to the Ethereum blockchain and several test networks via our friends at [Infura](https://infura.io/). This allows you to get started without synchronizing a full node, while still providing the option to upgrade your security and use the blockchain provider of your choice.

Today, OneKey is compatible with any blockchain that exposes an [Ethereum-compatible JSON RPC API](https://eth.wiki/json-rpc/API), including custom and private blockchains. For development, we recommend running a test blockchain like [Ganache](https://www.trufflesuite.com/ganache).

We’re aware that there are constantly new private blockchains that people are interested in connecting OneKey to, and we are building towards easier integration with these many options.

## New Dapp Developers

- [Learning Solidity](https://karl.tech/learning-solidity-part-1-deploy-a-contract/) by karl Floersch
- [CryptoZombies](https://cryptozombies.io/)
