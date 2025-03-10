/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type FieldCreateDocumentFieldsInternalServerErrorIssues = {
  message: string;
};

/**
 * Internal server error
 */
export type FieldCreateDocumentFieldsInternalServerErrorData = {
  message: string;
  code: string;
  issues?:
    | Array<FieldCreateDocumentFieldsInternalServerErrorIssues>
    | undefined;
};

/**
 * Internal server error
 */
export class FieldCreateDocumentFieldsInternalServerError extends Error {
  code: string;
  issues?:
    | Array<FieldCreateDocumentFieldsInternalServerErrorIssues>
    | undefined;

  /** The original data that was passed to this error instance. */
  data$: FieldCreateDocumentFieldsInternalServerErrorData;

  constructor(err: FieldCreateDocumentFieldsInternalServerErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "FieldCreateDocumentFieldsInternalServerError";
  }
}

export type FieldCreateDocumentFieldsBadRequestIssues = {
  message: string;
};

/**
 * Invalid input data
 */
export type FieldCreateDocumentFieldsBadRequestErrorData = {
  message: string;
  code: string;
  issues?: Array<FieldCreateDocumentFieldsBadRequestIssues> | undefined;
};

/**
 * Invalid input data
 */
export class FieldCreateDocumentFieldsBadRequestError extends Error {
  code: string;
  issues?: Array<FieldCreateDocumentFieldsBadRequestIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: FieldCreateDocumentFieldsBadRequestErrorData;

  constructor(err: FieldCreateDocumentFieldsBadRequestErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "FieldCreateDocumentFieldsBadRequestError";
  }
}

/** @internal */
export const FieldCreateDocumentFieldsInternalServerErrorIssues$inboundSchema:
  z.ZodType<
    FieldCreateDocumentFieldsInternalServerErrorIssues,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type FieldCreateDocumentFieldsInternalServerErrorIssues$Outbound = {
  message: string;
};

/** @internal */
export const FieldCreateDocumentFieldsInternalServerErrorIssues$outboundSchema:
  z.ZodType<
    FieldCreateDocumentFieldsInternalServerErrorIssues$Outbound,
    z.ZodTypeDef,
    FieldCreateDocumentFieldsInternalServerErrorIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldCreateDocumentFieldsInternalServerErrorIssues$ {
  /** @deprecated use `FieldCreateDocumentFieldsInternalServerErrorIssues$inboundSchema` instead. */
  export const inboundSchema =
    FieldCreateDocumentFieldsInternalServerErrorIssues$inboundSchema;
  /** @deprecated use `FieldCreateDocumentFieldsInternalServerErrorIssues$outboundSchema` instead. */
  export const outboundSchema =
    FieldCreateDocumentFieldsInternalServerErrorIssues$outboundSchema;
  /** @deprecated use `FieldCreateDocumentFieldsInternalServerErrorIssues$Outbound` instead. */
  export type Outbound =
    FieldCreateDocumentFieldsInternalServerErrorIssues$Outbound;
}

export function fieldCreateDocumentFieldsInternalServerErrorIssuesToJSON(
  fieldCreateDocumentFieldsInternalServerErrorIssues:
    FieldCreateDocumentFieldsInternalServerErrorIssues,
): string {
  return JSON.stringify(
    FieldCreateDocumentFieldsInternalServerErrorIssues$outboundSchema.parse(
      fieldCreateDocumentFieldsInternalServerErrorIssues,
    ),
  );
}

