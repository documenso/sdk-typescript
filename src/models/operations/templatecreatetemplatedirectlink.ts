/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TemplateCreateTemplateDirectLinkRequestBody = {
  templateId: number;
  /**
   * The of the recipient in the current template to transform into the primary recipient when the template is used.
   */
  directRecipientId?: number | undefined;
};

/**
 * Successful response
 */
export type TemplateCreateTemplateDirectLinkResponseBody = {
  id: string;
  templateId: number;
  token: string;
  createdAt: string;
  enabled: boolean;
  directTemplateRecipientId: number;
};

/** @internal */
export const TemplateCreateTemplateDirectLinkRequestBody$inboundSchema:
  z.ZodType<
    TemplateCreateTemplateDirectLinkRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    templateId: z.number(),
    directRecipientId: z.number().optional(),
  });

/** @internal */
export type TemplateCreateTemplateDirectLinkRequestBody$Outbound = {
  templateId: number;
  directRecipientId?: number | undefined;
};

/** @internal */
export const TemplateCreateTemplateDirectLinkRequestBody$outboundSchema:
  z.ZodType<
    TemplateCreateTemplateDirectLinkRequestBody$Outbound,
    z.ZodTypeDef,
    TemplateCreateTemplateDirectLinkRequestBody
  > = z.object({
    templateId: z.number(),
    directRecipientId: z.number().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateCreateTemplateDirectLinkRequestBody$ {
  /** @deprecated use `TemplateCreateTemplateDirectLinkRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    TemplateCreateTemplateDirectLinkRequestBody$inboundSchema;
  /** @deprecated use `TemplateCreateTemplateDirectLinkRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    TemplateCreateTemplateDirectLinkRequestBody$outboundSchema;
  /** @deprecated use `TemplateCreateTemplateDirectLinkRequestBody$Outbound` instead. */
  export type Outbound = TemplateCreateTemplateDirectLinkRequestBody$Outbound;
}

export function templateCreateTemplateDirectLinkRequestBodyToJSON(
  templateCreateTemplateDirectLinkRequestBody:
    TemplateCreateTemplateDirectLinkRequestBody,
): string {
  return JSON.stringify(
    TemplateCreateTemplateDirectLinkRequestBody$outboundSchema.parse(
      templateCreateTemplateDirectLinkRequestBody,
    ),
  );
}

export function templateCreateTemplateDirectLinkRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  TemplateCreateTemplateDirectLinkRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TemplateCreateTemplateDirectLinkRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TemplateCreateTemplateDirectLinkRequestBody' from JSON`,
  );
}

/** @internal */
export const TemplateCreateTemplateDirectLinkResponseBody$inboundSchema:
  z.ZodType<
    TemplateCreateTemplateDirectLinkResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.string(),
    templateId: z.number().int(),
    token: z.string(),
    createdAt: z.string(),
    enabled: z.boolean(),
    directTemplateRecipientId: z.number().int(),
  });

/** @internal */
export type TemplateCreateTemplateDirectLinkResponseBody$Outbound = {
  id: string;
  templateId: number;
  token: string;
  createdAt: string;
  enabled: boolean;
  directTemplateRecipientId: number;
};

/** @internal */
export const TemplateCreateTemplateDirectLinkResponseBody$outboundSchema:
  z.ZodType<
    TemplateCreateTemplateDirectLinkResponseBody$Outbound,
    z.ZodTypeDef,
    TemplateCreateTemplateDirectLinkResponseBody
  > = z.object({
    id: z.string(),
    templateId: z.number().int(),
    token: z.string(),
    createdAt: z.string(),
    enabled: z.boolean(),
    directTemplateRecipientId: z.number().int(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateCreateTemplateDirectLinkResponseBody$ {
  /** @deprecated use `TemplateCreateTemplateDirectLinkResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    TemplateCreateTemplateDirectLinkResponseBody$inboundSchema;
  /** @deprecated use `TemplateCreateTemplateDirectLinkResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    TemplateCreateTemplateDirectLinkResponseBody$outboundSchema;
  /** @deprecated use `TemplateCreateTemplateDirectLinkResponseBody$Outbound` instead. */
  export type Outbound = TemplateCreateTemplateDirectLinkResponseBody$Outbound;
}

export function templateCreateTemplateDirectLinkResponseBodyToJSON(
  templateCreateTemplateDirectLinkResponseBody:
    TemplateCreateTemplateDirectLinkResponseBody,
): string {
  return JSON.stringify(
    TemplateCreateTemplateDirectLinkResponseBody$outboundSchema.parse(
      templateCreateTemplateDirectLinkResponseBody,
    ),
  );
}

export function templateCreateTemplateDirectLinkResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  TemplateCreateTemplateDirectLinkResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TemplateCreateTemplateDirectLinkResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TemplateCreateTemplateDirectLinkResponseBody' from JSON`,
  );
}
