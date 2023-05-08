---
title: Frequently Asked Questions
hide_table_of_contents: false
sidebar_position: 3
---

# Frequently Asked Questions

> If you have questions, consider creating a SAP stack overflow question with the tag [#open-resource-discovery](https://sap.stackenterprise.co/posts/tagged/3957). This will be watched and answered by us.

## ORD in General

#### Q: We already have OpenAPI / OData / (...) to describe APIs. Why do we need ORD?

ORD is no replacement or substitute for such standards. However, just using e.g. an OpenAPI definition to describe an API itself is not enough for all use cases we have.

For example, it is not standardized where and how to fetch the definition file. How would it fit into a bigger context, e.g. in an API catalogue / marketplace? Does this API relate to other APIs or do we have alternative definition formats that describe the same API?

Those are questions that a single API Definition format cannot answer. ORD addresses the meta-level descriptions and standardizes how such information can be provided and discovered.

For more information and use-cases, please read the [Why ORD?](./details/articles/why-ord.md) article.

#### Q: Does ORD work for On-Premises Software?

ORD does not make a distinction between on-premises or cloud software.
However On-premises software has implications on how (and whether at all) the ORD information can be accessed.
Effectively, whether on-premises is supported or not depends on whether the connectivity between the the ORD aggregators (the system that are collecting the information) and the On-premises ORD providers can be established.
In SAP context, we support including On-Premises software through [Cloud Connectors](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html?q=cloud%20connector).

#### Q: What does "Open" in ORD stand for?

The Open in ORD refers to the protocol itself and that it is published publicly under a permissive license.
It can therefore be freely implemented by SAP partners or customers.

A public version of the standard is published here: https://github.com/SAP/open-resource-discovery/.

The governance and the actual development will remain fully at SAP for now.
In the long term, we can imagine to contribute ORD to an open governance body
if there is an interest by other companies to drive the specification together.

Please note that the fact that ORD is an open protocol, does not imply
that the resources and information that are described through it are "open".
They can be categorized explicitly, e.g. through `visibility`.

## ORD at SAP

#### Q: How does ORD relate to the Open Discovery API / API Event Discovery?

The Open Discovery API standard is the predecessor of Open Resource Discovery.
It was developed by Harsh Jegadeesan and Divya Mary.
The old Open Discovery API has been implemented (in different variants / states) by some SAP Applications, e.g. by the API Hub or S4/Hana.

It's adoption by LoBs was however not mandated by the corresponding Technology Guideline TG03.

With Open Resource Discovery, the scope of the specification has widened and changed a bit.

- There is a distinction between the API that a LoB needs to provide (simplified API) and the API that an ORD aggregator (like API Hub) needs to provide
  - The goal is to simplify the adoption for SAP applications
- ORD is not specifically about APIs and Events anymore but is meant to express all kind of system resources (therefore the name change)
- A new goal is to have a decentralized implementation with full automation around discovery.
  ORD Providers and ORD aggregators should not have to create explicit integration between them.
  Instead we aim for a plug-and-play architecture.
- ORD also considers additional use cases of the [Unified Customer Landscape](https://sapedia.one.int.sap/wiki/Unified_Customer_Landscape)

An implementation of the legacy **Open Discovery API** will provide most, but not all of the ORD information. Since there is no standardized state of it, it needs to be integrated individually and explicitly (no plug-and-play automated discovery).
It was mainly used as a publication channel of **system instance unaware** information to the [API Hub](https://api.sap.com/).
