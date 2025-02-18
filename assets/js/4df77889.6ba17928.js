"use strict";(self.webpackChunk_sap_open_resource_discovery=self.webpackChunk_sap_open_resource_discovery||[]).push([[7510],{1088:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/group-concept-overview.drawio-5cf338e43b82753af85e622b045ea8fb.svg"},1956:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/entity-type-relations.drawio-0e02bb795a0dbdb59d473f91ef6ee963.svg"},4276:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"details/articles/grouping-and-bundling","title":"Grouping and Bundling","description":"How to group, bundle and package ORD content right.","source":"@site/docs/details/articles/grouping-and-bundling.md","sourceDirName":"details/articles","slug":"/details/articles/grouping-and-bundling","permalink":"/open-resource-discovery/details/articles/grouping-and-bundling","draft":false,"unlisted":false,"editUrl":"https://github.com/open-resource-discovery/specification/tree/main/docs/details/articles/grouping-and-bundling.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"description":"How to group, bundle and package ORD content right.","title":"Grouping and Bundling"},"sidebar":"detailsSidebar","previous":{"title":"How To Adopt ORD (Provider)","permalink":"/open-resource-discovery/details/articles/adopt-ord-as-provider"},"next":{"title":"Data Product","permalink":"/open-resource-discovery/details/articles/data-product"}}');var a=s(4848),i=s(8453);const r={sidebar_position:3,description:"How to group, bundle and package ORD content right.",title:"Grouping and Bundling"},o="Grouping and Bundling",c={},l=[{value:"Quick Summary",id:"quick-summary",level:2},{value:"Predefined Grouping Concepts",id:"predefined-grouping-concepts",level:3},{value:"Generic Grouping Concepts",id:"generic-grouping-concepts",level:3},{value:"Namespaces",id:"namespaces",level:3},{value:"ORD Documents",id:"ord-documents",level:3},{value:"Best Practices and Recommendations",id:"best-practices-and-recommendations",level:2},{value:"Detailed Explanations",id:"detailed-explanations",level:2},{value:"Package",id:"package",level:3},{value:"Consumption Bundle",id:"consumption-bundle",level:3},{value:"Entity Type",id:"entity-type",level:3},{value:"Tags",id:"tags",level:3},{value:"Labels",id:"labels",level:3},{value:"Groups",id:"groups",level:3},{value:"Examples",id:"examples",level:3},{value:"Bundling CAP APIs by CSN Service:",id:"bundling-cap-apis-by-csn-service",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"grouping-and-bundling",children:"Grouping and Bundling"})}),"\n",(0,a.jsx)(n.h2,{id:"quick-summary",children:"Quick Summary"}),"\n",(0,a.jsx)(n.p,{children:"ORD offers multiple ways how resources are grouped or bundled together.\nSome of them have a specific indented usage, while others offer the application providers complete freedom."}),"\n",(0,a.jsx)(n.h3,{id:"predefined-grouping-concepts",children:"Predefined Grouping Concepts"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.a,{href:"#package",children:(0,a.jsx)(n.strong,{children:"Package"})})," is the only mandatory bundling concept.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Every ORD Resource MUST be assigned to exactly one Package."}),"\n",(0,a.jsxs)(n.li,{children:["The concerns of a Package are:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"What is published together"}),"\n",(0,a.jsxs)(n.li,{children:["How the published information are presented on a catalog, e.g. in SAPs case the ",(0,a.jsx)(n.a,{href:"https://api.sap.com/",children:"Business Accelerator Hub"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.a,{href:"#consumption-bundle",children:(0,a.jsx)(n.strong,{children:"Consumption Bundle"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"API or Event Resources MAY be assigned to 0..n Consumption Bundles"}),"\n",(0,a.jsx)(n.li,{children:"The concern is technical: What resources can be consumed together with the same set of credentials and auth mechanism"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["The ",(0,a.jsx)(n.a,{href:"#entity-type",children:(0,a.jsx)(n.strong,{children:"Entity Type"})})," may not be perceived as a grouping mechanism, but in practice it is very useful to group APIs, Events and other resources by a shared Business Object / Business Term.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"API Resources, Event Resources, Capabilities, Data Products and other Entity Types can be assigned to 0..n Entity Types."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"generic-grouping-concepts",children:"Generic Grouping Concepts"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#tags",children:(0,a.jsx)(n.strong,{children:"Tags"})})," (via the ",(0,a.jsx)(n.code,{children:"tags"})," array property) can be used to freely tag all kinds of ORD resources in ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Folksonomy",children:"Folksonomy"})," style."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#labels",children:(0,a.jsx)(n.strong,{children:"Labels"})}),' are similar to tags, but they allow to also define the "key" and are mostly useful for simplifying querying / selecting resources on an API level.']}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#groups",children:(0,a.jsx)(n.strong,{children:"Groups"})})," allow to define custom ",(0,a.jsx)(n.strong,{children:"Group Types"})," that can be published via ORD as well.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This concept is very flexible, but still well governed and machine-readable."}),"\n",(0,a.jsx)(n.li,{children:"It works similar to Packages or Consumption Bundles, but allows the ORD Provider to define their own group categories and their semantics."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"namespaces",children:"Namespaces"}),"\n",(0,a.jsxs)(n.p,{children:["The ORD IDs contain a ",(0,a.jsx)(n.a,{href:"/open-resource-discovery/spec-v1/#namespaces",children:"namespace"}),", which MAY include optional ",(0,a.jsx)(n.a,{href:"/open-resource-discovery/spec-v1/#sub-context-namespace",children:"sub-context namespaces"}),".\nThey act like a ",(0,a.jsx)(n.a,{href:"https://martinfowler.com/bliki/BoundedContext.html",children:"DDD Bounded Context"})," and allow the same ",(0,a.jsx)(n.code,{children:"<resourceName>"})," to appear in multiple sub-namespaces."]}),"\n",(0,a.jsxs)(n.p,{children:["Please be aware that changing the sub-context namespace is an incompatible change, as the ORD IDs change.\nTherefore it's NOT RECOMMENDED to use sub-context namespaces just for the purpose of grouping (use ",(0,a.jsx)(n.a,{href:"#groups",children:"groups"})," instead).\nThey should only be used if they are expected to be stable and are necessary to ensure the overall ORD ID is conflict free.\nA good reason is to ensure that sub-teams can work independently on content and have an isolated, conflict free sub-namespace."]}),"\n",(0,a.jsx)(n.h3,{id:"ord-documents",children:"ORD Documents"}),"\n",(0,a.jsxs)(n.p,{children:["ORD Documents are only used to transport ORD information to the aggregator and have no impact on grouping and bundling.\nHowever, there are still some ",(0,a.jsx)(n.a,{href:"/open-resource-discovery/spec-v1/#considerations-on-the-granularity-of-ord-documents",children:"Considerations on the granularity of ORD Documents"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"best-practices-and-recommendations",children:"Best Practices and Recommendations"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Avoid using ",(0,a.jsx)(n.a,{href:"#namespaces",children:"namespaces"})," for the purpose of grouping, if possible."]}),"\n",(0,a.jsxs)(n.li,{children:["To express end-user facing taxonomy, use ",(0,a.jsx)(n.a,{href:"#groups",children:"groups"})," and not tags or labels as they have no human-readable labels and are meant more for machine"]}),"\n",(0,a.jsxs)(n.li,{children:["Packages are less flexible for grouping than ",(0,a.jsx)(n.a,{href:"#groups",children:"groups"}),", so the latter are recommended and can be complementary.\nUse ",(0,a.jsx)(n.a,{href:"#package",children:"packages"})," to group ORD resources published together and making use of the information reuse."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"detailed-explanations",children:"Detailed Explanations"}),"\n",(0,a.jsx)(n.h3,{id:"package",children:"Package"}),"\n",(0,a.jsxs)(n.p,{children:["Every ORD Resource MUST be assigned to exactly one ",(0,a.jsx)(n.a,{href:"../../spec-v1/interfaces/document#package",children:(0,a.jsx)(n.strong,{children:"Package"})}),".\nThe Package is primarily motivated by publishing and API catalog presentation concerns, including human-readable documentation and presentation.\nIt can also express information about the resource providers, terms of use of the APIs, pricing for the usage of the packages, APIs, Events, etc."]}),"\n",(0,a.jsx)(n.p,{children:"The granularity of Packages is driven by all of the following concerns:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The resources are created by the same vendor or customer, exposed by the same described system."}),"\n",(0,a.jsx)(n.li,{children:"The resources are published together. They share the same publishing ownership."}),"\n",(0,a.jsxs)(n.li,{children:["The resources share certain aspects/taxonomy that is inherited down to them (e.g. ",(0,a.jsx)(n.code,{children:"vendor"}),")."]}),"\n",(0,a.jsx)(n.li,{children:"If applicable: The resources are meant to be used by only a particular target platform / software."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"All resources that are not created by the described systems vendor MUST be put into separate packages.\nThis is the case, when:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The resources are created by the customer (user) of the system.\nAll such resources MUST be assigned to a dedicated Package, where ",(0,a.jsx)(n.code,{children:"vendor"})," is set to ",(0,a.jsx)(n.code,{children:"customer:vendor:Customer:"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["The resources are created by partners or third parties.\nAll such resources MUST be assigned to a dedicated Package for each partner / third party.\nThe ",(0,a.jsx)(n.code,{children:"vendor"})," MUST be set to a registered, matching Vendor ID (implies also a registered namespace)."]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2139 At SAP, the ",(0,a.jsx)(n.a,{href:"https://api.sap.com/",children:"Business Accelerator Hub"})," defines how the Package concept is to be used to fit its publishing flow and Catalog UI/UX.\nSee ",(0,a.jsxs)(n.a,{href:"/open-resource-discovery/spec-extensions/policy-levels/sap-core-v1",children:["sap:core",":v1"," policy level"]})," for additional SAP specific constraints."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"consumption-bundle",children:"Consumption Bundle"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"../../spec-v1/interfaces/document#consumption-bundle",children:(0,a.jsx)(n.strong,{children:"Consumption Bundle"})})," groups APIs and Events together that can be consumed with the credentials and auth mechanism.\nIdeally it also includes instructions and details how to request access and credentials for resources."]}),"\n",(0,a.jsx)(n.p,{children:"API and Event resources MAY be assigned to 0..n Consumption Bundles.\nConsumption Bundles are only applicable to APIs and Events where the described application itself manages the access and credentials."}),"\n",(0,a.jsx)(n.p,{children:'All resources that are part of the same consumption bundle MUST theoretically be accessible through the same set of credentials.\nIn practice however, there are usually more fine-grained access control permissions like RBAC that further restrict access based on user / client identity.\nThose are currently not described in ORD and the Consumption Bundle should therefore describe the "maximum possible scope" that is theoretically possible.'}),"\n",(0,a.jsxs)(n.p,{children:["Within consumption bundle, we anticipate to provide more machine-readable information that help to understand and automate the necessary steps to get access.\nE.g. how credentials can be programmatically obtained could be described by attached ",(0,a.jsx)(n.code,{children:"credentialExchangeStrategies"}),"."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:'It is important to understand that the Consumption Bundle is conceptually like a Template or HowTo guide. It only provides information how access / credentials / clients can be obtained for API usage, not what is already available. The latter would be the result of an "instantiation" of a Consumption Bundle, or something that is already setup and managed by the application itself.'}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\ud83d\udea7 Please note that the Consumption Bundle concept is still in a rather basic form and may be extended in the future."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"entity-type",children:"Entity Type"}),"\n",(0,a.jsxs)(n.p,{children:["An ",(0,a.jsx)(n.a,{href:"../../spec-v1/interfaces/document#entity-type",children:(0,a.jsx)(n.strong,{children:"Entity Type"})})," describes a underlying conceptual model (e.g. a business object / domain model).\nIn special cases, the entity type could just be a term, describing the semantics but without an actual model behind it."]}),"\n",(0,a.jsx)(n.p,{children:'They represent an "internal" concept and are part of the ORD taxonomy. They should not leak internal implementation details, but can be used to create relations to and between external resources and capabilities and relate them to "business semantics".'}),"\n",(0,a.jsx)(n.p,{children:"Relationships to entity types can be assigned to API & Event resources, data products and other entity types:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Entity Type Relations",src:s(1956).A+""})}),"\n",(0,a.jsxs)(n.p,{children:['The case of "underlying conceptual models", they relate to internal application models that usually have structure (properties, behavior).\nIdeally (see DDD), the underlying conceptual models represent the ',(0,a.jsx)(n.a,{href:"https://martinfowler.com/bliki/UbiquitousLanguage.html",children:"ubiquitous language"})," and have consistent semantics within the domain / bounded context. In other contexts, they might be called conceptual or logical (data) models or just internal models.\nSuch models may have a lifecycle, so the ORD ID major version may be of relevance."]}),"\n",(0,a.jsxs)(n.p,{children:["In case the entity type represents a term, they can be used to describe the domain objects like a glossary of nouns that are consistently used.\nSuch entity types usually have no lifecycle, and the ORD ID will have to set ",(0,a.jsx)(n.code,{children:"v1"})," as major version."]}),"\n",(0,a.jsx)(n.p,{children:"The same entity type can be related to one or multiple API and events resources, data products or other entity types.\nThe entity type does NOT represent a consumer contract, but describes an internal artifact / concept within the described application.\nHowever, it's an important concept for the domain language and structure of the application and can be very useful to put other ORD concepts into relation with it."}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u26a0 Entity Types are not meant to provide a consumer contract!\nTo get a clearly defined contract for working with entity types (getting data, triggering behavior), APIs and Events should be used."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"tags",children:"Tags"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Tags"})," (via the ",(0,a.jsx)(n.code,{children:"tags"})," array property) can be used to freely tag all kinds of ORD resources in ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Folksonomy",children:"Folksonomy"})," style."]}),"\n",(0,a.jsx)(n.p,{children:"Please be aware that there is no global governance of tags and they also do not have namespaces.\nThis will inevitably lead to inconsistent usage of tags.\nSince they are usually used for enhancing search or navigation, the simplicity of tags is often still a good trade off."}),"\n",(0,a.jsx)(n.h3,{id:"labels",children:"Labels"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"../../spec-v1/interfaces/document#labels",children:(0,a.jsx)(n.strong,{children:"Labels"})})," are very similar to ",(0,a.jsx)(n.a,{href:"#tags",children:"tags"}),", but allow to define key value pairs.\nThey are optimized towards machine-readability and can be used to query, select and filter resources (similar to ",(0,a.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/",children:"kubernetes labels"}),")."]}),"\n",(0,a.jsx)(n.h3,{id:"groups",children:"Groups"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"../../spec-v1/interfaces/document#group",children:(0,a.jsx)(n.strong,{children:"Groups"})})," and the corresponding ",(0,a.jsx)(n.a,{href:"../../spec-v1/interfaces/document#group-type",children:"Group Types"})," can be used to define and apply your own taxonomy in a generic, extensible way."]}),"\n",(0,a.jsx)("div",{style:{"text-align":"left","margin-top":"12px"},children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Group Concept Overview",src:s(1088).A+""})})}),"\n",(0,a.jsxs)(n.p,{children:["The concept has three parts: The ",(0,a.jsx)(n.strong,{children:"Group Type"}),' defines the semantics / meaning of a particular type of group assignments.\nAn example would be to have a Group Type for a "part of an CSN Service" or "part of a Process".']}),"\n",(0,a.jsxs)(n.p,{children:["Second, the ",(0,a.jsx)(n.strong,{children:"Group"}),' itself defines the actual group things can be assigned to.\nIn the examples before, this would be the "Employee Service" or the "Hire to Retire" Process.']}),"\n",(0,a.jsxs)(n.p,{children:["Lastly, we need to state the ",(0,a.jsx)(n.strong,{children:"partOfGroup"}),' assignment of a particular ORD Resource.\nE.g. a particular OData API for Employee Management can be part of both the "Employee Service" group (of type CSN Service) and the "Hire to Retire" group of type "Process".']}),"\n",(0,a.jsxs)(n.p,{children:["The Group Type could even be defined globally. If the Group Type is shared across different applications, it should have an ",(0,a.jsx)(n.a,{href:"/open-resource-discovery/spec-v1/#authority-namespace",children:"authority namespace"}),".\nThe Group Instances can potentially be globally defined, too. In this case it works like a global taxonomy with a predefined list of values.It's also possible for the application itself to define and assign its own Group Types and Instances."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"The Group concept is correct choice when ORD resources need to be grouped by additional concerns, beyond the predefined concepts from ORD (like Package)."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"bundling-cap-apis-by-csn-service",children:"Bundling CAP APIs by CSN Service:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  // Defines that there is a concept for grouping "CDS Service", owned by the sap.cds authority namespace\n  "groupTypes": [{\n    "groupTypeId": "sap.cds:service",\n    "title": "CAP CDS Service",\n    "description": "Description of the CDS Service concept and how its correctly used for grouping..."\n   }]\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  // Describes the actual CDS Service, as it was created in an application (of namespace "customer.bookshop")\n  "groups": [{\n     "groupId": "sap.cds:service:customer.bookshop:incidents.IncidentsService",\n     "groupTypeId": "sap.cds:service",\n     "title": "Incidents Service"\n   }]\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "apiResources": [{\n      // Assignment of one API to the CSN Service it is derived from\n      "partOfGroups": [\n        "sap.cds:service:customer.incidents:incidents.IncidentsService"\n      ]\n  }]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(6540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);