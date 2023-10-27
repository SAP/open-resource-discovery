---
slug: /
id: overview
title: Open Resource Discovery
hide_title: false
sidebar_position: 0
---

## Summary

Open Resource Discovery (ORD) is a protocol that **allows applications and services to self-describe their exposed resources and capabilities**. This can be done at deploy-time for static documentation and at runtime to also reflect tenant specific configuration and extensions.​

By adopting ORD, an application will implement a single-entry point ([Service Provider Interface](https://en.wikipedia.org/wiki/Service_provider_interface)) that can be used to discover and crawl the relevant information / metadata.

<div style={{"text-align": "center", "margin-top": "8px"}}>

![ORD Provider Overview](/img/ord-provider-overview.svg 'ORD Provider Overview')

</div>

## Introduction

Read the 📄 [ORD Introduction](./introduction.mdx) and watch the 🎦[ORD Videos](./details/videos).

## Goals

<div class="container"><div class="row"><div class="col">
<div class="card"><div class="card__header">
<h3>Design Goals</h3>
</div><div class="card__body"><p>

- Systems to **describe themselves** with a single entry-point to crawl all relevant metadata
- Achieve a combined, machine-readable **system landscape metadata view**
- Enable full **automation of publication and discovery** of metadata
- Having **one aligned standard** for
  - Description of different types of resources
  - Description of both the static / generic perspective and the actual runtime perspective
  - Support of many different metadata-driven use-cases and consumer requirements
- ORD is an **open standard**
  - It is open-source an can be used by SAP partners and customers if they see a value in adopting it, like better integration in the SAP ecosystem
  - The specification is open for extensions via labels, custom types etc. that don't need to go through alignment first.

</p></div></div></div>
<div class="col"><div class="card"><div class="card__header">
<h3>Non-Goals</h3>
</div><div class="card__body"><p>

- Replace industry-standard resource definition formats like OpenAPI
- Describing resources or capabilities in extensive detail.
- Currently: Describe resources other than those that are owned and exposed by the systems directly
  (only self-description of systems).
  - We could change this scope in the future if necessary.
- We don't put fast changing information into ORD, as the current pull-based transport mechanism would be to slow and expensive to support time-critical updates.
  - We could change this in the future by introducing more efficient, asynchronous transport modes.

</p></div></div></div></div></div>

## Future Plans

Beta support for describing [Data Products](https://martinfowler.com/articles/data-mesh-principles.html) is coming soon!

We are also thinking about ways to make ORD publishing more efficient when there is a lot of tenant specific metadata or data changes happen frequently and replication is more time critical.

Now that ORD is [open-source](https://sap.github.io/open-resource-discovery/), a potential next step is to work with partners on a true industry wide standard.
ORD in its current state is focused around SAP. While most SAP specific aspects are described as [spec extensions](./spec-extensions), some concepts like [namespaces](./spec-v1/#namespaces) need more work.
