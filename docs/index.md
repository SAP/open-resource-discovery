---
slug: /
id: overview
title: Open Resource Discovery
hide_title: false
sidebar_position: 0
---

## Summary

Open Resource Discovery (ORD) is a protocol that **allows applications and services to self-describe their exposed resources and capabilities**.
It can be used to describe static documentation, but can also reflect tenant specific configuration and extensions (at run-time).​

The most typical resources to describe are [APIs](./spec-v1/interfaces/document#api-resource) and [Events](./spec-v1/interfaces/document#event-resource).
But ORD can also be used to describe higher-level concepts like [Entity Types](./spec-v1/interfaces/document#entity-type) (Business Objects) and [Data Products](./spec-v1/interfaces/document#data-products).
With [Integration Dependencies](./spec-v1/interfaces/document#integration-dependency) it is possible to also describe how external resources are or can be be used.
In case that the standardized concepts or attributes are not sufficient, there are extensibility attributes and [Capabilities](./spec-v1/interfaces/document#capability).

By adopting ORD, an application will implement a single-entry point ([Service Provider Interface](https://en.wikipedia.org/wiki/Service_provider_interface)) that can be used to discover and crawl the relevant information / metadata.

<div style={{"text-align": "center", "margin-top": "8px"}}>

![ORD Provider Overview](/img/ord-provider-overview.svg 'ORD Provider Overview')

</div>

> ℹ ORD is an open standard by SAP, currently geared towards the SAP ecosystem.
> However, it is built to be a generic standard and could be used outside of SAP, if the infrastructure (aggregators, namespace registry) is built or adjusted.
> The standard is extensible through extensibility attributes, custom types and policy levels.

## Introduction

Read the 📄 [ORD Introduction](./introduction.mdx) and watch the 🎦[ORD Videos](./details/videos).

<iframe id="kaltura_player_1031387753" width="800" height="454" src="https://cdnapisec.kaltura.com/p/1921661/sp/192166100/embedIframeJs/uiconf_id/35919811/partner_id/1921661?iframeembed=true&playerId=kaltura_player_1031387753&entry_id=1_xhsv983f&wid=_1921661&flashvars[sideBarContainer.plugin]=true&flashvars[sideBarContainer.position]=left&flashvars[sideBarContainer.clickToClose]=true&flashvars[chapters.plugin]=true&flashvars[chapters.layout]=vertical&flashvars[chapters.thumbnailRotator]=false&flashvars[streamSelector.plugin]=true&flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&flashvars[dualScreen.plugin]=true&flashvars[hotspots.plugin]=true" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *"></iframe>

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

We are thinking about ways to make ORD publishing more efficient when there is a lot of tenant specific metadata or data changes happen frequently and replication is more time critical.

Now that ORD is [open-source](https://sap.github.io/open-resource-discovery/), a potential next step is to work with partners on a true industry wide standard.
ORD in its current state is focused around SAP. While most SAP specific aspects are described as [spec extensions](./spec-extensions), some concepts like [namespaces](./spec-v1/#namespaces) need more work.
