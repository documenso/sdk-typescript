/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type RecipientDeleteDocumentRecipientDocumentsRecipientsIssues = {
  message: string;
};

/**
 * Internal server error
 */
export type RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBodyData =
  {
    message: string;
    code: string;
    issues?:
      | Array<RecipientDeleteDocumentRecipientDocumentsRecipientsIssues>
      | undefined;
  };

/**
 * Internal server error
 */
export class RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody
  extends Error
{
  code: string;
  issues?:
    | Array<RecipientDeleteDocumentRecipientDocumentsRecipientsIssues>
    | undefined;

  /** The original data that was passed to this error instance. */
  data$: RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBodyData;

  constructor(
    err: RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name =
      "RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody";
  }
}

export type RecipientDeleteDocumentRecipientIssues = {
  message: string;
};

/**
 * Invalid input data
 */
export type RecipientDeleteDocumentRecipientResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<RecipientDeleteDocumentRecipientIssues> | undefined;
};

/**
 * Invalid input data
 */
export class RecipientDeleteDocumentRecipientResponseBody extends Error {
  code: string;
  issues?: Array<RecipientDeleteDocumentRecipientIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: RecipientDeleteDocumentRecipientResponseBodyData;

  constructor(err: RecipientDeleteDocumentRecipientResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "RecipientDeleteDocumentRecipientResponseBody";
  }
}

/** @internal */
export const RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$inboundSchema:
  z.ZodType<
    RecipientDeleteDocumentRecipientDocumentsRecipientsIssues,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$Outbound =
  {
    message: string;
  };

/** @internal */
export const RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$outboundSchema:
  z.ZodType<
    RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$Outbound,
    z.ZodTypeDef,
    RecipientDeleteDocumentRecipientDocumentsRecipientsIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$ {
  /** @deprecated use `RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$inboundSchema` instead. */
  export const inboundSchema =
    RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$inboundSchema;
  /** @deprecated use `RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$outboundSchema` instead. */
  export const outboundSchema =
    RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$outboundSchema;
  /** @deprecated use `RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$Outbound` instead. */
  export type Outbound =
    RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$Outbound;
}

export function recipientDeleteDocumentRecipientDocumentsRecipientsIssuesToJSON(
  recipientDeleteDocumentRecipientDocumentsRecipientsIssues:
    RecipientDeleteDocumentRecipientDocumentsRecipientsIssues,
): string {
  return JSON.stringify(
    RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$outboundSchema
      .parse(recipientDeleteDocumentRecipientDocumentsRecipientsIssues),
  );
}

export function recipientDeleteDocumentRecipientDocumentsRecipientsIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientDeleteDocumentRecipientDocumentsRecipientsIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'RecipientDeleteDocumentRecipientDocumentsRecipientsIssues' from JSON`,
  );
}

/** @internal */
export const RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody$inboundSchema:
  z.ZodType<
    RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() =>
        RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$inboundSchema
      ),
    ).optional(),
  })
    .transform((v) => {
      return new RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody(
        v,
      );
    });

/** @internal */
export type RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody$Outbound =
  {
    message: string;
    code: string;
    issues?:
      | Array<
        RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$Outbound
      >
      | undefined;
  };

/** @internal */
export const RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody$outboundSchema:
  z.ZodType<
    RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody$Outbound,
    z.ZodTypeDef,
    RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody
  > = z.instanceof(
    RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          RecipientDeleteDocumentRecipientDocumentsRecipientsIssues$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody$ {
  /** @deprecated use `RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody$inboundSchema;
  /** @deprecated use `RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody$outboundSchema;
  /** @deprecated use `RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody$Outbound` instead. */
  export type Outbound =
    RecipientDeleteDocumentRecipientDocumentsRecipientsResponseBody$Outbound;
}

/** @internal */
export const RecipientDeleteDocumentRecipientIssues$inboundSchema: z.ZodType<
  RecipientDeleteDocumentRecipientIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type RecipientDeleteDocumentRecipientIssues$Outbound = {
  message: string;
};

/** @internal */
export const RecipientDeleteDocumentRecipientIssues$outboundSchema: z.ZodType<
  RecipientDeleteDocumentRecipientIssues$Outbound,
  z.ZodTypeDef,
  RecipientDeleteDocumentRecipientIssues
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientDeleteDocumentRecipientIssues$ {
  /** @deprecated use `RecipientDeleteDocumentRecipientIssues$inboundSchema` instead. */
  export const inboundSchema =
    RecipientDeleteDocumentRecipientIssues$inboundSchema;
  /** @deprecated use `RecipientDeleteDocumentRecipientIssues$outboundSchema` instead. */
  export const outboundSchema =
    RecipientDeleteDocumentRecipientIssues$outboundSchema;
  /** @deprecated use `RecipientDeleteDocumentRecipientIssues$Outbound` instead. */
  export type Outbound = RecipientDeleteDocumentRecipientIssues$Outbound;
}

export function recipientDeleteDocumentRecipientIssuesToJSON(
  recipientDeleteDocumentRecipientIssues:
    RecipientDeleteDocumentRecipientIssues,
): string {
  return JSON.stringify(
    RecipientDeleteDocumentRecipientIssues$outboundSchema.parse(
      recipientDeleteDocumentRecipientIssues,
    ),
  );
}

export function recipientDeleteDocumentRecipientIssuesFromJSON(
  jsonString: string,
): SafeParseResult<RecipientDeleteDocumentRecipientIssues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientDeleteDocumentRecipientIssues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RecipientDeleteDocumentRecipientIssues' from JSON`,
  );
}

/** @internal */
export const RecipientDeleteDocumentRecipientResponseBody$inboundSchema:
  z.ZodType<
    RecipientDeleteDocumentRecipientResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => RecipientDeleteDocumentRecipientIssues$inboundSchema),
    ).optional(),
  })
    .transform((v) => {
      return new RecipientDeleteDocumentRecipientResponseBody(v);
    });

/** @internal */
export type RecipientDeleteDocumentRecipientResponseBody$Outbound = {
  message: string;
  code: string;
  issues?: Array<RecipientDeleteDocumentRecipientIssues$Outbound> | undefined;
};

/** @internal */
export const RecipientDeleteDocumentRecipientResponseBody$outboundSchema:
  z.ZodType<
    RecipientDeleteDocumentRecipientResponseBody$Outbound,
    z.ZodTypeDef,
    RecipientDeleteDocumentRecipientResponseBody
  > = z.instanceof(RecipientDeleteDocumentRecipientResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() => RecipientDeleteDocumentRecipientIssues$outboundSchema),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientDeleteDocumentRecipientResponseBody$ {
  /** @deprecated use `RecipientDeleteDocumentRecipientResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    RecipientDeleteDocumentRecipientResponseBody$inboundSchema;
  /** @deprecated use `RecipientDeleteDocumentRecipientResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    RecipientDeleteDocumentRecipientResponseBody$outboundSchema;
  /** @deprecated use `RecipientDeleteDocumentRecipientResponseBody$Outbound` instead. */
  export type Outbound = RecipientDeleteDocumentRecipientResponseBody$Outbound;
}
