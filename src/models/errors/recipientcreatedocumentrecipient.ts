/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type RecipientCreateDocumentRecipientDocumentsRecipientsIssues = {
  message: string;
};

/**
 * Internal server error
 */
export type RecipientCreateDocumentRecipientDocumentsRecipientsResponseBodyData =
  {
    message: string;
    code: string;
    issues?:
      | Array<RecipientCreateDocumentRecipientDocumentsRecipientsIssues>
      | undefined;
  };

/**
 * Internal server error
 */
export class RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody
  extends Error
{
  code: string;
  issues?:
    | Array<RecipientCreateDocumentRecipientDocumentsRecipientsIssues>
    | undefined;

  /** The original data that was passed to this error instance. */
  data$: RecipientCreateDocumentRecipientDocumentsRecipientsResponseBodyData;

  constructor(
    err: RecipientCreateDocumentRecipientDocumentsRecipientsResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name =
      "RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody";
  }
}

export type RecipientCreateDocumentRecipientIssues = {
  message: string;
};

/**
 * Invalid input data
 */
export type RecipientCreateDocumentRecipientResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<RecipientCreateDocumentRecipientIssues> | undefined;
};

/**
 * Invalid input data
 */
export class RecipientCreateDocumentRecipientResponseBody extends Error {
  code: string;
  issues?: Array<RecipientCreateDocumentRecipientIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: RecipientCreateDocumentRecipientResponseBodyData;

  constructor(err: RecipientCreateDocumentRecipientResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "RecipientCreateDocumentRecipientResponseBody";
  }
}

/** @internal */
export const RecipientCreateDocumentRecipientDocumentsRecipientsIssues$inboundSchema:
  z.ZodType<
    RecipientCreateDocumentRecipientDocumentsRecipientsIssues,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type RecipientCreateDocumentRecipientDocumentsRecipientsIssues$Outbound =
  {
    message: string;
  };

/** @internal */
export const RecipientCreateDocumentRecipientDocumentsRecipientsIssues$outboundSchema:
  z.ZodType<
    RecipientCreateDocumentRecipientDocumentsRecipientsIssues$Outbound,
    z.ZodTypeDef,
    RecipientCreateDocumentRecipientDocumentsRecipientsIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateDocumentRecipientDocumentsRecipientsIssues$ {
  /** @deprecated use `RecipientCreateDocumentRecipientDocumentsRecipientsIssues$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateDocumentRecipientDocumentsRecipientsIssues$inboundSchema;
  /** @deprecated use `RecipientCreateDocumentRecipientDocumentsRecipientsIssues$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateDocumentRecipientDocumentsRecipientsIssues$outboundSchema;
  /** @deprecated use `RecipientCreateDocumentRecipientDocumentsRecipientsIssues$Outbound` instead. */
  export type Outbound =
    RecipientCreateDocumentRecipientDocumentsRecipientsIssues$Outbound;
}

export function recipientCreateDocumentRecipientDocumentsRecipientsIssuesToJSON(
  recipientCreateDocumentRecipientDocumentsRecipientsIssues:
    RecipientCreateDocumentRecipientDocumentsRecipientsIssues,
): string {
  return JSON.stringify(
    RecipientCreateDocumentRecipientDocumentsRecipientsIssues$outboundSchema
      .parse(recipientCreateDocumentRecipientDocumentsRecipientsIssues),
  );
}

