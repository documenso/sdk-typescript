/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const RecipientCreateTemplateRecipientRole = {
  Cc: "CC",
  Signer: "SIGNER",
  Viewer: "VIEWER",
  Approver: "APPROVER",
} as const;
export type RecipientCreateTemplateRecipientRole = ClosedEnum<
  typeof RecipientCreateTemplateRecipientRole
>;

/**
 * The type of authentication required for the recipient to access the document.
 */
export const RecipientCreateTemplateRecipientAccessAuth = {
  Account: "ACCOUNT",
} as const;
/**
 * The type of authentication required for the recipient to access the document.
 */
export type RecipientCreateTemplateRecipientAccessAuth = ClosedEnum<
  typeof RecipientCreateTemplateRecipientAccessAuth
>;

/**
 * The type of authentication required for the recipient to sign the document.
 */
export const RecipientCreateTemplateRecipientActionAuth = {
  Account: "ACCOUNT",
  Passkey: "PASSKEY",
  TwoFactorAuth: "TWO_FACTOR_AUTH",
  ExplicitNone: "EXPLICIT_NONE",
} as const;
/**
 * The type of authentication required for the recipient to sign the document.
 */
export type RecipientCreateTemplateRecipientActionAuth = ClosedEnum<
  typeof RecipientCreateTemplateRecipientActionAuth
>;

export type RecipientCreateTemplateRecipientRecipient = {
  email: string;
  name: string;
  role: RecipientCreateTemplateRecipientRole;
  signingOrder?: number | undefined;
  /**
   * The type of authentication required for the recipient to access the document.
   */
  accessAuth?: RecipientCreateTemplateRecipientAccessAuth | null | undefined;
  /**
   * The type of authentication required for the recipient to sign the document.
   */
  actionAuth?: RecipientCreateTemplateRecipientActionAuth | null | undefined;
};

export type RecipientCreateTemplateRecipientRequestBody = {
  templateId: number;
  recipient: RecipientCreateTemplateRecipientRecipient;
};

export const RecipientCreateTemplateRecipientTemplatesRecipientsRole = {
  Cc: "CC",
  Signer: "SIGNER",
  Viewer: "VIEWER",
  Approver: "APPROVER",
} as const;
export type RecipientCreateTemplateRecipientTemplatesRecipientsRole =
  ClosedEnum<typeof RecipientCreateTemplateRecipientTemplatesRecipientsRole>;

export const RecipientCreateTemplateRecipientReadStatus = {
  NotOpened: "NOT_OPENED",
  Opened: "OPENED",
} as const;
export type RecipientCreateTemplateRecipientReadStatus = ClosedEnum<
  typeof RecipientCreateTemplateRecipientReadStatus
>;

export const RecipientCreateTemplateRecipientSigningStatus = {
  NotSigned: "NOT_SIGNED",
  Signed: "SIGNED",
  Rejected: "REJECTED",
} as const;
export type RecipientCreateTemplateRecipientSigningStatus = ClosedEnum<
  typeof RecipientCreateTemplateRecipientSigningStatus
>;

export const RecipientCreateTemplateRecipientSendStatus = {
  NotSent: "NOT_SENT",
  Sent: "SENT",
} as const;
export type RecipientCreateTemplateRecipientSendStatus = ClosedEnum<
  typeof RecipientCreateTemplateRecipientSendStatus
>;

/**
 * The type of authentication required for the recipient to access the document.
 */
export const RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth = {
  Account: "ACCOUNT",
} as const;
/**
 * The type of authentication required for the recipient to access the document.
 */
export type RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth =
  ClosedEnum<
    typeof RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth
  >;

/**
 * The type of authentication required for the recipient to sign the document.
 */
export const RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth = {
  Account: "ACCOUNT",
  Passkey: "PASSKEY",
  TwoFactorAuth: "TWO_FACTOR_AUTH",
  ExplicitNone: "EXPLICIT_NONE",
} as const;
/**
 * The type of authentication required for the recipient to sign the document.
 */
export type RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth =
  ClosedEnum<
    typeof RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth
  >;

export type RecipientCreateTemplateRecipientAuthOptions = {
  /**
   * The type of authentication required for the recipient to access the document.
   */
  accessAuth:
    | RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth
    | null;
  /**
   * The type of authentication required for the recipient to sign the document.
   */
  actionAuth:
    | RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth
    | null;
};

/**
 * Successful response
 */
