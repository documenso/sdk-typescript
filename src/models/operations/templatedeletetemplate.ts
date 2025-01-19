/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TemplateDeleteTemplateRequestBody = {
  templateId: number;
};

/** @internal */
export const TemplateDeleteTemplateRequestBody$inboundSchema: z.ZodType<
  TemplateDeleteTemplateRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  templateId: z.number(),
});

/** @internal */
export type TemplateDeleteTemplateRequestBody$Outbound = {
  templateId: number;
};

/** @internal */
export const TemplateDeleteTemplateRequestBody$outboundSchema: z.ZodType<
  TemplateDeleteTemplateRequestBody$Outbound,
  z.ZodTypeDef,
  TemplateDeleteTemplateRequestBody
> = z.object({
  templateId: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateDeleteTemplateRequestBody$ {
  /** @deprecated use `TemplateDeleteTemplateRequestBody$inboundSchema` instead. */
  export const inboundSchema = TemplateDeleteTemplateRequestBody$inboundSchema;
  /** @deprecated use `TemplateDeleteTemplateRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    TemplateDeleteTemplateRequestBody$outboundSchema;
  /** @deprecated use `TemplateDeleteTemplateRequestBody$Outbound` instead. */
  export type Outbound = TemplateDeleteTemplateRequestBody$Outbound;
}

export function templateDeleteTemplateRequestBodyToJSON(
  templateDeleteTemplateRequestBody: TemplateDeleteTemplateRequestBody,
): string {
  return JSON.stringify(
    TemplateDeleteTemplateRequestBody$outboundSchema.parse(
      templateDeleteTemplateRequestBody,
    ),
  );
}

export function templateDeleteTemplateRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<TemplateDeleteTemplateRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TemplateDeleteTemplateRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TemplateDeleteTemplateRequestBody' from JSON`,
  );
}