export function fieldCreateDocumentFieldsInternalServerErrorIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  FieldCreateDocumentFieldsInternalServerErrorIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      FieldCreateDocumentFieldsInternalServerErrorIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'FieldCreateDocumentFieldsInternalServerErrorIssues' from JSON`,
  );
}

/** @internal */
export const FieldCreateDocumentFieldsInternalServerError$inboundSchema:
  z.ZodType<
    FieldCreateDocumentFieldsInternalServerError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() =>
        FieldCreateDocumentFieldsInternalServerErrorIssues$inboundSchema
      ),
    ).optional(),
  })
    .transform((v) => {
      return new FieldCreateDocumentFieldsInternalServerError(v);
    });

/** @internal */
export type FieldCreateDocumentFieldsInternalServerError$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<FieldCreateDocumentFieldsInternalServerErrorIssues$Outbound>
    | undefined;
};

/** @internal */
export const FieldCreateDocumentFieldsInternalServerError$outboundSchema:
  z.ZodType<
    FieldCreateDocumentFieldsInternalServerError$Outbound,
    z.ZodTypeDef,
    FieldCreateDocumentFieldsInternalServerError
  > = z.instanceof(FieldCreateDocumentFieldsInternalServerError)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          FieldCreateDocumentFieldsInternalServerErrorIssues$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldCreateDocumentFieldsInternalServerError$ {
  /** @deprecated use `FieldCreateDocumentFieldsInternalServerError$inboundSchema` instead. */
  export const inboundSchema =
    FieldCreateDocumentFieldsInternalServerError$inboundSchema;
  /** @deprecated use `FieldCreateDocumentFieldsInternalServerError$outboundSchema` instead. */
  export const outboundSchema =
    FieldCreateDocumentFieldsInternalServerError$outboundSchema;
  /** @deprecated use `FieldCreateDocumentFieldsInternalServerError$Outbound` instead. */
  export type Outbound = FieldCreateDocumentFieldsInternalServerError$Outbound;
}

/** @internal */
export const FieldCreateDocumentFieldsBadRequestIssues$inboundSchema: z.ZodType<
  FieldCreateDocumentFieldsBadRequestIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type FieldCreateDocumentFieldsBadRequestIssues$Outbound = {
  message: string;
};

/** @internal */
export const FieldCreateDocumentFieldsBadRequestIssues$outboundSchema:
  z.ZodType<
    FieldCreateDocumentFieldsBadRequestIssues$Outbound,
    z.ZodTypeDef,
    FieldCreateDocumentFieldsBadRequestIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldCreateDocumentFieldsBadRequestIssues$ {
  /** @deprecated use `FieldCreateDocumentFieldsBadRequestIssues$inboundSchema` instead. */
  export const inboundSchema =
    FieldCreateDocumentFieldsBadRequestIssues$inboundSchema;
  /** @deprecated use `FieldCreateDocumentFieldsBadRequestIssues$outboundSchema` instead. */
  export const outboundSchema =
    FieldCreateDocumentFieldsBadRequestIssues$outboundSchema;
  /** @deprecated use `FieldCreateDocumentFieldsBadRequestIssues$Outbound` instead. */
  export type Outbound = FieldCreateDocumentFieldsBadRequestIssues$Outbound;
}

export function fieldCreateDocumentFieldsBadRequestIssuesToJSON(
  fieldCreateDocumentFieldsBadRequestIssues:
    FieldCreateDocumentFieldsBadRequestIssues,
): string {
  return JSON.stringify(
    FieldCreateDocumentFieldsBadRequestIssues$outboundSchema.parse(
      fieldCreateDocumentFieldsBadRequestIssues,
    ),
  );
}

export function fieldCreateDocumentFieldsBadRequestIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  FieldCreateDocumentFieldsBadRequestIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      FieldCreateDocumentFieldsBadRequestIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'FieldCreateDocumentFieldsBadRequestIssues' from JSON`,
  );
}

/** @internal */
export const FieldCreateDocumentFieldsBadRequestError$inboundSchema: z.ZodType<
  FieldCreateDocumentFieldsBadRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  issues: z.array(
    z.lazy(() => FieldCreateDocumentFieldsBadRequestIssues$inboundSchema),
  ).optional(),
})
  .transform((v) => {
    return new FieldCreateDocumentFieldsBadRequestError(v);
  });

/** @internal */
export type FieldCreateDocumentFieldsBadRequestError$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<FieldCreateDocumentFieldsBadRequestIssues$Outbound>
    | undefined;
};

/** @internal */
export const FieldCreateDocumentFieldsBadRequestError$outboundSchema: z.ZodType<
  FieldCreateDocumentFieldsBadRequestError$Outbound,
  z.ZodTypeDef,
  FieldCreateDocumentFieldsBadRequestError
> = z.instanceof(FieldCreateDocumentFieldsBadRequestError)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => FieldCreateDocumentFieldsBadRequestIssues$outboundSchema),
    ).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldCreateDocumentFieldsBadRequestError$ {
  /** @deprecated use `FieldCreateDocumentFieldsBadRequestError$inboundSchema` instead. */
  export const inboundSchema =
    FieldCreateDocumentFieldsBadRequestError$inboundSchema;
  /** @deprecated use `FieldCreateDocumentFieldsBadRequestError$outboundSchema` instead. */
  export const outboundSchema =
    FieldCreateDocumentFieldsBadRequestError$outboundSchema;
  /** @deprecated use `FieldCreateDocumentFieldsBadRequestError$Outbound` instead. */
  export type Outbound = FieldCreateDocumentFieldsBadRequestError$Outbound;
}
