---
title: ORD Configuration
sidebar_position: 0
description: Describes the technical interface / schema for ORD Configuration.
---

#### How to read this documentation
* The root schema of the document is [ORD Configuration](#ord-configuration)

#### Technical information
* The interface is described as [JSON Schema](https://json-schema.org/specification.html) here: [/spec-v1/interfaces/Configuration.schema.json](https://sap.github.io/open-resource-discovery/spec-v1/interfaces/Configuration.schema.json)
* This documentation is automatically generated from [./spec/v1/Configuration.schema.yaml](https://github.com/SAP/open-resource-discovery/blob/master/v1/Configuration.schema.yaml)

## Schema Definitions

### ORD Configuration

The ORD configuration response will indicate that ORD is available for the given host and how to proceed with the discovery.

Most notably, the ORD configuration will tell an ORD consumer which ORD documents are available and where/how they can be accessed.

The configuration endpoint is a [Well-Known URI](https://tools.ietf.org/html/rfc8615#section-3) discovery mechanism.

| Property | Type | Description |
| -------- | ---- | ----------- |
|<div class="interface-property-name anchor" id="ord-configuration_$schema">$schema<br/><span class="optional">OPTIONAL</span><a class="hash-link" href="#ord-configuration_$schema" title="Direct link to property"></a></div>|<div class="interface-property-type">string</div>|<div class="interface-property-description">An optional URL to the ORD document schema (defined as JSON Schema).<br/>If given, this enables code intelligence and validation in supported editors (like VSCode) and tools.<br/><hr/><strong>JSON Schema Format</strong>: `uri-reference`<br/><strong>Example Values</strong>: <ul class="examples"><li>`"https://raw.githubusercontent.com/SAP/open-resource-discovery/main/static/spec-v1/interfaces/Configuration.schema.json"`</li></ul></div>|
|<div class="interface-property-name anchor" id="ord-configuration_baseurl">baseUrl<br/><span class="optional">OPTIONAL</span><a class="hash-link" href="#ord-configuration_baseurl" title="Direct link to property"></a></div>|<div class="interface-property-type">string</div>|<div class="interface-property-description">Optional [base URL](../index.md#def-base-url) that can be used to resolve the relative URLs to the ORD Documents.<br/><br/>The `baseUrl` MUST not contain a leading slash.<br/><br/>If you do not provide this property, the base URL is assumed to be the URL of the config endpoint without `/.well-known/open-resource-discovery` suffix.<br/>This implies that either a `baseUrl` or only absolute URLs MUST be provided when no standardized well-known URI is used.<br/>If both a `baseUrl` and a well-known URI is provided, the explicit `baseUrl` takes precedence.<br/><hr/><strong>JSON Schema Format</strong>: `uri`<br/><strong>Regex Pattern</strong>: <code class="regex">^http\[s\]?:\\/\\/\[^:\\/\s\]+\\.\[^:\\/\s\\.\]+(:\d+)?(\\/\[a-zA-Z0-9-\\.\_~\]+)\*$</code><br/><strong>Example Values</strong>: <ul class="examples"><li>`"https://example-sap-system.com"`</li><li>`"https://sub.foo.bar.com"`</li><li>`"https://sub.foo.bar.com/api/v1"`</li></ul></div>|
|<div class="interface-property-name anchor" id="ord-configuration_openresourcediscoveryv1">openResourceDiscoveryV1<br/><span class="mandatory">MANDATORY</span><a class="hash-link" href="#ord-configuration_openresourcediscoveryv1" title="Direct link to property"></a></div>|<div class="interface-property-type">[ORD V1 Support](#ord-v1-support)</div>|<div class="interface-property-description"></div>|

### ORD V1 Support

The existence of this version indicates that Open Resource Discovery is supported in Version 1.x

| Property | Type | Description |
| -------- | ---- | ----------- |
|<div class="interface-property-name anchor" id="ord-v1-support_documents">documents<br/><span class="optional">OPTIONAL</span><a class="hash-link" href="#ord-v1-support_documents" title="Direct link to property"></a></div>|<div class="interface-property-type">Array&lt;[ORD V1 Document Description](#ord-v1-document-description)&gt;</div>|<div class="interface-property-description">List of all ORD documents that can be retrieved.<br/><br/>While it is possible to describe everything in one big ORD document, for bigger services/use cases it might be preferable to split the information into multiple documents.<br/><br/>For more details how to implement this correctly, please refer to the [ORD configuration endpoint](../index.md#ord-configuration-endpoint) section and the [considerations on the granularity of ORD documents](../index.md#considerations-on-the-granularity-of-ord-documents).<br/></div>|

### ORD V1 Document Description

Describes an [ORD Document](../index.md#ord-document) that is available for pull transport consumption.

| Property | Type | Description |
| -------- | ---- | ----------- |
|<div class="interface-property-name anchor" id="ord-v1-document-description_url">url<br/><span class="mandatory">MANDATORY</span><a class="hash-link" href="#ord-v1-document-description_url" title="Direct link to property"></a></div>|<div class="interface-property-type">string</div>|<div class="interface-property-description">URL or relative URL to the ORD document (provided by an ORD document endpoint).<br/><br/>It is RECOMMENDED to provide a relative URL (to base URL), starting with `/`.<br/>If a `baseUrl` is given, the relative URLs will be resolved with it.<br/><br/>If the URL is not relative to the system providing this information or no well-known URI is used,<br/>either the baseUrl or a full URL to the document MUST be provided.<br/><hr/><strong>JSON Schema Format</strong>: `uri-reference`<br/><strong>Example Values</strong>: <ul class="examples"><li>`"/open-resource-discovery/v1/documents/example1"`</li><li>`"https://example.com/open-resource-discovery/v1/documents/example1"`</li></ul></div>|
|<div class="interface-property-name anchor" id="ord-v1-document-description_systeminstanceaware">systemInstanceAware<br/><span class="optional">OPTIONAL</span><a class="hash-link" href="#ord-v1-document-description_systeminstanceaware" title="Direct link to property"></a></div>|<div class="interface-property-type">boolean</div>|<div class="interface-property-description">Whether the information in the ORD document is **system instance aware**.<br/><br/>This is the case when the provided ORD document potentially differs between **system instances**.<br/>Please note that if a system does not support multitenancy, most likely each system instance has its own<br/>URL and different system instances could even be deployed in a different state (version).<br/>If those conditions apply, `systemInstanceAware` MUST be set to true.<br/><br/>An ORD aggregator that represents a system instance aware perspective MUST fetch a system instance aware ORD document,<br/>not just once per system type but once per **system instance**.<br/><br/>Please note that you can define system instance awareness also on the level of an ORD resource.<br/>It is even possible and valid to have an ORD document that is NOT system instance aware to contain resources that are.<br/>This can be the case because the resource is described in separate resource definition formats which would change,<br/>while the ORD document itself would not change (the links to the resource definition files stay the same).<br/><br/>If some ORD information is **system instance aware** and some is not,<br/>we RECOMMEND to split the information into separate documents and mark their system instance awareness accordingly.<br/><hr/><strong>Example Values</strong>: <ul class="examples"><li>`true`</li></ul></div>|
|<div class="interface-property-name anchor" id="ord-v1-document-description_accessstrategies">accessStrategies<br/><span class="mandatory">MANDATORY</span><a class="hash-link" href="#ord-v1-document-description_accessstrategies" title="Direct link to property"></a></div>|<div class="interface-property-type">Array&lt;[Access Strategy](#access-strategy)&gt;</div>|<div class="interface-property-description">List of supported access strategies for retrieving the metadata from the ORD provider.<br/><br/>An ORD Consumer/ORD Aggregator MAY freely choose any of the listed strategies.<br/><hr/><strong>Array Constraint</strong>: MUST have at least 1 items</div>|

### Access Strategy

Defines the [access strategy](../../spec-extensions/access-strategies/) for accessing the ORD documents from the ORD provider.

| Property | Type | Description |
| -------- | ---- | ----------- |
|<div class="interface-property-name anchor" id="access-strategy_type">type<br/><span class="mandatory">MANDATORY</span><a class="hash-link" href="#access-strategy_type" title="Direct link to property"></a></div>|<div class="interface-property-type">string</div>|<div class="interface-property-description">Defines the authentication/authorization strategy through which the referenced ORD Documents can be accessed.<br/><hr/><strong>Allowed Values</strong>: <ul><li><p>`"open"`: The ORD Documents are openly accessible and not protected via authentication or authorization.<br/><br/>Please note that this most likely means that it is not possible to transport **system instance aware** information<br/>as this access strategy does not specify how to transport tenant information.</p></li><li><p>`"sap:cmp-mtls:v1"`: The ORD information are accessible via Unified Customer Landscape's client certificate.<br/>Please find a more detailed documentation [here](../../spec-extensions/access-strategies/sap-cmp-mtls-v1).</p></li><li><p>`"sap.businesshub:basic-auth:v1"`: The ORD information are accessible for SAP Business Accelerator Hub via Basic Auth strategy.<br/>Please find a more detailed documentation [here](../../spec-extensions/access-strategies/sap-businesshub-basic-v1).</p></li><li><p>`"custom"`: If chosen, `customType` MUST be provided.<br/>If chosen, `customDescription` SHOULD be provided.</p></li></ul><br/><strong>Example Values</strong>: <ul class="examples"><li>`"open"`</li></ul></div>|
|<div class="interface-property-name anchor" id="access-strategy_customtype">customType<br/><span class="optional">OPTIONAL</span><a class="hash-link" href="#access-strategy_customtype" title="Direct link to property"></a></div>|<div class="interface-property-type">string</div>|<div class="interface-property-description">If the fixed `type` enum values need to be extended, an arbitrary `customType` can be provided.<br/><br/>MUST be a valid [Specification ID](../index.md#specification-id).<br/><br/>MUST only be provided if `type` is set to `custom`.<br/><hr/><strong>Regex Pattern</strong>: <code class="regex">^(\[a-z0-9\]+(?:\[.\]\[a-z0-9\]+)\*):(\[a-zA-Z0-9.\_\\-\]+):v(\[0-9\]+)$</code><br/><strong>Maximum Length</strong>: `255`<br/><strong>Example Values</strong>: <ul class="examples"><li>`"sap.xref:open-local-tenant-id:v1"`</li></ul></div>|
|<div class="interface-property-name anchor" id="access-strategy_customdescription">customDescription<br/><span class="optional">OPTIONAL</span><a class="hash-link" href="#access-strategy_customdescription" title="Direct link to property"></a></div>|<div class="interface-property-type">string</div>|<div class="interface-property-description">Human-readable description about how the access is set up, notated in [CommonMark](https://spec.commonmark.org/) (Markdown).<br/><br/>MUST only be provided if `type` is set to `custom`.<br/><hr/><strong>Minimum Length</strong>: `1`<br/><strong>Example Values</strong>: <ul class="examples"><li>`"To set up the access to OData APIs, please refer to the [SAP Cloud for Customer OData API](https://help.sap.com/viewer/1364b70b9cbb417ea5e2d80e966d4f49/CLOUD/en-US) help pages.\""`</li></ul></div>|


## Complete Examples

### examples/Configuration-1.json

```json
{
  "openResourceDiscoveryV1": {
    "documents": [
      {
        "url": "/open-resource-discovery/v1/documents/1",
        "accessStrategies": [
          {
            "type": "open"
          }
        ]
      },
      {
        "url": "/open-resource-discovery/v1/documents/2",
        "accessStrategies": [
          {
            "type": "open"
          },
          {
            "type": "custom",
            "customType": "sap.foo:open-with-tenant-id:v1",
            "customDescription": "The metadata information is openly accessible but system instance aware.\nThe tenant is selected by providing a global or local tenant ID header.\nTo understand how to use this access strategy, please read the documentation on the [ORD Reference App Access Strategies](https://pages.github.com/SAP/open-resource-discovery-reference-application/blob/master/docs/README.md#access-strategies)."
          }
        ],
        "systemInstanceAware": true
      }
    ]
  }
}
```

