/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TemplateMoveTemplateToTeamRequest = {
  /**
   * The ID of the template to move to.
   */
  templateId: number;
  /**
   * The ID of the team to move the template to.
   */
  teamId: number;
};

export const TemplateMoveTemplateToTeamType = {
  Public: "PUBLIC",
  Private: "PRIVATE",
} as const;
export type TemplateMoveTemplateToTeamType = ClosedEnum<
  typeof TemplateMoveTemplateToTeamType
>;

export const TemplateMoveTemplateToTeamVisibility = {
  Everyone: "EVERYONE",
  ManagerAndAbove: "MANAGER_AND_ABOVE",
  Admin: "ADMIN",
} as const;
export type TemplateMoveTemplateToTeamVisibility = ClosedEnum<
  typeof TemplateMoveTemplateToTeamVisibility
>;

/**
 * The type of authentication required for the recipient to access the document.
 */
export const TemplateMoveTemplateToTeamGlobalAccessAuth = {
  Account: "ACCOUNT",
} as const;
/**
 * The type of authentication required for the recipient to access the document.
 */
export type TemplateMoveTemplateToTeamGlobalAccessAuth = ClosedEnum<
  typeof TemplateMoveTemplateToTeamGlobalAccessAuth
>;

/**
 * The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.
 */
export const TemplateMoveTemplateToTeamGlobalActionAuth = {
  Account: "ACCOUNT",
  Passkey: "PASSKEY",
  TwoFactorAuth: "TWO_FACTOR_AUTH",
} as const;
/**
 * The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.
 */
export type TemplateMoveTemplateToTeamGlobalActionAuth = ClosedEnum<
  typeof TemplateMoveTemplateToTeamGlobalActionAuth
>;

export type TemplateMoveTemplateToTeamAuthOptions = {
  /**
   * The type of authentication required for the recipient to access the document.
   */
  globalAccessAuth: TemplateMoveTemplateToTeamGlobalAccessAuth | null;
  /**
   * The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.
   */
  globalActionAuth: TemplateMoveTemplateToTeamGlobalActionAuth | null;
};

/**
 * Successful response
 */
export type TemplateMoveTemplateToTeamResponse = {
  type: TemplateMoveTemplateToTeamType;
  visibility: TemplateMoveTemplateToTeamVisibility;
  id: number;
  externalId: string | null;
  title: string;
  userId: number;
  teamId: number | null;
  authOptions: TemplateMoveTemplateToTeamAuthOptions | null;
  templateDocumentDataId: string;
  createdAt: string;
  updatedAt: string;
  publicTitle: string;
  publicDescription: string;
};

/** @internal */
export const TemplateMoveTemplateToTeamRequest$inboundSchema: z.ZodType<
  TemplateMoveTemplateToTeamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  templateId: z.number(),
  teamId: z.number(),
});

/** @internal */
export type TemplateMoveTemplateToTeamRequest$Outbound = {
  templateId: number;
  teamId: number;
};

/** @internal */
export const TemplateMoveTemplateToTeamRequest$outboundSchema: z.ZodType<
  TemplateMoveTemplateToTeamRequest$Outbound,
  z.ZodTypeDef,
  TemplateMoveTemplateToTeamRequest
> = z.object({
  templateId: z.number(),
  teamId: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateMoveTemplateToTeamRequest$ {
  /** @deprecated use `TemplateMoveTemplateToTeamRequest$inboundSchema` instead. */
  export const inboundSchema = TemplateMoveTemplateToTeamRequest$inboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamRequest$outboundSchema` instead. */
  export const outboundSchema =
    TemplateMoveTemplateToTeamRequest$outboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamRequest$Outbound` instead. */
  export type Outbound = TemplateMoveTemplateToTeamRequest$Outbound;
}

export function templateMoveTemplateToTeamRequestToJSON(
  templateMoveTemplateToTeamRequest: TemplateMoveTemplateToTeamRequest,
): string {
  return JSON.stringify(
    TemplateMoveTemplateToTeamRequest$outboundSchema.parse(
      templateMoveTemplateToTeamRequest,
    ),
  );
}

export function templateMoveTemplateToTeamRequestFromJSON(
  jsonString: string,
): SafeParseResult<TemplateMoveTemplateToTeamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TemplateMoveTemplateToTeamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TemplateMoveTemplateToTeamRequest' from JSON`,
  );
}

/** @internal */
export const TemplateMoveTemplateToTeamType$inboundSchema: z.ZodNativeEnum<
  typeof TemplateMoveTemplateToTeamType
> = z.nativeEnum(TemplateMoveTemplateToTeamType);

