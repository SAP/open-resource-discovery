"use strict";(self.webpackChunk_sap_open_resource_discovery=self.webpackChunk_sap_open_resource_discovery||[]).push([[7448],{775:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=s(4848),r=s(8453),i=s(3514);const c={sidebar_position:1,hide_table_of_contents:!0},a="ORD Access Strategies",o={id:"spec-extensions/access-strategies/index",title:"ORD Access Strategies",description:"This section contains the description and definition of the standardized ORD access strategies.",source:"@site/docs/spec-extensions/access-strategies/index.mdx",sourceDirName:"spec-extensions/access-strategies",slug:"/spec-extensions/access-strategies/",permalink:"/open-resource-discovery/spec-extensions/access-strategies/",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/open-resource-discovery/tree/main/docs/spec-extensions/access-strategies/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,hide_table_of_contents:!0},sidebar:"specExtensionsSidebar",next:{title:"Open Access Strategy",permalink:"/open-resource-discovery/spec-extensions/access-strategies/open"}},l={},d=[];function u(e){const t={a:"a",blockquote:"blockquote",h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"ord-access-strategies",children:"ORD Access Strategies"}),"\n",(0,n.jsx)(t.p,{children:"This section contains the description and definition of the standardized ORD access strategies.\nAccess strategies address the authentication and authorization aspects that are necessary to successfully retrieve the requested information."}),"\n",(0,n.jsx)(t.p,{children:"Concretely, they are currently used to describe how ORD related metadata can be accessed from the ORD provider:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["the ORD documents via ",(0,n.jsx)(t.a,{href:"/open-resource-discovery/spec-v1/interfaces/configuration#access-strategy",children:"Access Strategy"})," in the ORD configuration."]}),"\n",(0,n.jsxs)(t.li,{children:["the referenced resource definition files via ",(0,n.jsx)(t.a,{href:"/open-resource-discovery/spec-v1/interfaces/document#access-strategy",children:"Access Strategy"})," in the ORD document."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Every access strategy MUST describe how the access is implemented from both ORD provider and the ORD consumer / ORD aggregator side.\nIt is therefore a shared contract between the provider and the consumer that details the necessary steps and conventions."}),"\n",(0,n.jsxs)(t.p,{children:["Access strategies are inspired by the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Strategy_pattern",children:"strategy pattern"}),".\nSince the ORD provider lists the access strategies it supports and the ORD aggregator/consumer knows which access strategies it can make use of,\nthe information can be used to negotiate the choice of strategy at runtime."]}),"\n",(0,n.jsx)(t.p,{children:"Since multiple access strategies can be implemented at the same time, the requirements of different ORD aggregators or ORD consumers can be supported at the same time.\nFor this to work, both sides need to share at least one common supported access strategy."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"There may be situations where gaining access to ORD documents is not as simple as executing a sequence of well-defined programmatic remote requests or actions and manual user intervention might be necessary.\nIn such cases it's acceptable to describe an access strategy more freely in terms of what the user has to do by hand."}),"\n"]}),"\n","\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(i.A,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3514:(e,t,s)=>{s.d(t,{A:()=>v});s(6540);var n=s(4164),r=s(1754),i=s(8774),c=s(5846),a=s(6654),o=s(1312),l=s(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=s(4848);function h(e){var t=e.href,s=e.children;return(0,u.jsx)(i.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:s})}function p(e){var t=e.href,s=e.icon,r=e.title,i=e.description;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:r,children:[s," ",r]}),i&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function m(e){var t,s,n=e.item,i=(0,r.Nr)(n),a=(s=(0,c.W)().selectMessage,function(e){return s(e,(0,o.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return i?(0,u.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:a(n.items.length)}):null}function f(e){var t,s,n=e.item,i=(0,a.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,r.cC)(null!=(t=n.docId)?t:void 0);return(0,u.jsx)(p,{href:n.href,icon:i,title:n.label,description:null!=(s=n.description)?s:null==c?void 0:c.description})}function g(e){var t=e.item;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function x(e){var t=e.className,s=(0,r.$S)();return(0,u.jsx)(v,{items:s.items,className:t})}function v(e){var t=e.items,s=e.className;if(!t)return(0,u.jsx)(x,Object.assign({},e));var i=(0,r.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",s),children:i.map((function(e,t){return(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)}))})}},5846:(e,t,s)=>{s.d(t,{W:()=>l});var n=s(6540),r=s(4586),i=["zero","one","two","few","many","other"];function c(e){return i.filter((function(t){return e.includes(t)}))}var a={locale:"en",pluralForms:c(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,r.A)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,s=new Intl.PluralRules(t),{locale:t,pluralForms:c(s.resolvedOptions().pluralCategories),select:function(e){return s.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),a}var t,s}),[e])}function l(){var e=o();return{selectMessage:function(t,s){return function(e,t,s){var n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error("For locale="+s.locale+", a maximum of "+s.pluralForms.length+" plural forms are expected ("+s.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var r=s.select(t),i=s.pluralForms.indexOf(r);return n[Math.min(i,n.length-1)]}(s,t,e)}}}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>a});var n=s(6540);const r={},i=n.createContext(r);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);