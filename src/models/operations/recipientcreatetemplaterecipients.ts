/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const RecipientCreateTemplateRecipientsRequestRole = {
  Cc: "CC",
  Signer: "SIGNER",
  Viewer: "VIEWER",
  Approver: "APPROVER",
  Assistant: "ASSISTANT",
} as const;
export type RecipientCreateTemplateRecipientsRequestRole = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsRequestRole
>;

/**
 * The type of authentication required for the recipient to access the document.
 */
export const RecipientCreateTemplateRecipientsRequestAccessAuth = {
  Account: "ACCOUNT",
} as const;
/**
 * The type of authentication required for the recipient to access the document.
 */
export type RecipientCreateTemplateRecipientsRequestAccessAuth = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsRequestAccessAuth
>;

/**
 * The type of authentication required for the recipient to sign the document.
 */
export const RecipientCreateTemplateRecipientsRequestActionAuth = {
  Account: "ACCOUNT",
  Passkey: "PASSKEY",
  TwoFactorAuth: "TWO_FACTOR_AUTH",
  ExplicitNone: "EXPLICIT_NONE",
} as const;
/**
 * The type of authentication required for the recipient to sign the document.
 */
export type RecipientCreateTemplateRecipientsRequestActionAuth = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsRequestActionAuth
>;

export type RecipientCreateTemplateRecipientsRequestRecipients = {
  email: string;
  name: string;
  role: RecipientCreateTemplateRecipientsRequestRole;
  signingOrder?: number | undefined;
  /**
   * The type of authentication required for the recipient to access the document.
   */
  accessAuth?:
    | RecipientCreateTemplateRecipientsRequestAccessAuth
    | null
    | undefined;
  /**
   * The type of authentication required for the recipient to sign the document.
   */
  actionAuth?:
    | RecipientCreateTemplateRecipientsRequestActionAuth
    | null
    | undefined;
};

export type RecipientCreateTemplateRecipientsRequest = {
  templateId: number;
  recipients: Array<RecipientCreateTemplateRecipientsRequestRecipients>;
};

export const RecipientCreateTemplateRecipientsResponseRole = {
  Cc: "CC",
  Signer: "SIGNER",
  Viewer: "VIEWER",
  Approver: "APPROVER",
  Assistant: "ASSISTANT",
} as const;
export type RecipientCreateTemplateRecipientsResponseRole = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsResponseRole
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
export const RecipientCreateTemplateRecipientsResponseAccessAuth = {
  Account: "ACCOUNT",
} as const;
/**
 * The type of authentication required for the recipient to access the document.
 */
export type RecipientCreateTemplateRecipientsResponseAccessAuth = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsResponseAccessAuth
>;

/**
 * The type of authentication required for the recipient to sign the document.
 */
export const RecipientCreateTemplateRecipientsResponseActionAuth = {
  Account: "ACCOUNT",
  Passkey: "PASSKEY",
  TwoFactorAuth: "TWO_FACTOR_AUTH",
  ExplicitNone: "EXPLICIT_NONE",
} as const;
/**
 * The type of authentication required for the recipient to sign the document.
 */
export type RecipientCreateTemplateRecipientsResponseActionAuth = ClosedEnum<
  typeof RecipientCreateTemplateRecipientsResponseActionAuth
>;

export type RecipientCreateTemplateRecipientsAuthOptions = {
  /**
   * The type of authentication required for the recipient to access the document.
   */
  accessAuth: RecipientCreateTemplateRecipientsResponseAccessAuth | null;
  /**
   * The type of authentication required for the recipient to sign the document.
   */
  actionAuth: RecipientCreateTemplateRecipientsResponseActionAuth | null;
};

export type RecipientCreateTemplateRecipientsResponseRecipients = {
  role: RecipientCreateTemplateRecipientsResponseRole;
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
  recipients: Array<RecipientCreateTemplateRecipientsResponseRecipients>;
};

/** @internal */
export const RecipientCreateTemplateRecipientsRequestRole$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsRequestRole> = z
    .nativeEnum(RecipientCreateTemplateRecipientsRequestRole);

/** @internal */
export const RecipientCreateTemplateRecipientsRequestRole$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsRequestRole> =
    RecipientCreateTemplateRecipientsRequestRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsRequestRole$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsRequestRole$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsRequestRole$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsRequestRole$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsRequestRole$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsRequestAccessAuth$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsRequestAccessAuth> = z
    .nativeEnum(RecipientCreateTemplateRecipientsRequestAccessAuth);

