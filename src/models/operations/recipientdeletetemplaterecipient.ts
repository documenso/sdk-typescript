/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RecipientDeleteTemplateRecipientRequestBody = {
  recipientId: number;
};

/**
 * Successful response
 */
export type RecipientDeleteTemplateRecipientResponseBody = {
  success: boolean;
};

/** @internal */
export const RecipientDeleteTemplateRecipientRequestBody$inboundSchema:
  z.ZodType<
    RecipientDeleteTemplateRecipientRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    recipientId: z.number(),
  });

/** @internal */
export type RecipientDeleteTemplateRecipientRequestBody$Outbound = {
  recipientId: number;
};

/** @internal */
export const RecipientDeleteTemplateRecipientRequestBody$outboundSchema:
  z.ZodType<
    RecipientDeleteTemplateRecipientRequestBody$Outbound,
    z.ZodTypeDef,
    RecipientDeleteTemplateRecipientRequestBody
  > = z.object({
    recipientId: z.number(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientDeleteTemplateRecipientRequestBody$ {
  /** @deprecated use `RecipientDeleteTemplateRecipientRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    RecipientDeleteTemplateRecipientRequestBody$inboundSchema;
  /** @deprecated use `RecipientDeleteTemplateRecipientRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    RecipientDeleteTemplateRecipientRequestBody$outboundSchema;
  /** @deprecated use `RecipientDeleteTemplateRecipientRequestBody$Outbound` instead. */
  export type Outbound = RecipientDeleteTemplateRecipientRequestBody$Outbound;
}

export function recipientDeleteTemplateRecipientRequestBodyToJSON(
  recipientDeleteTemplateRecipientRequestBody:
    RecipientDeleteTemplateRecipientRequestBody,
): string {
  return JSON.stringify(
    RecipientDeleteTemplateRecipientRequestBody$outboundSchema.parse(
      recipientDeleteTemplateRecipientRequestBody,
    ),
  );
}

export function recipientDeleteTemplateRecipientRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientDeleteTemplateRecipientRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientDeleteTemplateRecipientRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientDeleteTemplateRecipientRequestBody' from JSON`,
  );
}

/** @internal */
export const RecipientDeleteTemplateRecipientResponseBody$inboundSchema:
  z.ZodType<
    RecipientDeleteTemplateRecipientResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    success: z.boolean(),
  });

/** @internal */
export type RecipientDeleteTemplateRecipientResponseBody$Outbound = {
  success: boolean;
};

/** @internal */
export const RecipientDeleteTemplateRecipientResponseBody$outboundSchema:
  z.ZodType<
    RecipientDeleteTemplateRecipientResponseBody$Outbound,
    z.ZodTypeDef,
    RecipientDeleteTemplateRecipientResponseBody
  > = z.object({
    success: z.boolean(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientDeleteTemplateRecipientResponseBody$ {
  /** @deprecated use `RecipientDeleteTemplateRecipientResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    RecipientDeleteTemplateRecipientResponseBody$inboundSchema;
  /** @deprecated use `RecipientDeleteTemplateRecipientResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    RecipientDeleteTemplateRecipientResponseBody$outboundSchema;
  /** @deprecated use `RecipientDeleteTemplateRecipientResponseBody$Outbound` instead. */
  export type Outbound = RecipientDeleteTemplateRecipientResponseBody$Outbound;
}

export function recipientDeleteTemplateRecipientResponseBodyToJSON(
  recipientDeleteTemplateRecipientResponseBody:
    RecipientDeleteTemplateRecipientResponseBody,
): string {
  return JSON.stringify(
    RecipientDeleteTemplateRecipientResponseBody$outboundSchema.parse(
      recipientDeleteTemplateRecipientResponseBody,
    ),
  );
}

export function recipientDeleteTemplateRecipientResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientDeleteTemplateRecipientResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientDeleteTemplateRecipientResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientDeleteTemplateRecipientResponseBody' from JSON`,
  );
}
