/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type FieldUpdateDocumentFieldsDocumentsFieldsIssues = {
  message: string;
};

/**
 * Internal server error
 */
export type FieldUpdateDocumentFieldsDocumentsFieldsResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<FieldUpdateDocumentFieldsDocumentsFieldsIssues> | undefined;
};

/**
 * Internal server error
 */
export class FieldUpdateDocumentFieldsDocumentsFieldsResponseBody
  extends Error
{
  code: string;
  issues?: Array<FieldUpdateDocumentFieldsDocumentsFieldsIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: FieldUpdateDocumentFieldsDocumentsFieldsResponseBodyData;

  constructor(err: FieldUpdateDocumentFieldsDocumentsFieldsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "FieldUpdateDocumentFieldsDocumentsFieldsResponseBody";
  }
}

export type FieldUpdateDocumentFieldsIssues = {
  message: string;
};

/**
 * Invalid input data
 */
export type FieldUpdateDocumentFieldsResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<FieldUpdateDocumentFieldsIssues> | undefined;
};

/**
 * Invalid input data
 */
export class FieldUpdateDocumentFieldsResponseBody extends Error {
  code: string;
  issues?: Array<FieldUpdateDocumentFieldsIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: FieldUpdateDocumentFieldsResponseBodyData;

  constructor(err: FieldUpdateDocumentFieldsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "FieldUpdateDocumentFieldsResponseBody";
  }
}

/** @internal */
export const FieldUpdateDocumentFieldsDocumentsFieldsIssues$inboundSchema:
  z.ZodType<
    FieldUpdateDocumentFieldsDocumentsFieldsIssues,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type FieldUpdateDocumentFieldsDocumentsFieldsIssues$Outbound = {
  message: string;
};

/** @internal */
export const FieldUpdateDocumentFieldsDocumentsFieldsIssues$outboundSchema:
  z.ZodType<
    FieldUpdateDocumentFieldsDocumentsFieldsIssues$Outbound,
    z.ZodTypeDef,
    FieldUpdateDocumentFieldsDocumentsFieldsIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldUpdateDocumentFieldsDocumentsFieldsIssues$ {
  /** @deprecated use `FieldUpdateDocumentFieldsDocumentsFieldsIssues$inboundSchema` instead. */
  export const inboundSchema =
    FieldUpdateDocumentFieldsDocumentsFieldsIssues$inboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsDocumentsFieldsIssues$outboundSchema` instead. */
  export const outboundSchema =
    FieldUpdateDocumentFieldsDocumentsFieldsIssues$outboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsDocumentsFieldsIssues$Outbound` instead. */
  export type Outbound =
    FieldUpdateDocumentFieldsDocumentsFieldsIssues$Outbound;
}

export function fieldUpdateDocumentFieldsDocumentsFieldsIssuesToJSON(
  fieldUpdateDocumentFieldsDocumentsFieldsIssues:
    FieldUpdateDocumentFieldsDocumentsFieldsIssues,
): string {
  return JSON.stringify(
    FieldUpdateDocumentFieldsDocumentsFieldsIssues$outboundSchema.parse(
      fieldUpdateDocumentFieldsDocumentsFieldsIssues,
    ),
  );
}

