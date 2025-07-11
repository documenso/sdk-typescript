/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const RecipientCreateTemplateRecipientsRoleRequest = {
  Cc: "CC",
  Signer: "SIGNER",
  Viewer: "VIEWER",
  Approver: "APPROVER",
  Assistant: "ASSISTANT",
} as const;
export type RecipientCreateTemplateRecipientsRoleRequest = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsRoleRequest
>;

/**
 * The type of authentication required for the recipient to access the document.
 */
export const RecipientCreateTemplateRecipientsAccessAuthRequest = {
  Account: "ACCOUNT",
} as const;
/**
 * The type of authentication required for the recipient to access the document.
 */
export type RecipientCreateTemplateRecipientsAccessAuthRequest = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsAccessAuthRequest
>;

/**
 * The type of authentication required for the recipient to sign the document.
 */
export const RecipientCreateTemplateRecipientsActionAuthRequest = {
  Account: "ACCOUNT",
  Passkey: "PASSKEY",
  TwoFactorAuth: "TWO_FACTOR_AUTH",
  Password: "PASSWORD",
  ExplicitNone: "EXPLICIT_NONE",
} as const;
/**
 * The type of authentication required for the recipient to sign the document.
 */
export type RecipientCreateTemplateRecipientsActionAuthRequest = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsActionAuthRequest
>;

export type RecipientCreateTemplateRecipientsRecipientRequest = {
  email: string;
  name: string;
  role: RecipientCreateTemplateRecipientsRoleRequest;
  signingOrder?: number | undefined;
  accessAuth?:
    | Array<RecipientCreateTemplateRecipientsAccessAuthRequest>
    | undefined;
  actionAuth?:
    | Array<RecipientCreateTemplateRecipientsActionAuthRequest>
    | undefined;
};

export type RecipientCreateTemplateRecipientsRequest = {
  templateId: number;
  recipients: Array<RecipientCreateTemplateRecipientsRecipientRequest>;
};

export const RecipientCreateTemplateRecipientsRoleResponse = {
  Cc: "CC",
  Signer: "SIGNER",
  Viewer: "VIEWER",
  Approver: "APPROVER",
  Assistant: "ASSISTANT",
} as const;
export type RecipientCreateTemplateRecipientsRoleResponse = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsRoleResponse
>;

export const RecipientCreateTemplateRecipientsReadStatus = {
  NotOpened: "NOT_OPENED",
  Opened: "OPENED",
} as const;
export type RecipientCreateTemplateRecipientsReadStatus = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsReadStatus
>;

export const RecipientCreateTemplateRecipientsSigningStatus = {
  NotSigned: "NOT_SIGNED",
  Signed: "SIGNED",
  Rejected: "REJECTED",
} as const;
export type RecipientCreateTemplateRecipientsSigningStatus = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsSigningStatus
>;

export const RecipientCreateTemplateRecipientsSendStatus = {
  NotSent: "NOT_SENT",
  Sent: "SENT",
} as const;
export type RecipientCreateTemplateRecipientsSendStatus = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsSendStatus
>;

/**
 * The type of authentication required for the recipient to access the document.
 */
export const RecipientCreateTemplateRecipientsAccessAuthResponse = {
  Account: "ACCOUNT",
} as const;
/**
 * The type of authentication required for the recipient to access the document.
 */
export type RecipientCreateTemplateRecipientsAccessAuthResponse = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsAccessAuthResponse
>;

/**
 * The type of authentication required for the recipient to sign the document.
 */
export const RecipientCreateTemplateRecipientsActionAuthResponse = {
  Account: "ACCOUNT",
  Passkey: "PASSKEY",
  TwoFactorAuth: "TWO_FACTOR_AUTH",
  Password: "PASSWORD",
  ExplicitNone: "EXPLICIT_NONE",
} as const;
/**
 * The type of authentication required for the recipient to sign the document.
 */
export type RecipientCreateTemplateRecipientsActionAuthResponse = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsActionAuthResponse
>;

export type RecipientCreateTemplateRecipientsAuthOptions = {
  accessAuth: Array<RecipientCreateTemplateRecipientsAccessAuthResponse>;
  actionAuth: Array<RecipientCreateTemplateRecipientsActionAuthResponse>;
};

