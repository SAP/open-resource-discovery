# Data Product (beta)

> 🚧 Please note that the [Data Products](../../spec-v1/interfaces/document#data-product) concept is currently in [Beta Status](#beta-status).

## Definition

The Data Product concept is based on [Data Mesh Principles](https://martinfowler.com/articles/data-mesh-principles.html).

> A [Data Products](../../spec-v1/interfaces/document#data-product) is a data set exposed for consumption outside the boundaries of the producing application via APIs and described by high quality metadata that can be accessed through the Data Product Directory ([ORD Aggregator](../../spec-v1/#ord-aggregator)).

While that provides a concise definition, let's support that with a few more clarification points:

* All three elements in the definition are essential: (1) data, (2) API, (3) metadata. Without all three, it’s not a Data Product. A data product is always a set of business data supported by metadata; the metadata itself is not the data product. Likewise, a data set that is not described as a Data Product, using ORD, is not a Data Product.
* Data Products have owners that are responsible for defining what Data Products to produce to meet the needs of consumers. All data products have owners.
* Above we say that Data Products are consumed via APIs, but to be precise, they are consumed via APIs or Events (we treat events as a special form of API). In this doc, we generally use the term APIs to include Events (it is just more readable than always saying "APIs and/or Events").
* Applications produce data within a domain. An application takes responsibility for the data it produces, and the application offers data for consumption outside the original context in the form of a Data Product.
* The producer of a Data Product exposes the metadata that describes the data products via the ORD protocol, allowing it to be included in the Data Product Directory ([ORD Aggregator](../../spec-v1/#ord-aggregator))
* A data product is a "data set" – which can include:
  * Business Objects: master data, transaction data
  * Other objects, e.g.: config data
  * Analytical data, including cubes, measures and dimensions
  * Graph data (e.g. who knows whom, recommendations)
  * Documents (e.g. raw log entries, events, multi-level-aggregates, hierarchies)
  * Spatial data
* A data product is exposed by a "producer" to fulfill the needs of "consumers".
* Every data product is defined and described as a "resource" in an ORD document.
* The word "Product" does not imply that it’s something on the price list. Typically, Data Products are not independent "products" but are available as part of a larger product that produces them.
* In SAP, the minimum required metadata is the description of the Data Product as an ORD resource. Additional metadata, e.g. CSN, can also be provided.

## Producers and Consumers

Data Products are exposed by "Producers" so that they can be used by "Consumers":

* Data Product Producers are applications or services that expose data via one or more APIs and describe relevant contracts and information via metadata. Note that there are various types of producers.
* Data Product Consumers are applications or services that access and use the data from Data Products. Consumers can be of various types and cover both transactional and analytical applications. An application that processes operational data can be as Data Product consumer, as can analytical products like SAP Datasphere and SAP Analytics Cloud (SAC).
* The Data Product Directory ([ORD Aggregator](../../spec-v1/#ord-aggregator)) is used by Consumers to find and discover available Data Products.

## Beta Status

Please note that the Data Product concept is currently in <span class="feature-status-beta" title="This feature is in BETA status and subject to potential changes.">BETA</span>.

This has the following implications

* The interface contract is potentially subject to changes, although we aim to avoid breaking changes if possible.
* Many data product relevant attributes are currently **not explicitly defined** in the specification yet.
  * Some attributes should be handled via documentation, e.g. Service Level Agreements via [dataProductLinks](../../spec-v1/interfaces/document#data-product_dataproductlinks) of `type`:[service-level-agreement](../../spec-v1/interfaces/document#data-product-link_type)
  * Such attributes need to be defined through generic extensibility mechanisms like `labels` and `documentationLabels` or added as text to the documentation.
  * We do this to gain more experience on what information we need to collect and how to structure them best. Later ORD Data Product releases will add more standardized properties.
  * Which information needs to be added as additional extensibility attributes is currently only defined as SPA internal guidance.
