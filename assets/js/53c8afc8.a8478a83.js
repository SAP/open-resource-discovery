"use strict";(self.webpackChunk_sap_open_resource_discovery=self.webpackChunk_sap_open_resource_discovery||[]).push([[7026],{928:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=r(4848),n=r(8453);const t={title:"ORD Configuration",sidebar_position:0,description:"Describes the technical interface / schema for ORD Configuration."},c=void 0,o={id:"spec-v1/interfaces/configuration",title:"ORD Configuration",description:"Describes the technical interface / schema for ORD Configuration.",source:"@site/docs/spec-v1/interfaces/configuration.md",sourceDirName:"spec-v1/interfaces",slug:"/spec-v1/interfaces/configuration",permalink:"/open-resource-discovery/spec-v1/interfaces/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/SAP/open-resource-discovery/tree/main/docs/spec-v1/interfaces/configuration.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"ORD Configuration",sidebar_position:0,description:"Describes the technical interface / schema for ORD Configuration."},sidebar:"specV1Sidebar",previous:{title:"ORD Interfaces",permalink:"/open-resource-discovery/spec-v1/interfaces/"},next:{title:"ORD Document",permalink:"/open-resource-discovery/spec-v1/interfaces/document"}},a={},d=[{value:"How to read this documentation",id:"how-to-read-this-documentation",level:4},{value:"Technical information",id:"technical-information",level:4},{value:"Schema Definitions",id:"schema-definitions",level:2},{value:"ORD Configuration",id:"ord-configuration",level:3},{value:"ORD V1 Support",id:"ord-v1-support",level:3},{value:"ORD V1 Document Description",id:"ord-v1-document-description",level:3},{value:"Access Strategy",id:"access-strategy",level:3}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h4,{id:"how-to-read-this-documentation",children:"How to read this documentation"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The root schema of the document is ",(0,i.jsx)(s.a,{href:"#ord-configuration",children:"ORD Configuration"})]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"technical-information",children:"Technical information"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Example files can be found ",(0,i.jsx)(s.a,{href:"/spec-v1/examples/configuration",children:"here"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Visual diagrams can be found here: ",(0,i.jsx)(s.a,{href:"/open-resource-discovery/spec-v1/diagrams/configuration",children:"ORD Configuration Class Diagram"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The interface is described as ",(0,i.jsx)(s.a,{href:"https://json-schema.org/specification.html",children:"JSON Schema"})," here: ",(0,i.jsx)(s.a,{href:"https://sap.github.io/open-resource-discovery/spec-v1/interfaces/Configuration.schema.json",children:"/spec-v1/interfaces/Configuration.schema.json"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["A high-level overview can also be exported as ",(0,i.jsx)(s.a,{href:"https://sap.github.io/open-resource-discovery/spec-v1/interfaces/Configuration.xlsx",children:"Excel"})," and ",(0,i.jsx)(s.a,{href:"https://sap.github.io/open-resource-discovery/spec-v1/interfaces/Configuration.csv",children:"CSV"})," file."]}),"\n",(0,i.jsxs)(s.li,{children:["This documentation is automatically generated from ",(0,i.jsx)(s.a,{href:"https://github.com/SAP/open-resource-discovery/blob/master/v1/Configuration.schema.yaml",children:"./spec/v1/Configuration.schema.yaml"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"schema-definitions",children:"Schema Definitions"}),"\n",(0,i.jsx)(s.h3,{id:"ord-configuration",children:"ORD Configuration"}),"\n",(0,i.jsx)(s.p,{children:"The ORD configuration response will indicate that ORD is available for the given host and how to proceed with the discovery."}),"\n",(0,i.jsx)(s.p,{children:"Most notably, the ORD configuration will tell an ORD consumer which ORD documents are available and where/how they can be accessed."}),"\n",(0,i.jsxs)(s.p,{children:["The configuration endpoint is a ",(0,i.jsx)(s.a,{href:"https://tools.ietf.org/html/rfc8615#section-3",children:"Well-Known URI"})," discovery mechanism."]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Property"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-name anchor",id:"ord-configuration_$schema",children:["$schema",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"optional",children:"OPTIONAL"}),(0,i.jsx)("a",{className:"hash-link",href:"#ord-configuration_$schema",title:"Configuration.$schema"})]})}),(0,i.jsx)(s.td,{children:(0,i.jsx)("div",{className:"interface-property-type",children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-description",children:["Optional URL to the ORD document schema (defined as JSON Schema).",(0,i.jsx)("br",{}),"If given, this enables code intelligence and validation in supported editors (like VSCode) and tools.",(0,i.jsx)("br",{}),(0,i.jsx)("hr",{}),(0,i.jsx)("strong",{children:"JSON Schema Format"}),": ",(0,i.jsx)(s.code,{children:"uri-reference"}),(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Recommended Values"}),": ",(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsx)(s.code,{children:'"https://sap.github.io/open-resource-discovery/spec-v1/interfaces/Configuration.schema.json"'})})})]})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-name anchor",id:"ord-configuration_baseurl",children:["baseUrl",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"optional",children:"OPTIONAL"}),(0,i.jsx)("a",{className:"hash-link",href:"#ord-configuration_baseurl",title:"Configuration.baseUrl"})]})}),(0,i.jsx)(s.td,{children:(0,i.jsx)("div",{className:"interface-property-type",children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-description",children:["Optional ",(0,i.jsx)(s.a,{href:"/open-resource-discovery/spec-v1/#def-base-url",children:"base URL"})," that can be used to resolve the relative URLs to the ORD Documents.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"The ",(0,i.jsx)(s.code,{children:"baseUrl"})," MUST not contain a leading slash.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"If you do not provide this property, the base URL is assumed to be the URL of the config endpoint without ",(0,i.jsx)(s.code,{children:"/.well-known/open-resource-discovery"})," suffix.",(0,i.jsx)("br",{}),"This implies that either a ",(0,i.jsx)(s.code,{children:"baseUrl"})," or only absolute URLs MUST be provided when no standardized well-known URI is used.",(0,i.jsx)("br",{}),"If both a ",(0,i.jsx)(s.code,{children:"baseUrl"})," and a well-known URI is provided, the explicit ",(0,i.jsx)(s.code,{children:"baseUrl"})," takes precedence.",(0,i.jsx)("br",{}),(0,i.jsx)("hr",{}),(0,i.jsx)("strong",{children:"JSON Schema Format"}),": ",(0,i.jsx)(s.code,{children:"uri"}),(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Regex Pattern"}),": ",(0,i.jsx)("code",{className:"regex",children:"^http[s]?:\\/\\/[^:\\/\\s]+\\.[^:\\/\\s\\.]+(:\\d+)?(\\/[a-zA-Z0-9-\\._~]+)*$"}),(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Example Values"}),": ",(0,i.jsxs)("ul",{className:"examples",children:[(0,i.jsx)("li",{children:(0,i.jsx)(s.code,{children:'"https://example-sap-system.com"'})}),(0,i.jsx)("li",{children:(0,i.jsx)(s.code,{children:'"https://sub.foo.bar.com"'})}),(0,i.jsx)("li",{children:(0,i.jsx)(s.code,{children:'"https://sub.foo.bar.com/api/v1"'})})]})]})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-name anchor",id:"ord-configuration_openresourcediscoveryv1",children:["openResourceDiscoveryV1",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"mandatory",children:"MANDATORY"}),(0,i.jsx)("a",{className:"hash-link",href:"#ord-configuration_openresourcediscoveryv1",title:"Configuration.openResourceDiscoveryV1"})]})}),(0,i.jsx)(s.td,{children:(0,i.jsx)("div",{className:"interface-property-type",children:(0,i.jsx)(s.a,{href:"#ord-v1-support",children:"ORD V1 Support"})})}),(0,i.jsx)(s.td,{children:(0,i.jsx)("div",{className:"interface-property-description"})})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"ord-v1-support",children:"ORD V1 Support"}),"\n",(0,i.jsx)(s.p,{children:"The existence of this version indicates that Open Resource Discovery is supported in Version 1.x"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Property"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-name anchor",id:"ord-v1-support_documents",children:["documents",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"optional",children:"OPTIONAL"}),(0,i.jsx)("a",{className:"hash-link",href:"#ord-v1-support_documents",title:"OpenResourceDiscoveryV1.documents"})]})}),(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-type",children:["Array<",(0,i.jsx)(s.a,{href:"#ord-v1-document-description",children:"ORD V1 Document Description"}),">"]})}),(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-description",children:["List of all ORD documents that can be retrieved.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"While it is possible to describe everything in one big ORD document, for bigger services/use cases it might be preferable to split the information into multiple documents.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"For more details how to implement this correctly, please refer to the ",(0,i.jsx)(s.a,{href:"/open-resource-discovery/spec-v1/#ord-configuration-endpoint",children:"ORD configuration endpoint"})," section and the ",(0,i.jsx)(s.a,{href:"/open-resource-discovery/spec-v1/#considerations-on-the-granularity-of-ord-documents",children:"considerations on the granularity of ORD documents"}),".",(0,i.jsx)("br",{})]})})]})})]}),"\n",(0,i.jsx)(s.h3,{id:"ord-v1-document-description",children:"ORD V1 Document Description"}),"\n",(0,i.jsxs)(s.p,{children:["Describes an ",(0,i.jsx)(s.a,{href:"/open-resource-discovery/spec-v1/#ord-document",children:"ORD Document"})," that is available for pull transport consumption."]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Property"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-name anchor",id:"ord-v1-document-description_url",children:["url",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"mandatory",children:"MANDATORY"}),(0,i.jsx)("a",{className:"hash-link",href:"#ord-v1-document-description_url",title:"V1DocumentDescription.url"})]})}),(0,i.jsx)(s.td,{children:(0,i.jsx)("div",{className:"interface-property-type",children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-description",children:["URL or relative URL to the ORD document (provided by an ORD document endpoint).",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"It is RECOMMENDED to provide a relative URL (to base URL), starting with ",(0,i.jsx)(s.code,{children:"/"}),".",(0,i.jsx)("br",{}),"If a ",(0,i.jsx)(s.code,{children:"baseUrl"})," is given, the relative URLs will be resolved with it.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"If the URL is not relative to the system providing this information or no well-known URI is used,",(0,i.jsx)("br",{}),"either the baseUrl or a full URL to the document MUST be provided.",(0,i.jsx)("br",{}),(0,i.jsx)("hr",{}),(0,i.jsx)("strong",{children:"JSON Schema Format"}),": ",(0,i.jsx)(s.code,{children:"uri-reference"}),(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Example Values"}),": ",(0,i.jsxs)("ul",{className:"examples",children:[(0,i.jsx)("li",{children:(0,i.jsx)(s.code,{children:'"/open-resource-discovery/v1/documents/example1"'})}),(0,i.jsx)("li",{children:(0,i.jsx)(s.code,{children:'"https://example.com/open-resource-discovery/v1/documents/example1"'})})]})]})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-name anchor",id:"ord-v1-document-description_systeminstanceaware",children:["systemInstanceAware",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"optional",children:"OPTIONAL"}),(0,i.jsx)("a",{className:"hash-link",href:"#ord-v1-document-description_systeminstanceaware",title:"V1DocumentDescription.systemInstanceAware"})]})}),(0,i.jsx)(s.td,{children:(0,i.jsx)("div",{className:"interface-property-type",children:"boolean"})}),(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-description",children:["Whether the information in the ORD document is ",(0,i.jsx)(s.strong,{children:"system instance aware"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"This is the case when the provided ORD document potentially differs between ",(0,i.jsx)(s.strong,{children:"system instances"}),".",(0,i.jsx)("br",{}),"Please note that if a system does not support multitenancy, most likely each system instance has its own",(0,i.jsx)("br",{}),"URL and different system instances could even be deployed in a different state (version).",(0,i.jsx)("br",{}),"If those conditions apply, ",(0,i.jsx)(s.code,{children:"systemInstanceAware"})," MUST be set to true.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"An ORD aggregator that represents a system instance aware perspective MUST fetch a system instance aware ORD document,",(0,i.jsx)("br",{}),"not just once per system type but once per ",(0,i.jsx)(s.strong,{children:"system instance"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Please note that you can define system instance awareness also on the level of an ORD resource.",(0,i.jsx)("br",{}),"It is even possible and valid to have an ORD document that is NOT system instance aware to contain resources that are.",(0,i.jsx)("br",{}),"This can be the case because the resource is described in separate resource definition formats which would change,",(0,i.jsx)("br",{}),"while the ORD document itself would not change (the links to the resource definition files stay the same).",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"If some ORD information is ",(0,i.jsx)(s.strong,{children:"system instance aware"})," and some is not,",(0,i.jsx)("br",{}),"we RECOMMEND to split the information into separate documents and mark their system instance awareness accordingly.",(0,i.jsx)("br",{}),(0,i.jsx)("hr",{}),(0,i.jsx)("strong",{children:"Example Values"}),": ",(0,i.jsx)("ul",{className:"examples",children:(0,i.jsx)("li",{children:(0,i.jsx)(s.code,{children:"true"})})})]})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-name anchor",id:"ord-v1-document-description_accessstrategies",children:["accessStrategies",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"mandatory",children:"MANDATORY"}),(0,i.jsx)("a",{className:"hash-link",href:"#ord-v1-document-description_accessstrategies",title:"V1DocumentDescription.accessStrategies"})]})}),(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-type",children:["Array<",(0,i.jsx)(s.a,{href:"#access-strategy",children:"Access Strategy"}),">"]})}),(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-description",children:["List of supported access strategies for retrieving the metadata from the ORD provider.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"An ORD Consumer/ORD Aggregator MAY freely choose any of the listed strategies.",(0,i.jsx)("br",{}),(0,i.jsx)("hr",{}),(0,i.jsx)("strong",{children:"Array Constraint"}),": MUST have at least 1 items"]})})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"access-strategy",children:"Access Strategy"}),"\n",(0,i.jsxs)(s.p,{children:["Defines the ",(0,i.jsx)(s.a,{href:"../../spec-extensions/access-strategies/",children:"access strategy"})," for accessing the ORD documents from the ORD provider."]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Property"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-name anchor",id:"access-strategy_type",children:["type",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"mandatory",children:"MANDATORY"}),(0,i.jsx)("a",{className:"hash-link",href:"#access-strategy_type",title:"AccessStrategy.type"})]})}),(0,i.jsx)(s.td,{children:(0,i.jsx)("div",{className:"interface-property-type",children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-description",children:["Defines the authentication/authorization strategy through which the referenced ORD Documents can be accessed.",(0,i.jsx)("br",{}),(0,i.jsx)("hr",{}),(0,i.jsx)("strong",{children:"Allowed Values"}),": ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsxs)("p",{children:[(0,i.jsx)(s.code,{children:'"open"'}),": The ORD Documents are openly accessible and not protected via authentication or authorization.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Please note that this most likely means that it is not possible to transport ",(0,i.jsx)(s.strong,{children:"system instance aware"})," information",(0,i.jsx)("br",{}),"as this access strategy does not specify how to transport tenant information."]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("p",{children:[(0,i.jsx)(s.code,{children:'"sap:cmp-mtls:v1"'}),": The ORD information are accessible via Unified Customer Landscape's client certificate.",(0,i.jsx)("br",{}),"Please find a more detailed documentation ",(0,i.jsx)(s.a,{href:"../../spec-extensions/access-strategies/sap-cmp-mtls-v1",children:"here"}),"."]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("p",{children:[(0,i.jsx)(s.code,{children:'"sap.businesshub:basic-auth:v1"'}),": The ORD information are accessible for SAP Business Accelerator Hub via Basic Auth strategy.",(0,i.jsx)("br",{}),"Please find a more detailed documentation ",(0,i.jsx)(s.a,{href:"../../spec-extensions/access-strategies/sap-businesshub-basic-v1",children:"here"}),"."]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("p",{children:[(0,i.jsx)(s.code,{children:'"custom"'}),": If chosen, ",(0,i.jsx)(s.code,{children:"customType"})," MUST be provided.",(0,i.jsx)("br",{}),"If chosen, ",(0,i.jsx)(s.code,{children:"customDescription"})," SHOULD be provided."]})})]}),(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Example Values"}),": ",(0,i.jsx)("ul",{className:"examples",children:(0,i.jsx)("li",{children:(0,i.jsx)(s.code,{children:'"open"'})})})]})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-name anchor",id:"access-strategy_customtype",children:["customType",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"optional",children:"OPTIONAL"}),(0,i.jsx)("a",{className:"hash-link",href:"#access-strategy_customtype",title:"AccessStrategy.customType"})]})}),(0,i.jsx)(s.td,{children:(0,i.jsx)("div",{className:"interface-property-type",children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-description",children:["If the fixed ",(0,i.jsx)(s.code,{children:"type"})," enum values need to be extended, an arbitrary ",(0,i.jsx)(s.code,{children:"customType"})," can be provided.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"MUST be a valid ",(0,i.jsx)(s.a,{href:"/open-resource-discovery/spec-v1/#specification-id",children:"Specification ID"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"MUST only be provided if ",(0,i.jsx)(s.code,{children:"type"})," is set to ",(0,i.jsx)(s.code,{children:"custom"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("hr",{}),(0,i.jsx)("strong",{children:"Regex Pattern"}),": ",(0,i.jsxs)("code",{className:"regex",children:["^([a-z0-9]+(?:[.][a-z0-9]+)*):([a-zA-Z0-9._\\-]+)",":v","([0-9]+)$"]}),(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Maximum Length"}),": ",(0,i.jsx)(s.code,{children:"255"}),(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Example Values"}),": ",(0,i.jsx)("ul",{className:"examples",children:(0,i.jsx)("li",{children:(0,i.jsx)(s.code,{children:'"sap.xref:open-local-tenant-id:v1"'})})})]})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-name anchor",id:"access-strategy_customdescription",children:["customDescription",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"optional",children:"OPTIONAL"}),(0,i.jsx)("a",{className:"hash-link",href:"#access-strategy_customdescription",title:"AccessStrategy.customDescription"})]})}),(0,i.jsx)(s.td,{children:(0,i.jsx)("div",{className:"interface-property-type",children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsxs)("div",{className:"interface-property-description",children:["Human-readable description about how the access is set up, notated in ",(0,i.jsx)(s.a,{href:"https://spec.commonmark.org/",children:"CommonMark"})," (Markdown).",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"MUST only be provided if ",(0,i.jsx)(s.code,{children:"type"})," is set to ",(0,i.jsx)(s.code,{children:"custom"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("hr",{}),(0,i.jsx)("strong",{children:"Minimum Length"}),": ",(0,i.jsx)(s.code,{children:"1"}),(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"Example Values"}),": ",(0,i.jsx)("ul",{className:"examples",children:(0,i.jsx)("li",{children:(0,i.jsx)(s.code,{children:'"To set up the access to OData APIs, please refer to the [SAP Cloud for Customer OData API](https://help.sap.com/viewer/1364b70b9cbb417ea5e2d80e966d4f49/CLOUD/en-US) help pages.\\""'})})})]})})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>o});var i=r(6540);const n={},t=i.createContext(n);function c(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);