export type RecipientCreateTemplateRecipientsRecipientResponse = {
  role: RecipientCreateTemplateRecipientsRoleResponse;
  readStatus: RecipientCreateTemplateRecipientsReadStatus;
  signingStatus: RecipientCreateTemplateRecipientsSigningStatus;
  sendStatus: RecipientCreateTemplateRecipientsSendStatus;
  id: number;
  documentId: number | null;
  templateId: number | null;
  email: string;
  name: string;
  token: string;
  documentDeletedAt: string | null;
  expired: string | null;
  signedAt: string | null;
  authOptions: RecipientCreateTemplateRecipientsAuthOptions | null;
  /**
   * The order in which the recipient should sign the document. Only works if the document is set to sequential signing.
   */
  signingOrder: number | null;
  rejectionReason: string | null;
};

/**
 * Successful response
 */
export type RecipientCreateTemplateRecipientsResponse = {
  recipients: Array<RecipientCreateTemplateRecipientsRecipientResponse>;
};

/** @internal */
export const RecipientCreateTemplateRecipientsRoleRequest$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsRoleRequest> = z
    .nativeEnum(RecipientCreateTemplateRecipientsRoleRequest);

/** @internal */
export const RecipientCreateTemplateRecipientsRoleRequest$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsRoleRequest> =
    RecipientCreateTemplateRecipientsRoleRequest$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsRoleRequest$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsRoleRequest$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsRoleRequest$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsRoleRequest$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsRoleRequest$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsAccessAuthRequest$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsAccessAuthRequest> = z
    .nativeEnum(RecipientCreateTemplateRecipientsAccessAuthRequest);

/** @internal */
export const RecipientCreateTemplateRecipientsAccessAuthRequest$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsAccessAuthRequest> =
    RecipientCreateTemplateRecipientsAccessAuthRequest$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsAccessAuthRequest$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsAccessAuthRequest$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsAccessAuthRequest$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsAccessAuthRequest$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsAccessAuthRequest$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsActionAuthRequest$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsActionAuthRequest> = z
    .nativeEnum(RecipientCreateTemplateRecipientsActionAuthRequest);

/** @internal */
export const RecipientCreateTemplateRecipientsActionAuthRequest$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsActionAuthRequest> =
    RecipientCreateTemplateRecipientsActionAuthRequest$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsActionAuthRequest$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsActionAuthRequest$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsActionAuthRequest$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsActionAuthRequest$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsActionAuthRequest$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsRecipientRequest$inboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientsRecipientRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    email: z.string(),
    name: z.string(),
    role: RecipientCreateTemplateRecipientsRoleRequest$inboundSchema,
    signingOrder: z.number().optional(),
    accessAuth: z.array(
      RecipientCreateTemplateRecipientsAccessAuthRequest$inboundSchema,
    ).optional(),
    actionAuth: z.array(
      RecipientCreateTemplateRecipientsActionAuthRequest$inboundSchema,
    ).optional(),
  });

/** @internal */
export type RecipientCreateTemplateRecipientsRecipientRequest$Outbound = {
  email: string;
  name: string;
  role: string;
  signingOrder?: number | undefined;
  accessAuth?: Array<string> | undefined;
  actionAuth?: Array<string> | undefined;
};

/** @internal */
export const RecipientCreateTemplateRecipientsRecipientRequest$outboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientsRecipientRequest$Outbound,
    z.ZodTypeDef,
    RecipientCreateTemplateRecipientsRecipientRequest
  > = z.object({
    email: z.string(),
    name: z.string(),
    role: RecipientCreateTemplateRecipientsRoleRequest$outboundSchema,
    signingOrder: z.number().optional(),
    accessAuth: z.array(
      RecipientCreateTemplateRecipientsAccessAuthRequest$outboundSchema,
    ).optional(),
    actionAuth: z.array(
      RecipientCreateTemplateRecipientsActionAuthRequest$outboundSchema,
    ).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsRecipientRequest$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsRecipientRequest$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsRecipientRequest$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsRecipientRequest$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsRecipientRequest$outboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsRecipientRequest$Outbound` instead. */
  export type Outbound =
    RecipientCreateTemplateRecipientsRecipientRequest$Outbound;
}

export function recipientCreateTemplateRecipientsRecipientRequestToJSON(
  recipientCreateTemplateRecipientsRecipientRequest:
    RecipientCreateTemplateRecipientsRecipientRequest,
): string {
  return JSON.stringify(
    RecipientCreateTemplateRecipientsRecipientRequest$outboundSchema.parse(
      recipientCreateTemplateRecipientsRecipientRequest,
    ),
  );
}

export function recipientCreateTemplateRecipientsRecipientRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientCreateTemplateRecipientsRecipientRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientCreateTemplateRecipientsRecipientRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientCreateTemplateRecipientsRecipientRequest' from JSON`,
  );
}

