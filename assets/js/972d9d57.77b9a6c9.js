"use strict";(self.webpackChunk_sap_open_resource_discovery=self.webpackChunk_sap_open_resource_discovery||[]).push([[66],{984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(4848),a=n(8453);const i={toc_max_heading_level:3},r="ORD Introduction",o={id:"introduction",title:"ORD Introduction",description:"\ud83c\udfa6 There is also an ORD Introduction video, based on this article.",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/introduction",permalink:"/open-resource-discovery/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/open-resource-discovery/tree/main/docs/introduction.mdx",tags:[],version:"current",frontMatter:{toc_max_heading_level:3}},c={},d=[{value:"Why ORD?",id:"why-ord",level:2},{value:"Metadata Discovery Protocol",id:"metadata-discovery-protocol",level:2},{value:"Data Model Overview",id:"data-model-overview",level:2},{value:"ORD Architecture at SAP",id:"ord-architecture-at-sap",level:2},{value:"ORD by Examples",id:"ord-by-examples",level:2},{value:"ORD Reference Application",id:"ord-reference-application",level:3},{value:"SAP Business Accelerator Hub",id:"sap-business-accelerator-hub",level:3},{value:"Unified Customer Landscape",id:"unified-customer-landscape",level:3},{value:"ORD in More Detail",id:"ord-in-more-detail",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"ord-introduction",children:"ORD Introduction"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\ud83c\udfa6 There is also an ",(0,s.jsx)(t.a,{href:"/open-resource-discovery/details/videos/introduction",children:"ORD Introduction video"}),", based on this article."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"why-ord",children:"Why ORD?"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Need for consistent ",(0,s.jsx)(t.strong,{children:"technical documentation how applications and services can be integrated with and developed against"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Companies and their customers need to ",(0,s.jsx)(t.strong,{children:"understand actual system landscapes, reflecting customizations and extensions"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Need to provide ",(0,s.jsx)(t.strong,{children:"more automation and a better development experience"})," for integrating SAP products with each other, the BTP SAP ecosystem and side-by-side extensions."]}),"\n",(0,s.jsxs)(t.li,{children:["Many AI and Analytics use-cases ",(0,s.jsx)(t.strong,{children:"rely on consistent and standardized metadata"})," to deliver value or scale well."]}),"\n"]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Metadata integration without alignment"}),(0,s.jsx)(t.p,{children:"Without alignment on metadata standards and how they are discovered, all metadata integration between providers and consumers happens on a point-to-point basis.\nThis not only means a lot of integrations, but also that the integrations may need to be implemented differently."}),(0,s.jsx)(t.p,{children:"This is a similar situation when there was no standardization on charging cable adapters.\nIt was difficult or sometimes impossible to connect various devices and led to high efforts and waste for everyone."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ORD Provider Overview",src:n(741).A+"",title:"Metadata Integration without alignment",width:"4106",height:"1690"})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"Metadata integration with ORD alignment"}),(0,s.jsxs)(t.p,{children:["We can tackle this problem by introducing two concepts: First, use ",(0,s.jsx)(t.strong,{children:"aligned standards for metadata description and discovery"}),".\nSecond, use a ",(0,s.jsx)(t.strong,{children:"central aggregator"}),", which can read metadata from all providers and can serve the information to all consumers."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ORD Provider Overview",src:n(7299).A+"",title:"Metadata Integration with ORD",width:"4137",height:"1714"})})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u2139 Read the ",(0,s.jsx)(t.a,{href:"/open-resource-discovery/details/articles/why-ord",children:"Why ORD?"})," article for more background."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"metadata-discovery-protocol",children:"Metadata Discovery Protocol"}),"\n",(0,s.jsxs)(t.p,{children:["Open Resource Discovery (ORD) is a protocol that ",(0,s.jsx)(t.strong,{children:"allows applications and services to self-describe their exposed resources and capabilities"}),".\nIt can be used to describe static documentation, but can also reflect tenant specific configuration and extensions (at run-time)."]}),"\n",(0,s.jsxs)(t.p,{children:["By adopting ORD, an application will implement a single-entry point (",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Service_provider_interface",children:"Service Provider Interface"}),") that can be used to discover and crawl the relevant information / metadata."]}),"\n",(0,s.jsx)("div",{style:{"text-align":"center"},children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ORD Provider Overview",src:n(5333).A+"",title:"ORD Provider Overview",width:"3428",height:"1369"})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\u2139 Please note that ORD does not replace already established standards to describe resources in detail.\nFor example, plain REST APIs could be described via ",(0,s.jsx)(t.a,{href:"https://www.openapis.org/",children:"OpenAPI"}),".\nORD will enable the discovery of this fact and can pass along the relevant detailed metadata documents."]}),"\n"]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"More Detail: How ORD helps with Self-Description"}),(0,s.jsx)(t.p,{children:"In the picture above, the center is an application or service describing itself.\nThey typically have multiple resources and capabilities that are outward facing and are of interest for external consumers."}),(0,s.jsxs)(t.p,{children:["Typically, ORD is used to describe ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#api-resource",children:"APIs"})," and ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#event-resource",children:"Events"}),", but it also supports higher-level concepts like ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#entity-type",children:"Entity Types"})," (Business Objects) and ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#data-products",children:"Data Products"})," (beta).\nWith ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#integration-dependency",children:"Integration Dependencies"})," the (potential) use of external resources can be stated, too.\nIn case that the standardized concepts or attributes are not sufficient, there are extensibility attributes and ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#capability",children:"Capabilities"}),"."]}),(0,s.jsx)(t.p,{children:"ORD standardizes how those information can be automatically discovered and aggregated.\nPlease note that ORD is no replacement for detailed resource definition standards like OpenAPI.\nInstead, it describes a bigger context with shared, high-level information, taxonomy and relations between the described resources.\nIt also standardizes the publishing and discovery related interfaces and behaviors, to ensure a high degree of automation that allows us to keep in sync with reality.\nThe same ORD implementation can be used to both describe the tenant-specific customer landscape and the static reference landscape view to an API Catalog."}),(0,s.jsxs)(t.p,{children:["When ORD information get combined by a central ORD aggregator and integrated with other, central metadata sources, we can realize a connected (customer) ",(0,s.jsx)(t.strong,{children:"system landscape metadata view"}),".\nThis gives both SAP and our customers better introspection about the actual system landscape. This enables or improves many meta-data driven use-cases (like low-code/no-code)."]}),(0,s.jsx)(t.p,{children:"The specification provides a shared contract and alignment point for the ecosystem, spanning various consumers and providers. This allows to have one aligned standard instead of a wild growth of specific point-to-point alignments and integrations."})]}),"\n",(0,s.jsx)(t.h2,{id:"data-model-overview",children:"Data Model Overview"}),"\n",(0,s.jsxs)(t.p,{children:["The most typical resources to describe are ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#api-resource",children:"APIs"})," and ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#event-resource",children:"Events"}),".\nBut ORD can also be used to describe higher-level concepts like ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#entity-type",children:"Entity Types"})," (Business Objects) and ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#data-products",children:"Data Products"}),".\nWith ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#integration-dependency",children:"Integration Dependencies"})," it is possible to also describe how external resources are or can be be used.\nIn case that the standardized concepts or attributes are not sufficient, there are extensibility attributes and ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#capability",children:"Capabilities"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The mentioned concepts can be grouped by different concerns via ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#package",children:"Packages"})," and ",(0,s.jsx)(t.a,{href:"./spec-v1/interfaces/document#consumption-bundle",children:"Consumption Bundles"})," and various taxonomy attributes.\nAdditionally, relations between the concepts can be expressed (e.g., which APIs and Events share the same Entity Types?)."]}),"\n",(0,s.jsx)("div",{style:{"text-align":"center"},children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ORD Data Model Overview",src:n(4270).A+"",title:"ORD Data Model Overview"})})}),"\n",(0,s.jsx)(t.h2,{id:"ord-architecture-at-sap",children:"ORD Architecture at SAP"}),"\n",(0,s.jsx)(t.p,{children:"Below is a simplified overview of how ORD has been adopted at SAP:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ORD Provider Overview",src:n(5336).A+"",title:"SAP ORD Architecture Overview",width:"2750",height:"1619"})}),"\n",(0,s.jsx)(t.p,{children:"We need to make a distinction between describing and understanding:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Customer System Landscape"}),': Describes a real system landscape as it actually exists, e.g. for a customer ("as-is view").',"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["SAP uses the ",(0,s.jsx)(t.a,{href:"#unified-customer-landscape",children:"Unified Customer Landscape"})," (UCL) as central aggregator, that will discover and combine ORD information and re-expose them as a (customer specific) system landscape metadata view."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Reference Landscape"}),': Describes a static, generic catalog of what is offered ("could-be view").',"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["SAP publishes static documentation to the ",(0,s.jsx)(t.a,{href:"#sap-business-accelerator-hub",children:"SAP Business Accelerator Hub"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"ORD Consumers"})," have now the convenience to get a holistic, pre-aggregated and connected picture and can use the aggregators for documentation and fetching the metadata via ORD Service APIs."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"ORD Providers"})," can now use the same protocol to publish the metadata to both perspectives and aggregators that has been aligned to work for various ORD Consumer use cases."]}),"\n",(0,s.jsx)(t.h2,{id:"ord-by-examples",children:"ORD by Examples"}),"\n",(0,s.jsx)(t.h3,{id:"ord-reference-application",children:"ORD Reference Application"}),"\n",(0,s.jsxs)(t.p,{children:["Have a look at the ",(0,s.jsx)(t.a,{href:"https://ord-reference-application.cfapps.sap.hana.ondemand.com/",children:"ORD Reference Application"})," to see a live example."]}),"\n",(0,s.jsx)("iframe",{src:"https://ord-reference-application.cfapps.sap.hana.ondemand.com/",width:"100%",height:"500px"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"More Explanation on the ORD Reference Application"}),(0,s.jsx)(t.p,{children:"The ORD Reference Application shows a simple application, which offers a few APIs and Events.\nSome of the APIs are public and are of interest for outside consumers to learn about."}),(0,s.jsx)(t.p,{children:"The flow to crawl the application for relevant metadata is the following:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Execute an HTTP GET request on the ",(0,s.jsx)(t.a,{href:"https://ord-reference-application.cfapps.sap.hana.ondemand.com/.well-known/open-resource-discovery",children:".well-known/open-resource-discovery"})," entry point.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["With a successful response we now know that ORD is supported, where to find the actual information (",(0,s.jsx)(t.code,{children:"documents.url"}),") and how to access them (",(0,s.jsx)(t.code,{children:"documents.accessStrategies"}),")"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Execute an HTTP GET request on the ",(0,s.jsx)(t.a,{href:"https://ord-reference-application.cfapps.sap.hana.ondemand.com/open-resource-discovery/v1/documents/1",children:"first ORD document"}),", we discovered from the previous step.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Here we now find the actual information, like the APIs and Events the application exposes, but also taxonomy like information like what product it is or how the information are structured into packages."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["For a particular API, we find out that it's a plain REST API, described with OpenAPI v3 in JSON format. We also learn how and where to download its ",(0,s.jsx)(t.a,{href:"https://ord-reference-application.cfapps.sap.hana.ondemand.com/astronomy/v1/openapi/oas3.json",children:"OpenAPI resource definition"}),"."]}),"\n"]})]}),"\n",(0,s.jsx)(t.h3,{id:"sap-business-accelerator-hub",children:"SAP Business Accelerator Hub"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://api.sap.com/",children:"SAP Business Accelerator Hub"})," is an ORD aggregator that uses static information to present generic documentation.\nThis perspective is very important, as it describes technical aspects of products without the need to first own and provision the system."]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"More UI examples with annotations"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SAP Business Accelerator Hub Example 1",src:n(8345).A+"",title:"SAP Business Accelerator Hub Example 1",width:"2293",height:"1078"})}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SAP Business Accelerator Hub Example 2",src:n(3202).A+"",title:"SAP Business Accelerator Hub Example 2",width:"1814",height:"902"})})]}),"\n",(0,s.jsx)(t.h3,{id:"unified-customer-landscape",children:"Unified Customer Landscape"}),"\n",(0,s.jsxs)(t.p,{children:["Unified Customer Landscape (UCL) is a set of technical services that also offers the system landscape metadata (incl. ORD information) to other applications and services.\nWhile the ",(0,s.jsx)(t.a,{href:"#sap-business-accelerator-hub",children:"SAP Business Accelerator Hub"})," focuses on the static perspective of a product, the UCL can provide the actual system tenant metadata - including possible customer extensions and customizations."]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"More UI examples with annotations and more details on UCL"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"BTP Cockpit System Landscape via UCL",src:n(7773).A+"",title:"BTP Cockpit System Landscape via UCL",width:"2265",height:"1290"})}),(0,s.jsxs)(t.p,{children:["The UCL offers information about the customer system landscape and managing integrations, as can be seen in the ",(0,s.jsx)(t.a,{href:"https://www.sap.com/products/technology-platform.html",children:"SAP BTP"})," Cockpit in the System Landscape UI.\nHere customers can see their own systems and manage them e.g. grouping them via formations that enable trust and automatic integration between them for specific scenarios.\nSystems that are in the same formation usually need to get information about each other, some of which may be provided via ORD."]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The UCL automatically aggregates and consolidates all the information about the customer\u2019s IT landscape into one unified machine-readable extensible graph-like landscape model.\nThis model includes information about the customers SAP, Partner 3rd party and on-premise application (service) tenants as well as metadata about their API, event and connectivity-related requirements, existing integrations and their state.\nThis includes amongst other things, also the ORD metadata of the systems."}),"\n",(0,s.jsxs)(t.li,{children:["The automatically aggregated landscape model is then ",(0,s.jsx)(t.em,{children:"re-exposed for discovery and introspection"})," to various SAP and Partner UIs and tools that customers use to oversee, manage and monitor their IT landscape.\nThe metadata is also used to simplify development, e.g. for side-by-side extensions and Low-Code/No-Code tools.\nThis is achieved by offering industry-standard GraphQL and OData APIs with rich querying capabilities."]}),"\n",(0,s.jsx)(t.li,{children:'Provides the so called "managed by SAP" experience in the domain of integration lifecycle management** and therefore allow customers to focus purely on taking business decisions and not doing or caring about the actual technical wiring and integration setup underneath. This is achieved by providing active automation over the integrations based on already available metadata, specified by the Application Providers about what integrations are required and how they can be established. Leveraging the automated integration lifecycle management makes the life of both Customers and Application Providers much easier, as the day 2 operations, such as credentials rotation also happen automatically.'}),"\n"]}),(0,s.jsxs)(t.p,{children:["In the UI screenshot, the most notable concept is the ",(0,s.jsx)(t.a,{href:"/open-resource-discovery/#def-system-instance",children:"ORD System Instance"}),", which is usually a tenant.\nIf ORD information are provided, the detail view can show them and they will be made available to other systems in the same formation or account context."]})]}),"\n",(0,s.jsx)(t.h2,{id:"ord-in-more-detail",children:"ORD in More Detail"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"ORD Information"}),(0,s.jsxs)(t.p,{children:["ORD as a protocol standardizes both the ",(0,s.jsx)(t.strong,{children:"information model"})," and the ",(0,s.jsx)(t.a,{href:"#ord-behaviors",children:"behavior"})," how the information are exchanged."]}),(0,s.jsx)(t.p,{children:"Typical questions that are addressed on ORD level are:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Get an complete overview of the resources and capabilities"}),"\n",(0,s.jsx)(t.li,{children:"What type of resource something is and how to access its metadata or the resource itself"}),"\n",(0,s.jsx)(t.li,{children:"Where to find more information on the resource, e.g. links to machine-readable definitions (e.g. OpenAPI)"}),"\n",(0,s.jsx)(t.li,{children:"Get overview documentation and find links to external human readable documentation"}),"\n",(0,s.jsx)(t.li,{children:"How the resources fit into a global taxonomy"}),"\n",(0,s.jsx)(t.li,{children:"How resources relate to each other (e.g. for navigation)"}),"\n"]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ORD Information Overview",src:n(8814).A+"",title:"ORD Information Overview",width:"3180",height:"1390"})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"ORD Behavior"}),(0,s.jsxs)(t.p,{children:["ORD can enable fully automated metadata discovery and exchange (after initial onboarding).\nby also standardizing how the information are discovered, transported and accessed. See ",(0,s.jsx)(t.a,{href:"/open-resource-discovery/spec-v1/#ord-transport-modes",children:"ORD Transport Modes"})," for an example."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ORD Behavior Overview",src:n(5234).A+"",title:"ORD Behavior Overview",width:"3941",height:"1370"})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"ORD Roles Overview"}),(0,s.jsx)(t.p,{children:"In ORD there are three roles that systems can have.\nDepending on the role, only some parts of the specification are relevant and need to be implemented.\nOne system can also have more than one role, e.g. an ORD Provider can also be an ORD Consumer."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ORD Roles Overview",src:n(465).A+"",title:"ORD Roles Overview",width:"3979",height:"1214"})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"ORD Provider Role"}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/open-resource-discovery/spec-v1/#ord-provider",children:"ORD Provider"})," is a system that describes itself via ORD, so it's metadata becomes available to interested ORD Consumers."]}),(0,s.jsx)(t.p,{children:"They have to implement one of the ORD transport modes (currently only a pull-based API is supported), so the ORD information and related metadata definitions can be discovered and fetched."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ORD Provider Role",src:n(3870).A+"",title:"ORD Provider Role",width:"3144",height:"972"})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"ORD Aggregator Role"}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/open-resource-discovery/spec-v1/#ord-aggregator",children:"ORD Aggregator"})," has the job to simplify the life of ORD Consumers.\nIt will discover and connect to many ORD Providers and fetch their metadata.\nIt may also integrate information from other (usually central) repositories.\nSince it builds an aggregated overview, here the decentralized information from many sources can come together and form a connected graph of metadata knowledge."]}),(0,s.jsxs)(t.p,{children:["It's most notable feature is that it offers an ",(0,s.jsx)(t.a,{href:"/open-resource-discovery/spec-v1/#ord-service",children:"ORD Service"}),", which offers a high-quality API to ORD consumers.\nThe information offered represent an aggregated, connected and consolidated metadata overview."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ORD Aggregator Role",src:n(9574).A+"",title:"ORD Aggregator Role",width:"3472",height:"810"})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:"ORD Consumer Role"}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/open-resource-discovery/spec-v1/#ord-consumer",children:"ORD Consumer"})," is interested in learning about the resources and capabilities of other systems."]}),(0,s.jsxs)(t.p,{children:["An ORD consumer should get their information from an ORD Aggregator, where a complete overview is offered with a more consumer friendly ",(0,s.jsx)(t.a,{href:"/open-resource-discovery/spec-v1/#ord-service",children:"ORD Service"})," API"]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ORD Consumer Role",src:n(2369).A+"",title:"ORD Consumer Role",width:"2740",height:"1181"})})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Don't forget to have a look at the ",(0,s.jsx)(t.a,{href:"./details/articles",children:"Articles"})," \ud83d\udcd6 and ",(0,s.jsx)(t.a,{href:"./details/videos",children:"Videos"})," \ud83c\udfa6 that explain ORD related topics in more detail."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},7299:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/aligned-standards-01994613a81547c71ec94743069ba361.svg"},7773:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/btp-cockpit-ucl-example-83414adba58c65aee952154b6ed7b928.png"},8345:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/business-accelerator-hub-example1-467ed1dadd8b8770d60373726173d231.png"},3202:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/business-accelerator-hub-example2-4316ef70019af908cdb0644c635eba42.png"},741:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/no-aligned-standards-2f04799e249a888b146dd3a1442dfa64.svg"},5234:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ord-behavior-overview-09abfa41a19d1ad11280eeb0367ef8a7.svg"},4270:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ord-high-level-data-model.drawio-e32e8af7e9f81d4705b5ee9de4978a42.svg"},8814:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ord-information-overview-d40620b5784095400b48e8ddb0680d11.svg"},5333:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ord-provider-overview-71f65b143d7a8fbbfc42ae708f967972.svg"},9574:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ord-role-aggregator-51fdc26fd4bab05102cd8a55f1c113a2.svg"},2369:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ord-role-consumer-3289d50ebc7766b03c64edcce4d92429.svg"},3870:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ord-role-provider-07f8e59c8fff920051278d0c2ad23dd7.svg"},465:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ord-roles-overview-0feac4bc3245853ebfca99ec2b4b7ab5.svg"},5336:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ord-sap-architecture-overview-4e0b6e3a327d6825835e8d338effeae8.svg"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);