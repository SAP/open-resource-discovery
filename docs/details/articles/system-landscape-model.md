---
sidebar_position: 5
description: Detailed explanation of the System Landscape and the ORD Data model.
---

# System Landscape Model

## Systems

ORD already relies on a high-level system landscape model to be existing.
Before you can discover ORD information from system instances (tenants), you need to know of their existence and nature in the first place.
From there ORD is used to fill in the details.

However, those two worlds need to be connected and therefore ORD has a simplified, very high-level system landscape model.
It is mostly described in the [ORD Terminology section](../../spec-v1/index.md#terminology).

![System and namespace concept overview](/img/system-landscape/system.drawio.svg)

The most essential concept to understand is the **[System Instance](../../spec-v1/index.md#def-system-instance)**.
It's a simplified concept that usually stands for a technical tenant of a system, but in case of single-tenant system it can also stand for the system itself.
The important aspect is that it's where the isolation of resources, capabilities and data is ensured.
In the diagram, it's also marked with "dynamic", as it is a live running system that can describe its actual state at run-time.

A System Instance can be of a [System Type](../../spec-v1/index.md#def-system-type), which is the technical type.
This is not to be confused with the [Product](../../spec-v1/index.md#def-product), which lives in the commercial domain and can have a more complicated relationship with the concepts from the technical system domain.

Optionally, a System Instance or a Type could also have several [System Versions](../../spec-v1/index.md#def-system-version), in case that metadata needs to have a history or that multiple versions of the same System Type are deployed at the same time (this is very common with on-premises systems).

## Namespaces

[Namespaces](../../spec-v1/index.md#namespaces) are a purely static concept and are used to get globally unique, conflict free IDs.
They are described in more detail behind the link.

It should be pointed out that the:
* [vendor namespace](../../spec-v1/index.md#vendor-namespace) corresponds to the [ORD Vendor](../../spec-v1/interfaces/document.md#vendor).
* [application namespace](../../spec-v1/index.md#application-namespace) corresponds to the [ORD System Type](../../spec-v1/index.md#def-system-type).
* [sub-context namespaces](../../spec-v1/index.md#subcontext-namespace) have no corresponding ORD concept.

## System Resources and Capabilities

From here we can place most of the ORD concepts, e.g. like the APIs and Events.

There is an important distinction between **ORD Resources / Capabilities** and **ORD Taxonomy**.
The ORD Resources and Capabilities describe either a System Type (in static perspective) or a System Instance (in dynamic perspective).

Taxonomy is independent of Systems, but can be defined either locally or globally.

<div style={{"text-align": "center"}}>

![ORD Data Model Overview](/img/ord-high-level-data-model.drawio.svg 'ORD Data Model Overview')

</div>

Some taxonomy concepts can even be "global", in this case they can always be viewed and navigated in the dynamic system landscape, even if it has no system instances in it.

Here is an overview which ORD concepts can be dynamic (different per System Instance), which can potentially be global and which are always global:

| ORD Concept            | Category              | Can be Dynamic | Can be Global | Always Global |
| ---------------------- | --------------------- | -------------- | ------------- | ------------- |
| API Resource           | Resource / Capability | ✅              | ❌             | ❌             |
| Event Resource         | Resource / Capability | ✅              | ❌             | ❌             |
| Capability             | Resource / Capability | ✅              | ❌             | ❌             |
| Data Product           | Resource / Capability | ✅              | ❌             | ❌             |
| Integration Dependency | Resource / Capability | ✅              | ❌             | ❌             |
| Entity Type            | Taxonomy              | ✅              | ✅             | ❌             |
| Vendor                 | Taxonomy              | ❌              | ✅             | ✅             |
| Product                | Taxonomy              | ❌              | ✅             | ✅             |
| Package                | Taxonomy              | ❌              | ✅             | ❌             |
| Consumption Bundle     | Taxonomy              | ❌              | ✅             | ❌             |
| Group / Group Type     | Taxonomy              | ✅              | ✅             | ❌             |

## Big Picture

### Static Catalog

In the static catalog, Products are described on a System Type Level.
Optionally, a static catalog can also reflect the System Version to also provide a history of the metadata, e.g. how it changed over time with releases.

### Dynamic Catalog

The dynamic catalog can show a real (customer) system landscape at run-time.
This focuses on the System Instance level.
