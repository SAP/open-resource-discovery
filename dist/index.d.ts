import { JSONSchema7 } from 'json-schema';
export * from './types/v1/Document';
export { ORDConfiguration, ORDV1Support, ORDV1DocumentDescription } from './types/v1/Configuration';
/**
 * The JSON Schema (draft-07) describing the ORD Document interface
 */
export declare const ordDocumentSchema: JSONSchema7;
/**
 * The JSON Schema (draft-07) describing the ORD Document interface
 * with additional annotations (x-* attributes) like x-recommended
 */
export declare const ordDocumentSchemaWithAnnotations: JSONSchema7;
/**
 * The JSON Schema (draft-07) describing the ORD Configuration interface
 */
export declare const ordConfigurationSchema: JSONSchema7;
/**
 * The JSON Schema (draft-07) describing the ORD Configuration interface
 * with additional annotations (x-* attributes) like x-recommended
 */
export declare const ordConfigurationSchemaWithAnnotations: JSONSchema7;
