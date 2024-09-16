---
slug: /
id: overview
title: Open Resource Discovery
hide_title: false
sidebar_position: 0
---

## Summary

Open Resource Discovery (ORD) is a protocol that **allows applications and services to self-describe their resources and capabilities** (e.g. ports and adapters).
It can be used for static documentation, but also reflect tenant specific configuration and extensions at run-time.​

Typically, ORD is used to describe [APIs](./spec-v1/interfaces/document#api-resource) and [Events](./spec-v1/interfaces/document#event-resource), but it also supports higher-level concepts like [Entity Types](./spec-v1/interfaces/document#entity-type) (Business Objects) and [Data Products](./details/articles/data-product.md) (beta).
With [Integration Dependencies](./spec-v1/interfaces/document#integration-dependency) the potential use of external resources can be stated, too.
In case that the standardized concepts or attributes are not sufficient, there are extensibility attributes and [Capabilities](./spec-v1/interfaces/document#capability). All of the described artifacts share a high-level taxonomy, [grouping](./details/articles/grouping-and-bundling.md) concepts, and have many types of relationships, so we get a **well connected metadata graph**.

<div style={{"text-align": "center", "margin-top": "8px"}}>
![ORD Provider Overview](/img/ord-provider-overview.svg 'ORD Provider Overview')
</div>

By adopting ORD, an application will implement a single-entry point ([Service Provider Interface](https://en.wikipedia.org/wiki/Service_provider_interface)) that can be used to discover and crawl the relevant information / metadata.
The information can be used to build metadata registries / catalogs and do runtime inspection of actual system landscapes.

> ℹ ORD is an [open source](https://github.com/SAP/open-resource-discovery) standard by SAP, released under the Apache 2 license (see [public announcement](https://blogs.sap.com/2023/11/14/open-resource-discovery-a-protocol-for-decentralized-metadata-discovery-is-now-open-source/)).

> The ORD interface (JSON Schema) and TypeScript types are available via npm [`@sap/open-resource-discovery`](https://www.npmjs.com/package/@sap/open-resource-discovery) dependency.

## Use Cases

The information can be used to build a static **metadata catalog** or do detailed **runtime inspection of actual system landscapes**.
Based on this, many end-user use cases can be realized, e.g.:

* Data product directory/catalog
* Static API/event catalog
* Landscape specific API/event discovery for development platforms, platform engineering and low-code/no-code development
* Support admins in configuring services (discovery & automation)
* AI grounding & training
* Generic channel to describe and discover system capabilities between providers and consumers

## Introduction

Read the 📄 [ORD Introduction](./introduction.mdx) and watch the 🎦[ORD Videos](./details/videos).

<div className="videoContainer">
  <iframe className="videoIframe" src="https://www.youtube.com/embed/7Z818CdoZJg" title="Introducing the Open Resource Discovery protocol" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
</div>

## Goals

<div className="container"><div className="row"><div className="col">
<div className="card"><div className="card__header">
<h3>Design Goals</h3>
</div><div className="card__body"><p>

- Systems to **describe themselves** with a single entry-point to crawl all relevant metadata
- Achieve a combined, machine-readable **system landscape metadata view**
- Enable full **automation of publication and discovery** of metadata
- Having **one aligned standard** for
  - Description of different types of resources
  - Description of both the static / generic perspective and the actual runtime perspective
  - Support of many different metadata-driven use-cases and consumer requirements
- ORD is an **open standard**
  - It is [open source](https://github.com/SAP/open-resource-discovery) an can be used by SAP partners and customers if they see a value in adopting it, like better integration in the SAP ecosystem
  - The specification is open for extensions via labels, custom types, spec extensions. Those don't need to go through alignment first.

</p></div></div></div>
<div className="col"><div className="card"><div className="card__header">
<h3>Non-Goals</h3>
</div><div className="card__body"><p>

- Replace industry-standard resource definition formats like OpenAPI
- Describing resources or capabilities in extensive detail.
- Currently: Describe resources other than those that are owned and exposed by the systems directly
  (only self-description of systems).
  - This can be changed in the future if necessary.
- Currently it is not recommended to put fast changing information into ORD, as the current pull-based transport mechanism would be to slow and expensive to support time-critical updates.
  - This could change in the future by introducing more efficient, asynchronous transport modes.

</p></div></div></div></div></div>

## Future Plans

Now that ORD is [open-source](https://sap.github.io/open-resource-discovery/), a potential next step is to work with partners on a true industry wide standard, as ORD is currently focused on  SAPs requirements.
We are also part of the publicly funded [IPCEI CIS](https://www.bmwk.de/Redaktion/EN/Artikel/Industry/ipcei-cis.html) project, where we also work towards this goal.

The specification itself is designed to be generic, so most SAP specific aspects are described as [spec extensions](./spec-extensions).
Some concepts like [namespaces](./spec-v1/#namespaces) could be further standardized if there's a need for cross-company metadata exchange.

We are thinking about ways to make ORD publishing more efficient when there is a lot of tenant specific metadata or data changes happen frequently and replication is more time critical.
There is also need to make publishing easier for simple, static providers that prefer publishing on deploy-time.