/** @internal */
export const RecipientCreateTemplateRecipientsRequestAccessAuth$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsRequestAccessAuth> =
    RecipientCreateTemplateRecipientsRequestAccessAuth$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsRequestAccessAuth$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsRequestAccessAuth$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsRequestAccessAuth$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsRequestAccessAuth$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsRequestAccessAuth$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsRequestActionAuth$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsRequestActionAuth> = z
    .nativeEnum(RecipientCreateTemplateRecipientsRequestActionAuth);

/** @internal */
export const RecipientCreateTemplateRecipientsRequestActionAuth$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsRequestActionAuth> =
    RecipientCreateTemplateRecipientsRequestActionAuth$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsRequestActionAuth$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsRequestActionAuth$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsRequestActionAuth$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsRequestActionAuth$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsRequestActionAuth$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsRequestRecipients$inboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientsRequestRecipients,
    z.ZodTypeDef,
    unknown
  > = z.object({
    email: z.string(),
    name: z.string(),
    role: RecipientCreateTemplateRecipientsRequestRole$inboundSchema,
    signingOrder: z.number().optional(),
    accessAuth: z.nullable(
      RecipientCreateTemplateRecipientsRequestAccessAuth$inboundSchema,
    ).optional(),
    actionAuth: z.nullable(
      RecipientCreateTemplateRecipientsRequestActionAuth$inboundSchema,
    ).optional(),
  });

/** @internal */
export type RecipientCreateTemplateRecipientsRequestRecipients$Outbound = {
  email: string;
  name: string;
  role: string;
  signingOrder?: number | undefined;
  accessAuth?: string | null | undefined;
  actionAuth?: string | null | undefined;
};

/** @internal */
export const RecipientCreateTemplateRecipientsRequestRecipients$outboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientsRequestRecipients$Outbound,
    z.ZodTypeDef,
    RecipientCreateTemplateRecipientsRequestRecipients
  > = z.object({
    email: z.string(),
    name: z.string(),
    role: RecipientCreateTemplateRecipientsRequestRole$outboundSchema,
    signingOrder: z.number().optional(),
    accessAuth: z.nullable(
      RecipientCreateTemplateRecipientsRequestAccessAuth$outboundSchema,
    ).optional(),
    actionAuth: z.nullable(
      RecipientCreateTemplateRecipientsRequestActionAuth$outboundSchema,
    ).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsRequestRecipients$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsRequestRecipients$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsRequestRecipients$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsRequestRecipients$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsRequestRecipients$outboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsRequestRecipients$Outbound` instead. */
  export type Outbound =
    RecipientCreateTemplateRecipientsRequestRecipients$Outbound;
}

export function recipientCreateTemplateRecipientsRequestRecipientsToJSON(
  recipientCreateTemplateRecipientsRequestRecipients:
    RecipientCreateTemplateRecipientsRequestRecipients,
): string {
  return JSON.stringify(
    RecipientCreateTemplateRecipientsRequestRecipients$outboundSchema.parse(
      recipientCreateTemplateRecipientsRequestRecipients,
    ),
  );
}

export function recipientCreateTemplateRecipientsRequestRecipientsFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientCreateTemplateRecipientsRequestRecipients,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientCreateTemplateRecipientsRequestRecipients$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientCreateTemplateRecipientsRequestRecipients' from JSON`,
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
      RecipientCreateTemplateRecipientsRequestRecipients$inboundSchema
    ),
  ),
});

