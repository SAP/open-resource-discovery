"use strict";(self.webpackChunk_sap_open_resource_discovery=self.webpackChunk_sap_open_resource_discovery||[]).push([[8137],{7173:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"spec-extensions/group-types/sap","title":"SAP Global Group Types","description":"SAP pre-defined global group types.","source":"@site/docs/spec-extensions/group-types/sap.md","sourceDirName":"spec-extensions/group-types","slug":"/spec-extensions/group-types/sap","permalink":"/open-resource-discovery/spec-extensions/group-types/sap","draft":false,"unlisted":false,"editUrl":"https://github.com/open-resource-discovery/specification/tree/main/docs/spec-extensions/group-types/sap.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"hide_table_of_contents":false,"description":"SAP pre-defined global group types."},"sidebar":"specExtensionsSidebar","previous":{"title":"Global Group Types","permalink":"/open-resource-discovery/spec-extensions/group-types/"}}');var i=a(4848),t=a(8453);const r={sidebar_position:3,hide_table_of_contents:!1,description:"SAP pre-defined global group types."},o="SAP Global Group Types",c={},d=[{value:"Data Product related",id:"data-product-related",level:2},{value:"Business Capabilities",id:"business-capabilities",level:3},{value:"Business Processes",id:"business-processes",level:3},{value:"Data Package",id:"data-package",level:3},{value:"Example Usage of the taxonomies in Data Products",id:"example-usage-of-the-taxonomies-in-data-products",level:3},{value:"CDS Related",id:"cds-related",level:2},{value:"CDS Service",id:"cds-service",level:3}];function p(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"sap-global-group-types",children:"SAP Global Group Types"})}),"\n",(0,i.jsx)(s.p,{children:"On SAP side we use the following group types as additional taxonomies on ORD resources:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Data Product related","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Business Capabilities"}),"\n",(0,i.jsx)(s.li,{children:"Business Processes"}),"\n",(0,i.jsx)(s.li,{children:"Data Packages"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["CDS","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"CDS Service"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"data-product-related",children:"Data Product related"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("span",{class:".feature-status-alpha",children:"ALPHA"}),": The following Group Types are proposals and to be considered ",(0,i.jsx)("span",{class:".feature-status-alpha",children:"ALPHA"}),". Using group types to express these taxonomies is clear, the exact group type ID, name and description needs to be aligned and approved with the taxonomy owners."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"business-capabilities",children:"Business Capabilities"}),"\n",(0,i.jsxs)(s.p,{children:["A Business Capability describes the organization's capability to successfully perform activities, thereby achieving its business objectives and delivering value to its customers. ",(0,i.jsx)(s.a,{href:"https://help.sap.com/docs/SAP_EARL/ef2378723bd449bd86f8bc6d8ac77972/0ff58f19291949cb86173875b5ea2ca4.html?state=DRAFT",children:"See Glossary"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'{\n  "groupTypes": [{\n    "groupTypeId": "sap.eam:businessCapability", //exact id to be finalized\n    "title": "Business Capabilities",\n    "description": "TODO"\n   }]\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:'The actual business capabilities are delivered centrally SAP, based on the Enterprise Architecture content. Samples of Business Capabilities are "Finance", "Marketing", "Manufacturing", which will be published as dedicated groups:'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'{\n  "groups": [{\n    "groupId": "sap.eam:businessCapability:sap.oneBcm:finance", //exact id to be finalized\n    "groupTypeId": "sap.eam:businessCapability",\n    "title": "Finance",\n    "description": "TODO"\n   },{\n    "groupId": "sap.eam:businessCapability:sap.oneBcm:marketing", //exact id to be finalized\n    "groupTypeId": "sap.eam:businessCapability",\n    "title": "Marketing",\n    "description": "TODO"\n   },\n   //...\n   ]\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"business-processes",children:"Business Processes"}),"\n",(0,i.jsxs)(s.p,{children:["A combination of business activities performed to drive a business goal that creates value at the enterprise level. ",(0,i.jsx)(s.a,{href:"https://help.sap.com/docs/SAP_EARL/ef2378723bd449bd86f8bc6d8ac77972/0ff58f19291949cb86173875b5ea2ca4.html?state=DRAFT",children:"See Glossary"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'{\n  "groupTypes": [{\n    "groupTypeId": "sap.eam:businessProcess", //exact id to be finalized\n    "title": "Business Process",\n    "description": "TODO"\n   }]\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:'The actual business processes delivered centrally SAP, based on the Enterprise Architecture content. Samples of Business Capabilities are "Recruit to Retire", "Lead to Cash", "Source to Pay", which will be published as dedicated groups:'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'{\n  "groups": [{\n    "groupId": "sap.eam:businessProcess:sap:h2r", //exact id to be finalized\n    "groupTypeId": "sap.eam:businessProcess",\n    "title": "Recruit to Retire",\n    "description": "TODO"\n   },{\n    "groupId": "sap.eam:businessProcess:sap:l2c", //exact id to be finalized\n    "groupTypeId": "sap.eam:businessProcess",\n    "title": "Lead to Cash",\n    "description": "TODO"\n   },\n   //...\n   ]\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"data-package",children:"Data Package"}),"\n",(0,i.jsxs)(s.p,{children:["A data package is a group of ",(0,i.jsx)(s.a,{href:"/open-resource-discovery/details/articles/data-product",children:"data products"})," and additional e.g. analytical content that form together a relevant use cases."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'{\n  "groupTypes": [{\n    "groupTypeId": "sap.bdc:dataPackage", //exact id to be finalized\n    "title": "Data Package",\n    "description": "TODO"\n   }]\n}\n'})}),"\n",(0,i.jsx)(s.p,{children:'The actual data packages are delivered with the applications or data platform that are producing at least the leading data products of this package. Samples are "People Analytics" or "Finance Foundation".'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'{\n  "groups": [{\n    "groupId": "sap.bdc:dataPackage:sap.s4:finfdn", //exact id to be finalized\n    "groupTypeId": "sap.bdc:dataPackage",\n    "title": "Finance Foundation",\n    "description": "TODO"\n   },{\n    "groupId": "sap.bdc:dataPackage:sap.sf:peopleAnalytics", //exact id to be finalized\n    "groupTypeId": "sap.bdc:dataPackage",\n    "title": "People Analytics",\n    "description": "TODO"\n   },\n   //...\n   ]\n}\n'})}),"\n",(0,i.jsx)(s.h3,{id:"example-usage-of-the-taxonomies-in-data-products",children:"Example Usage of the taxonomies in Data Products"}),"\n",(0,i.jsx)(s.p,{children:"Within a data product, we use these taxonomies in the following ways:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["with ",(0,i.jsx)(s.a,{href:"/open-resource-discovery/spec-v1/interfaces/document#data-product_partofgroups",children:"partOfGroups"})," we express the business capabilities, business processes and data package assignments"]}),"\n",(0,i.jsxs)(s.li,{children:["via ",(0,i.jsx)(s.a,{href:"/open-resource-discovery/spec-v1/interfaces/document#data-product_partofpackage",children:"partOfPackage"})," we have a unique relationship to the application providing the data product, including a reference to the product, that is ",(0,i.jsx)(s.a,{href:"/open-resource-discovery/spec-v1/interfaces/document#package_partofproducts",children:"assigned to the package"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["via ",(0,i.jsx)(s.a,{href:"/open-resource-discovery/spec-v1/interfaces/document#data-product_industry",children:"industry"})," and ",(0,i.jsx)(s.a,{href:"/open-resource-discovery/spec-v1/interfaces/document#data-product_lineofbusiness",children:"lineOfBusiness"})," there is a fixed set of taxonomies for data products."]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:' "dataProducts": [\n    {\n      "ordId": "sap.s4:dataProduct:CostCenter:v1",\n      //...\n      "partOfGroups": [\n        "sap.eam:businessCapability:sap.oneBcm:finance",\n        "sap.eam:businessProcess:sap:h2r",\n        "sap.eam:businessProcess:sap:s2p", //data product can be part of multiple business processes or capabilities\n        "sap.bdc:dataPackage:sap.s4:finfdn",\n        "sap.bdc:dataPackage:sap.sf:peopleAnalytics" //data product can be part of multiple data packages\n      ],\n      "partOfPackage": "sap.s4:package:S4HANA:v1", //--\x3e a package has the product assignment\n      "industry": [\n        "Retail",\n        "Consumer Products"\n      ],\n      "lineOfBusiness": [\n        "Sales"\n      ],\n   //...\n   }\n   //...\n  ]\n'})}),"\n",(0,i.jsx)(s.h2,{id:"cds-related",children:"CDS Related"}),"\n",(0,i.jsx)(s.h3,{id:"cds-service",children:"CDS Service"}),"\n",(0,i.jsx)(s.p,{children:'Defines that there is a concept for grouping "CDS Service", owned by the sap.cds authority namespace. It is used to group multiple API and event resources together that are based of the same underlying CDS model.'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:'{\n  "groupTypes": [{\n    "groupTypeId": "sap.cds:service",\n    "title": "CAP CDS Service",\n    "description": "Description of the CDS Service concept and how its correctly used for grouping..."\n   }]\n}\n'})})]})}function l(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>o});var n=a(6540);const i={},t=n.createContext(i);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);