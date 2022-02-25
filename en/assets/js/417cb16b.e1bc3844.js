"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[2506],{2588:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=t(7462),s=t(3366),i=(t(7294),t(3905)),r=t(9216),o=["components"],l={hide_table_of_contents:!0},m=void 0,p={unversionedId:"Connect/Method List/verifyMessage",id:"Connect/Method List/verifyMessage",isDocsHomePage:!1,title:"verifyMessage",description:"Verify message",source:"@site/docs/Connect/Method List/verifyMessage.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/verifyMessage",permalink:"/en/Connect/Method List/verifyMessage",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/verifyMessage.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"stellarSignTransaction",permalink:"/en/Connect/Method List/stellarSignTransaction"},next:{title:"wipeDevice",permalink:"/en/Connect/Method List/wipeDevice"}},c=[{value:"Verify message",id:"verify-message",children:[{value:"Params",id:"params",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],d={toc:c};function u(e){var n=e.components,t=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"verify-message"},"Verify message"),(0,i.kt)("p",null,"Asks device to verify a message using the signer address and signature."),(0,i.kt)("p",null,"ES6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.verifyMessage(params);\n")),(0,i.kt)("p",null,"CommonJS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.verifyMessage(params).then(function(result) {\n\n});\n")),(0,i.kt)("h3",{id:"params"},"Params"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"./commonParams"},(0,i.kt)("strong",{parentName:"a"},"Optional common params"))),(0,i.kt)("h6",{id:"flowtype"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/params.js#L156-L161"},"flowtype")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address")," - ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," signer address,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")," - ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," signed message,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"signature")," - ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," signature in base64 format,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"coin")," - ",(0,i.kt)("em",{parentName:"li"},"required")," ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," Determines network definition specified in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/data/coins.json"},"coins.json")," file. Coin ",(0,i.kt)("inlineCode",{parentName:"li"},"shortcut"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"label")," can be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hex")," - ",(0,i.kt)("em",{parentName:"li"},"optional")," ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," convert message from hex")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'OneKeyConnect.verifyMessage({\n    address: "3BD8TL6iShVzizQzvo789SuynEKGpLTms9",\n    message: "example message",\n    signature: "JO7vL3tOB1qQyfSeIVLvdEw9G1tCvL+lNj78XDAVM4t6UptADs3kXDTO2+2ZeEOLFL4/+wm+BBdSpo3kb3Cnsas=",\n    coin: "btc"\n});\n')),(0,i.kt)("h3",{id:"result"},"Result"),(0,i.kt)("h6",{id:"flowtype-1"},(0,i.kt)("a",{parentName:"h6",href:"https://github.com/OneKeyHQ/connect/blob/onekey/src/js/types/response.js#L133-L136"},"flowtype")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    success: true,\n    payload: {\n        message: "Message verified"\n    }\n}\n')),(0,i.kt)("p",null,"Error"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,i.kt)(r.Z,{initValue:'OneKeyConnect.verifyMessage({\n    address: "3BD8TL6iShVzizQzvo789SuynEKGpLTms9",\n    message: "example message",\n    signature: "JO7vL3tOB1qQyfSeIVLvdEw9G1tCvL+lNj78XDAVM4t6UptADs3kXDTO2+2ZeEOLFL4/+wm+BBdSpo3kb3Cnsas=",\n    coin: "btc"\n});',mdxType:"Playground"}))}u.isMDXComponent=!0}}]);