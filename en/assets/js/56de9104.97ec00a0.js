"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[5668],{7577:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(7462),i=t(3366),s=(t(7294),t(3905)),r=t(9216),o=["components"],l={hide_table_of_contents:!0},m=void 0,p={unversionedId:"Connect/Method List/signMessage",id:"Connect/Method List/signMessage",isDocsHomePage:!1,title:"signMessage",description:"Sign message",source:"@site/docs/Connect/Method List/signMessage.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/signMessage",permalink:"/en/Connect/Method List/signMessage",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/signMessage.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"resetDevice",permalink:"/en/Connect/Method List/resetDevice"},next:{title:"signTransaction",permalink:"/en/Connect/Method List/signTransaction"}},c=[{value:"Sign message",id:"sign-message",children:[{value:"Params",id:"params",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],d={toc:c};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"sign-message"},"Sign message"),(0,s.kt)("p",null,"Asks device to sign a message using the private key derived by given BIP32 path."),(0,s.kt)("p",null,"ES6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.signMessage(params);\n")),(0,s.kt)("p",null,"CommonJS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.signMessage(params).then(function(result) {\n\n});\n")),(0,s.kt)("h3",{id:"params"},"Params"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"./commonParams"},(0,s.kt)("strong",{parentName:"a"},"Optional common params"))),(0,s.kt)("h6",{id:"flowtype"},(0,s.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/params.js#L131-L135"},"flowtype")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"path")," \u2014 ",(0,s.kt)("em",{parentName:"li"},"required")," ",(0,s.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," minimum length is ",(0,s.kt)("inlineCode",{parentName:"li"},"3"),". ",(0,s.kt)("a",{parentName:"li",href:"./path"},"read more")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"message")," - ",(0,s.kt)("em",{parentName:"li"},"required")," ",(0,s.kt)("inlineCode",{parentName:"li"},"string")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"coin")," - ",(0,s.kt)("em",{parentName:"li"},"optional")," ",(0,s.kt)("inlineCode",{parentName:"li"},"string")," Determines network definition specified in ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/data/coins.json"},"coins.json")," file. Coin ",(0,s.kt)("inlineCode",{parentName:"li"},"shortcut"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"name")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"label")," can be used. If ",(0,s.kt)("inlineCode",{parentName:"li"},"coin")," is not set API will try to get network definition from ",(0,s.kt)("inlineCode",{parentName:"li"},"path"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"hex")," - ",(0,s.kt)("em",{parentName:"li"},"optional")," ",(0,s.kt)("inlineCode",{parentName:"li"},"boolean")," convert message from hex")),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'OneKeyConnect.signMessage({\n    path: "m/44\'/0\'/0\'",\n    message: "example message"\n});\n')),(0,s.kt)("h3",{id:"result"},"Result"),(0,s.kt)("h6",{id:"flowtype-1"},(0,s.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/response.js#L113-L116"},"flowtype")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        address: string,   // signer address\n        signature: string, // signature in base64 format\n    }\n}\n")),(0,s.kt)("p",null,"Error"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,s.kt)(r.Z,{initValue:'OneKeyConnect.signMessage({\n    path: "m/44\'/0\'/0\'",\n    message: "example message"\n});',mdxType:"Playground"}))}u.isMDXComponent=!0}}]);