"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[2631],{6672:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(9216),s=["components"],l={hide_table_of_contents:!0},p=void 0,c={unversionedId:"Connect/Method List/composeTransaction",id:"Connect/Method List/composeTransaction",isDocsHomePage:!1,title:"composeTransaction",description:"Compose transaction",source:"@site/docs/Connect/Method List/composeTransaction.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/composeTransaction",permalink:"/en/Connect/Method List/composeTransaction",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/composeTransaction.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"cipherKeyValue",permalink:"/en/Connect/Method List/cipherKeyValue"},next:{title:"ethereumGetAddress",permalink:"/en/Connect/Method List/ethereumGetAddress"}},m=[{value:"Compose transaction",id:"compose-transaction",children:[{value:"Params",id:"params",children:[]},{value:"Outputs objects:",id:"outputs-objects",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],d={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"compose-transaction"},"Compose transaction"),(0,r.kt)("p",null,"Requests a payment from the users wallet to a set of given outputs. Internally a BIP-0044 account\ndiscovery is performed and user is presented with a list of accounts. After account selection user is presented with list of fee selection. After selecting a fee transaction is signed and returned in hexadecimal format.\nChange output is added automatically, if needed."),(0,r.kt)("p",null,"ES6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.composeTransaction(params);\n")),(0,r.kt)("p",null,"CommonJS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.composeTransaction(params).then(function(result) {\n\n});\n")),(0,r.kt)("h3",{id:"params"},"Params"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./commonParams"},(0,r.kt)("strong",{parentName:"a"},"Optional common params"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"outputs")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"required")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Array")," of recipients Objects described below"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"coin")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"required")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," determines network definition specified in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/data/coins.json"},"coins.json")," file. Coin ",(0,r.kt)("inlineCode",{parentName:"li"},"shortcut"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"label")," can be used."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"push")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," determines if composed transaction will be broadcasted into blockchain.")),(0,r.kt)("h3",{id:"outputs-objects"},"Outputs objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"regular output"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount")," - ",(0,r.kt)("em",{parentName:"li"},"required")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," value to send in satohosi"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address")," - ",(0,r.kt)("em",{parentName:"li"},"required")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," recipient address"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"send-max")," - spends all available inputs from account",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," - ",(0,r.kt)("em",{parentName:"li"},"required")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"send-max")," value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address")," - ",(0,r.kt)("em",{parentName:"li"},"required")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," recipient address"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opreturn")," - ",(0,r.kt)("a",{parentName:"li",href:"https://en.bitcoin.it/wiki/OP_RETURN"},"read more"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," - ",(0,r.kt)("em",{parentName:"li"},"required")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"opreturn")," value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dataHex")," - ",(0,r.kt)("em",{parentName:"li"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"li"},"hexadecimal string")," with arbitrary data")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,'Send 0.002 BTC to "18WL2iZKmpDYWk1oFavJapdLALxwSjcSk2"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'OneKeyConnect.composeTransaction({\n    outputs: [\n        { amount: "200000", address: "18WL2iZKmpDYWk1oFavJapdLALxwSjcSk2" }\n    ],\n    coin: "btc",\n    push: true\n});\n')),(0,r.kt)("h3",{id:"result"},"Result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        signatures: Array<string>, // signer signatures\n        serializedTx: string,        // serialized transaction\n        txid?: string,             // blockchain transaction id\n    }\n}\n")),(0,r.kt)("p",null,"Error"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,r.kt)(o.Z,{initValue:'OneKeyConnect.composeTransaction({\n    outputs: [\n        { amount: "200000", address: "18WL2iZKmpDYWk1oFavJapdLALxwSjcSk2" }\n    ],\n    coin: "btc",\n    push: true\n});',mdxType:"Playground"}))}u.isMDXComponent=!0}}]);