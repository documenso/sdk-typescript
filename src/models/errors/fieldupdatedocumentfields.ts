/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { DocumensoError } from "./documensoerror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type FieldUpdateDocumentFieldsInternalServerErrorIssue = {
  message: string;
};

/**
 * Internal server error
 */
export type FieldUpdateDocumentFieldsInternalServerErrorData = {
  message: string;
  code: string;
  issues?: Array<FieldUpdateDocumentFieldsInternalServerErrorIssue> | undefined;
};

/**
 * Internal server error
 */
export class FieldUpdateDocumentFieldsInternalServerError
  extends DocumensoError
{
  code: string;
  issues?: Array<FieldUpdateDocumentFieldsInternalServerErrorIssue> | undefined;

  /** The original data that was passed to this error instance. */
  data$: FieldUpdateDocumentFieldsInternalServerErrorData;

  constructor(
    err: FieldUpdateDocumentFieldsInternalServerErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "FieldUpdateDocumentFieldsInternalServerError";
  }
}

export type FieldUpdateDocumentFieldsBadRequestIssue = {
  message: string;
};

/**
 * Invalid input data
 */
export type FieldUpdateDocumentFieldsBadRequestErrorData = {
  message: string;
  code: string;
  issues?: Array<FieldUpdateDocumentFieldsBadRequestIssue> | undefined;
};

/**
 * Invalid input data
 */
export class FieldUpdateDocumentFieldsBadRequestError extends DocumensoError {
  code: string;
  issues?: Array<FieldUpdateDocumentFieldsBadRequestIssue> | undefined;

  /** The original data that was passed to this error instance. */
  data$: FieldUpdateDocumentFieldsBadRequestErrorData;

  constructor(
    err: FieldUpdateDocumentFieldsBadRequestErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "FieldUpdateDocumentFieldsBadRequestError";
  }
}

/** @internal */
export const FieldUpdateDocumentFieldsInternalServerErrorIssue$inboundSchema:
  z.ZodType<
    FieldUpdateDocumentFieldsInternalServerErrorIssue,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type FieldUpdateDocumentFieldsInternalServerErrorIssue$Outbound = {
  message: string;
};

/** @internal */
export const FieldUpdateDocumentFieldsInternalServerErrorIssue$outboundSchema:
  z.ZodType<
    FieldUpdateDocumentFieldsInternalServerErrorIssue$Outbound,
    z.ZodTypeDef,
    FieldUpdateDocumentFieldsInternalServerErrorIssue
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldUpdateDocumentFieldsInternalServerErrorIssue$ {
  /** @deprecated use `FieldUpdateDocumentFieldsInternalServerErrorIssue$inboundSchema` instead. */
  export const inboundSchema =
    FieldUpdateDocumentFieldsInternalServerErrorIssue$inboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsInternalServerErrorIssue$outboundSchema` instead. */
  export const outboundSchema =
    FieldUpdateDocumentFieldsInternalServerErrorIssue$outboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsInternalServerErrorIssue$Outbound` instead. */
  export type Outbound =
    FieldUpdateDocumentFieldsInternalServerErrorIssue$Outbound;
}

export function fieldUpdateDocumentFieldsInternalServerErrorIssueToJSON(
  fieldUpdateDocumentFieldsInternalServerErrorIssue:
    FieldUpdateDocumentFieldsInternalServerErrorIssue,
): string {
  return JSON.stringify(
    FieldUpdateDocumentFieldsInternalServerErrorIssue$outboundSchema.parse(
      fieldUpdateDocumentFieldsInternalServerErrorIssue,
    ),
  );
}

