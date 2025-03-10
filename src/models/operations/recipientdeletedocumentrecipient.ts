/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RecipientDeleteDocumentRecipientRequest = {
  recipientId: number;
};

/**
 * Successful response
 */
export type RecipientDeleteDocumentRecipientResponse = {
  success: boolean;
};

/** @internal */
export const RecipientDeleteDocumentRecipientRequest$inboundSchema: z.ZodType<
  RecipientDeleteDocumentRecipientRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  recipientId: z.number(),
});

/** @internal */
export type RecipientDeleteDocumentRecipientRequest$Outbound = {
  recipientId: number;
};

/** @internal */
export const RecipientDeleteDocumentRecipientRequest$outboundSchema: z.ZodType<
  RecipientDeleteDocumentRecipientRequest$Outbound,
  z.ZodTypeDef,
  RecipientDeleteDocumentRecipientRequest
> = z.object({
  recipientId: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientDeleteDocumentRecipientRequest$ {
  /** @deprecated use `RecipientDeleteDocumentRecipientRequest$inboundSchema` instead. */
  export const inboundSchema =
    RecipientDeleteDocumentRecipientRequest$inboundSchema;
  /** @deprecated use `RecipientDeleteDocumentRecipientRequest$outboundSchema` instead. */
  export const outboundSchema =
    RecipientDeleteDocumentRecipientRequest$outboundSchema;
  /** @deprecated use `RecipientDeleteDocumentRecipientRequest$Outbound` instead. */
  export type Outbound = RecipientDeleteDocumentRecipientRequest$Outbound;
}

export function recipientDeleteDocumentRecipientRequestToJSON(
  recipientDeleteDocumentRecipientRequest:
    RecipientDeleteDocumentRecipientRequest,
): string {
  return JSON.stringify(
    RecipientDeleteDocumentRecipientRequest$outboundSchema.parse(
      recipientDeleteDocumentRecipientRequest,
    ),
  );
}

export function recipientDeleteDocumentRecipientRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientDeleteDocumentRecipientRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientDeleteDocumentRecipientRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientDeleteDocumentRecipientRequest' from JSON`,
  );
}

/** @internal */
export const RecipientDeleteDocumentRecipientResponse$inboundSchema: z.ZodType<
  RecipientDeleteDocumentRecipientResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean(),
});

/** @internal */
export type RecipientDeleteDocumentRecipientResponse$Outbound = {
  success: boolean;
};

/** @internal */
export const RecipientDeleteDocumentRecipientResponse$outboundSchema: z.ZodType<
  RecipientDeleteDocumentRecipientResponse$Outbound,
  z.ZodTypeDef,
  RecipientDeleteDocumentRecipientResponse
> = z.object({
  success: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientDeleteDocumentRecipientResponse$ {
  /** @deprecated use `RecipientDeleteDocumentRecipientResponse$inboundSchema` instead. */
  export const inboundSchema =
    RecipientDeleteDocumentRecipientResponse$inboundSchema;
  /** @deprecated use `RecipientDeleteDocumentRecipientResponse$outboundSchema` instead. */
  export const outboundSchema =
    RecipientDeleteDocumentRecipientResponse$outboundSchema;
  /** @deprecated use `RecipientDeleteDocumentRecipientResponse$Outbound` instead. */
  export type Outbound = RecipientDeleteDocumentRecipientResponse$Outbound;
}

export function recipientDeleteDocumentRecipientResponseToJSON(
  recipientDeleteDocumentRecipientResponse:
    RecipientDeleteDocumentRecipientResponse,
): string {
  return JSON.stringify(
    RecipientDeleteDocumentRecipientResponse$outboundSchema.parse(
      recipientDeleteDocumentRecipientResponse,
    ),
  );
}

export function recipientDeleteDocumentRecipientResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientDeleteDocumentRecipientResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientDeleteDocumentRecipientResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientDeleteDocumentRecipientResponse' from JSON`,
  );
}
