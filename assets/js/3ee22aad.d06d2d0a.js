"use strict";(self.webpackChunk_sap_open_resource_discovery=self.webpackChunk_sap_open_resource_discovery||[]).push([[6390],{5875:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"details/faq","title":"FAQ","description":"How does ORD relate to other API standards like OData and OpenAPI?","source":"@site/docs/details/faq.md","sourceDirName":"details","slug":"/details/faq","permalink":"/specification/details/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/open-resource-discovery/specification/tree/main/docs/details/faq.md","tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"title":"FAQ","sidebar_position":22},"sidebar":"detailsSidebar","previous":{"title":"ORD Introduction","permalink":"/specification/details/videos/introduction"}}');var a=o(4848),s=o(8453);const r={title:"FAQ",sidebar_position:22},i="FAQ",d={},c=[{value:"How does ORD relate to other API standards like OData and OpenAPI?",id:"how-does-ord-relate-to-other-api-standards-like-odata-and-openapi",level:4},{value:"Q: Do you have a library for ORD for language XYZ?",id:"q-do-you-have-a-library-for-ord-for-language-xyz",level:4},{value:"Is ORD already used outside of SAP?",id:"is-ord-already-used-outside-of-sap",level:4},{value:"How long does it take for metadata changes to reflect in the Aggregators?",id:"how-long-does-it-take-for-metadata-changes-to-reflect-in-the-aggregators",level:4},{value:"Q: Does ORD work for On-Premises Software?",id:"q-does-ord-work-for-on-premises-software",level:4},{value:"Q: What does &quot;Open&quot; in ORD stand for?",id:"q-what-does-open-in-ord-stand-for",level:4}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"faq",children:"FAQ"})}),"\n",(0,a.jsx)(t.h4,{id:"how-does-ord-relate-to-other-api-standards-like-odata-and-openapi",children:"How does ORD relate to other API standards like OData and OpenAPI?"}),"\n",(0,a.jsx)(t.p,{children:"ORD is not meant to replace existing metadata standards that describe APIs or Events in detail.\nSuch metadata standards, OpenAPI or EDMX for OData APIs are often protocol specific."}),"\n",(0,a.jsx)(t.p,{children:"The role of ORD is to standardize the high-level, lifecycle related, more semantic and shared attributes of APIs and pass along such detailed schema level metadata definition files.\nTherefore, ORD is not a substitution to such standards, its meant to actually aid the discoverability of them.\nConsumers that need to understand an API or Event resource in detail still need to understand those metadata standards."}),"\n",(0,a.jsx)(t.h4,{id:"q-do-you-have-a-library-for-ord-for-language-xyz",children:"Q: Do you have a library for ORD for language XYZ?"}),"\n",(0,a.jsxs)(t.p,{children:["Since adopting ORD is mostly about creating ORD documents correctly, the main challenge is usually how the information can be provided in the first place.\nA library can not solve this problem for you, only frameworks which have a rich internal meta model (like the ",(0,a.jsx)(t.a,{href:"https://cap.cloud.sap/docs/",children:"CAP framework"}),") can automatically generate an ORD description of the application."]}),"\n",(0,a.jsx)(t.p,{children:"That leaves the main challenge to create the ORD documents correctly. Two things are usually helpful here:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Use a validator to ensure that the ORD Documents are correct and compliant, ideally as CI/CD step or test cases."}),"\n",(0,a.jsxs)(t.li,{children:["Implement against a generated (ideally type safe) ORD document interface.","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["ORD comes with a ",(0,a.jsx)(t.a,{href:"https://sap.github.io/open-resource-discovery/spec-v1/interfaces/Document.schema.json",children:"JSON Schema definition"}),", which can be converted into interfaces / clients for most programming languages.\nThis can be done with converters like ",(0,a.jsx)(t.a,{href:"https://quicktype.io/",children:"quicktype"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"is-ord-already-used-outside-of-sap",children:"Is ORD already used outside of SAP?"}),"\n",(0,a.jsx)(t.p,{children:"Not that we are aware of. But it it designed in a way that this is possible."}),"\n",(0,a.jsxs)(t.p,{children:["In a first step, we released ORD as ",(0,a.jsx)(t.a,{href:"https://github.com/SAP/open-resource-discovery",children:"open source"})," under the Apache 2 license (see ",(0,a.jsx)(t.a,{href:"https://blogs.sap.com/2023/11/14/open-resource-discovery-a-protocol-for-decentralized-metadata-discovery-is-now-open-source/",children:"public announcement"}),")."]}),"\n",(0,a.jsx)(t.p,{children:"Currently, we're in discussion with other companies to form a community around the standard."}),"\n",(0,a.jsx)(t.h4,{id:"how-long-does-it-take-for-metadata-changes-to-reflect-in-the-aggregators",children:"How long does it take for metadata changes to reflect in the Aggregators?"}),"\n",(0,a.jsxs)(t.p,{children:["This depends on the configuration and implementation of an ORD aggregator.\nThe aggregation can be fully automated, but currently ORD has only defined a ",(0,a.jsx)(t.a,{href:"/specification/spec-v1/#pull-transport",children:"pull transport"})," mode, which relies on periodic fetching (similar as a search engine indexes the web). As a consequence, metadata changes need a while to be replicated.\nWe're aware that some use-cases require faster metadata updates and the ORD spec is designed to support other transport modes (like push or event based), to make faster and more efficient replication possible."]}),"\n",(0,a.jsx)(t.h4,{id:"q-does-ord-work-for-on-premises-software",children:"Q: Does ORD work for On-Premises Software?"}),"\n",(0,a.jsxs)(t.p,{children:["ORD does not make a distinction between on-premises or cloud software.\nHowever On-premises software has implications on how (and whether at all) the ORD information can be accessed.\nEffectively, whether on-premises is supported or not depends on whether the connectivity between the the ORD aggregators (the system that are collecting the information) and the On-premises ORD providers can be established.\nIn SAP context, we support including On-Premises software through ",(0,a.jsx)(t.a,{href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector",children:"Cloud Connectors"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"q-what-does-open-in-ord-stand-for",children:'Q: What does "Open" in ORD stand for?'}),"\n",(0,a.jsx)(t.p,{children:"The Open in ORD refers to the protocol itself and that it is published publicly under a permissive license.\nIt can therefore be freely implemented by SAP partners or customers."}),"\n",(0,a.jsxs)(t.p,{children:["A public version of the standard is published here: ",(0,a.jsx)(t.a,{href:"https://sap.github.io/open-resource-discovery",children:"https://sap.github.io/open-resource-discovery"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The governance and the actual development will remain fully at SAP for now.\nIn the long term, we can imagine to contribute ORD to an open governance body\nif there is an interest by other companies to drive the specification together."}),"\n",(0,a.jsxs)(t.p,{children:['Please note that the fact that ORD is an open protocol, does not imply\nthat the resources and information that are described through it are "open".\nThey can be categorized explicitly, e.g. through ',(0,a.jsx)(t.code,{children:"visibility"}),"."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\ud83c\udfa7 Checkout the openSAP podcast ",(0,a.jsx)(t.a,{href:"https://podcast.opensap.info/open-source-way/2024/06/14/open-resource-discovery-ord/",children:"The Open Source Way - Open Resource Discovery"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>i});var n=o(6540);const a={},s=n.createContext(a);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);