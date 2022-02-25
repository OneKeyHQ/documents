"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[9601],{3158:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),s=t(9216),c=["components"],i={hide_table_of_contents:!0,draft:!0},l=void 0,d={unversionedId:"Connect/Method List/eosSignTransaction",id:"Connect/Method List/eosSignTransaction",isDocsHomePage:!1,title:"eosSignTransaction",description:"EOS\uff1a\u4ea4\u6613\u7b7e\u540d",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/Connect/Method List/eosSignTransaction.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/eosSignTransaction",permalink:"/Connect/Method List/eosSignTransaction",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/eosSignTransaction.mdx",version:"current",frontMatter:{hide_table_of_contents:!0,draft:!0}},p=[{value:"EOS\uff1a\u4ea4\u6613\u7b7e\u540d",id:"eos\u4ea4\u6613\u7b7e\u540d",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8f6c\u8d26\u793a\u4f8b",id:"\u8f6c\u8d26\u793a\u4f8b",children:[]},{value:"\u8fd4\u56de\u7ed3\u679c",id:"\u8fd4\u56de\u7ed3\u679c",children:[]}]}],u={toc:p};function m(n){var e=n.components,t=(0,o.Z)(n,c);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"eos\u4ea4\u6613\u7b7e\u540d"},"EOS\uff1a\u4ea4\u6613\u7b7e\u540d"),(0,r.kt)("p",null,"\u7ed9\u5b9a ",(0,r.kt)("a",{parentName:"p",href:"./path"},"BIP44 \u8def\u5f84")," \u548c\u4ea4\u6613\u4fe1\u606f\uff0c\u8bbe\u5907\u901a\u8fc7\u6d3e\u751f\u8def\u5f84\u5bf9\u5e94\u7684\u79c1\u94a5\u5bf9\u8be5\u7b14\u4ea4\u6613\u8fdb\u884c\u7b7e\u540d\uff0c\u5e76\u8981\u6c42\u7528\u6237\u5728\u8bbe\u5907\u4e0a\u786e\u8ba4\u3002"),(0,r.kt)("p",null,"ES6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.eosSignTransaction(params);\n")),(0,r.kt)("p",null,"CommonJS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.eosSignTransaction(params).then(function (result) {\n\n});\n")),(0,r.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./commonParams"},(0,r.kt)("strong",{parentName:"a"},"\u53ef\u9009\u7684\u901a\u7528\u53c2\u6570"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/params.js#L69-L72"},"\u53c2\u6570\u53ca\u7c7b\u578b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," - ",(0,r.kt)("em",{parentName:"li"},"\u5fc5\u586b")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," \u6700\u5c0f\u957f\u5ea6\u4e3a 3\u3002 ",(0,r.kt)("a",{parentName:"li",href:"./path"},"\u4e86\u89e3\u66f4\u591a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction")," - ",(0,r.kt)("em",{parentName:"li"},"\u5fc5\u586b")," \u4ea4\u6613\u4fe1\u606f ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/eos.js#L145-L149"},"Transaction")," \u5bf9\u8c61")),(0,r.kt)("h3",{id:"\u8f6c\u8d26\u793a\u4f8b"},"\u8f6c\u8d26\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.eosSignTransaction({\n  path: \"m/44'/194'/0'/0/0\",\n  transaction: {\n    chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',\n    header: {\n      expiration: '2019-12-01T12:00:00',\n      refBlockNum: 6439,\n      refBlockPrefix: 2995713264,\n      maxNetUsageWords: 0,\n      maxCpuUsageMs: 0,\n      delaySec: 0,\n    },\n    actions: [\n      {\n        account: 'eosio.token',\n        authorization: [\n          {\n            actor: 'abcdefg12345',\n            permission: 'active',\n          },\n        ],\n        name: 'transfer',\n        data: {\n          from: 'abcdefg12345',\n          to: '12345abcdefg',\n          quantity: '1.0000 EOS',\n          memo: 'memo',\n        },\n      },\n    ],\n  },\n});\n")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u7ed3\u679c"},"\u8fd4\u56de\u7ed3\u679c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/eos.js#L160-L163"},"\u53c2\u6570\u53ca\u7c7b\u578b")),(0,r.kt)("p",null,"\u6b63\u786e\u8fd4\u56de"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        signature: string, // hexadecimal string\n    }\n}\n")),(0,r.kt)("p",null,"\u9519\u8bef\u8fd4\u56de"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,r.kt)(s.Z,{initValue:"OneKeyConnect.eosSignTransaction({\n    path: \"m/44'/194'/0'/0/0\",\n    transaction: {\n        chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',\n        header: {\n            expiration: '2019-12-01T12:00:00',\n            refBlockNum: 6439,\n            refBlockPrefix: 2995713264,\n            maxNetUsageWords: 0,\n            maxCpuUsageMs: 0,\n            delaySec: 0,\n        },\n        actions: [{\n            account: 'eosio.token',\n            authorization: [{\n                actor: 'abcdefg12345',\n                permission: 'active',\n            }],\n            name: 'transfer',\n            data: {\n                from: 'abcdefg12345',\n                to: '12345abcdefg',\n                quantity: '1.0000 EOS',\n                memo: 'memo',\n            },\n        }]\n    }\n});",mdxType:"Playground"}))}m.isMDXComponent=!0}}]);