/** @internal */
export const RecipientCreateTemplateRecipientsRequest$inboundSchema: z.ZodType<
  RecipientCreateTemplateRecipientsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  templateId: z.number(),
  recipients: z.array(
    z.lazy(() =>
      RecipientCreateTemplateRecipientsRecipientRequest$inboundSchema
    ),
  ),
});

/** @internal */
export type RecipientCreateTemplateRecipientsRequest$Outbound = {
  templateId: number;
  recipients: Array<RecipientCreateTemplateRecipientsRecipientRequest$Outbound>;
};

/** @internal */
export const RecipientCreateTemplateRecipientsRequest$outboundSchema: z.ZodType<
  RecipientCreateTemplateRecipientsRequest$Outbound,
  z.ZodTypeDef,
  RecipientCreateTemplateRecipientsRequest
> = z.object({
  templateId: z.number(),
  recipients: z.array(
    z.lazy(() =>
      RecipientCreateTemplateRecipientsRecipientRequest$outboundSchema
    ),
  ),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsRequest$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsRequest$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsRequest$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsRequest$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsRequest$outboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsRequest$Outbound` instead. */
  export type Outbound = RecipientCreateTemplateRecipientsRequest$Outbound;
}

export function recipientCreateTemplateRecipientsRequestToJSON(
  recipientCreateTemplateRecipientsRequest:
    RecipientCreateTemplateRecipientsRequest,
): string {
  return JSON.stringify(
    RecipientCreateTemplateRecipientsRequest$outboundSchema.parse(
      recipientCreateTemplateRecipientsRequest,
    ),
  );
}

export function recipientCreateTemplateRecipientsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientCreateTemplateRecipientsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientCreateTemplateRecipientsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientCreateTemplateRecipientsRequest' from JSON`,
  );
}

/** @internal */
export const RecipientCreateTemplateRecipientsRoleResponse$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsRoleResponse> = z
    .nativeEnum(RecipientCreateTemplateRecipientsRoleResponse);

/** @internal */
export const RecipientCreateTemplateRecipientsRoleResponse$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsRoleResponse> =
    RecipientCreateTemplateRecipientsRoleResponse$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsRoleResponse$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsRoleResponse$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsRoleResponse$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsRoleResponse$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsRoleResponse$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsReadStatus$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsReadStatus> = z
    .nativeEnum(RecipientCreateTemplateRecipientsReadStatus);

/** @internal */
export const RecipientCreateTemplateRecipientsReadStatus$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsReadStatus> =
    RecipientCreateTemplateRecipientsReadStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsReadStatus$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsReadStatus$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsReadStatus$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsReadStatus$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsReadStatus$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsSigningStatus$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsSigningStatus> = z
    .nativeEnum(RecipientCreateTemplateRecipientsSigningStatus);

/** @internal */
export const RecipientCreateTemplateRecipientsSigningStatus$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsSigningStatus> =
    RecipientCreateTemplateRecipientsSigningStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsSigningStatus$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsSigningStatus$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsSigningStatus$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsSigningStatus$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsSigningStatus$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsSendStatus$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsSendStatus> = z
    .nativeEnum(RecipientCreateTemplateRecipientsSendStatus);

/** @internal */
export const RecipientCreateTemplateRecipientsSendStatus$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsSendStatus> =
    RecipientCreateTemplateRecipientsSendStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsSendStatus$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsSendStatus$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsSendStatus$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsSendStatus$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsSendStatus$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsAccessAuthResponse$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsAccessAuthResponse> =
    z.nativeEnum(RecipientCreateTemplateRecipientsAccessAuthResponse);

