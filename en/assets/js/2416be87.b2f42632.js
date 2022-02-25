"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[3696],{481:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),i=t(9216),o=["components"],l={hide_table_of_contents:!0},m=void 0,p={unversionedId:"Connect/Method List/ethereumSignMessage712",id:"Connect/Method List/ethereumSignMessage712",isDocsHomePage:!1,title:"ethereumSignMessage712",description:"Ethereum712: sign message",source:"@site/docs/Connect/Method List/ethereumSignMessage712.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/ethereumSignMessage712",permalink:"/en/Connect/Method List/ethereumSignMessage712",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/ethereumSignMessage712.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"ethereumSignMessage",permalink:"/en/Connect/Method List/ethereumSignMessage"},next:{title:"ethereumSignTransaction",permalink:"/en/Connect/Method List/ethereumSignTransaction"}},d=[{value:"Ethereum712: sign message",id:"ethereum712-sign-message",children:[{value:"Params",id:"params",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]},{value:"Error Detail",id:"error-detail",children:[]}]}],u={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"ethereum712-sign-message"},"Ethereum712: sign message"),(0,s.kt)("p",null,"Asks device to sign a message using the private key derived by given BIP32 path."),(0,s.kt)("p",null,"ES6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.ethereumSignMessage(params);\n")),(0,s.kt)("p",null,"CommonJS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.ethereumSignMessage(params).then(function(result) {\n\n});\n")),(0,s.kt)("h3",{id:"params"},"Params"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"./commonParams"},(0,s.kt)("strong",{parentName:"a"},"Optional common params"))),(0,s.kt)("h6",{id:"flowtype"},(0,s.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/params.js#L64-L67"},"flowtype")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path")," - ",(0,s.kt)("em",{parentName:"li"},"required")," ",(0,s.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," minimum length is ",(0,s.kt)("inlineCode",{parentName:"li"},"3"),". ",(0,s.kt)("a",{parentName:"li",href:"./path"},"read more")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"version")," - ",(0,s.kt)("em",{parentName:"li"},"optional")," ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," ",(0,s.kt)("inlineCode",{parentName:"li"},"V3")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"V4"),", for ",(0,s.kt)("inlineCode",{parentName:"li"},"sign_typed_data")," version, default is V3."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"data")," - ",(0,s.kt)("em",{parentName:"li"},"required")," ",(0,s.kt)("inlineCode",{parentName:"li"},"object"),", message data type. see example for more detail.")),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.ethereumSignMessage712({\n    path: \"m/44'/60'/0'\",\n    data: {\n        domain: {\n            name: 'My amazing dApp',\n            version: '2',\n            chainId: '0x01',\n            verifyingContract: 'xx',\n            salt: 'xx',\n        },\n        message: {\n            amount: 100,\n            bidder: {\n                userId: 323,\n                wallet: '0x3333333333333333333333333333333333333333',\n            },\n        },\n        primaryType: 'Bid',\n        types: {\n            EIP712Domain: [\n                { name: 'name', type: 'string' },\n                { name: 'version', type: 'string' },\n                { name: 'chainId', type: 'uint256' },\n                { name: 'verifyingContract', type: 'address' },\n                { name: 'salt', type: 'bytes32' },\n            ],\n            Bid: [\n                { name: 'amount', type: 'uint256' },\n                { name: 'bidder', type: 'Identity' },\n            ],\n            Identity: [\n                { name: 'userId', type: 'uint256' },\n                { name: 'wallet', type: 'address' },\n            ],\n        },\n    }\n});\n")),(0,s.kt)("h3",{id:"result"},"Result"),(0,s.kt)("h6",{id:"flowtype-1"},(0,s.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/response.js#L47-L50"},"flowtype")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        address: string,\n        signature: string,\n    }\n}\n")),(0,s.kt)("p",null,"Error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,s.kt)("h3",{id:"error-detail"},"Error Detail"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"firmware not support, must upgrade to the latest version.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": false,\n  "payload": {\n    "error": "Unknown message",\n    "code": "Failure_UnexpectedMessage"\n  }\n}\n')),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"pass an illegal parameter")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": false,\n  "payload": {\n    "error": "Parameter \\"domain\\" is missing.",\n    "code": "Method_InvalidParameter"\n  }\n}\n\n{\n  "success": false,\n  "payload": {\n    "error": "Parameter \\"message\\" is missing.",\n    "code": "Method_InvalidParameter"\n  }\n}\n')),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"parameter must be 32 bytes, if it too short or too long")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    {\n        "success": false,\n        "payload": {\n            "error": "data length error",\n            "code": "Failure_ProcessError"\n        }\n    }\n}\n\n{\n  "success": false,\n  "payload": {\n    "error": "Illegal str: Length not a multiple of 2"\n  }\n}\n\n{\n  "success": false,\n  "payload": {\n    "error": "bytes overflow",\n    "code": "Failure_DataError"\n  }\n}\n')),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"not enable EIP712 feature")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": false,\n  "payload": {\n    "error": "EIP712 blind sign is disabled",\n    "code": "Failure_ProcessError"\n  }\n}\n')),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"not support EIP712Domain primary type, your passed data's ",(0,s.kt)("inlineCode",{parentName:"li"},"primaryType")," must not be ",(0,s.kt)("inlineCode",{parentName:"li"},"EIP712Domain"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": false,\n  "payload": {\n    "error": "primaryType `EIP712Domain` is not support",\n    "code": "Backend_NotSupported"\n  }\n}\n')),(0,s.kt)(i.Z,{initValue:"OneKeyConnect.ethereumSignMessageEIP712({\n    path: \"m/44'/60'/0'\",\n    data: {\n        domain: {\n            name: 'My amazing dApp',\n            version: '2',\n            chainId: '0x01',\n            verifyingContract: '0x1C56346CD2A2Bf3202F771f50d3D14a367B48070',\n            salt: '0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558',\n        },\n        message: {\n            amount: 100,\n            bidder: {\n                userId: 323,\n                wallet: '0x3333333333333333333333333333333333333333',\n            },\n        },\n        primaryType: 'Bid',\n        types: {\n            EIP712Domain: [\n                { name: 'name', type: 'string' },\n                { name: 'version', type: 'string' },\n                { name: 'chainId', type: 'uint256' },\n                { name: 'verifyingContract', type: 'address' },\n                { name: 'salt', type: 'bytes32' },\n            ],\n            Bid: [\n                { name: 'amount', type: 'uint256' },\n                { name: 'bidder', type: 'Identity' },\n            ],\n            Identity: [\n                { name: 'userId', type: 'uint256' },\n                { name: 'wallet', type: 'address' },\n            ],\n        },\n    }\n});",mdxType:"Playground"}))}c.isMDXComponent=!0}}]);