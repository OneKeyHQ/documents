"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[45],{8136:function(n,t,e){e.r(t),e.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var a=e(7462),o=e(3366),r=(e(7294),e(3905)),i=e(9216),s=["components"],c={hide_table_of_contents:!0,draft:!0},p=void 0,l={unversionedId:"Connect/Method List/tezosSignTransaction",id:"Connect/Method List/tezosSignTransaction",isDocsHomePage:!1,title:"tezosSignTransaction",description:"Tezos: Sign transaction",source:"@site/docs/Connect/Method List/tezosSignTransaction.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/tezosSignTransaction",permalink:"/en/Connect/Method List/tezosSignTransaction",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/tezosSignTransaction.mdx",version:"current",frontMatter:{hide_table_of_contents:!0,draft:!0}},m=[{value:"Tezos: Sign transaction",id:"tezos-sign-transaction",children:[{value:"Params",id:"params",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],u={toc:m};function d(n){var t=n.components,e=(0,o.Z)(n,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tezos-sign-transaction"},"Tezos: Sign transaction"),(0,r.kt)("p",null,"Asks device to sign given transaction. User is asked to confirm all transaction\ndetails on OneKey."),(0,r.kt)("p",null,"ES6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.tezosSignTransaction(params);\n")),(0,r.kt)("p",null,"CommonJS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.tezosSignTransaction(params).then(function(result) {\n\n});\n")),(0,r.kt)("h3",{id:"params"},"Params"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./commonParams"},(0,r.kt)("strong",{parentName:"a"},"Optional common params"))),(0,r.kt)("h6",{id:"flowtype"},(0,r.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/tezos.js#L104-L108"},"flowtype")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," - ",(0,r.kt)("em",{parentName:"li"},"required")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string | Array<number>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"branch")," - ",(0,r.kt)("em",{parentName:"li"},"required")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"operation")," - ",(0,r.kt)("em",{parentName:"li"},"required")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Object")," type of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/tezos.js#L54"},"TezosOperation"))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Sign transaction operation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'OneKeyConnect.tezosSignTransaction({\n    path: "m/44\'/1729\'/10\'",\n    branch: "BLGUkzwvguFu8ei8eLW3KgCbdtrMmv1UCqMvUpHHTGq1UPxypHS",\n    operation: {\n        transaction: {\n            source: "tz1UKmZhi8dhUX5a5QTfCrsH9pK4dt1dVfJo",\n            destination: "tz1Kef7BSg6fo75jk37WkKRYSnJDs69KVqt9",\n            counter: 297,\n            amount: 200000,\n            fee: 10000,\n            gas_limit: 11000,\n            storage_limit: 0\n        }\n    }\n});\n')),(0,r.kt)("p",null,"Sign the first transaction of the account with reveal operation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.tezosSignTransaction({\n    path: \"m/44'/1729'/10'\",\n    branch: \"BLGUkzwvguFu8ei8eLW3KgCbdtrMmv1UCqMvUpHHTGq1UPxypHS\",\n    operation: {\n        reveal: {\n            source: 'tz1ekQapZCX4AXxTJhJZhroDKDYLHDHegvm1',\n            counter: 575424,\n            fee: 10000,\n            gas_limit: 20000,\n            storage_limit: 0,\n            public_key: 'edpkuTPqWjcApwyD3VdJhviKM5C13zGk8c4m87crgFarQboF3Mp56f',\n        },\n        transaction: {\n            source: 'tz1ekQapZCX4AXxTJhJZhroDKDYLHDHegvm1',\n            destination: 'tz1UKmZhi8dhUX5a5QTfCrsH9pK4dt1dVfJo',\n            counter: 575425,\n            amount: 100000,\n            fee: 10000,\n            gas_limit: 20000,\n            storage_limit: 0,\n        }\n    }\n});\n")),(0,r.kt)("p",null,"Sign origination operation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'OneKeyConnect.tezosSignTransaction({\n    path: "m/44\'/1729\'/0\'",\n    branch: "BLHRTdZ5vUKSDbkp5vcG1m6ZTST4SRiHWUhGodysLTbvACwi77d",\n    operation: {\n        origination: {\n            source: "tz1ckrgqGGGBt4jGDmwFhtXc1LNpZJUnA9F2",\n            manager_pubkey: "tz1ckrgqGGGBt4jGDmwFhtXc1LNpZJUnA9F2",\n            delegate: "tz1boot1pK9h2BVGXdyvfQSv8kd1LQM6H889",\n            balance: 100000000,\n            fee: 10000,\n            counter: 20450,\n            gas_limit: 10100,\n            storage_limit: 277,\n            script: "0000001c02000000170500036805010368050202000000080316053d036d03420000000a010000000568656c6c6f"\n        }\n    }\n});\n')),(0,r.kt)("p",null,"Sign delegation operation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.tezosSignTransaction({\n    path: \"m/44'/1729'/0'\",\n    branch: \"BMXAKyvzcH1sGQMqpvqXsZGskYU4GuY9Y14c9g3LcNzMRtfLzFa\",\n    operation: {\n        delegation: {\n            source: 'tz1Kef7BSg6fo75jk37WkKRYSnJDs69KVqt9',\n            delegate: 'tz1UKmZhi8dhUX5a5QTfCrsH9pK4dt1dVfJo',\n            fee: 20000,\n            counter: 564565,\n            gas_limit: 20000,\n            storage_limit: 0,\n        }\n    }\n});\n")),(0,r.kt)("p",null,"Sign delegation from a KT account (smart contract with ",(0,r.kt)("inlineCode",{parentName:"p"},"manager.tz")," script)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.tezosSignTransaction({\n    path: \"m/44'/1729'/0'\",\n    branch: \"BMdPMLXNyMTDp4vR6g7y8mWPk7KZbjoXH3gyWD1Tze43UE3BaPm\",\n    operation: {\n        transaction: {\n            source: 'tz1UKmZhi8dhUX5a5QTfCrsH9pK4dt1dVfJo',\n            destination: 'KT1SBj7e8ZhV2VvJtoc73dNRDLRJ9P6VjuVN',\n            counter: 292,\n            amount: 0,\n            fee: 10000,\n            gas_limit: 36283,\n            storage_limit: 0,\n            parameters_manager: {\n                set_delegate: \"tz1UKmZhi8dhUX5a5QTfCrsH9pK4dt1dVfJo\"\n            }\n        }\n    }\n});\n")),(0,r.kt)("p",null,"Sign cancel delegation from a KT account (smart contract with ",(0,r.kt)("inlineCode",{parentName:"p"},"manager.tz")," script)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.tezosSignTransaction({\n    path: \"m/44'/1729'/0'\",\n    branch: \"BL6oaFJeEjtYxafJqEL8hXvSCZmM5d4quyAqjzkBhXvrX97JbQs\",\n    operation: {\n        transaction: {\n            source: 'tz1UKmZhi8dhUX5a5QTfCrsH9pK4dt1dVfJo',\n            destination: 'KT1SBj7e8ZhV2VvJtoc73dNRDLRJ9P6VjuVN',\n            counter: 293,\n            amount: 0,\n            fee: 10000,\n            gas_limit: 36283,\n            storage_limit: 0,\n            parameters_manager: {\n                cancel_delegate: true,\n            }\n        }\n    }\n});\n")),(0,r.kt)("p",null,"Sign transaction operation from a KT account (smart contract with ",(0,r.kt)("inlineCode",{parentName:"p"},"manager.tz")," script) to a tz account (implicit account)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.tezosSignTransaction({\n    path: \"m/44'/1729'/0'\",\n    branch: \"BMCKRpEsFYQTdZy8BSLuFqkHmxwXrnRpKncdoVMbeGoggLG3bND\",\n    operation: {\n        transaction: {\n            source: 'tz1UKmZhi8dhUX5a5QTfCrsH9pK4dt1dVfJo',\n            destination: 'KT1SBj7e8ZhV2VvJtoc73dNRDLRJ9P6VjuVN',\n            counter: 294,\n            amount: 0,\n            fee: 10000,\n            gas_limit: 36283,\n            storage_limit: 0,\n            parameters_manager: {\n                transfer: {\n                    amount: 200,\n                    destination: 'tz1UKmZhi8dhUX5a5QTfCrsH9pK4dt1dVfJo'\n                }\n            }\n        }\n    }\n});\n")),(0,r.kt)("p",null,"Sign transaction operation from a KT account (smart contract with ",(0,r.kt)("inlineCode",{parentName:"p"},"manager.tz")," script) to another KT account (smart contract with ",(0,r.kt)("inlineCode",{parentName:"p"},"manager.tz")," script)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.tezosSignTransaction({\n    path: \"m/44'/1729'/0'\",\n    branch: \"BMCKRpEsFYQTdZy8BSLuFqkHmxwXrnRpKncdoVMbeGoggLG3bND\",\n    operation: {\n        transaction: {\n            source: 'tz1UKmZhi8dhUX5a5QTfCrsH9pK4dt1dVfJo',\n            destination: 'KT1SBj7e8ZhV2VvJtoc73dNRDLRJ9P6VjuVN',\n            counter: 294,\n            amount: 0,\n            fee: 10000,\n            gas_limit: 36283,\n            storage_limit: 0,\n            parameters_manager: {\n                transfer: {\n                    amount: 200,\n                    destination: 'tz1UKmZhi8dhUX5a5QTfCrsH9pK4dt1dVfJo'\n                }\n            }\n        }\n    }\n});\n")),(0,r.kt)("h3",{id:"result"},"Result"),(0,r.kt)("h6",{id:"flowtype-1"},(0,r.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/tezos.js#L110-L114"},"flowtype")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        signature: string,\n        sig_op_contents: string,\n        operation_hash: string,\n    }\n}\n\n")),(0,r.kt)("p",null,"Error"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,r.kt)(i.Z,{initValue:'OneKeyConnect.tezosSignTransaction({\n    path: "m/44\'/1729\'/10\'",\n    branch: "BLGUkzwvguFu8ei8eLW3KgCbdtrMmv1UCqMvUpHHTGq1UPxypHS",\n    operation: {\n        transaction: {\n            source: "tz1UKmZhi8dhUX5a5QTfCrsH9pK4dt1dVfJo",\n            destination: "tz1Kef7BSg6fo75jk37WkKRYSnJDs69KVqt9",\n            counter: 297,\n            amount: 200000,\n            fee: 10000,\n            gas_limit: 11000,\n            storage_limit: 0\n        }\n    }\n});',mdxType:"Playground"}))}d.isMDXComponent=!0}}]);