export function fieldUpdateDocumentFieldsInternalServerErrorIssueFromJSON(
  jsonString: string,
): SafeParseResult<
  FieldUpdateDocumentFieldsInternalServerErrorIssue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      FieldUpdateDocumentFieldsInternalServerErrorIssue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'FieldUpdateDocumentFieldsInternalServerErrorIssue' from JSON`,
  );
}

/** @internal */
export const FieldUpdateDocumentFieldsInternalServerError$inboundSchema:
  z.ZodType<
    FieldUpdateDocumentFieldsInternalServerError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() =>
        FieldUpdateDocumentFieldsInternalServerErrorIssue$inboundSchema
      ),
    ).optional(),
    request$: z.instanceof(Request),
    response$: z.instanceof(Response),
    body$: z.string(),
  })
    .transform((v) => {
      return new FieldUpdateDocumentFieldsInternalServerError(v, {
        request: v.request$,
        response: v.response$,
        body: v.body$,
      });
    });

/** @internal */
export type FieldUpdateDocumentFieldsInternalServerError$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<FieldUpdateDocumentFieldsInternalServerErrorIssue$Outbound>
    | undefined;
};

/** @internal */
export const FieldUpdateDocumentFieldsInternalServerError$outboundSchema:
  z.ZodType<
    FieldUpdateDocumentFieldsInternalServerError$Outbound,
    z.ZodTypeDef,
    FieldUpdateDocumentFieldsInternalServerError
  > = z.instanceof(FieldUpdateDocumentFieldsInternalServerError)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          FieldUpdateDocumentFieldsInternalServerErrorIssue$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldUpdateDocumentFieldsInternalServerError$ {
  /** @deprecated use `FieldUpdateDocumentFieldsInternalServerError$inboundSchema` instead. */
  export const inboundSchema =
    FieldUpdateDocumentFieldsInternalServerError$inboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsInternalServerError$outboundSchema` instead. */
  export const outboundSchema =
    FieldUpdateDocumentFieldsInternalServerError$outboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsInternalServerError$Outbound` instead. */
  export type Outbound = FieldUpdateDocumentFieldsInternalServerError$Outbound;
}

/** @internal */
export const FieldUpdateDocumentFieldsBadRequestIssue$inboundSchema: z.ZodType<
  FieldUpdateDocumentFieldsBadRequestIssue,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type FieldUpdateDocumentFieldsBadRequestIssue$Outbound = {
  message: string;
};

/** @internal */
export const FieldUpdateDocumentFieldsBadRequestIssue$outboundSchema: z.ZodType<
  FieldUpdateDocumentFieldsBadRequestIssue$Outbound,
  z.ZodTypeDef,
  FieldUpdateDocumentFieldsBadRequestIssue
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldUpdateDocumentFieldsBadRequestIssue$ {
  /** @deprecated use `FieldUpdateDocumentFieldsBadRequestIssue$inboundSchema` instead. */
  export const inboundSchema =
    FieldUpdateDocumentFieldsBadRequestIssue$inboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsBadRequestIssue$outboundSchema` instead. */
  export const outboundSchema =
    FieldUpdateDocumentFieldsBadRequestIssue$outboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsBadRequestIssue$Outbound` instead. */
  export type Outbound = FieldUpdateDocumentFieldsBadRequestIssue$Outbound;
}

export function fieldUpdateDocumentFieldsBadRequestIssueToJSON(
  fieldUpdateDocumentFieldsBadRequestIssue:
    FieldUpdateDocumentFieldsBadRequestIssue,
): string {
  return JSON.stringify(
    FieldUpdateDocumentFieldsBadRequestIssue$outboundSchema.parse(
      fieldUpdateDocumentFieldsBadRequestIssue,
    ),
  );
}

export function fieldUpdateDocumentFieldsBadRequestIssueFromJSON(
  jsonString: string,
): SafeParseResult<
  FieldUpdateDocumentFieldsBadRequestIssue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      FieldUpdateDocumentFieldsBadRequestIssue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'FieldUpdateDocumentFieldsBadRequestIssue' from JSON`,
  );
}

/** @internal */
export const FieldUpdateDocumentFieldsBadRequestError$inboundSchema: z.ZodType<
  FieldUpdateDocumentFieldsBadRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  issues: z.array(
    z.lazy(() => FieldUpdateDocumentFieldsBadRequestIssue$inboundSchema),
  ).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new FieldUpdateDocumentFieldsBadRequestError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type FieldUpdateDocumentFieldsBadRequestError$Outbound = {
  message: string;
  code: string;
  issues?: Array<FieldUpdateDocumentFieldsBadRequestIssue$Outbound> | undefined;
};

/** @internal */
export const FieldUpdateDocumentFieldsBadRequestError$outboundSchema: z.ZodType<
  FieldUpdateDocumentFieldsBadRequestError$Outbound,
  z.ZodTypeDef,
  FieldUpdateDocumentFieldsBadRequestError
> = z.instanceof(FieldUpdateDocumentFieldsBadRequestError)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => FieldUpdateDocumentFieldsBadRequestIssue$outboundSchema),
    ).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldUpdateDocumentFieldsBadRequestError$ {
  /** @deprecated use `FieldUpdateDocumentFieldsBadRequestError$inboundSchema` instead. */
  export const inboundSchema =
    FieldUpdateDocumentFieldsBadRequestError$inboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsBadRequestError$outboundSchema` instead. */
  export const outboundSchema =
    FieldUpdateDocumentFieldsBadRequestError$outboundSchema;
  /** @deprecated use `FieldUpdateDocumentFieldsBadRequestError$Outbound` instead. */
  export type Outbound = FieldUpdateDocumentFieldsBadRequestError$Outbound;
}