/** @internal */
export const TemplateMoveTemplateToTeamType$outboundSchema: z.ZodNativeEnum<
  typeof TemplateMoveTemplateToTeamType
> = TemplateMoveTemplateToTeamType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateMoveTemplateToTeamType$ {
  /** @deprecated use `TemplateMoveTemplateToTeamType$inboundSchema` instead. */
  export const inboundSchema = TemplateMoveTemplateToTeamType$inboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamType$outboundSchema` instead. */
  export const outboundSchema = TemplateMoveTemplateToTeamType$outboundSchema;
}

/** @internal */
export const TemplateMoveTemplateToTeamVisibility$inboundSchema:
  z.ZodNativeEnum<typeof TemplateMoveTemplateToTeamVisibility> = z.nativeEnum(
    TemplateMoveTemplateToTeamVisibility,
  );

/** @internal */
export const TemplateMoveTemplateToTeamVisibility$outboundSchema:
  z.ZodNativeEnum<typeof TemplateMoveTemplateToTeamVisibility> =
    TemplateMoveTemplateToTeamVisibility$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateMoveTemplateToTeamVisibility$ {
  /** @deprecated use `TemplateMoveTemplateToTeamVisibility$inboundSchema` instead. */
  export const inboundSchema =
    TemplateMoveTemplateToTeamVisibility$inboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamVisibility$outboundSchema` instead. */
  export const outboundSchema =
    TemplateMoveTemplateToTeamVisibility$outboundSchema;
}

/** @internal */
export const TemplateMoveTemplateToTeamGlobalAccessAuth$inboundSchema:
  z.ZodNativeEnum<typeof TemplateMoveTemplateToTeamGlobalAccessAuth> = z
    .nativeEnum(TemplateMoveTemplateToTeamGlobalAccessAuth);

/** @internal */
export const TemplateMoveTemplateToTeamGlobalAccessAuth$outboundSchema:
  z.ZodNativeEnum<typeof TemplateMoveTemplateToTeamGlobalAccessAuth> =
    TemplateMoveTemplateToTeamGlobalAccessAuth$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateMoveTemplateToTeamGlobalAccessAuth$ {
  /** @deprecated use `TemplateMoveTemplateToTeamGlobalAccessAuth$inboundSchema` instead. */
  export const inboundSchema =
    TemplateMoveTemplateToTeamGlobalAccessAuth$inboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamGlobalAccessAuth$outboundSchema` instead. */
  export const outboundSchema =
    TemplateMoveTemplateToTeamGlobalAccessAuth$outboundSchema;
}

/** @internal */
export const TemplateMoveTemplateToTeamGlobalActionAuth$inboundSchema:
  z.ZodNativeEnum<typeof TemplateMoveTemplateToTeamGlobalActionAuth> = z
    .nativeEnum(TemplateMoveTemplateToTeamGlobalActionAuth);

/** @internal */
export const TemplateMoveTemplateToTeamGlobalActionAuth$outboundSchema:
  z.ZodNativeEnum<typeof TemplateMoveTemplateToTeamGlobalActionAuth> =
    TemplateMoveTemplateToTeamGlobalActionAuth$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateMoveTemplateToTeamGlobalActionAuth$ {
  /** @deprecated use `TemplateMoveTemplateToTeamGlobalActionAuth$inboundSchema` instead. */
  export const inboundSchema =
    TemplateMoveTemplateToTeamGlobalActionAuth$inboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamGlobalActionAuth$outboundSchema` instead. */
  export const outboundSchema =
    TemplateMoveTemplateToTeamGlobalActionAuth$outboundSchema;
}

/** @internal */
export const TemplateMoveTemplateToTeamAuthOptions$inboundSchema: z.ZodType<
  TemplateMoveTemplateToTeamAuthOptions,
  z.ZodTypeDef,
  unknown
> = z.object({
  globalAccessAuth: z.nullable(
    TemplateMoveTemplateToTeamGlobalAccessAuth$inboundSchema,
  ),
  globalActionAuth: z.nullable(
    TemplateMoveTemplateToTeamGlobalActionAuth$inboundSchema,
  ),
});

/** @internal */
export type TemplateMoveTemplateToTeamAuthOptions$Outbound = {
  globalAccessAuth: string | null;
  globalActionAuth: string | null;
};

/** @internal */
export const TemplateMoveTemplateToTeamAuthOptions$outboundSchema: z.ZodType<
  TemplateMoveTemplateToTeamAuthOptions$Outbound,
  z.ZodTypeDef,
  TemplateMoveTemplateToTeamAuthOptions
