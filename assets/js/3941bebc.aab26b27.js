"use strict";(self.webpackChunk_sap_open_resource_discovery=self.webpackChunk_sap_open_resource_discovery||[]).push([[236],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=i,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return a?r.createElement(m,n(n({ref:t},l),{},{components:a})):r.createElement(m,n({ref:t},l))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,n[1]=s;for(var d=2;d<o;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=a(7462),i=a(3366),o=(a(7294),a(3905)),n=["components"],s={sidebar_position:3,description:"A Data Product is a data set exposed for consumption outside the boundaries of the producing application or service via APIs. They are described through high quality metadata that can be accessed through the Data Product Directory.",title:"Data Product"},c='Data Product <span class="feature-status-beta">BETA</span>',d={unversionedId:"details/articles/data-product",id:"details/articles/data-product",title:"Data Product",description:"A Data Product is a data set exposed for consumption outside the boundaries of the producing application or service via APIs. They are described through high quality metadata that can be accessed through the Data Product Directory.",source:"@site/docs/details/articles/data-product.md",sourceDirName:"details/articles",slug:"/details/articles/data-product",permalink:"/open-resource-discovery/details/articles/data-product",draft:!1,editUrl:"https://github.com/SAP/open-resource-discovery/tree/main/docs/details/articles/data-product.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"A Data Product is a data set exposed for consumption outside the boundaries of the producing application or service via APIs. They are described through high quality metadata that can be accessed through the Data Product Directory.",title:"Data Product"},sidebar:"detailsSidebar",previous:{title:"Integration Dependency",permalink:"/open-resource-discovery/details/articles/integration-dependency"},next:{title:"Videos \ud83c\udfa6",permalink:"/open-resource-discovery/details/videos/"}},l={},p=[{value:"Definition",id:"definition",level:2},{value:"Data Aspect",id:"data-aspect",level:3},{value:"API Aspect",id:"api-aspect",level:3},{value:"Metadata Aspect",id:"metadata-aspect",level:3},{value:"Product Aspect",id:"product-aspect",level:3},{value:"Business Semantic Aspect",id:"business-semantic-aspect",level:3},{value:"Data Products at SAP",id:"data-products-at-sap",level:2},{value:"Architecture Overview",id:"architecture-overview",level:2},{value:"Model",id:"model",level:3},{value:"Roles",id:"roles",level:3},{value:"Beta Status",id:"beta-status",level:2}],u={toc:p},h="wrapper";function m(e){var t=e.components,s=(0,i.Z)(e,n);return(0,o.kt)(h,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-product-beta"},"Data Product ",(0,o.kt)("span",{class:"feature-status-beta"},"BETA")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udea7 Please note that the ",(0,o.kt)("a",{parentName:"p",href:"../../spec-v1/interfaces/document#data-product"},"Data Products")," concept is currently in ",(0,o.kt)("a",{parentName:"p",href:"#beta-status"},"Beta Status"),".")),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A ",(0,o.kt)("a",{parentName:"p",href:"../../spec-v1/interfaces/document#data-product"},"Data Product")," is a ",(0,o.kt)("strong",{parentName:"p"},"data set")," exposed for consumption outside the boundaries of the producing application or service via ",(0,o.kt)("strong",{parentName:"p"},"APIs"),". They are described through high quality ",(0,o.kt)("strong",{parentName:"p"},"metadata")," that can be accessed through the Data Product Directory (",(0,o.kt)("a",{parentName:"p",href:"../../spec-v1/#ord-aggregator"},"ORD Aggregator"),").")),(0,o.kt)("p",null,"The Data Product concept is based on ",(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/data-mesh-principles.html"},"Data Mesh Principles")," (see also ",(0,o.kt)("a",{parentName:"p",href:"https://www.thoughtworks.com/en-de/insights/books/data-mesh"},"this book"),")."),(0,o.kt)("p",null,"While that provides a concise definition, let's support that with a few more clarification points:"),(0,o.kt)("p",null,"The following aspects of the definition are essential: (1) ",(0,o.kt)("a",{parentName:"p",href:"#data-aspect"},"data"),", (2) ",(0,o.kt)("a",{parentName:"p",href:"#api-aspect"},"APIs"),", (3) ",(0,o.kt)("a",{parentName:"p",href:"#metadata-aspect"},"metadata")," and (4) ",(0,o.kt)("a",{parentName:"p",href:"#product-aspect"},"product"),". If they are not covered, it\u2019s not a Data Product. Optionally, a Data Product can also have (5) ",(0,o.kt)("a",{parentName:"p",href:"#business-semantic-aspect"},"business semantics"),"."),(0,o.kt)("h3",{id:"data-aspect"},"Data Aspect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Applications produce data within a domain. An application takes responsibility for the data it produces, and the application offers data for consumption outside the original context in the form of a Data Product."),(0,o.kt)("li",{parentName:"ul"},'A data product is a "data set" \u2013 which can include:',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Business Objects: master data, transaction data"),(0,o.kt)("li",{parentName:"ul"},"Other objects, e.g.: config data"),(0,o.kt)("li",{parentName:"ul"},"Analytical data, including cubes, measures and dimensions"),(0,o.kt)("li",{parentName:"ul"},"Graph data (e.g. who knows whom, recommendations)"),(0,o.kt)("li",{parentName:"ul"},"Documents (e.g. raw log entries, events, multi-level-aggregates, hierarchies)"),(0,o.kt)("li",{parentName:"ul"},"Spatial data"))),(0,o.kt)("li",{parentName:"ul"},'A data product is exposed by a "producer" to fulfill the needs of "consumers".')),(0,o.kt)("h3",{id:"api-aspect"},"API Aspect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Above we say that Data Products are consumed via APIs, but to be precise, they are consumed via APIs or Events (we treat events as a special form of API). In this doc, we generally use the term APIs to include Events (it is just more readable than always saying "APIs and/or Events").'),(0,o.kt)("li",{parentName:"ul"},"There is a clear expectation that the APIs are described via ",(0,o.kt)("a",{parentName:"li",href:"#metadata-aspect"},"metadata")," for machine- and human-readable documentation."),(0,o.kt)("li",{parentName:"ul"},"Data Products are also expected to describe their data lineage. This is done via Data Product input ports, which are described in details as an ORD ",(0,o.kt)("a",{parentName:"li",href:"../../spec-v1/interfaces/document#integration-dependency"},"Integration Dependency"))),(0,o.kt)("h3",{id:"metadata-aspect"},"Metadata Aspect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'A data product is described by the producer via ORD, which fulfills the role as its discoverability API / port. Through this, the discoverability of a Data Product is decentralized and therefore "shifted left": It\'s the data products responsibility to describe itself. The ',(0,o.kt)("a",{parentName:"li",href:"../../spec-v1/#ord-aggregator"},"ORD Aggregators"),"(s) take on the responsibility of the Data Product Directory."),(0,o.kt)("li",{parentName:"ul"},"Please note that ORD is only used to describe Data Products on (slow changing) metadata level. It is not intended as an active control API or as an API to fetch fast moving runtime data (e.g. log metrics)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"However, those can be added to the Data Product as dedicated APIs, which follow a standardized ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Service_provider_interface"},"SPI")," contract and be marked as such via the ORD ",(0,o.kt)("inlineCode",{parentName:"li"},"implementationStandard"),". This way, such APIs can still be discovered via API, but are treated as a separate concern.")))),(0,o.kt)("h3",{id:"product-aspect"},"Product Aspect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The word "Product" does not imply that it\u2019s something on the price list. Instead it only implies a product mindset towards its consumers. Typically, Data Products are not independent "products" but are available as part of a larger product that produces them.'),(0,o.kt)("li",{parentName:"ul"},"Data Products have owners that are responsible for defining what Data Products to produce to meet the needs of consumers. All data products have owners."),(0,o.kt)("li",{parentName:"ul"},"The owners of the data product (at least of its definition) are ideally the domain owners / the same team that is responsible for the operational data (decentralized data products).")),(0,o.kt)("h3",{id:"business-semantic-aspect"},"Business Semantic Aspect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ORD, it's not just possible to describe the APIs - and through them the data model / schema / syntax of the data. There are also ",(0,o.kt)("a",{parentName:"li",href:"../../spec-v1/interfaces/document#entity-type"},"Entity Types")," which can be used to describe the ",(0,o.kt)("strong",{parentName:"li"},"semantic model")," (underlying conceptual model) and map it with the technical API / data model.")),(0,o.kt)("h2",{id:"data-products-at-sap"},"Data Products at SAP"),(0,o.kt)("p",null,"At SAP, the minimum required metadata is the description of the Data Product as an ORD resource. Additional metadata, e.g. CSN, can also be provided."),(0,o.kt)("p",null,"There are internal guidance what qualities and protocols a Data Product needs to or should have. Those are currently worked our during the beta phase. Once they are clear, they may find their way into a SAP specific ",(0,o.kt)("a",{parentName:"p",href:"/open-resource-discovery/spec-extensions/policy-levels/"},"policy level"),"."),(0,o.kt)("h2",{id:"architecture-overview"},"Architecture Overview"),(0,o.kt)("h3",{id:"model"},"Model"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data Product Model Overview",src:a(5643).Z,title:"Data Product Model Overview",width:"682",height:"335"})),(0,o.kt)("p",null,"The diagram is not a complete ER model, but highlights the most important relationships from Data Product perspective."),(0,o.kt)("h3",{id:"roles"},"Roles"),(0,o.kt)("p",null,"Data Products are exposed by ",(0,o.kt)("strong",{parentName:"p"},"Producers")," so that they can be used by ",(0,o.kt)("strong",{parentName:"p"},"Consumers"),". Consumers can use ",(0,o.kt)("strong",{parentName:"p"},"Aggregators")," / Data Product Directories to discover, explore and understand Data Products."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data Product Producers are applications or services that expose data via one or more APIs and describe relevant contracts and information via metadata. Note that there are various types of producers."),(0,o.kt)("li",{parentName:"ul"},"Data Product Consumers are applications or services that access and use the data from Data Products. Consumers can be of various types and cover both transactional and analytical applications. An application that processes operational data can be as Data Product consumer, as can analytical products like SAP Datasphere and SAP Analytics Cloud (SAC)."),(0,o.kt)("li",{parentName:"ul"},"The Data Product Directory (",(0,o.kt)("a",{parentName:"li",href:"../../spec-v1/#ord-aggregator"},"ORD Aggregator"),") is used by Consumers to find and discover available Data Products.")),(0,o.kt)("h2",{id:"beta-status"},"Beta Status"),(0,o.kt)("p",null,"Please note that the Data Product concept is currently in ",(0,o.kt)("span",{class:"feature-status-beta",title:"This feature is in BETA status and subject to potential changes."},"BETA"),"."),(0,o.kt)("p",null,"This has the following implications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The interface contract is potentially subject to changes, although we aim to avoid breaking changes if possible."),(0,o.kt)("li",{parentName:"ul"},"Many data product relevant attributes are currently ",(0,o.kt)("strong",{parentName:"li"},"not explicitly defined")," in the specification yet.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Some attributes should be handled via documentation, e.g. Service Level Agreements via ",(0,o.kt)("a",{parentName:"li",href:"../../spec-v1/interfaces/document#data-product_dataproductlinks"},"dataProductLinks")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"type"),": ",(0,o.kt)("a",{parentName:"li",href:"../../spec-v1/interfaces/document#data-product-link_type"},(0,o.kt)("inlineCode",{parentName:"a"},"service-level-agreement"))),(0,o.kt)("li",{parentName:"ul"},"Such attributes need to be defined through generic extensibility mechanisms like ",(0,o.kt)("inlineCode",{parentName:"li"},"labels")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"documentationLabels")," or added as text to the documentation."),(0,o.kt)("li",{parentName:"ul"},"We do this to gain more experience on what information we need to collect and how to structure them best. Later ORD Data Product releases will add more standardized properties or define a dedicated Data Product definition specification that can be attached."),(0,o.kt)("li",{parentName:"ul"},"Which information needs to be added as additional extensibility attributes is currently only defined as SAP internal guidance.")))))}m.isMDXComponent=!0},5643:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/data-product-model.drawio-2554f72baaacc84a65b9ced2f092cef8.svg"}}]);