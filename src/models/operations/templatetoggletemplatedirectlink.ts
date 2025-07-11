/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TemplateToggleTemplateDirectLinkRequest = {
  templateId: number;
  enabled: boolean;
};

/**
 * Successful response
 */
export type TemplateToggleTemplateDirectLinkResponse = {
  id: string;
  templateId: number;
  token: string;
  createdAt: string;
  enabled: boolean;
  directTemplateRecipientId: number;
};

/** @internal */
export const TemplateToggleTemplateDirectLinkRequest$inboundSchema: z.ZodType<
  TemplateToggleTemplateDirectLinkRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  templateId: z.number(),
  enabled: z.boolean(),
});

/** @internal */
export type TemplateToggleTemplateDirectLinkRequest$Outbound = {
  templateId: number;
  enabled: boolean;
};

/** @internal */
export const TemplateToggleTemplateDirectLinkRequest$outboundSchema: z.ZodType<
  TemplateToggleTemplateDirectLinkRequest$Outbound,
  z.ZodTypeDef,
  TemplateToggleTemplateDirectLinkRequest
> = z.object({
  templateId: z.number(),
  enabled: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateToggleTemplateDirectLinkRequest$ {
  /** @deprecated use `TemplateToggleTemplateDirectLinkRequest$inboundSchema` instead. */
  export const inboundSchema =
    TemplateToggleTemplateDirectLinkRequest$inboundSchema;
  /** @deprecated use `TemplateToggleTemplateDirectLinkRequest$outboundSchema` instead. */
  export const outboundSchema =
    TemplateToggleTemplateDirectLinkRequest$outboundSchema;
  /** @deprecated use `TemplateToggleTemplateDirectLinkRequest$Outbound` instead. */
  export type Outbound = TemplateToggleTemplateDirectLinkRequest$Outbound;
}

export function templateToggleTemplateDirectLinkRequestToJSON(
  templateToggleTemplateDirectLinkRequest:
    TemplateToggleTemplateDirectLinkRequest,
): string {
  return JSON.stringify(
    TemplateToggleTemplateDirectLinkRequest$outboundSchema.parse(
      templateToggleTemplateDirectLinkRequest,
    ),
  );
}

export function templateToggleTemplateDirectLinkRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  TemplateToggleTemplateDirectLinkRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TemplateToggleTemplateDirectLinkRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TemplateToggleTemplateDirectLinkRequest' from JSON`,
  );
}

/** @internal */
export const TemplateToggleTemplateDirectLinkResponse$inboundSchema: z.ZodType<
  TemplateToggleTemplateDirectLinkResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  templateId: z.number(),
  token: z.string(),
  createdAt: z.string(),
  enabled: z.boolean(),
  directTemplateRecipientId: z.number(),
});

/** @internal */
export type TemplateToggleTemplateDirectLinkResponse$Outbound = {
  id: string;
  templateId: number;
  token: string;
  createdAt: string;
  enabled: boolean;
  directTemplateRecipientId: number;
};

/** @internal */
export const TemplateToggleTemplateDirectLinkResponse$outboundSchema: z.ZodType<
  TemplateToggleTemplateDirectLinkResponse$Outbound,
  z.ZodTypeDef,
  TemplateToggleTemplateDirectLinkResponse
> = z.object({
  id: z.string(),
  templateId: z.number(),
  token: z.string(),
  createdAt: z.string(),
  enabled: z.boolean(),
  directTemplateRecipientId: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateToggleTemplateDirectLinkResponse$ {
  /** @deprecated use `TemplateToggleTemplateDirectLinkResponse$inboundSchema` instead. */
  export const inboundSchema =
    TemplateToggleTemplateDirectLinkResponse$inboundSchema;
  /** @deprecated use `TemplateToggleTemplateDirectLinkResponse$outboundSchema` instead. */
  export const outboundSchema =
    TemplateToggleTemplateDirectLinkResponse$outboundSchema;
  /** @deprecated use `TemplateToggleTemplateDirectLinkResponse$Outbound` instead. */
  export type Outbound = TemplateToggleTemplateDirectLinkResponse$Outbound;
}

export function templateToggleTemplateDirectLinkResponseToJSON(
  templateToggleTemplateDirectLinkResponse:
    TemplateToggleTemplateDirectLinkResponse,
): string {
  return JSON.stringify(
    TemplateToggleTemplateDirectLinkResponse$outboundSchema.parse(
      templateToggleTemplateDirectLinkResponse,
    ),
  );
}

export function templateToggleTemplateDirectLinkResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  TemplateToggleTemplateDirectLinkResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TemplateToggleTemplateDirectLinkResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TemplateToggleTemplateDirectLinkResponse' from JSON`,
  );
}