/** @internal */
export type RecipientCreateTemplateRecipientsRequest$Outbound = {
  templateId: number;
  recipients: Array<
    RecipientCreateTemplateRecipientsRequestRecipients$Outbound
  >;
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
      RecipientCreateTemplateRecipientsRequestRecipients$outboundSchema
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
export const RecipientCreateTemplateRecipientsResponseRole$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsResponseRole> = z
    .nativeEnum(RecipientCreateTemplateRecipientsResponseRole);

/** @internal */
export const RecipientCreateTemplateRecipientsResponseRole$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsResponseRole> =
    RecipientCreateTemplateRecipientsResponseRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsResponseRole$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsResponseRole$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsResponseRole$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsResponseRole$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsResponseRole$outboundSchema;
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
export const RecipientCreateTemplateRecipientsResponseAccessAuth$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsResponseAccessAuth> =
    z.nativeEnum(RecipientCreateTemplateRecipientsResponseAccessAuth);

/** @internal */
export const RecipientCreateTemplateRecipientsResponseAccessAuth$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsResponseAccessAuth> =
    RecipientCreateTemplateRecipientsResponseAccessAuth$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsResponseAccessAuth$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsResponseAccessAuth$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsResponseAccessAuth$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsResponseAccessAuth$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsResponseAccessAuth$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsResponseActionAuth$inboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsResponseActionAuth> =
    z.nativeEnum(RecipientCreateTemplateRecipientsResponseActionAuth);

/** @internal */
export const RecipientCreateTemplateRecipientsResponseActionAuth$outboundSchema:
  z.ZodNativeEnum<typeof RecipientCreateTemplateRecipientsResponseActionAuth> =
    RecipientCreateTemplateRecipientsResponseActionAuth$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateTemplateRecipientsResponseActionAuth$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsResponseActionAuth$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsResponseActionAuth$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsResponseActionAuth$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsResponseActionAuth$outboundSchema;
}

/** @internal */
export const RecipientCreateTemplateRecipientsAuthOptions$inboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientsAuthOptions,
    z.ZodTypeDef,
    unknown
  > = z.object({
    accessAuth: z.nullable(
      RecipientCreateTemplateRecipientsResponseAccessAuth$inboundSchema,
    ),
    actionAuth: z.nullable(
      RecipientCreateTemplateRecipientsResponseActionAuth$inboundSchema,
    ),
  });

/** @internal */
export type RecipientCreateTemplateRecipientsAuthOptions$Outbound = {
  accessAuth: string | null;
  actionAuth: string | null;
};

/** @internal */
export const RecipientCreateTemplateRecipientsAuthOptions$outboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientsAuthOptions$Outbound,
    z.ZodTypeDef,
    RecipientCreateTemplateRecipientsAuthOptions
  > = z.object({
    accessAuth: z.nullable(
      RecipientCreateTemplateRecipientsResponseAccessAuth$outboundSchema,
    ),
    actionAuth: z.nullable(
      RecipientCreateTemplateRecipientsResponseActionAuth$outboundSchema,
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
export const RecipientCreateTemplateRecipientsResponseRecipients$inboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientsResponseRecipients,
    z.ZodTypeDef,
    unknown
  > = z.object({
    role: RecipientCreateTemplateRecipientsResponseRole$inboundSchema,
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
export type RecipientCreateTemplateRecipientsResponseRecipients$Outbound = {
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
export const RecipientCreateTemplateRecipientsResponseRecipients$outboundSchema:
  z.ZodType<
    RecipientCreateTemplateRecipientsResponseRecipients$Outbound,
    z.ZodTypeDef,
    RecipientCreateTemplateRecipientsResponseRecipients
  > = z.object({
    role: RecipientCreateTemplateRecipientsResponseRole$outboundSchema,
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
export namespace RecipientCreateTemplateRecipientsResponseRecipients$ {
  /** @deprecated use `RecipientCreateTemplateRecipientsResponseRecipients$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateTemplateRecipientsResponseRecipients$inboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsResponseRecipients$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateTemplateRecipientsResponseRecipients$outboundSchema;
  /** @deprecated use `RecipientCreateTemplateRecipientsResponseRecipients$Outbound` instead. */
  export type Outbound =
    RecipientCreateTemplateRecipientsResponseRecipients$Outbound;
}

export function recipientCreateTemplateRecipientsResponseRecipientsToJSON(
  recipientCreateTemplateRecipientsResponseRecipients:
    RecipientCreateTemplateRecipientsResponseRecipients,
): string {
  return JSON.stringify(
    RecipientCreateTemplateRecipientsResponseRecipients$outboundSchema.parse(
      recipientCreateTemplateRecipientsResponseRecipients,
    ),
  );
}

export function recipientCreateTemplateRecipientsResponseRecipientsFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientCreateTemplateRecipientsResponseRecipients,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientCreateTemplateRecipientsResponseRecipients$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientCreateTemplateRecipientsResponseRecipients' from JSON`,
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
      RecipientCreateTemplateRecipientsResponseRecipients$inboundSchema
    ),
  ),
});

/** @internal */
export type RecipientCreateTemplateRecipientsResponse$Outbound = {
  recipients: Array<
    RecipientCreateTemplateRecipientsResponseRecipients$Outbound
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
        RecipientCreateTemplateRecipientsResponseRecipients$outboundSchema
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
