"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[5899],{9685:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=t(7462),s=t(3366),i=(t(7294),t(3905)),r=t(9216),l=["components"],o={hide_table_of_contents:!0},c=void 0,p={unversionedId:"Connect/Method List/liskSignMessage",id:"Connect/Method List/liskSignMessage",isDocsHomePage:!1,title:"liskSignMessage",description:"Lisk\uff1a\u7b7e\u7f72\u6d88\u606f",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/Connect/Method List/liskSignMessage.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/liskSignMessage",permalink:"/Connect/Method List/liskSignMessage",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/liskSignMessage.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"liskGetPublicKey",permalink:"/Connect/Method List/liskGetPublicKey"},next:{title:"liskSignTransaction",permalink:"/Connect/Method List/liskSignTransaction"}},u=[{value:"Lisk\uff1a\u7b7e\u7f72\u6d88\u606f",id:"lisk\u7b7e\u7f72\u6d88\u606f",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u7ed3\u679c",id:"\u7ed3\u679c",children:[]}]}],k={toc:u};function m(e){var n=e.components,t=(0,s.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lisk\u7b7e\u7f72\u6d88\u606f"},"Lisk\uff1a\u7b7e\u7f72\u6d88\u606f"),(0,i.kt)("p",null,"\u8981\u6c42\u8bbe\u5907\u4f7f\u7528\u7531\u7ed9\u5b9a\u7684 BIP32 \u8def\u5f84\u6d3e\u751f\u7684\u79c1\u94a5\u5bf9\u6d88\u606f\u7b7e\u540d\u3002"),(0,i.kt)("p",null,"ES6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.liskSignMessage(params);\n")),(0,i.kt)("p",null,"CommonJS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.liskSignMessage(params).then(function(result) {\n\n});\n")),(0,i.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./commonParams"},(0,i.kt)("strong",{parentName:"a"},"\u53ef\u9009\u7684\u901a\u7528\u53c2\u6570"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/lisk.js#L109-L112"},"\u53c2\u6570\u53ca\u7c7b\u578b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," - ",(0,i.kt)("em",{parentName:"li"},"\u5fc5\u586b")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," \u7684\u6700\u5c0f\u957f\u5ea6\u4e3a 3\u3002 ",(0,i.kt)("a",{parentName:"li",href:"./path"},"\u4e86\u89e3\u66f4\u591a")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")," - ",(0,i.kt)("em",{parentName:"li"},"\u5fc5\u586b")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u6d88\u606f\uff0c\u9700\u8981\u7b7e\u7f72\u7684\u6d88\u606f\u7eaf\u6587\u672c\u3002")),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'OneKeyConnect.liskSignMessage({\n    path: "m/44\'/134\'/0\'",\n    message: "example message"\n});\n')),(0,i.kt)("h3",{id:"\u7ed3\u679c"},"\u7ed3\u679c"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/response.js#L104-L106"},"\u53c2\u6570\u53ca\u7c7b\u578b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        publicKey: string,\n        signature: string,\n    }\n}\n")),(0,i.kt)("p",null,"\u9519\u8bef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,i.kt)(r.Z,{initValue:'OneKeyConnect.liskSignMessage({\n    path: "m/44\'/134\'/0\'",\n    message: "example message"\n});',mdxType:"Playground"}))}m.isMDXComponent=!0}}]);