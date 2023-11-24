# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) rules, but omits the **patch** level in the spec version number.

## [unreleased]

## [1.8.3]

### Added

- Added Excel and CSV files export that gives a high-level overview of ORD entities and their attributes

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

- This is the first public release of the ORD specification.
