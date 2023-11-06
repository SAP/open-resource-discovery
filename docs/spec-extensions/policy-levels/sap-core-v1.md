---
title: SAP Core v1
---

# SAP Core Policy Level (v1.0)

## Description

This policy level (aka compliance level) `sap:core:v1` MUST be fulfilled by all SAP applications and services.
Exceptions are only allowed on a case by case basis.

This policy level is based on various SAP guidelines and rules - most of them which are already established.

It defines the core rules and guidelines that are shared across SAP, although more specific rules and guidelines MAY be applied on top.

## General Policies

### Namespaces

- All SAP [namespaces](../../spec-v1/index.md#namespaces) MUST be registered in the SAP namespace-registry.
  - All SAP applications MUST use the `sap` vendor namespace.

### ID Constraints

- ORD IDs of packages and their resources that have already been published to the public [SAP Business Accelerator Hub](https://api.sap.com/) MUST have a correlation to their already existing ID. This is necessary to keep existing URLs stable and know that the same resource is now described via ORD, not a new one is to be created.
  - Add a [Correlation ID](../../spec-v1/index.md#correlation-id) to the old ID:
    - Add a `correlationIds` entry, that starts with `sap.businesshub` namespace and then the Business Accelerator Hub concept name (that is also part of the Old URL), e.g. `api` or `package`
    - Package Example: `{ "ordId": "sap.s4:package:SomeName:v1", "correlationIds": ["sap.businesshub:package:SAPS4HANACloud"] }`
    - API Example: `{ "ordId": "sap.s4:apiResource:AccountingDocumentRead:v1", "correlationIds": ["sap.businesshub:api:API_OPLACCTGDOCITEMCUBE_SRV"] }`

### Title Constraints

- All `title` values (except link titles) MUST NOT exceed 120 characters, as per SAP API Style Guide and SAP Business Accelerator Hub guideline recommendations.
- All `title` values (except link titles) MUST NOT contain the term "Deprecated" or "Decommissioned". Use `releaseStatus` to indicate this instead, if available.
- All `title` values (except link titles) SHOULD only contain alphanumeric characters, spaces, hyphens, comma, parentheses and forward slashes (but only if it is not used used as a substitute for 'and' or 'or').
- All `title` values (except link titles) SHOULD NOT contain version number and operation words like create, read, delete, and update.

### Description Constraints

- All `shortDescription` values SHOULD NOT exceed 180 characters.
- All `shortDescription` values MUST NOT repeat or start with the object name.
- All `shortDescription` values SHOULD only use alphanumeric characters, spaces, underscores, hyphens, period, comma, parentheses, possessive apostrophes and specially approved names (`S/4HANA`, `country/region` and `G/L` (General ledger))
- All `description` values MUST NOT contain the short description.
  They are complementary to the short description and should not just be a longer replacement.

### Misc Constraints

- For setting and incrementing API versions and major versions, the SAP API Compatibility rules MUST be followed.
- If an API or event resource has been deprecated, the `deprecationDate` MUST be provided.
- For all `releaseStatus` changes, a changelog entry SHOULD be created.
- For the taxonomy properties `lineOfBusiness` and `industry`: Only the recommended values MUST be chosen.
- The `accessStrategy` `open` MUST NOT be used without explicit consent by the responsible security experts, especially when the metadata could expose tenant (customer) specific information.
- Although `Vendor` is technically not validated by a policy level, we need to ensure that within SAP we don't define the SAP vendor multiple times or reference it differently.
  - The SAP `Vendor` MUST NOT be defined by any SAP application or service, as this is done centrally.
  - The correct value for a SAP vendor reference is `sap:vendor:SAP:`.
- For OpenAPI documents which are already published on Business Accelerator Hub, the existing `x-sap-` extension properties MUST be kept even if the information are now also in the ORD Document. This is to not break end-consumers that only have access to the OpenAPI file. We MAY remove this requirement in the future, by automatically post-processing the ORD information into the OpenAPI files centrally (feature request).

## Context Specific Policies

### Package

- For [Packages](../../spec-v1/interfaces/document.md#package) with policy level sap, the Governance Guidelines for API Packages MUST be followed.
  - This includes the current limitation that Packages MUST NOT contain mixed resource types. E.g., a Package must only contain either APIs or Events, but never both together.
  - SAP Business Accelerator Hub publishing becomes slow if too much content is in a Package (> 100 resources). Consider creating smaller packages that are split around the aspect of what needs to be published in one transaction.
- The `vendor` of a Package MUST be set to `sap:vendor:SAP:`.

### Consumption Bundle

- For public or internal [API Resources](../../spec-v1/interfaces/document.md#api-resource) with `inbound` or `mixed` direction (consumption pattern): MUST provide and assign a [Consumption Bundle](../../spec-v1/interfaces/document.md#consumption-bundle). This is necessary as some SAP ORD Consumers rely on Consumption Bundles to find and navigate accessible resources.

### API Resource

- For [API Resources](../../spec-v1/interfaces/document.md#api-resource) the Guidelines for publishing API Resources on the SAP Business Accelerator Hub MUST be followed according to our internal API and external API guidelines.
  The first link includes a decision table for internal vs. external, which corresponds to `visibility` internal vs. public in ORD.
- The [`extensible`](../../spec-v1/interfaces/document.md#api-resource_extensible) property MUST be provided.
- For API Resources with `visibility`: "public" or "internal":
  - Resource definitions MUST be provided for OData, REST, GraphQL and SOAP APIs.
  - OData APIs MUST have a resource definition of `"type": "edmx"` AND additionally one of either `"type": "openapi-v3"` or `"type": "openapi-v2"`. Optionally, `"type": "csdl-json"` may be added."
  - Plain REST APIs MUST have a resource definition of `"type": "openapi-v3"` (RECOMMENDED) or `"type": "openapi-v2"`.
  - GraphQL APIs MUST have a resource definition of `"type": "graphql-sdl"`.
  - SOAP APIs MUST have a resource definition of `"type": "wsdl-v2"` (RECOMMENDED) or `"type": "wsdl-v1"`.

- OpenAPI definitions SHOULD be validated via the SAP API Metadata Validator, using `sap:core:v1` compliance level.
- The SAP API Harmonization Guideline rules MAY be adhered, but are not part of the `sap:core:v1` scope.
  - We intend to release an additional policy level (`sap:core:v2`?) that includes this as MUST requirement.

### Event Resource

- For [Event Resources](../../spec-v1/interfaces/document.md#event-resource) the [Governance Guidelines for Events](https://help.sap.com/viewer/9c880f03c6084ca4b2573b5605ec7a83/Cloud/en-US/3cda0ea7b65849108d530eb33ce2fb85.html) MUST be followed.
- The `extensible` property MUST be provided.
- For Event Resources with `visibility`: "public" or "internal":
  - Resource definitions MUST be provided.
  - CloudEvents MUST have a resource definition of `"type": "asyncapi-v2"` (see [AsyncAPI specification 2.0](https://www.asyncapi.com/docs/specifications/2.0.0)).
  - SAP Business Events (that conform to the SAP Event Specification:
    - MUST use the SAP Event Catalog standard, which is compatible to AsyncAPI 2.0 (`"type": "asyncapi-v2"`).
    - MUST NOT be part of a consumption bundle.
      - Events can only be consumed at an intermediary, i.e., the SAP Event Mesh.
      - Consequently, the producing application cannot describe how they are eventually consumed.
- SAP Event Catalogs SHOULD be validated via the SAP API Metadata Validator, using `sap:core:v1` compliance level.

### Entity Types

- All Entity Type `description` values MUST NOT exceed 1000 characters

### Extensible

- If the mandatory [Extensible](../../spec-v1/interfaces/document.md#extensible) object has a [description](../../spec-v1/interfaces/document.md#extensible_description), it MUST follow the guidance and rules of the SAP Technology Guideline TG12.R2.

### Correlation IDs

With ORD comes a [Correlation ID](../../spec-v1/index.md#correlation-id) concept.

All correlations that target an `sap.*` namespace MUST use registered correlation ID types.
Like the namespaces, they can be registered in the SAP namespace-registry.

This will help us to 1) achieve internal consistency that we can also automatically validate and 2) get an overview of valid and registered Correlation ID Types.
