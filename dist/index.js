"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordConfigurationSchemaWithAnnotations = exports.ordConfigurationSchema = exports.ordDocumentSchemaWithAnnotations = exports.ordDocumentSchema = void 0;
const fs = __importStar(require("fs"));
__exportStar(require("./types/v1/Document"), exports);
/**
 * The JSON Schema (draft-07) describing the ORD Document interface
 */
exports.ordDocumentSchema = JSON.parse(fs.readFileSync(`${__dirname}/../static/spec-v1/interfaces/Document.schema.json`).toString());
/**
 * The JSON Schema (draft-07) describing the ORD Document interface
 * with additional annotations (x-* attributes) like x-recommended
 */
exports.ordDocumentSchemaWithAnnotations = JSON.parse(fs.readFileSync(`${__dirname}/../static/spec-v1/interfaces/Document.annotated.schema.json`).toString());
/**
 * The JSON Schema (draft-07) describing the ORD Configuration interface
 */
exports.ordConfigurationSchema = JSON.parse(fs.readFileSync(`${__dirname}/../static/spec-v1/interfaces/Configuration.schema.json`).toString());
/**
 * The JSON Schema (draft-07) describing the ORD Configuration interface
 * with additional annotations (x-* attributes) like x-recommended
 */
exports.ordConfigurationSchemaWithAnnotations = JSON.parse(fs.readFileSync(`${__dirname}/../static/spec-v1/interfaces/Configuration.annotated.schema.json`).toString());
