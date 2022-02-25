"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[713],{4370:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return k}});var s=t(7462),a=t(3366),i=(t(7294),t(3905)),r=t(9216),l=["components"],o={hide_table_of_contents:!0},p=void 0,m={unversionedId:"Connect/Method List/liskSignMessage",id:"Connect/Method List/liskSignMessage",isDocsHomePage:!1,title:"liskSignMessage",description:"Lisk: sign message",source:"@site/docs/Connect/Method List/liskSignMessage.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/liskSignMessage",permalink:"/en/Connect/Method List/liskSignMessage",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/liskSignMessage.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"liskGetPublicKey",permalink:"/en/Connect/Method List/liskGetPublicKey"},next:{title:"liskSignTransaction",permalink:"/en/Connect/Method List/liskSignTransaction"}},c=[{value:"Lisk: sign message",id:"lisk-sign-message",children:[{value:"Params",id:"params",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],u={toc:c};function k(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lisk-sign-message"},"Lisk: sign message"),(0,i.kt)("p",null,"Asks device to sign a message using the private key derived by given BIP32 path."),(0,i.kt)("p",null,"ES6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.liskSignMessage(params);\n")),(0,i.kt)("p",null,"CommonJS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.liskSignMessage(params).then(function(result) {\n\n});\n")),(0,i.kt)("h3",{id:"params"},"Params"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./commonParams"},(0,i.kt)("strong",{parentName:"a"},"Optional common params"))),(0,i.kt)("h6",{id:"flowtype"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/lisk.js#L109-L112"},"flowtype")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," \u2014 ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," minimum length is ",(0,i.kt)("inlineCode",{parentName:"li"},"3"),". ",(0,i.kt)("a",{parentName:"li",href:"./path"},"read more")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")," - ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," message to sign in plain text")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\nOneKeyConnect.liskSignMessage({\n    path: "m/44\'/134\'/0\'",\n    message: "example message"\n});\n')),(0,i.kt)("h3",{id:"result"},"Result"),(0,i.kt)("h6",{id:"flowtype-1"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/response.js#L104-L106"},"flowtype")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        publicKey: string,\n        signature: string,\n    }\n}\n")),(0,i.kt)("p",null,"Error"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,i.kt)(r.Z,{initValue:'OneKeyConnect.liskSignMessage({\n    path: "m/44\'/134\'/0\'",\n    message: "example message"\n});',mdxType:"Playground"}))}k.isMDXComponent=!0}}]);