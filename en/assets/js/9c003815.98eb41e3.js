"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[8695],{8133:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),s=t(9216),l=["components"],d={hide_table_of_contents:!0},o=void 0,p={unversionedId:"Connect/Method List/nemGetAddress",id:"Connect/Method List/nemGetAddress",isDocsHomePage:!1,title:"nemGetAddress",description:"NEM: get address",source:"@site/docs/Connect/Method List/nemGetAddress.mdx",sourceDirName:"Connect/Method List",slug:"/Connect/Method List/nemGetAddress",permalink:"/en/Connect/Method List/nemGetAddress",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Connect/Method List/nemGetAddress.mdx",version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"ConnectSidebar",previous:{title:"liskVerifyMessage",permalink:"/en/Connect/Method List/liskVerifyMessage"},next:{title:"nemSignTransaction",permalink:"/en/Connect/Method List/nemSignTransaction"}},u=[{value:"NEM: get address",id:"nem-get-address",children:[{value:"Params",id:"params",children:[]},{value:"Example",id:"example",children:[]},{value:"Result",id:"result",children:[]}]}],m={toc:u};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"nem-get-address"},"NEM: get address"),(0,r.kt)("p",null,"Display requested address on device and returns it to caller.\nUser is presented with a description of the requested key and asked to confirm the export."),(0,r.kt)("p",null,"ES6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const result = await OneKeyConnect.nemGetAddress(params);\n")),(0,r.kt)("p",null,"CommonJS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.nemGetAddress(params).then(function(result) {\n\n});\n")),(0,r.kt)("h3",{id:"params"},"Params"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./commonParams"},(0,r.kt)("strong",{parentName:"a"},"Optional common params"))),(0,r.kt)("h4",{id:"exporting-single-address"},"Exporting single address"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"required")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string | Array<number>")," minimum length is ",(0,r.kt)("inlineCode",{parentName:"li"},"3"),". ",(0,r.kt)("a",{parentName:"li",href:"./path"},"read more")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," address for validation (read ",(0,r.kt)("inlineCode",{parentName:"li"},"Handle button request")," section below)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"network")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," ",(0,r.kt)("inlineCode",{parentName:"li"},"0x68")," - Mainnet, ",(0,r.kt)("inlineCode",{parentName:"li"},"0x96")," - Testnet, ",(0,r.kt)("inlineCode",{parentName:"li"},"0x60")," - Mijin. Default is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"Mainnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"showOnOneKey")," \u2014 ",(0,r.kt)("em",{parentName:"li"},"optional")," ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," determines if address will be displayed on device. Default is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"))),(0,r.kt)("h4",{id:"exporting-bundle-of-addresses"},"Exporting bundle of addresses"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bundle")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"Array")," of Objects with ",(0,r.kt)("inlineCode",{parentName:"li"},"path"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"network")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"showOnOneKey")," fields")),(0,r.kt)("h4",{id:"handle-button-request"},"Handle button request"),(0,r.kt)("p",null,"There is a possibility to handle ",(0,r.kt)("inlineCode",{parentName:"p"},"UI.ADDRESS_VALIDATION")," event which will be triggered once the address is displayed on the device.\nYou can handle this event and display custom UI inside of your application."),(0,r.kt)("p",null,"If certain conditions are fulfilled popup will not be used at all:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the user gave permissions to communicate with OneKey"),(0,r.kt)("li",{parentName:"ul"},"device is authenticated by pin/passphrase"),(0,r.kt)("li",{parentName:"ul"},"application has ",(0,r.kt)("inlineCode",{parentName:"li"},"OneKeyConnect.on(UI.ADDRESS_VALIDATION, () => {});")," listener registered"),(0,r.kt)("li",{parentName:"ul"},"parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," is set"),(0,r.kt)("li",{parentName:"ul"},"parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"showOnOneKey")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," (or not set at all)"),(0,r.kt)("li",{parentName:"ul"},"application is requesting ONLY ONE(!) address")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Display address of third nem account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.nemGetAddress({\n    path: \"m/44'/43'/2'\"\n});\n")),(0,r.kt)("p",null,"Return a bundle of NEM addresses without displaying them on device:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"OneKeyConnect.nemGetAddress({\n    bundle: [\n        { path: \"m/44'/43'/0'\", showOnOneKey: false }, // account 1\n        { path: \"m/44'/43'/1'\", showOnOneKey: false }, // account 2\n        { path: \"m/44'/43'/2'\", showOnOneKey: false }  // account 3\n    ]\n});\n")),(0,r.kt)("p",null,"Validate address using custom UI inside of your application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import OneKeyConnect, { UI } from \'@onekeyfe/connect\';\n\nOneKeyConnect.on(UI.ADDRESS_VALIDATION, data => {\n    console.log("Handle button request", data.address, data.serializedPath);\n    // here you can display custom UI inside of your app\n});\n\nconst result = await OneKeyConnect.nemGetAddress({\n    path: "m/44\'/43\'/0\'",\n    address: "TDS7OQUHKNYMSC2WPJA6QUTLJIO22S27B4FMU2AJ",\n});\n// dont forget to hide your custom UI after you get the result!\n')),(0,r.kt)("h3",{id:"result"},"Result"),(0,r.kt)("p",null,"Result with only one address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: {\n        address: string,\n        path: Array<number>,\n        serializedPath: string,\n    }\n}\n")),(0,r.kt)("p",null,"Result with bundle of addresses"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: true,\n    payload: [\n        { address: string, path: Array<number>, serializedPath: string }, // account 1\n        { address: string, path: Array<number>, serializedPath: string }, // account 2\n        { address: string, path: Array<number>, serializedPath: string }, // account 3\n    ]\n}\n")),(0,r.kt)("p",null,"Error"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    success: false,\n    payload: {\n        error: string // error message\n    }\n}\n")),(0,r.kt)(s.Z,{initValue:"OneKeyConnect.nemGetAddress({\n    path: \"m/44'/43'/2'\"\n});",mdxType:"Playground"}))}c.isMDXComponent=!0}}]);