/** @internal */
export const RecipientCreateTemplateRecipientsAccessAuthResponse$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsAccessAuthResponse> =
    RecipientCreateTemplateRecipientsAccessAuthResponse$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsAccessAuthResponse$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsAccessAuthResponse$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsAccessAuthResponse$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsAccessAuthResponse$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsAccessAuthResponse$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsActionAuthResponse$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsActionAuthResponse> =
    z.nativeEnum(RecipientCreateTemplateRecipientsActionAuthResponse);

/** @internal */
export const RecipientCreateTemplateRecipientsActionAuthResponse$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsActionAuthResponse> =
    RecipientCreateTemplateRecipientsActionAuthResponse$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsActionAuthResponse$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsActionAuthResponse$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsActionAuthResponse$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsActionAuthResponse$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsActionAuthResponse$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsAuthOptions$inboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientsAuthOptions,
    z.ZodTypeDef,
    unknown
  > = z.object({
    accessAuth: z.array(
      RecipientCreateTemplateRecipientsAccessAuthResponse$inboundSchema,
    ),
    actionAuth: z.array(
      RecipientCreateTemplateRecipientsActionAuthResponse$inboundSchema,
    ),
  });

/** @internal */
export type RecipientCreateTemplateRecipientsAuthOptions$Outbound = {
  accessAuth: Array<string>;
  actionAuth: Array<string>;
};

/** @internal */
export const RecipientCreateTemplateRecipientsAuthOptions$outboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientsAuthOptions$Outbound,
    z.ZodTypeDef,
    RecipientCreateTemplateRecipientsAuthOptions
  > = z.object({
    accessAuth: z.array(
      RecipientCreateTemplateRecipientsAccessAuthResponse$outboundSchema,
    ),
    actionAuth: z.array(
      RecipientCreateTemplateRecipientsActionAuthResponse$outboundSchema,
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsAuthOptions$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsAuthOptions$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsAuthOptions$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsAuthOptions$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsAuthOptions$outboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsAuthOptions$Outbound` instead. */
  export type Outbound = RecipientCreateTemplateRecipientsAuthOptions$Outbound;
}

export function recipientCreateTemplateRecipientsAuthOptionsToJSON(
  recipientCreateTemplateRecipientsAuthOptions:
    RecipientCreateTemplateRecipientsAuthOptions,
): string {
  return JSON.stringify(
    RecipientCreateTemplateRecipientsAuthOptions$outboundSchema.parse(
      recipientCreateTemplateRecipientsAuthOptions,
    ),
  );
}

export function recipientCreateTemplateRecipientsAuthOptionsFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientCreateTemplateRecipientsAuthOptions,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientCreateTemplateRecipientsAuthOptions$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientCreateTemplateRecipientsAuthOptions' from JSON`,
  );
}

/** @internal */
export const RecipientCreateTemplateRecipientsRecipientResponse$inboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientsRecipientResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    role: RecipientCreateTemplateRecipientsRoleResponse$inboundSchema,
    readStatus: RecipientCreateTemplateRecipientsReadStatus$inboundSchema,
    signingStatus: RecipientCreateTemplateRecipientsSigningStatus$inboundSchema,
    sendStatus: RecipientCreateTemplateRecipientsSendStatus$inboundSchema,
    id: z.number(),
    documentId: z.nullable(z.number()),
    templateId: z.nullable(z.number()),
    email: z.string(),
    name: z.string(),
    token: z.string(),
    documentDeletedAt: z.nullable(z.string()),
    expired: z.nullable(z.string()),
    signedAt: z.nullable(z.string()),
    authOptions: z.nullable(
      z.lazy(() => RecipientCreateTemplateRecipientsAuthOptions$inboundSchema),
    ),
    signingOrder: z.nullable(z.number()),
    rejectionReason: z.nullable(z.string()),
  });

