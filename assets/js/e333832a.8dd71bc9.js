"use strict";(self.webpackChunk_sap_open_resource_discovery=self.webpackChunk_sap_open_resource_discovery||[]).push([[8417],{3986:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=r(4848),o=r(8453),s=r(3514);const i={sidebar_position:3,hide_table_of_contents:!0},a="Global Group Types",c={id:"spec-extensions/group-types/index",title:"Global Group Types",description:"Groups and the corresponding Group Types can be used to define and apply your own taxonomy in a generic, extensible way.",source:"@site/docs/spec-extensions/group-types/index.mdx",sourceDirName:"spec-extensions/group-types",slug:"/spec-extensions/group-types/",permalink:"/open-resource-discovery/spec-extensions/group-types/",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/open-resource-discovery/tree/main/docs/spec-extensions/group-types/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,hide_table_of_contents:!0},sidebar:"specExtensionsSidebar",previous:{title:"SAP Core v1",permalink:"/open-resource-discovery/spec-extensions/policy-levels/sap-core-v1"},next:{title:"SAP Global Group Types",permalink:"/open-resource-discovery/spec-extensions/group-types/sap"}},l={},u=[];function p(e){const n={a:"a",h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"global-group-types",children:"Global Group Types"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"../spec-v1/interfaces/document#group",children:"Groups"})," and the corresponding ",(0,t.jsx)(n.a,{href:"../spec-v1/interfaces/document#group-type",children:"Group Types"})," can be used to define and apply your own taxonomy in a generic, extensible way.\nSee also ",(0,t.jsx)(n.a,{href:"../details/articles/grouping-and-bundling#groups",children:"Grouping and Bundling"})," detail page for more information."]}),"\n",(0,t.jsx)(n.p,{children:"There are a group types and group instances that are global and usually pre-defined by a central group.\nGlobal means that any ORD provider or consumer may be interested in using or understanding them, not just a particular application or service."}),"\n","\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.A,{})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},3514:(e,n,r)=>{r.d(n,{A:()=>y});r(6540);var t=r(4164),o=r(1754),s=r(8774),i=r(5846),a=r(6654),c=r(1312),l=r(1107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=r(4848);function d(e){var n=e.href,r=e.children;return(0,p.jsx)(s.A,{href:n,className:(0,t.A)("card padding--lg",u.cardContainer),children:r})}function m(e){var n=e.href,r=e.icon,o=e.title,s=e.description;return(0,p.jsxs)(d,{href:n,children:[(0,p.jsxs)(l.A,{as:"h2",className:(0,t.A)("text--truncate",u.cardTitle),title:o,children:[r," ",o]}),s&&(0,p.jsx)("p",{className:(0,t.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){var n,r,t=e.item,s=(0,o.Nr)(t),a=(r=(0,i.W)().selectMessage,function(e){return r(e,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return s?(0,p.jsx)(m,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:null!=(n=t.description)?n:a(t.items.length)}):null}function h(e){var n,r,t=e.item,s=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.cC)(null!=(n=t.docId)?n:void 0);return(0,p.jsx)(m,{href:t.href,icon:s,title:t.label,description:null!=(r=t.description)?r:null==i?void 0:i.description})}function g(e){var n=e.item;switch(n.type){case"link":return(0,p.jsx)(h,{item:n});case"category":return(0,p.jsx)(f,{item:n});default:throw new Error("unknown item type "+JSON.stringify(n))}}function x(e){var n=e.className,r=(0,o.$S)();return(0,p.jsx)(y,{items:r.items,className:n})}function y(e){var n=e.items,r=e.className;if(!n)return(0,p.jsx)(x,Object.assign({},e));var s=(0,o.d1)(n);return(0,p.jsx)("section",{className:(0,t.A)("row",r),children:s.map((function(e,n){return(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(g,{item:e})},n)}))})}},5846:(e,n,r)=>{r.d(n,{W:()=>l});var t=r(6540),o=r(4586),s=["zero","one","two","few","many","other"];function i(e){return s.filter((function(n){return e.includes(n)}))}var a={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,o.A)().i18n.currentLocale;return(0,t.useMemo)((function(){try{return n=e,r=new Intl.PluralRules(n),{locale:n,pluralForms:i(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),a}var n,r}),[e])}function l(){var e=c();return{selectMessage:function(n,r){return function(e,n,r){var t=e.split("|");if(1===t.length)return t[0];t.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms.join(",")+"), but the message contains "+t.length+": "+e);var o=r.select(n),s=r.pluralForms.indexOf(o);return t[Math.min(s,t.length-1)]}(r,n,e)}}}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(6540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);