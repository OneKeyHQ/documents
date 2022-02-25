"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[4253],{1595:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return d},default:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],r={sidebar_position:4},l="Migration from MetaMask",m={unversionedId:"Extension/Best Practices/migration-from-matamask",id:"Extension/Best Practices/migration-from-matamask",isDocsHomePage:!1,title:"Migration from MetaMask",description:"If there is already a Dapp Web Application compatible with the latest MetaMask (Metamask v8 or later) before, it will be very easy to be compatible with the OneKey browser Extension.",source:"@site/docs/Extension/03-Best Practices/migration-from-matamask.md",sourceDirName:"Extension/03-Best Practices",slug:"/Extension/Best Practices/migration-from-matamask",permalink:"/en/Extension/Best Practices/migration-from-matamask",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Extension/03-Best Practices/migration-from-matamask.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"ExtensionSidebar",previous:{title:"Defining Your App's Icon",permalink:"/en/Extension/Best Practices/defining-your-icon"}},d=[{value:"Best Practices",id:"best-practices",children:[]},{value:"Other options",id:"other-options",children:[]}],c={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migration-from-metamask"},"Migration from MetaMask"),(0,o.kt)("p",null,"If there is already a Dapp Web Application compatible with the latest MetaMask (Metamask v8 or later) before, it will be very easy to be compatible with the OneKey browser Extension."),(0,o.kt)("p",null,"The latest MetaMask will inject the ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum")," object to make the page manipulate the user's account in the metamask and obtain configuration information. Similarly, while ",(0,o.kt)("inlineCode",{parentName:"p"},"window.onekey")," maintains a large number of APIs compatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum"),", and OneKey Browser Extension also injects ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum"),' to ensure the compatibility of other Dapps. Users can manually turn on "Alternative MetaMask" in OneKey browser Extension v2.0.1 or later to prevent possible conflicts during co-installation with MetaMask.'),(0,o.kt)("h2",{id:"best-practices"},"Best Practices"),(0,o.kt)("p",null,"It is recommended that Dapp developers completely distinguish the two objects of ",(0,o.kt)("inlineCode",{parentName:"p"},"window.onekey")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum")," when calling internal methods, namely:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you want the logic triggered by the OneKey browser Extension will completely use ",(0,o.kt)("inlineCode",{parentName:"li"},"window.onekey")," for subsequent operations."),(0,o.kt)("li",{parentName:"ul"},"If you want the logic triggered by the MetaMask browser Extension will completely use ",(0,o.kt)("inlineCode",{parentName:"li"},"window.ethereum")," for subsequent operations.At the same time, through the following JS code, you can ensure that the user wakes up MetaMask.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// If you want to operate the methods and logic of MetaMask related providers\nif (window.ethereum && window.ethereum.switchProvider) {\n  window.ethereum.switchProvider('metamask');\n}\n// After the switchProvider is executed, the subsequent operation window.ethereum must be the metamask injected into the page\n")),(0,o.kt)("h2",{id:"other-options"},"Other options"),(0,o.kt)("p",null,"Of course, in order to be compatible with earlier Dapps that are not compatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"window.onekey"),", the OneKey browser Extension will also add ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum")," to the page to assist in operations."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum.switchProvider")," method to switch between the variables injected by the OneKey browser Extension and the variables injected by MetaMask."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum.switchProvider")," is the new content of OneKey browser plugin v2.0.1 and later, and it is also a unique method of OneKey browser Extension."),(0,o.kt)("p",{parentName:"div"},"If the user does not install the OneKey browser Extension and only installs MetaMask, the method does not exist. Please make sure that the method is accessible before calling."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// connect MetaMask\nfunction showInstallMessage(){\n  alert('Please Install MetaMask here: https://metamask.io/');\n}\n\nif (!window.ethereum) {\n  showInstallMessage();\n  return;\n}\n\n// DO NOT call methods or accessing properties before switchProvider()\nif (window.ethereum && window.ethereum.switchProvider) {\n  window.ethereum.switchProvider('metamask');\n}\n\nif (!window.ethereum.isMetaMask) {\n  showInstallMessage();\n  return;\n}\n\n// call window.ethereum methods...\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// connect OneKey\nfunction showInstallMessage(){\n  alert('Please Install MetaMask here: https://onekey.so/');\n}\n\nif (!window.ethereum) {\n  showInstallMessage();\n  return;\n}\n\n// DO NOT call methods or accessing properties before switchProvider()\nif (window.ethereum && window.ethereum.switchProvider) {\n  window.ethereum.switchProvider('onekey');\n}\n\nif (!window.ethereum.isOneKey) {\n  showInstallMessage();\n  return;\n}\n\n// call window.ethereum methods...\n")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Developers must ensure that all relevant business codes that access ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum")," must be executed after switchProvider."),(0,o.kt)("p",{parentName:"div"},"Otherwise, the code executed before switchProvider may cause an exception because of the uncertainty of the extension instance corresponding to ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum"),"."))))}h.isMDXComponent=!0}}]);