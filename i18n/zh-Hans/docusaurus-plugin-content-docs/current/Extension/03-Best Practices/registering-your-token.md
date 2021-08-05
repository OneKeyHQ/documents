---
sidebar_position: 2
---

# 向用户注册令牌

当用户打开其MetaMask时，会向他们显示各种资产，包括令牌。 默认情况下，MetaMask自动检测一些主要的流行令牌并自动显示它们，但是对于大多数令牌，用户将需要自己添加令牌。

虽然可以使用带有“添加令牌”按钮的UI来实现，但该过程可能很麻烦，并且涉及用户与合同地址的交互，并且很容易出错。

您可以利用[EIP-747](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-747.md)。

##无代码示例

以下是几个实时Web应用程序，可让您输入令牌详细信息，然后通过简单的Web链接共享它们：

- [Watch Token](https://vittominacori.github.io/watch-token/create.html)
- [Add Token App](https://metamask.github.io/Add-Token/#edit)

## Example

If you'd like to integrate suggesting a token into your own web app, you can follow this code snippet to implement it:

```javascript
const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b513';
const tokenSymbol = 'TUT';
const tokenDecimals = 18;
const tokenImage = 'http://placekitten.com/200/300';

try {
  // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: tokenAddress, // The address that the token is at.
        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
        decimals: tokenDecimals, // The number of decimals in the token
        image: tokenImage, // A string url of the token logo
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('Your loss!');
  }
} catch (error) {
  console.log(error);
}
```
