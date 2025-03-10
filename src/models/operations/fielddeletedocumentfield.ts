/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FieldDeleteDocumentFieldRequest = {
  fieldId: number;
};

/**
 * Successful response
 */
export type FieldDeleteDocumentFieldResponse = {
  success: boolean;
};

/** @internal */
export const FieldDeleteDocumentFieldRequest$inboundSchema: z.ZodType<
  FieldDeleteDocumentFieldRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fieldId: z.number(),
});

/** @internal */
export type FieldDeleteDocumentFieldRequest$Outbound = {
  fieldId: number;
};

/** @internal */
export const FieldDeleteDocumentFieldRequest$outboundSchema: z.ZodType<
  FieldDeleteDocumentFieldRequest$Outbound,
  z.ZodTypeDef,
  FieldDeleteDocumentFieldRequest
> = z.object({
  fieldId: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldDeleteDocumentFieldRequest$ {
  /** @deprecated use `FieldDeleteDocumentFieldRequest$inboundSchema` instead. */
  export const inboundSchema = FieldDeleteDocumentFieldRequest$inboundSchema;
  /** @deprecated use `FieldDeleteDocumentFieldRequest$outboundSchema` instead. */
  export const outboundSchema = FieldDeleteDocumentFieldRequest$outboundSchema;
  /** @deprecated use `FieldDeleteDocumentFieldRequest$Outbound` instead. */
  export type Outbound = FieldDeleteDocumentFieldRequest$Outbound;
}

export function fieldDeleteDocumentFieldRequestToJSON(
  fieldDeleteDocumentFieldRequest: FieldDeleteDocumentFieldRequest,
): string {
  return JSON.stringify(
    FieldDeleteDocumentFieldRequest$outboundSchema.parse(
      fieldDeleteDocumentFieldRequest,
    ),
  );
}

export function fieldDeleteDocumentFieldRequestFromJSON(
  jsonString: string,
): SafeParseResult<FieldDeleteDocumentFieldRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FieldDeleteDocumentFieldRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FieldDeleteDocumentFieldRequest' from JSON`,
  );
}

/** @internal */
export const FieldDeleteDocumentFieldResponse$inboundSchema: z.ZodType<
  FieldDeleteDocumentFieldResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean(),
});

/** @internal */
export type FieldDeleteDocumentFieldResponse$Outbound = {
  success: boolean;
};

/** @internal */
export const FieldDeleteDocumentFieldResponse$outboundSchema: z.ZodType<
  FieldDeleteDocumentFieldResponse$Outbound,
  z.ZodTypeDef,
  FieldDeleteDocumentFieldResponse
> = z.object({
  success: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldDeleteDocumentFieldResponse$ {
  /** @deprecated use `FieldDeleteDocumentFieldResponse$inboundSchema` instead. */
  export const inboundSchema = FieldDeleteDocumentFieldResponse$inboundSchema;
  /** @deprecated use `FieldDeleteDocumentFieldResponse$outboundSchema` instead. */
  export const outboundSchema = FieldDeleteDocumentFieldResponse$outboundSchema;
  /** @deprecated use `FieldDeleteDocumentFieldResponse$Outbound` instead. */
  export type Outbound = FieldDeleteDocumentFieldResponse$Outbound;
}

export function fieldDeleteDocumentFieldResponseToJSON(
  fieldDeleteDocumentFieldResponse: FieldDeleteDocumentFieldResponse,
): string {
  return JSON.stringify(
    FieldDeleteDocumentFieldResponse$outboundSchema.parse(
      fieldDeleteDocumentFieldResponse,
    ),
  );
}

export function fieldDeleteDocumentFieldResponseFromJSON(
  jsonString: string,
): SafeParseResult<FieldDeleteDocumentFieldResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FieldDeleteDocumentFieldResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FieldDeleteDocumentFieldResponse' from JSON`,
  );
}
