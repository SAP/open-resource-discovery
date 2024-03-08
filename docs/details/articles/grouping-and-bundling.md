---
sidebar_position: 3
description: How to group, bundle and package ORD content right.
title: Grouping and Bundling
---

# Grouping and Bundling

## Quick Summary

ORD offers multiple ways how resources are grouped or bundled together.
Some of them have a very specific indented usage and some offer the applications complete freedom.

### Predefined Meaning

* The [**Package**](../../spec-v1/interfaces/document#package) is the only mandatory bundling concept.
  * Every ORD Resource MUST be assigned to exactly one Package.
  * The concerns of a Package are about
    * What is published together
    * How the published information are presented on a catalog, e.g. in SAPs case the [Business Accelerator Hub](https://api.sap.com/)
* The [**Consumption Bundle**](../../spec-v1/interfaces/document#consumption-bundle)
  * API or Event Resources MAY be assigned to 0..n Consumption Bundles
  * The concern is technical: What resources can be consumed together with the same set of credentials and auth mechanism
* The [**Entity Type**](../../spec-v1/interfaces/document#entity-type) may not be perceived as a grouping mechanism, but in practice it is very useful to group APIs, Events and other resources by a shared Business Object / Business Term.
  * API Resources, Event Resources, Capabilities, Data Products and other Entity Types can be assigned to 0..n Entity Types.

### Generic Grouping Concepts

* **Tags** (via the `tags` array property) can be used to freely add tags to all kinds of ORD resources ([Folksonomy](https://en.wikipedia.org/wiki/Folksonomy) style).
* [**Labels**](../../spec-v1/interfaces/document#labels) are similar to tags, but they allow to also define the "key" and are mostly useful for simplifying querying / selecting resources on an API level.
* [**Groups**](../../spec-v1/interfaces/document#group) allow to define custom [Group Types](../../spec-v1/interfaces/document#group-type) that can be published via ORD as well.
  * This concept is very flexible, but still well governed and machine-readable.
  * It works similar to Packages or Consumption Bundles, but allows the ORD Provider to define their own group categories and their semantics.

### ORD Documents

ORD Documents are only used to transport ORD information to the aggregator and have no impact on grouping and bundling.
However, there are still some [Considerations on the granularity of ORD Documents](../../spec-v1/index.md#considerations-on-the-granularity-of-ord-documents).

## Detailed Explanations

### Package

> 🚧 TODO

### Consumption Bundle

> 🚧 TODO

### Entity Type

> 🚧 TODO

### Tags

> 🚧 TODO
>
### Labels

> 🚧 TODO

### Groups

> 🚧 TODO