export function recipientCreateDocumentRecipientDocumentsRecipientsIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientCreateDocumentRecipientDocumentsRecipientsIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientCreateDocumentRecipientDocumentsRecipientsIssues$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'RecipientCreateDocumentRecipientDocumentsRecipientsIssues' from JSON`,
  );
}

/** @internal */
export const RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody$inboundSchema:
  z.ZodType<
    RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() =>
        RecipientCreateDocumentRecipientDocumentsRecipientsIssues$inboundSchema
      ),
    ).optional(),
  })
    .transform((v) => {
      return new RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody(
        v,
      );
    });

/** @internal */
export type RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody$Outbound =
  {
    message: string;
    code: string;
    issues?:
      | Array<
        RecipientCreateDocumentRecipientDocumentsRecipientsIssues$Outbound
      >
      | undefined;
  };

/** @internal */
export const RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody$outboundSchema:
  z.ZodType<
    RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody$Outbound,
    z.ZodTypeDef,
    RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody
  > = z.instanceof(
    RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          RecipientCreateDocumentRecipientDocumentsRecipientsIssues$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody$ {
  /** @deprecated use `RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody$inboundSchema;
  /** @deprecated use `RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody$outboundSchema;
  /** @deprecated use `RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody$Outbound` instead. */
  export type Outbound =
    RecipientCreateDocumentRecipientDocumentsRecipientsResponseBody$Outbound;
}

/** @internal */
export const RecipientCreateDocumentRecipientIssues$inboundSchema: z.ZodType<
  RecipientCreateDocumentRecipientIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type RecipientCreateDocumentRecipientIssues$Outbound = {
  message: string;
};

/** @internal */
export const RecipientCreateDocumentRecipientIssues$outboundSchema: z.ZodType<
  RecipientCreateDocumentRecipientIssues$Outbound,
  z.ZodTypeDef,
  RecipientCreateDocumentRecipientIssues
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateDocumentRecipientIssues$ {
  /** @deprecated use `RecipientCreateDocumentRecipientIssues$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateDocumentRecipientIssues$inboundSchema;
  /** @deprecated use `RecipientCreateDocumentRecipientIssues$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateDocumentRecipientIssues$outboundSchema;
  /** @deprecated use `RecipientCreateDocumentRecipientIssues$Outbound` instead. */
  export type Outbound = RecipientCreateDocumentRecipientIssues$Outbound;
}

export function recipientCreateDocumentRecipientIssuesToJSON(
  recipientCreateDocumentRecipientIssues:
    RecipientCreateDocumentRecipientIssues,
): string {
  return JSON.stringify(
    RecipientCreateDocumentRecipientIssues$outboundSchema.parse(
      recipientCreateDocumentRecipientIssues,
    ),
  );
}

export function recipientCreateDocumentRecipientIssuesFromJSON(
  jsonString: string,
): SafeParseResult<RecipientCreateDocumentRecipientIssues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientCreateDocumentRecipientIssues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RecipientCreateDocumentRecipientIssues' from JSON`,
  );
}

/** @internal */
export const RecipientCreateDocumentRecipientResponseBody$inboundSchema:
  z.ZodType<
    RecipientCreateDocumentRecipientResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => RecipientCreateDocumentRecipientIssues$inboundSchema),
    ).optional(),
  })
    .transform((v) => {
      return new RecipientCreateDocumentRecipientResponseBody(v);
    });

/** @internal */
export type RecipientCreateDocumentRecipientResponseBody$Outbound = {
  message: string;
  code: string;
  issues?: Array<RecipientCreateDocumentRecipientIssues$Outbound> | undefined;
};

/** @internal */
export const RecipientCreateDocumentRecipientResponseBody$outboundSchema:
  z.ZodType<
    RecipientCreateDocumentRecipientResponseBody$Outbound,
    z.ZodTypeDef,
    RecipientCreateDocumentRecipientResponseBody
  > = z.instanceof(RecipientCreateDocumentRecipientResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() => RecipientCreateDocumentRecipientIssues$outboundSchema),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientCreateDocumentRecipientResponseBody$ {
  /** @deprecated use `RecipientCreateDocumentRecipientResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    RecipientCreateDocumentRecipientResponseBody$inboundSchema;
  /** @deprecated use `RecipientCreateDocumentRecipientResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    RecipientCreateDocumentRecipientResponseBody$outboundSchema;
  /** @deprecated use `RecipientCreateDocumentRecipientResponseBody$Outbound` instead. */
  export type Outbound = RecipientCreateDocumentRecipientResponseBody$Outbound;
}
