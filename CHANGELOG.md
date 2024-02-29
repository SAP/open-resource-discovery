# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) rules,
but omits the **patch** level in the spec version number.

For a roadmap including expected timeline, please refer to [ROADMAP.md](./ROADMAP.md)

## [unreleased]

### Added

- Added How To guide for ORD Provider adoption (as new detail article)

### Changed

- Providing the `sunsetDate` for a deprecated resource is now only recommended instead of mandatory (compatible change)
  - "If the `releaseStatus` is set to `deprecated`, the `sunsetDate` SHOULD be provided (if already known)."
  - "Once the sunset date is known and ready to be communicated externally, it MUST be provided here."

## [1.8.5]

### Fixed

- Accidentally exported an `x-` attribute in the ORD JSON Schema interface in `Document.schema.json`
  - This export is meant to be clean of such extension attributes, as validators as AJV will complain on it by default
  - The `Document.annotated.schema.json` export keeps the extension attributes intact.

## [1.8.4]

### Fixed

- **Breaking**: The relation of a data product input port to the integration dependency was accidentally modeled as composition, not association,
  - Since the Data Product concept is still in beta, we'll ship this change as a fix and notify current adopters

### Added

- Added statement that there's a reserved `customer` vendor namespace
- The `.well-known/open-resource-discovery` URI is now [officially registered](https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml).

## [1.8.3]

### Added

- Added Excel and CSV files export that gives a high-level overview of ORD entities and their attributes

### Removed

- Removed `sap-delta-sharing-combined` API resource definition format, as it has not be specified yet.
  - It may be reintroduced in the future, if a specification exists and a producer for it exists.

### Fixed

- Fixed some ORD ID regexp, where it was still allowed to have `alpha` or `beta` instead of a major version
  - This affected Capability and Integration Dependency.
  - Instead, the `releaseStatus` property should be used to set `beta`.

## [1.8.2]

### Changed

- Made `accessStrategies` optional within the ORD document.
  - If this property is not provided, the definition URL will be available through the same access strategy as this ORD document.
  - We RECOMMEND anyway that the attached metadata definitions are available with the same access strategies, to simplify the aggregator crawling process.
- Minor clarification on visibility of Packages (since they don't have an explicit property for it)

### Fixed

- Product `title` property did not properly inherit constraints like the other `title` attributes (min- and max-length)

## [1.8.1]

### Changed

- Fix: Data Products need to have at least one output port
  - This is implied through the definition of a Data Product
  - Breaking change that we'll push as a bugfix, as so far it was clear to have at least one output port

## [1.8.0]

### Added

- Added [Data Product](../../spec-v1/interfaces/document.md#data-product) concept.
  - for the time being in **beta** status
- Added `runtimeRestriction` to packages
- Added `responsible` to APIs, events and data products
- Added `usage` to APIs
- Added new `apiProtocol`s: `delta-sharing` and `sap-ina-api-v1`
- Added new API Resource Definition `type`: `sap-delta-sharing-combined`

### Changed

- Changed values of `supportedUseCases` on APIs
  - Technically a breaking change, but no consumer used it, therefore we introduce it as minor change
- Introduced a clear distinction between application namespace and authority namespace instead of "unit namespace"
  - At SAP we already made that distinction.
  - Having a unit-namespace as a simplification didn't work out in all cases and introduced an unnecessary new term
  - This change only affects how we name things and allows us to be more precise
  - For `Entity Type` its now clearly stated that they can also have an authority namespace

## [1.7.2]

### Fixed

- Fixed type of `minVersion` property. It was accidentally set to `boolean`, but is obviously meant as a (semver) version `string`

## [1.7.1]

### Added

- ORD has been made public as Open Source under Apache 2 license.
  - GitHub: https://github.com/SAP/open-resource-discovery
  - Announcement: https://blogs.sap.com/2023/11/14/open-resource-discovery-a-protocol-for-decentralized-metadata-discovery-is-now-open-source/
- Added `eventResourceLinks` that allow to add typed links with predefined semantics
  - This was already available for APIs and just missing for event resources
  - In both cases, they share the same interface and predefined types
  - The internal interface name changed from `APIResourceLink` to `APIEventResourceLink`
    - This doesn't have any effect on the interface contract, but may need to be considered for internal refactoring / renaming.

