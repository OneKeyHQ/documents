---
sidebar_position: 2
---

# 向用户添加 Token

当用户打开其 OneKey 浏览器插件时，会向他们显示各种资产，包括一些代币等。 默认情况下，OneKey 浏览器插件自动检测一些主要的流行代币并自动显示它们，但是对于大多数代币，用户将需要自己添加合约地址。

虽然可以使用带有“添加令牌”按钮的 UI 来实现，但该过程可能很麻烦，并且涉及用户与合同地址的交互，并且很容易出错。

您可以利用 [EIP-747](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-747.md) 来进行添加。

## 代码示例

如果您想将建议的 token 和合约地址集成到您自己的网络应用程序中，您可以按照以下代码片段来实现它：

```javascript
const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b513';
const tokenSymbol = 'TUT';
const tokenDecimals = 18;
const tokenImage = 'http://placekitten.com/200/300';

try {
  // wasAdded 是一个布尔值。与任何 RPC 方法一样，可能会抛出错误。
  const wasAdded = await onekey.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // 暂时只支持 ERC20，但最终支持更多！
      options: {
        address: tokenAddress, // token 所在的地址。
        symbol: tokenSymbol, // 一个简短的名称
        decimals: tokenDecimals, // decimal 位数
        image: tokenImage, // token 的图标
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