> = z.object({
  globalAccessAuth: z.nullable(
    TemplateMoveTemplateToTeamGlobalAccessAuth$outboundSchema,
  ),
  globalActionAuth: z.nullable(
    TemplateMoveTemplateToTeamGlobalActionAuth$outboundSchema,
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateMoveTemplateToTeamAuthOptions$ {
  /** @deprecated use `TemplateMoveTemplateToTeamAuthOptions$inboundSchema` instead. */
  export const inboundSchema =
    TemplateMoveTemplateToTeamAuthOptions$inboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamAuthOptions$outboundSchema` instead. */
  export const outboundSchema =
    TemplateMoveTemplateToTeamAuthOptions$outboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamAuthOptions$Outbound` instead. */
  export type Outbound = TemplateMoveTemplateToTeamAuthOptions$Outbound;
}

export function templateMoveTemplateToTeamAuthOptionsToJSON(
  templateMoveTemplateToTeamAuthOptions: TemplateMoveTemplateToTeamAuthOptions,
): string {
  return JSON.stringify(
    TemplateMoveTemplateToTeamAuthOptions$outboundSchema.parse(
      templateMoveTemplateToTeamAuthOptions,
    ),
  );
}

export function templateMoveTemplateToTeamAuthOptionsFromJSON(
  jsonString: string,
): SafeParseResult<TemplateMoveTemplateToTeamAuthOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      TemplateMoveTemplateToTeamAuthOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TemplateMoveTemplateToTeamAuthOptions' from JSON`,
  );
}

/** @internal */
export const TemplateMoveTemplateToTeamResponse$inboundSchema: z.ZodType<
  TemplateMoveTemplateToTeamResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: TemplateMoveTemplateToTeamType$inboundSchema,
  visibility: TemplateMoveTemplateToTeamVisibility$inboundSchema,
  id: z.number(),
  externalId: z.nullable(z.string()),
  title: z.string(),
  userId: z.number(),
  teamId: z.nullable(z.number()),
  authOptions: z.nullable(
    z.lazy(() => TemplateMoveTemplateToTeamAuthOptions$inboundSchema),
  ),
  templateDocumentDataId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publicTitle: z.string(),
  publicDescription: z.string(),
});

/** @internal */
export type TemplateMoveTemplateToTeamResponse$Outbound = {
  type: string;
  visibility: string;
  id: number;
  externalId: string | null;
  title: string;
  userId: number;
  teamId: number | null;
  authOptions: TemplateMoveTemplateToTeamAuthOptions$Outbound | null;
  templateDocumentDataId: string;
  createdAt: string;
  updatedAt: string;
  publicTitle: string;
  publicDescription: string;
};

/** @internal */
export const TemplateMoveTemplateToTeamResponse$outboundSchema: z.ZodType<
  TemplateMoveTemplateToTeamResponse$Outbound,
  z.ZodTypeDef,
  TemplateMoveTemplateToTeamResponse
> = z.object({
  type: TemplateMoveTemplateToTeamType$outboundSchema,
  visibility: TemplateMoveTemplateToTeamVisibility$outboundSchema,
  id: z.number(),
  externalId: z.nullable(z.string()),
  title: z.string(),
  userId: z.number(),
  teamId: z.nullable(z.number()),
  authOptions: z.nullable(
    z.lazy(() => TemplateMoveTemplateToTeamAuthOptions$outboundSchema),
  ),
  templateDocumentDataId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publicTitle: z.string(),
  publicDescription: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateMoveTemplateToTeamResponse$ {
  /** @deprecated use `TemplateMoveTemplateToTeamResponse$inboundSchema` instead. */
  export const inboundSchema = TemplateMoveTemplateToTeamResponse$inboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamResponse$outboundSchema` instead. */
  export const outboundSchema =
    TemplateMoveTemplateToTeamResponse$outboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamResponse$Outbound` instead. */
  export type Outbound = TemplateMoveTemplateToTeamResponse$Outbound;
}

export function templateMoveTemplateToTeamResponseToJSON(
  templateMoveTemplateToTeamResponse: TemplateMoveTemplateToTeamResponse,
): string {
  return JSON.stringify(
    TemplateMoveTemplateToTeamResponse$outboundSchema.parse(
      templateMoveTemplateToTeamResponse,
    ),
  );
}

export function templateMoveTemplateToTeamResponseFromJSON(
  jsonString: string,
): SafeParseResult<TemplateMoveTemplateToTeamResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      TemplateMoveTemplateToTeamResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TemplateMoveTemplateToTeamResponse' from JSON`,
  );
}
