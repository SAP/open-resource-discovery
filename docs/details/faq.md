---
title: FAQ
sidebar_position: 22
---

# FAQ

### How does ORD relate to other API standards like OData and OpenAPI?

ORD is not meant to replace existing metadata standards that describe APIs or Events in detail.
Such metadata standards, OpenAPI or EDMX for OData APIs are often protocol specific.

The role of ORD is to standardize the high-level, lifecycle related, more semantic and shared attributes of APIs and pass along such detailed schema level metadata definition files.
Therefore, ORD is not a substitution to such standards, its meant to actually aid the discoverability of them.
Consumers that need to understand an API or Event resource in detail still need to understand those metadata standards.

### Is ORD already used outside of SAP?

Not yet. But it it designed in a way that this is possible.

In a first step, we released ORD as [open source](https://github.com/SAP/open-resource-discovery) under the Apache 2 license (see [public announcement](https://blogs.sap.com/2023/11/14/open-resource-discovery-a-protocol-for-decentralized-metadata-discovery-is-now-open-source/)).

Currently, we're in discussion with other companies to form a community around the standard.

### How long does it take for metadata changes to reflect in the Aggregators?

This depends on the configuration and implementation of an ORD aggregator.
The aggregation can be fully automated, but currently ORD has only defined a [pull transport](../spec-v1/index.md#pull-transport) mode, which relies on periodic fetching (similar as a search engine indexes the web). As a consequence, metadata changes need a while to be replicated.
We're aware that some use-cases require faster metadata updates and the ORD spec is designed to support other transport modes (like push or event based), to make faster and more efficient replication possible.
