"use strict";(self.webpackChunkonekey_document=self.webpackChunkonekey_document||[]).push([[6086],{4636:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return r},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var a=t(7462),i=t(3366),s=(t(7294),t(3905)),o=["components"],c={sidebar_position:5},r="Accessing Accounts",u={unversionedId:"Extension/Guide/accessing-accounts",id:"Extension/Guide/accessing-accounts",isDocsHomePage:!1,title:"Accessing Accounts",description:"User accounts are used in a variety of contexts in Ethereum, including as identifiers and for signing transactions. In order to request a signature from the user or have the user approve a transaction, one must be able to access the user's accounts. The wallet methods below involve a signature or transaction approval and all require the sending account as a function parameter.",source:"@site/docs/Extension/01-Guide/accessing-accounts.md",sourceDirName:"Extension/01-Guide",slug:"/Extension/Guide/accessing-accounts",permalink:"/en/Extension/Guide/accessing-accounts",editUrl:"https://github.com/onekeyhq/documents/edit/main/docs/Extension/01-Guide/accessing-accounts.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"ExtensionSidebar",previous:{title:"Initializing Dapps",permalink:"/en/Extension/Guide/initializing-dapps"},next:{title:"Sending Transactions",permalink:"/en/Extension/Guide/sending-transactions"}},d=[],l={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"accessing-accounts"},"Accessing Accounts"),(0,s.kt)("p",null,"User accounts are used in a variety of contexts in Ethereum, including as identifiers and for signing transactions. In order to request a signature from the user or have the user approve a transaction, one must be able to access the user's accounts. The ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet methods")," below involve a signature or transaction approval and all require the sending account as a function parameter."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_sendTransaction")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_sign")," (insecure and unadvised to use)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_personalSign")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eth_signTypedData"))),(0,s.kt)("p",null,"Once you've ",(0,s.kt)("a",{parentName:"p",href:"./getting-started.html"},"connected to a user"),", you can always re-check the current account by checking ",(0,s.kt)("inlineCode",{parentName:"p"},"onekey.selectedAddress"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"<ChangeAccount />\n")),(0,s.kt)("p",null,"If you'd like to be notified when the address changes, we have an event you can subscribe to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"onekey.on('accountsChanged', function (accounts) {\n  // Time to reload your interface with accounts[0]!\n});\n")),(0,s.kt)("p",null,"If the first account in the returned array isn't the account you expected, you should notify the user!\nIn the future, the accounts array may contain more than one account.\nHowever, the first account in the array will continue to be considered as the user's \"selected\" account."))}p.isMDXComponent=!0}}]);