export type RecipientCreateTemplateRecipientResponseBody = {
  role: RecipientCreateTemplateRecipientTemplatesRecipientsRole;
  readStatus: RecipientCreateTemplateRecipientReadStatus;
  signingStatus: RecipientCreateTemplateRecipientSigningStatus;
  sendStatus: RecipientCreateTemplateRecipientSendStatus;
  id: number;
  documentId: number | null;
  templateId: number | null;
  email: string;
  name: string;
  token: string;
  documentDeletedAt: string | null;
  expired: string | null;
  signedAt: string | null;
  authOptions: RecipientCreateTemplateRecipientAuthOptions | null;
  /**
   * The order in which the recipient should sign the document. Only works if the document is set to sequential signing.
   */
  signingOrder: number | null;
  rejectionReason: string | null;
};

/** @internal */
export const RecipientCreateTemplateRecipientRole$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientRole> = z.nativeEnum(
    RecipientCreateTemplateRecipientRole,
  );

/** @internal */
export const RecipientCreateTemplateRecipientRole$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientRole> =
    RecipientCreateTemplateRecipientRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientRole$ {
  /** @deprecated use `RecipientCreateTemplateRecipientRole$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientRole$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientRole$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientRole$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientAccessAuth$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientAccessAuth> = z
    .nativeEnum(RecipientCreateTemplateRecipientAccessAuth);

/** @internal */
export const RecipientCreateTemplateRecipientAccessAuth$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientAccessAuth> =
    RecipientCreateTemplateRecipientAccessAuth$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientAccessAuth$ {
  /** @deprecated use `RecipientCreateTemplateRecipientAccessAuth$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientAccessAuth$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientAccessAuth$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientAccessAuth$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientActionAuth$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientActionAuth> = z
    .nativeEnum(RecipientCreateTemplateRecipientActionAuth);

/** @internal */
export const RecipientCreateTemplateRecipientActionAuth$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientActionAuth> =
    RecipientCreateTemplateRecipientActionAuth$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientActionAuth$ {
  /** @deprecated use `RecipientCreateTemplateRecipientActionAuth$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientActionAuth$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientActionAuth$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientActionAuth$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientRecipient$inboundSchema: z.ZodType<
  RecipientCreateTemplateRecipientRecipient,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.string(),
  name: z.string(),
  role: RecipientCreateTemplateRecipientRole$inboundSchema,
  signingOrder: z.number().optional(),
  accessAuth: z.nullable(
    RecipientCreateTemplateRecipientAccessAuth$inboundSchema,
  ).optional(),
  actionAuth: z.nullable(
    RecipientCreateTemplateRecipientActionAuth$inboundSchema,
  ).optional(),
});

/** @internal */
export type RecipientCreateTemplateRecipientRecipient$Outbound = {
  email: string;
  name: string;
  role: string;
  signingOrder?: number | undefined;
  accessAuth?: string | null | undefined;
  actionAuth?: string | null | undefined;
};

/** @internal */
export const RecipientCreateTemplateRecipientRecipient$outboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientRecipient$Outbound,
    z.ZodTypeDef,
    RecipientCreateTemplateRecipientRecipient
  > = z.object({
    email: z.string(),
    name: z.string(),
    role: RecipientCreateTemplateRecipientRole$outboundSchema,
    signingOrder: z.number().optional(),
    accessAuth: z.nullable(
      RecipientCreateTemplateRecipientAccessAuth$outboundSchema,
    ).optional(),
    actionAuth: z.nullable(
      RecipientCreateTemplateRecipientActionAuth$outboundSchema,
    ).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientRecipient$ {
  /** @deprecated use `RecipientCreateTemplateRecipientRecipient$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientRecipient$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientRecipient$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientRecipient$outboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientRecipient$Outbound` instead. */
  export type Outbound = RecipientCreateTemplateRecipientRecipient$Outbound;
}

export function recipientCreateTemplateRecipientRecipientToJSON(
  recipientCreateTemplateRecipientRecipient:
    RecipientCreateTemplateRecipientRecipient,
): string {
  return JSON.stringify(
    RecipientCreateTemplateRecipientRecipient$outboundSchema.parse(
      recipientCreateTemplateRecipientRecipient,
    ),
  );
}

export function recipientCreateTemplateRecipientRecipientFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientCreateTemplateRecipientRecipient,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientCreateTemplateRecipientRecipient$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientCreateTemplateRecipientRecipient' from JSON`,
  );
}

/** @internal */
export const RecipientCreateTemplateRecipientRequestBody$inboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientRequestBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    templateId: z.number(),
    recipient: z.lazy(() =>
      RecipientCreateTemplateRecipientRecipient$inboundSchema
    ),
  });

/** @internal */
export type RecipientCreateTemplateRecipientRequestBody$Outbound = {
  templateId: number;
  recipient: RecipientCreateTemplateRecipientRecipient$Outbound;
};

/** @internal */
export const RecipientCreateTemplateRecipientRequestBody$outboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientRequestBody$Outbound,
    z.ZodTypeDef,
    RecipientCreateTemplateRecipientRequestBody
  > = z.object({
    templateId: z.number(),
    recipient: z.lazy(() =>
      RecipientCreateTemplateRecipientRecipient$outboundSchema
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientRequestBody$ {
  /** @deprecated use `RecipientCreateTemplateRecipientRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientRequestBody$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientRequestBody$outboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientRequestBody$Outbound` instead. */
  export type Outbound = RecipientCreateTemplateRecipientRequestBody$Outbound;
}

export function recipientCreateTemplateRecipientRequestBodyToJSON(
  recipientCreateTemplateRecipientRequestBody:
    RecipientCreateTemplateRecipientRequestBody,
): string {
  return JSON.stringify(
    RecipientCreateTemplateRecipientRequestBody$outboundSchema.parse(
      recipientCreateTemplateRecipientRequestBody,
    ),
  );
}

export function recipientCreateTemplateRecipientRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientCreateTemplateRecipientRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientCreateTemplateRecipientRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientCreateTemplateRecipientRequestBody' from JSON`,
  );
}

/** @internal */
export const RecipientCreateTemplateRecipientTemplatesRecipientsRole$inboundSchema:
  z.ZodNativeEnum<
    typeof RecipientCreateTemplateRecipientTemplatesRecipientsRole
  > = z.nativeEnum(RecipientCreateTemplateRecipientTemplatesRecipientsRole);

/** @internal */
export const RecipientCreateTemplateRecipientTemplatesRecipientsRole$outboundSchema:
  z.ZodNativeEnum<
    typeof RecipientCreateTemplateRecipientTemplatesRecipientsRole
  > = RecipientCreateTemplateRecipientTemplatesRecipientsRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientTemplatesRecipientsRole$ {
  /** @deprecated use `RecipientCreateTemplateRecipientTemplatesRecipientsRole$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientTemplatesRecipientsRole$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientTemplatesRecipientsRole$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientTemplatesRecipientsRole$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientReadStatus$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientReadStatus> = z
    .nativeEnum(RecipientCreateTemplateRecipientReadStatus);

/** @internal */
export const RecipientCreateTemplateRecipientReadStatus$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientReadStatus> =
    RecipientCreateTemplateRecipientReadStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientReadStatus$ {
  /** @deprecated use `RecipientCreateTemplateRecipientReadStatus$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientReadStatus$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientReadStatus$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientReadStatus$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientSigningStatus$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientSigningStatus> = z
    .nativeEnum(RecipientCreateTemplateRecipientSigningStatus);

/** @internal */
export const RecipientCreateTemplateRecipientSigningStatus$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientSigningStatus> =
    RecipientCreateTemplateRecipientSigningStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientSigningStatus$ {
  /** @deprecated use `RecipientCreateTemplateRecipientSigningStatus$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientSigningStatus$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientSigningStatus$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientSigningStatus$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientSendStatus$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientSendStatus> = z
    .nativeEnum(RecipientCreateTemplateRecipientSendStatus);

/** @internal */
export const RecipientCreateTemplateRecipientSendStatus$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientSendStatus> =
    RecipientCreateTemplateRecipientSendStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientSendStatus$ {
  /** @deprecated use `RecipientCreateTemplateRecipientSendStatus$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientSendStatus$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientSendStatus$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientSendStatus$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth$inboundSchema:
  z.ZodNativeEnum<
    typeof RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth
  > = z.nativeEnum(
    RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth,
  );

/** @internal */
export const RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth$outboundSchema:
  z.ZodNativeEnum<
    typeof RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth
  > =
    RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth$ {
  /** @deprecated use `RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth$inboundSchema:
  z.ZodNativeEnum<
    typeof RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth
  > = z.nativeEnum(
    RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth,
  );

/** @internal */
export const RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth$outboundSchema:
  z.ZodNativeEnum<
    typeof RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth
  > =
    RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth$ {
  /** @deprecated use `RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientAuthOptions$inboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientAuthOptions,
    z.ZodTypeDef,
    unknown
  > = z.object({
    accessAuth: z.nullable(
      RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth$inboundSchema,
    ),
    actionAuth: z.nullable(
      RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth$inboundSchema,
    ),
  });

/** @internal */
export type RecipientCreateTemplateRecipientAuthOptions$Outbound = {
  accessAuth: string | null;
  actionAuth: string | null;
};

/** @internal */
export const RecipientCreateTemplateRecipientAuthOptions$outboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientAuthOptions$Outbound,
    z.ZodTypeDef,
    RecipientCreateTemplateRecipientAuthOptions
  > = z.object({
    accessAuth: z.nullable(
      RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth$outboundSchema,
    ),
    actionAuth: z.nullable(
      RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth$outboundSchema,
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientAuthOptions$ {
  /** @deprecated use `RecipientCreateTemplateRecipientAuthOptions$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientAuthOptions$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientAuthOptions$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientAuthOptions$outboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientAuthOptions$Outbound` instead. */
  export type Outbound = RecipientCreateTemplateRecipientAuthOptions$Outbound;
}

export function recipientCreateTemplateRecipientAuthOptionsToJSON(
  recipientCreateTemplateRecipientAuthOptions:
    RecipientCreateTemplateRecipientAuthOptions,
): string {
  return JSON.stringify(
    RecipientCreateTemplateRecipientAuthOptions$outboundSchema.parse(
      recipientCreateTemplateRecipientAuthOptions,
    ),
  );
}

export function recipientCreateTemplateRecipientAuthOptionsFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientCreateTemplateRecipientAuthOptions,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientCreateTemplateRecipientAuthOptions$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientCreateTemplateRecipientAuthOptions' from JSON`,
  );
}

/** @internal */
export const RecipientCreateTemplateRecipientResponseBody$inboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    role: RecipientCreateTemplateRecipientTemplatesRecipientsRole$inboundSchema,
    readStatus: RecipientCreateTemplateRecipientReadStatus$inboundSchema,
    signingStatus: RecipientCreateTemplateRecipientSigningStatus$inboundSchema,
    sendStatus: RecipientCreateTemplateRecipientSendStatus$inboundSchema,
    id: z.number().int(),
    documentId: z.nullable(z.number().int()),
    templateId: z.nullable(z.number().int()),
    email: z.string(),
    name: z.string(),
    token: z.string(),
    documentDeletedAt: z.nullable(z.string()),
    expired: z.nullable(z.string()),
    signedAt: z.nullable(z.string()),
    authOptions: z.nullable(
      z.lazy(() => RecipientCreateTemplateRecipientAuthOptions$inboundSchema),
    ),
    signingOrder: z.nullable(z.number()),
    rejectionReason: z.nullable(z.string()),
  });

/** @internal */
export type RecipientCreateTemplateRecipientResponseBody$Outbound = {
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
  authOptions: RecipientCreateTemplateRecipientAuthOptions$Outbound | null;
  signingOrder: number | null;
  rejectionReason: string | null;
};

/** @internal */
export const RecipientCreateTemplateRecipientResponseBody$outboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientResponseBody$Outbound,
    z.ZodTypeDef,
    RecipientCreateTemplateRecipientResponseBody
  > = z.object({
    role:
      RecipientCreateTemplateRecipientTemplatesRecipientsRole$outboundSchema,
    readStatus: RecipientCreateTemplateRecipientReadStatus$outboundSchema,
    signingStatus: RecipientCreateTemplateRecipientSigningStatus$outboundSchema,
    sendStatus: RecipientCreateTemplateRecipientSendStatus$outboundSchema,
    id: z.number().int(),
    documentId: z.nullable(z.number().int()),
    templateId: z.nullable(z.number().int()),
    email: z.string(),
    name: z.string(),
    token: z.string(),
    documentDeletedAt: z.nullable(z.string()),
    expired: z.nullable(z.string()),
    signedAt: z.nullable(z.string()),
    authOptions: z.nullable(
      z.lazy(() => RecipientCreateTemplateRecipientAuthOptions$outboundSchema),
    ),
    signingOrder: z.nullable(z.number()),
    rejectionReason: z.nullable(z.string()),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientResponseBody$ {
  /** @deprecated use `RecipientCreateTemplateRecipientResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientResponseBody$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientResponseBody$outboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientResponseBody$Outbound` instead. */
  export type Outbound = RecipientCreateTemplateRecipientResponseBody$Outbound;
}

export function recipientCreateTemplateRecipientResponseBodyToJSON(
  recipientCreateTemplateRecipientResponseBody:
    RecipientCreateTemplateRecipientResponseBody,
): string {
  return JSON.stringify(
    RecipientCreateTemplateRecipientResponseBody$outboundSchema.parse(
      recipientCreateTemplateRecipientResponseBody,
    ),
  );
}

export function recipientCreateTemplateRecipientResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientCreateTemplateRecipientResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientCreateTemplateRecipientResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientCreateTemplateRecipientResponseBody' from JSON`,
  );
}
