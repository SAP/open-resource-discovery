"use strict";(self.webpackChunk_sap_open_resource_discovery=self.webpackChunk_sap_open_resource_discovery||[]).push([[836],{8976:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(5893),s=t(1151);const i={title:"Frequently Asked Questions",hide_table_of_contents:!1,sidebar_position:3},r="Frequently Asked Questions",a={id:"faq",title:"Frequently Asked Questions",description:"If you have questions, consider creating a SAP stack overflow question with the tag #open-resource-discovery. This will be watched and answered by us.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/open-resource-discovery/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/open-resource-discovery/tree/main/docs/faq.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Frequently Asked Questions",hide_table_of_contents:!1,sidebar_position:3}},d={},c=[{value:"ORD in General",id:"ord-in-general",level:2},{value:"Q: We already have OpenAPI / OData / (...) to describe APIs. Why do we need ORD?",id:"q-we-already-have-openapi--odata---to-describe-apis-why-do-we-need-ord",level:4},{value:"Q: Does ORD work for On-Premises Software?",id:"q-does-ord-work-for-on-premises-software",level:4},{value:"Q: What does &quot;Open&quot; in ORD stand for?",id:"q-what-does-open-in-ord-stand-for",level:4},{value:"ORD at SAP",id:"ord-at-sap",level:2},{value:"Q: How does ORD relate to the Open Discovery API / API Event Discovery?",id:"q-how-does-ord-relate-to-the-open-discovery-api--api-event-discovery",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["If you have questions, consider creating a SAP stack overflow question with the tag ",(0,o.jsx)(n.a,{href:"https://sap.stackenterprise.co/posts/tagged/3957",children:"#open-resource-discovery"}),". This will be watched and answered by us."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"ord-in-general",children:"ORD in General"}),"\n",(0,o.jsx)(n.h4,{id:"q-we-already-have-openapi--odata---to-describe-apis-why-do-we-need-ord",children:"Q: We already have OpenAPI / OData / (...) to describe APIs. Why do we need ORD?"}),"\n",(0,o.jsx)(n.p,{children:"ORD is no replacement or substitute for such standards. However, just using e.g. an OpenAPI definition to describe an API itself is not enough for all use cases we have."}),"\n",(0,o.jsx)(n.p,{children:"For example, it is not standardized where and how to fetch the definition file. How would it fit into a bigger context, e.g. in an API catalogue / marketplace? Does this API relate to other APIs or do we have alternative definition formats that describe the same API?"}),"\n",(0,o.jsx)(n.p,{children:"Those are questions that a single API Definition format cannot answer. ORD addresses the meta-level descriptions and standardizes how such information can be provided and discovered."}),"\n",(0,o.jsxs)(n.p,{children:["For more information and use-cases, please read the ",(0,o.jsx)(n.a,{href:"/open-resource-discovery/details/articles/why-ord",children:"Why ORD?"})," article."]}),"\n",(0,o.jsx)(n.h4,{id:"q-does-ord-work-for-on-premises-software",children:"Q: Does ORD work for On-Premises Software?"}),"\n",(0,o.jsxs)(n.p,{children:["ORD does not make a distinction between on-premises or cloud software.\nHowever On-premises software has implications on how (and whether at all) the ORD information can be accessed.\nEffectively, whether on-premises is supported or not depends on whether the connectivity between the the ORD aggregators (the system that are collecting the information) and the On-premises ORD providers can be established.\nIn SAP context, we support including On-Premises software through ",(0,o.jsx)(n.a,{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector",children:"Cloud Connectors"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"q-what-does-open-in-ord-stand-for",children:'Q: What does "Open" in ORD stand for?'}),"\n",(0,o.jsx)(n.p,{children:"The Open in ORD refers to the protocol itself and that it is published publicly under a permissive license.\nIt can therefore be freely implemented by SAP partners or customers."}),"\n",(0,o.jsxs)(n.p,{children:["A public version of the standard is published here: ",(0,o.jsx)(n.a,{href:"https://sap.github.io/open-resource-discovery",children:"https://sap.github.io/open-resource-discovery"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The governance and the actual development will remain fully at SAP for now.\nIn the long term, we can imagine to contribute ORD to an open governance body\nif there is an interest by other companies to drive the specification together."}),"\n",(0,o.jsxs)(n.p,{children:['Please note that the fact that ORD is an open protocol, does not imply\nthat the resources and information that are described through it are "open".\nThey can be categorized explicitly, e.g. through ',(0,o.jsx)(n.code,{children:"visibility"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"ord-at-sap",children:"ORD at SAP"}),"\n",(0,o.jsx)(n.h4,{id:"q-how-does-ord-relate-to-the-open-discovery-api--api-event-discovery",children:"Q: How does ORD relate to the Open Discovery API / API Event Discovery?"}),"\n",(0,o.jsx)(n.p,{children:"The Open Discovery API standard is the predecessor of Open Resource Discovery.\nIt was developed by Harsh Jegadeesan and Divya Mary.\nThe old Open Discovery API has been implemented (in different variants / states) by some SAP Applications, e.g. by the API Hub or S4/Hana."}),"\n",(0,o.jsx)(n.p,{children:"It's adoption by LoBs was however not mandated by the corresponding Technology Guideline TG03."}),"\n",(0,o.jsx)(n.p,{children:"With Open Resource Discovery, the scope of the specification has widened and changed a bit."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["There is a distinction between the API that a LoB needs to provide (simplified API) and the API that an ORD aggregator (like API Hub) needs to provide","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The goal is to simplify the adoption for SAP applications"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"ORD is not specifically about APIs and Events anymore but is meant to express all kind of system resources (therefore the name change)"}),"\n",(0,o.jsx)(n.li,{children:"A new goal is to have a decentralized implementation with full automation around discovery.\nORD Providers and ORD aggregators should not have to create explicit integration between them.\nInstead we aim for a plug-and-play architecture."}),"\n",(0,o.jsxs)(n.li,{children:["ORD also considers additional use cases of the ",(0,o.jsx)(n.a,{href:"https://sapedia.one.int.sap/wiki/Unified_Customer_Landscape",children:"Unified Customer Landscape"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["An implementation of the legacy ",(0,o.jsx)(n.strong,{children:"Open Discovery API"})," will provide most, but not all of the ORD information. Since there is no standardized state of it, it needs to be integrated individually and explicitly (no plug-and-play automated discovery).\nIt was mainly used as a publication channel of ",(0,o.jsx)(n.strong,{children:"system instance unaware"})," information to the ",(0,o.jsx)(n.a,{href:"https://api.sap.com/",children:"API Hub"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(7294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);