export function fieldUpdateDocumentFieldsDocumentsFieldsIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  FieldUpdateDocumentFieldsDocumentsFieldsIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      FieldUpdateDocumentFieldsDocumentsFieldsIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'FieldUpdateDocumentFieldsDocumentsFieldsIssues' from JSON`,
  );
}

/** @internal */
export const FieldUpdateDocumentFieldsDocumentsFieldsResponseBody$inboundSchema:
  z.ZodType<
    FieldUpdateDocumentFieldsDocumentsFieldsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() =>
        FieldUpdateDocumentFieldsDocumentsFieldsIssues$inboundSchema
      ),
    ).optional(),
  })
    .transform((v) => {
      return new FieldUpdateDocumentFieldsDocumentsFieldsResponseBody(v);
    });

/** @internal */
export type FieldUpdateDocumentFieldsDocumentsFieldsResponseBody$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<FieldUpdateDocumentFieldsDocumentsFieldsIssues$Outbound>
    | undefined;
};

/** @internal */
export const FieldUpdateDocumentFieldsDocumentsFieldsResponseBody$outboundSchema:
  z.ZodType<
    FieldUpdateDocumentFieldsDocumentsFieldsResponseBody$Outbound,
    z.ZodTypeDef,
    FieldUpdateDocumentFieldsDocumentsFieldsResponseBody
  > = z.instanceof(FieldUpdateDocumentFieldsDocumentsFieldsResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          FieldUpdateDocumentFieldsDocumentsFieldsIssues$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldUpdateDocumentFieldsDocumentsFieldsResponseBody$ {
  /** @deprecated use `FieldUpdateDocumentFieldsDocumentsFieldsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    FieldUpdateDocumentFieldsDocumentsFieldsResponseBody$inboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsDocumentsFieldsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    FieldUpdateDocumentFieldsDocumentsFieldsResponseBody$outboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsDocumentsFieldsResponseBody$Outbound` instead. */
  export type Outbound =
    FieldUpdateDocumentFieldsDocumentsFieldsResponseBody$Outbound;
}

/** @internal */
export const FieldUpdateDocumentFieldsIssues$inboundSchema: z.ZodType<
  FieldUpdateDocumentFieldsIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type FieldUpdateDocumentFieldsIssues$Outbound = {
  message: string;
};

/** @internal */
export const FieldUpdateDocumentFieldsIssues$outboundSchema: z.ZodType<
  FieldUpdateDocumentFieldsIssues$Outbound,
  z.ZodTypeDef,
  FieldUpdateDocumentFieldsIssues
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldUpdateDocumentFieldsIssues$ {
  /** @deprecated use `FieldUpdateDocumentFieldsIssues$inboundSchema` instead. */
  export const inboundSchema = FieldUpdateDocumentFieldsIssues$inboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsIssues$outboundSchema` instead. */
  export const outboundSchema = FieldUpdateDocumentFieldsIssues$outboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsIssues$Outbound` instead. */
  export type Outbound = FieldUpdateDocumentFieldsIssues$Outbound;
}

export function fieldUpdateDocumentFieldsIssuesToJSON(
  fieldUpdateDocumentFieldsIssues: FieldUpdateDocumentFieldsIssues,
): string {
  return JSON.stringify(
    FieldUpdateDocumentFieldsIssues$outboundSchema.parse(
      fieldUpdateDocumentFieldsIssues,
    ),
  );
}

export function fieldUpdateDocumentFieldsIssuesFromJSON(
  jsonString: string,
): SafeParseResult<FieldUpdateDocumentFieldsIssues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FieldUpdateDocumentFieldsIssues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FieldUpdateDocumentFieldsIssues' from JSON`,
  );
}

/** @internal */
export const FieldUpdateDocumentFieldsResponseBody$inboundSchema: z.ZodType<
  FieldUpdateDocumentFieldsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  issues: z.array(z.lazy(() => FieldUpdateDocumentFieldsIssues$inboundSchema))
    .optional(),
})
  .transform((v) => {
    return new FieldUpdateDocumentFieldsResponseBody(v);
  });

/** @internal */
export type FieldUpdateDocumentFieldsResponseBody$Outbound = {
  message: string;
  code: string;
  issues?: Array<FieldUpdateDocumentFieldsIssues$Outbound> | undefined;
};

/** @internal */
export const FieldUpdateDocumentFieldsResponseBody$outboundSchema: z.ZodType<
  FieldUpdateDocumentFieldsResponseBody$Outbound,
  z.ZodTypeDef,
  FieldUpdateDocumentFieldsResponseBody
> = z.instanceof(FieldUpdateDocumentFieldsResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => FieldUpdateDocumentFieldsIssues$outboundSchema),
    ).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldUpdateDocumentFieldsResponseBody$ {
  /** @deprecated use `FieldUpdateDocumentFieldsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    FieldUpdateDocumentFieldsResponseBody$inboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    FieldUpdateDocumentFieldsResponseBody$outboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsResponseBody$Outbound` instead. */
  export type Outbound = FieldUpdateDocumentFieldsResponseBody$Outbound;
}
