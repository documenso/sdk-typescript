/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DocumentResendDocumentRequest = {
  documentId: number;
  /**
   * The IDs of the recipients to redistribute the document to.
   */
  recipients: Array<number>;
};

/**
 * Successful response
 */
export type DocumentResendDocumentResponse = {
  success: boolean;
};

/** @internal */
export const DocumentResendDocumentRequest$inboundSchema: z.ZodType<
  DocumentResendDocumentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  documentId: z.number(),
  recipients: z.array(z.number()),
});

/** @internal */
export type DocumentResendDocumentRequest$Outbound = {
  documentId: number;
  recipients: Array<number>;
};

/** @internal */
export const DocumentResendDocumentRequest$outboundSchema: z.ZodType<
  DocumentResendDocumentRequest$Outbound,
  z.ZodTypeDef,
  DocumentResendDocumentRequest
> = z.object({
  documentId: z.number(),
  recipients: z.array(z.number()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentResendDocumentRequest$ {
  /** @deprecated use `DocumentResendDocumentRequest$inboundSchema` instead. */
  export const inboundSchema = DocumentResendDocumentRequest$inboundSchema;
  /** @deprecated use `DocumentResendDocumentRequest$outboundSchema` instead. */
  export const outboundSchema = DocumentResendDocumentRequest$outboundSchema;
  /** @deprecated use `DocumentResendDocumentRequest$Outbound` instead. */
  export type Outbound = DocumentResendDocumentRequest$Outbound;
}

export function documentResendDocumentRequestToJSON(
  documentResendDocumentRequest: DocumentResendDocumentRequest,
): string {
  return JSON.stringify(
    DocumentResendDocumentRequest$outboundSchema.parse(
      documentResendDocumentRequest,
    ),
  );
}

export function documentResendDocumentRequestFromJSON(
  jsonString: string,
): SafeParseResult<DocumentResendDocumentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentResendDocumentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentResendDocumentRequest' from JSON`,
  );
}

/** @internal */
export const DocumentResendDocumentResponse$inboundSchema: z.ZodType<
  DocumentResendDocumentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean(),
});

/** @internal */
export type DocumentResendDocumentResponse$Outbound = {
  success: boolean;
};

/** @internal */
export const DocumentResendDocumentResponse$outboundSchema: z.ZodType<
  DocumentResendDocumentResponse$Outbound,
  z.ZodTypeDef,
  DocumentResendDocumentResponse
> = z.object({
  success: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentResendDocumentResponse$ {
  /** @deprecated use `DocumentResendDocumentResponse$inboundSchema` instead. */
  export const inboundSchema = DocumentResendDocumentResponse$inboundSchema;
  /** @deprecated use `DocumentResendDocumentResponse$outboundSchema` instead. */
  export const outboundSchema = DocumentResendDocumentResponse$outboundSchema;
  /** @deprecated use `DocumentResendDocumentResponse$Outbound` instead. */
  export type Outbound = DocumentResendDocumentResponse$Outbound;
}

export function documentResendDocumentResponseToJSON(
  documentResendDocumentResponse: DocumentResendDocumentResponse,
): string {
  return JSON.stringify(
    DocumentResendDocumentResponse$outboundSchema.parse(
      documentResendDocumentResponse,
    ),
  );
}

export function documentResendDocumentResponseFromJSON(
  jsonString: string,
): SafeParseResult<DocumentResendDocumentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentResendDocumentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentResendDocumentResponse' from JSON`,
  );
}
