"use strict";(self.webpackChunk_sap_open_resource_discovery=self.webpackChunk_sap_open_resource_discovery||[]).push([[6907],{6394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(4848),i=n(8453);const o={sidebar_position:1,description:"What problems is ORD solving and why create a new standard for this."},r="Why ORD?",a={id:"details/articles/why-ord",title:"Why ORD?",description:"What problems is ORD solving and why create a new standard for this.",source:"@site/docs/details/articles/why-ord.md",sourceDirName:"details/articles",slug:"/details/articles/why-ord",permalink:"/open-resource-discovery/details/articles/why-ord",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/open-resource-discovery/tree/main/docs/details/articles/why-ord.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"What problems is ORD solving and why create a new standard for this."},sidebar:"detailsSidebar",previous:{title:"Articles \ud83d\udcd6",permalink:"/open-resource-discovery/details/articles/"},next:{title:"How To Adopt ORD (Provider)",permalink:"/open-resource-discovery/details/articles/adopt-ord-as-provider"}},d={},l=[{value:"Why create a new Standard?",id:"why-create-a-new-standard",level:2},{value:"The ORD Ecosystem",id:"the-ord-ecosystem",level:2},{value:"Benefits to ORD Providers",id:"benefits-to-ord-providers",level:3},{value:"Reduce Total Cost of Ownership for Metadata Integration",id:"reduce-total-cost-of-ownership-for-metadata-integration",level:4},{value:"Profit from having less integrations",id:"profit-from-having-less-integrations",level:4},{value:"Profit from ORD Consumer Use Cases",id:"profit-from-ord-consumer-use-cases",level:4},{value:"Benefits to ORD Consumers",id:"benefits-to-ord-consumers",level:3},{value:"Reduce Total Cost of Ownership for Metadata Integration",id:"reduce-total-cost-of-ownership-for-metadata-integration-1",level:4},{value:"Benefit from already established standard and integrations",id:"benefit-from-already-established-standard-and-integrations",level:4}];function c(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"why-ord",children:"Why ORD?"}),"\n",(0,s.jsx)(t.h2,{id:"why-create-a-new-standard",children:"Why create a new Standard?"}),"\n",(0,s.jsxs)(t.p,{children:["There are quite a few open standards for describing software system resources.\nAPI resources can be described, for example, using ",(0,s.jsx)(t.a,{href:"https://www.openapis.org/",children:"OpenAPI"})," or ",(0,s.jsx)(t.a,{href:"http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part3-csdl.html",children:"OData CSDL"}),".\nFor Events, ",(0,s.jsx)(t.a,{href:"https://www.asyncapi.com/",children:"AsyncAPI"})," is an option."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"So why introduce a new standard like ORD?"})}),"\n",(0,s.jsx)(t.p,{children:"Imagine the use case of an API catalog that describes resources exposed by multiple systems.\nEach system exposes various resources like APIs and Events that can be implemented using different protocols (plain REST, OData, SOAP, CloudEvents, etc.) and which in turn are described using a variety of different resource definition formats."}),"\n",(0,s.jsx)(t.p,{children:"Because of this heterogeneity,"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"how would the API catalog know which complete set of resources is actually available in a given system?"}),"\n",(0,s.jsx)(t.li,{children:"Which resource definition formats have been chosen to describe them?"}),"\n",(0,s.jsx)(t.li,{children:"How and where can this information be accessed?"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"From an API catalog perspective, the resource definition formats themselves may even miss some high-level information, for instance:\nA global taxonomy (e.g. tags), logos, additional documentation links, relations between the resources, etc."}),"\n",(0,s.jsx)(t.p,{children:"Even though some resource definition formats may have means to provide some of this high-level information, not all do.\nCurrently, there is no standardized and machine-readable way to describe this high-level information across the different resource definition formats."}),"\n",(0,s.jsx)(t.p,{children:"We also want to use the same discovery mechanism(s) (how and where to access this information) - independent on what resource type or what definition format was used."}),"\n",(0,s.jsx)(t.p,{children:"An API Catalog is just one of many possible use cases.\nThere are all kinds of use cases that rely on having an aligned metadata view on a specific system or system landscape."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"An individual developer may be interested in understanding a single system in its current state.\nHaving a single entry point for finding such information simplifies this."}),"\n",(0,s.jsx)(t.li,{children:"Applications may be interested in finding out the current state of a concrete system landscape and dynamically react on the information available.\nFor example, find out what external resources are available, generate API clients, establish connectivity/trust between systems and their APIs, etc."}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\ud83d\udc49 ",(0,s.jsxs)(t.strong,{children:["ORD is about adding missing/common high-level information and standardizing the discovery aspects.\nIt is ",(0,s.jsx)(t.em,{children:"not"})," meant to replace existing open standards, but to complement them."]})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["ORD is a ",(0,s.jsx)(t.strong,{children:"decentralized"})," standard. There is no single system of record.\nInstead, systems describe themselves using multiple common resource definition formats, and ORD adds the means for putting the system's resources into relation and makes them crawl-able with a single entry-point.\nThe information may reflect system-generic capabilities, but may also reflect its current state at runtime, including customizations."]}),"\n",(0,s.jsx)(t.p,{children:"ORD also specifies how the distributed metadata is brought together (by ORD aggregators), which will result in a combined bigger picture (system landscape metadata view).\nBased on this, we can not only understand the possibilities of individual systems, but we can also gain a metadata view on what constitutes a specific system landscape and how the systems within it relate to each other.\nThis enables new automation possibilities, central platform services and metadata driven use-cases.\nSolutions to certain problems can be standardized and responsibilities be split."}),"\n",(0,s.jsx)(t.p,{children:"As a long-term goal, we see ORD as a single building block to create an ecosystem where the individual systems can benefit from platform effects and efficiencies."}),"\n",(0,s.jsx)(t.h2,{id:"the-ord-ecosystem",children:"The ORD Ecosystem"}),"\n",(0,s.jsx)(t.p,{children:"The overall benefit of adopting ORD grows with the ecosystem that uses it.\nTherefore, the commitment of all LoBs and areas is required to exploit the full potential."}),"\n",(0,s.jsx)(t.p,{children:"Depending on the role of the adopter the value proposition is different:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["If you are an application or service, that needs to provide ORD information, you are in the ",(0,s.jsx)(t.a,{href:"#benefits-to-ord-providers",children:"ORD Provider"})," role."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The provider benefits from having one protocol for providing the information and not multiple."}),"\n",(0,s.jsx)(t.li,{children:"The provider only needs to publish to two ORD aggregators and avoids having many more point-to-point integrations to the various consumers."}),"\n",(0,s.jsx)(t.li,{children:"The use cases that ORD consumers provide may very well serve the same customer and solve commonly shared problems, see ORD Adoption Status - ORD Consumers for examples."}),"\n",(0,s.jsxs)(t.li,{children:["See ",(0,s.jsx)(t.a,{href:"#benefits-to-ord-providers",children:"Benefits to ORD Providers"})," for more elaboration."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["If you make use of ORD information, you are in the role of an ",(0,s.jsx)(t.a,{href:"#benefits-to-ord-consumers",children:"ORD Consumer"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Consumers benefit from having a shared, aligned standard and central aggregators to get the information from."}),"\n",(0,s.jsx)(t.li,{children:"If an application / service already adopted ORD and information is missing, the Consumer could extend the ORD protocol to add missing information.\nSince the protocol and integrations are already there, the implementation effort is greatly reduced for all parties."}),"\n",(0,s.jsxs)(t.li,{children:["See ",(0,s.jsx)(t.a,{href:"#benefits-to-ord-consumers",children:"Benefits to ORD Consumers"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"benefits-to-ord-providers",children:"Benefits to ORD Providers"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"ORD Provider"})," is the term we use for applications and services that provide their metadata to other interested parties via ORD."]}),"\n",(0,s.jsx)(t.h4,{id:"reduce-total-cost-of-ownership-for-metadata-integration",children:"Reduce Total Cost of Ownership for Metadata Integration"}),"\n",(0,s.jsx)(t.p,{children:"At SAP we have many applications and services that rely on machine-readable metadata that describe a system's capabilities and resources (like APIs and Events).\nWithout ORD, describing and exchanging this metadata implies multiple integrations, leading to higher costs and complexities for all involved parties.\nThe goal of ORD is to avoid those duplicated efforts."}),"\n",(0,s.jsxs)(t.p,{children:["With ORD, we provide ",(0,s.jsx)(t.strong,{children:"one aligned standard"})," that serves many use cases and metadata consumers.\nInstead of implementing integrations and service provider interfaces (SPI) for each interested application, the adopter only needs to implement one interoperability standard.\nThis reduces the number of APIs and integrations that need to be developed and maintained and therefore reduces our overall TCO for metadata publishing and integration."]}),"\n",(0,s.jsx)(t.p,{children:"ORD can be used to describe two different application perspectives:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"static catalog"}),' ("yellow-pages") view for publishing to ',(0,s.jsx)(t.a,{href:"https://api.sap.com/",children:"SAP Business Accelerator Hub"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"as-is"})," view that describe the actual, customer specific runtime view (reflecting customizations and extensions)."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Reduce ORD Provider TCO",src:n(6050).A+"",width:"1229",height:"515"})}),"\n",(0,s.jsx)(t.p,{children:"Without a single, aligned standard many of those use cases would need a special, proprietary integration.\nThrough ORD, we can reduce the integration complexity to O(1) instead of O(n) for each affected application / use case."}),"\n",(0,s.jsx)(t.h4,{id:"profit-from-having-less-integrations",children:"Profit from having less integrations"}),"\n",(0,s.jsx)(t.p,{children:"With ORD, we only have a limited set of ORD Aggregators (UCL and SAP Business Accelerator Hub) where the information needs to be published to."}),"\n",(0,s.jsx)(t.p,{children:"All applications and services shall get the information from the ORD Aggregators."}),"\n",(0,s.jsx)(t.p,{children:"This means less point-to-point integrations directly to the ORD consumers."}),"\n",(0,s.jsx)(t.h4,{id:"profit-from-ord-consumer-use-cases",children:"Profit from ORD Consumer Use Cases"}),"\n",(0,s.jsxs)(t.p,{children:["ORD Providers can automatically benefit of the use cases that the various ",(0,s.jsx)(t.a,{href:"#benefits-to-ord-consumers",children:"ORD Consumers"})," bring to our customers."]}),"\n",(0,s.jsx)(t.p,{children:'ORD Consumers usually solve "shared problems" that many SAP applications have and provide a more consistent and integrated experience for the end customers.\nTo phrase it differently, some ORD Consumers solve problems and save efforts that the ORD Provider otherwise would need to implement on their own.'}),"\n",(0,s.jsx)(t.p,{children:"To understand how you can profit from this, have a look at the ORD Adoption Status - Consumers."}),"\n",(0,s.jsx)(t.h3,{id:"benefits-to-ord-consumers",children:"Benefits to ORD Consumers"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"ORD Consumer"})," is the term we use for applications and services that make use of the metadata that ",(0,s.jsx)(t.a,{href:"#benefits-to-ord-providers",children:"ORD Providers"})," make available."]}),"\n",(0,s.jsx)(t.h4,{id:"reduce-total-cost-of-ownership-for-metadata-integration-1",children:"Reduce Total Cost of Ownership for Metadata Integration"}),"\n",(0,s.jsxs)(t.p,{children:["ORD is an ",(0,s.jsx)(t.strong,{children:"aligned interoperability standard"})," that serves as a common denominator of shared understanding.\nWhile each LoB may handle their internal metadata differently, with ORD we standardized how to express this for all external consumers. Therefore, a metadata consumer does not need to support the various different application specific standards, but can rely on one shared standard."]}),"\n",(0,s.jsx)(t.p,{children:"ORD also comes with the concept of an ORD Aggregator, which is a central service that aggregates and exposes the ORD information.\nThis saves metadata consumers from point-to-point integrations with each metadata provider they are interested in."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Reduce ORD Consumer TCO",src:n(1685).A+"",width:"1181",height:"499"})}),"\n",(0,s.jsx)(t.p,{children:"Similar to the complexity on the provider's side, we can again reduce the integration complexity to O(1) instead of O(n) for each ORD provider from which information needs to be retrieved."}),"\n",(0,s.jsx)(t.h4,{id:"benefit-from-already-established-standard-and-integrations",children:"Benefit from already established standard and integrations"}),"\n",(0,s.jsx)(t.p,{children:"If a consumer needs information that we don't have today, they can consider aligning it through the ORD standard. With this, they don't need to invent their own Service Provider Interface and convince all of their information providers to create new integrations to them."}),"\n",(0,s.jsxs)(t.p,{children:["ORD even offers the concept of ",(0,s.jsx)(t.a,{href:"https://sap.sharepoint.com/:w:/r/teams/CPAIntegration/_layouts/15/Doc.aspx?sourcedoc=%7B9AFD0C50-1234-43E9-9E04-C881FAA3614B%7D&file=CPA_APIs_and-Events_ADR_ORD_Generic_Capabilities.docx&wdOrigin=OFFICECOM-WEB.MAIN.SEARCH&ct=1661765177310&action=default&mobileredirect=true",children:"Generic Capabilities"})," (agreed upon, but not yet rolled out) to further reduce the effort to introduce new capability / metadata discovery scenarios with less efforts for all parties involved."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1685:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ord-motivation-reduce-consumer-tco-752f4c8a884724b7de29d4134d9c868d.svg"},6050:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ord-motivation-reduce-provider-tco-79422088bc5431b9b6307e214a7c41c9.svg"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);