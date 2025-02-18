"use strict";(self.webpackChunk_sap_open_resource_discovery=self.webpackChunk_sap_open_resource_discovery||[]).push([[4357],{6658:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"spec-extensions/policy-levels/sap-base-v1","title":"SAP Base v1","description":"SAP Base v1 policy level","source":"@site/docs/spec-extensions/policy-levels/sap-base-v1.md","sourceDirName":"spec-extensions/policy-levels","slug":"/spec-extensions/policy-levels/sap-base-v1","permalink":"/open-resource-discovery/spec-extensions/policy-levels/sap-base-v1","draft":false,"unlisted":false,"editUrl":"https://github.com/open-resource-discovery/specification/tree/main/docs/spec-extensions/policy-levels/sap-base-v1.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"SAP Base v1","description":"SAP Base v1 policy level","sidebar_position":1},"sidebar":"specExtensionsSidebar","previous":{"title":"ORD Policy Levels","permalink":"/open-resource-discovery/spec-extensions/policy-levels/"},"next":{"title":"SAP Core v1","permalink":"/open-resource-discovery/spec-extensions/policy-levels/sap-core-v1"}}');var l=n(4848),c=n(8453);const o={title:"SAP Base v1",description:"SAP Base v1 policy level",sidebar_position:1},r="SAP Base Policy Level (v1.0)",a={},t=[{value:"Description",id:"description",level:2},{value:"General Policies",id:"general-policies",level:2},{value:"Namespaces",id:"namespaces",level:3},{value:"Packages",id:"packages",level:3},{value:"Misc Constraints",id:"misc-constraints",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"sap-base-policy-level-v10",children:"SAP Base Policy Level (v1.0)"})}),"\n",(0,l.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(s.p,{children:["This policy level (aka compliance level) ",(0,l.jsx)(s.code,{children:"sap:base:v1"})," MUST be fulfilled by all SAP applications and services.\nIt includes the ",(0,l.jsx)(s.strong,{children:"essential"})," validations that ensure proper metadata discovery and aggregation."]}),"\n",(0,l.jsxs)(s.p,{children:["Usually SAP applications and services will use the more complete and opinionated ",(0,l.jsx)(s.a,{href:"/open-resource-discovery/spec-extensions/policy-levels/sap-core-v1",children:(0,l.jsx)(s.code,{children:"sap:core:v1"})})," policy level."]}),"\n",(0,l.jsx)(s.h2,{id:"general-policies",children:"General Policies"}),"\n",(0,l.jsx)(s.h3,{id:"namespaces",children:"Namespaces"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["All SAP ",(0,l.jsx)(s.a,{href:"/open-resource-discovery/spec-v1/#namespaces",children:"namespaces"})," MUST be registered in the SAP namespace-registry.","\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["All SAP applications MUST use the ",(0,l.jsx)(s.code,{children:"sap"})," vendor namespace."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"packages",children:"Packages"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["The vendor of a Package MUST be set and be equal to one of the allowed values: ",(0,l.jsx)(s.code,{children:"sap:vendor:SAP:"}),", ",(0,l.jsx)(s.code,{children:"customer:vendor:Customer:"}),"."]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"misc-constraints",children:"Misc Constraints"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["Although ",(0,l.jsx)(s.code,{children:"Vendor"})," is technically not validated by a policy level, we need to ensure that within SAP we don't define the SAP vendor multiple times or reference it differently.","\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["The SAP ",(0,l.jsx)(s.code,{children:"Vendor"})," MUST NOT be defined by any SAP application or service, as this is done centrally."]}),"\n",(0,l.jsxs)(s.li,{children:["The correct value for a SAP vendor reference is ",(0,l.jsx)(s.code,{children:"sap:vendor:SAP:"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>r});var i=n(6540);const l={},c=i.createContext(l);function o(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);