/** @internal */
export type RecipientCreateTemplateRecipientsRecipientResponse$Outbound = {
  role: string;
  readStatus: string;
  signingStatus: string;
  sendStatus: string;
  id: number;
  documentId: number | null;
  templateId: number | null;
  email: string;
  name: string;
  token: string;
  documentDeletedAt: string | null;
  expired: string | null;
  signedAt: string | null;
  authOptions: RecipientCreateTemplateRecipientsAuthOptions$Outbound | null;
  signingOrder: number | null;
  rejectionReason: string | null;
};

/** @internal */
export const RecipientCreateTemplateRecipientsRecipientResponse$outboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientsRecipientResponse$Outbound,
    z.ZodTypeDef,
    RecipientCreateTemplateRecipientsRecipientResponse
  > = z.object({
    role: RecipientCreateTemplateRecipientsRoleResponse$outboundSchema,
    readStatus: RecipientCreateTemplateRecipientsReadStatus$outboundSchema,
    signingStatus:
      RecipientCreateTemplateRecipientsSigningStatus$outboundSchema,
    sendStatus: RecipientCreateTemplateRecipientsSendStatus$outboundSchema,
    id: z.number(),
    documentId: z.nullable(z.number()),
    templateId: z.nullable(z.number()),
    email: z.string(),
    name: z.string(),
    token: z.string(),
    documentDeletedAt: z.nullable(z.string()),
    expired: z.nullable(z.string()),
    signedAt: z.nullable(z.string()),
    authOptions: z.nullable(
      z.lazy(() => RecipientCreateTemplateRecipientsAuthOptions$outboundSchema),
    ),
    signingOrder: z.nullable(z.number()),
    rejectionReason: z.nullable(z.string()),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsRecipientResponse$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsRecipientResponse$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsRecipientResponse$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsRecipientResponse$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsRecipientResponse$outboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsRecipientResponse$Outbound` instead. */
  export type Outbound =
    RecipientCreateTemplateRecipientsRecipientResponse$Outbound;
}

export function recipientCreateTemplateRecipientsRecipientResponseToJSON(
  recipientCreateTemplateRecipientsRecipientResponse:
    RecipientCreateTemplateRecipientsRecipientResponse,
): string {
  return JSON.stringify(
    RecipientCreateTemplateRecipientsRecipientResponse$outboundSchema.parse(
      recipientCreateTemplateRecipientsRecipientResponse,
    ),
  );
}

export function recipientCreateTemplateRecipientsRecipientResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientCreateTemplateRecipientsRecipientResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientCreateTemplateRecipientsRecipientResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientCreateTemplateRecipientsRecipientResponse' from JSON`,
  );
}

/** @internal */
export const RecipientCreateTemplateRecipientsResponse$inboundSchema: z.ZodType<
  RecipientCreateTemplateRecipientsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  recipients: z.array(
    z.lazy(() =>
      RecipientCreateTemplateRecipientsRecipientResponse$inboundSchema
    ),
  ),
});

/** @internal */
export type RecipientCreateTemplateRecipientsResponse$Outbound = {
  recipients: Array<
    RecipientCreateTemplateRecipientsRecipientResponse$Outbound
  >;
};

/** @internal */
export const RecipientCreateTemplateRecipientsResponse$outboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientsResponse$Outbound,
    z.ZodTypeDef,
    RecipientCreateTemplateRecipientsResponse
  > = z.object({
    recipients: z.array(
      z.lazy(() =>
        RecipientCreateTemplateRecipientsRecipientResponse$outboundSchema
      ),
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsResponse$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsResponse$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsResponse$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsResponse$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsResponse$outboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsResponse$Outbound` instead. */
  export type Outbound = RecipientCreateTemplateRecipientsResponse$Outbound;
}

export function recipientCreateTemplateRecipientsResponseToJSON(
  recipientCreateTemplateRecipientsResponse:
    RecipientCreateTemplateRecipientsResponse,
): string {
  return JSON.stringify(
    RecipientCreateTemplateRecipientsResponse$outboundSchema.parse(
      recipientCreateTemplateRecipientsResponse,
    ),
  );
}

export function recipientCreateTemplateRecipientsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientCreateTemplateRecipientsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientCreateTemplateRecipientsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientCreateTemplateRecipientsResponse' from JSON`,
  );
}
