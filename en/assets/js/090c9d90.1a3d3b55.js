"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[4370],{5933:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var o=n(7462),s=n(3366),r=(n(7294),n(3905)),i=["components"],a={sidebar_position:2},c="Registering Tokens with Users",d={unversionedId:"Extension/Best Practices/registering-your-token",id:"Extension/Best Practices/registering-your-token",isDocsHomePage:!1,title:"Registering Tokens with Users",description:"When a user opens their OneKey Browser Extension, they are shown a variety of assets, including tokens. By default, OneKey Browser Extension auto-detects some major popular tokens and auto-displays them, but for most tokens, the user will need to add the token themselves.",source:"@site/docs/Extension/03-Best Practices/registering-your-token.md",sourceDirName:"Extension/03-Best Practices",slug:"/Extension/Best Practices/registering-your-token",permalink:"/en/Extension/Best Practices/registering-your-token",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Extension/03-Best Practices/registering-your-token.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"ExtensionSidebar",previous:{title:"Registering Your Contract's Method Names",permalink:"/en/Extension/Best Practices/registering-function-names"},next:{title:"Defining Your App's Icon",permalink:"/en/Extension/Best Practices/defining-your-icon"}},u=[{value:"Example",id:"example",children:[]}],l={toc:u};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"registering-tokens-with-users"},"Registering Tokens with Users"),(0,r.kt)("p",null,"When a user opens their OneKey Browser Extension, they are shown a variety of assets, including tokens. By default, OneKey Browser Extension auto-detects some major popular tokens and auto-displays them, but for most tokens, the user will need to add the token themselves."),(0,r.kt)("p",null,"While this is possible using our UI with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Token")," button, that process can be cumbersome, and involves the user interacting with contract addresses, and is very error prone."),(0,r.kt)("p",null,"You can greatly improve the security and experience of users adding your token to their OneKey Browser Extension by taking advantage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset")," API as defined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-747.md"},"EIP-747"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"If you'd like to integrate suggesting a token into your own web app, you can follow this code snippet to implement it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b513';\nconst tokenSymbol = 'TUT';\nconst tokenDecimals = 18;\nconst tokenImage = 'http://placekitten.com/200/300';\n\ntry {\n  // wasAdded is a boolean. Like any RPC method, an error may be thrown.\n  const wasAdded = await onekey.request({\n    method: 'wallet_watchAsset',\n    params: {\n      type: 'ERC20', // Initially only supports ERC20, but eventually more!\n      options: {\n        address: tokenAddress, // The address that the token is at.\n        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.\n        decimals: tokenDecimals, // The number of decimals in the token\n        image: tokenImage, // A string url of the token logo\n      },\n    },\n  });\n\n  if (wasAdded) {\n    console.log('Thanks for your interest!');\n  } else {\n    console.log('Your loss!');\n  }\n} catch (error) {\n  console.log(error);\n}\n")))}m.isMDXComponent=!0}}]);