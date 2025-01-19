/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DocumentDuplicateDocumentRequestBody = {
  documentId: number;
};

/**
 * Successful response
 */
export type DocumentDuplicateDocumentResponseBody = {
  documentId: number;
};

/** @internal */
export const DocumentDuplicateDocumentRequestBody$inboundSchema: z.ZodType<
  DocumentDuplicateDocumentRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  documentId: z.number(),
});

/** @internal */
export type DocumentDuplicateDocumentRequestBody$Outbound = {
  documentId: number;
};

/** @internal */
export const DocumentDuplicateDocumentRequestBody$outboundSchema: z.ZodType<
  DocumentDuplicateDocumentRequestBody$Outbound,
  z.ZodTypeDef,
  DocumentDuplicateDocumentRequestBody
> = z.object({
  documentId: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentDuplicateDocumentRequestBody$ {
  /** @deprecated use `DocumentDuplicateDocumentRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    DocumentDuplicateDocumentRequestBody$inboundSchema;
  /** @deprecated use `DocumentDuplicateDocumentRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    DocumentDuplicateDocumentRequestBody$outboundSchema;
  /** @deprecated use `DocumentDuplicateDocumentRequestBody$Outbound` instead. */
  export type Outbound = DocumentDuplicateDocumentRequestBody$Outbound;
}

export function documentDuplicateDocumentRequestBodyToJSON(
  documentDuplicateDocumentRequestBody: DocumentDuplicateDocumentRequestBody,
): string {
  return JSON.stringify(
    DocumentDuplicateDocumentRequestBody$outboundSchema.parse(
      documentDuplicateDocumentRequestBody,
    ),
  );
}

export function documentDuplicateDocumentRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<DocumentDuplicateDocumentRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DocumentDuplicateDocumentRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentDuplicateDocumentRequestBody' from JSON`,
  );
}

/** @internal */
export const DocumentDuplicateDocumentResponseBody$inboundSchema: z.ZodType<
  DocumentDuplicateDocumentResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  documentId: z.number(),
});

/** @internal */
export type DocumentDuplicateDocumentResponseBody$Outbound = {
  documentId: number;
};

/** @internal */
export const DocumentDuplicateDocumentResponseBody$outboundSchema: z.ZodType<
  DocumentDuplicateDocumentResponseBody$Outbound,
  z.ZodTypeDef,
  DocumentDuplicateDocumentResponseBody
> = z.object({
  documentId: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentDuplicateDocumentResponseBody$ {
  /** @deprecated use `DocumentDuplicateDocumentResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DocumentDuplicateDocumentResponseBody$inboundSchema;
  /** @deprecated use `DocumentDuplicateDocumentResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DocumentDuplicateDocumentResponseBody$outboundSchema;
  /** @deprecated use `DocumentDuplicateDocumentResponseBody$Outbound` instead. */
  export type Outbound = DocumentDuplicateDocumentResponseBody$Outbound;
}

export function documentDuplicateDocumentResponseBodyToJSON(
  documentDuplicateDocumentResponseBody: DocumentDuplicateDocumentResponseBody,
): string {
  return JSON.stringify(
    DocumentDuplicateDocumentResponseBody$outboundSchema.parse(
      documentDuplicateDocumentResponseBody,
    ),
  );
}

export function documentDuplicateDocumentResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DocumentDuplicateDocumentResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DocumentDuplicateDocumentResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentDuplicateDocumentResponseBody' from JSON`,
  );
}
