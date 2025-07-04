/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { DocumensoError } from "./documensoerror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type RecipientGetDocumentRecipientInternalServerErrorIssue = {
  message: string;
};

/**
 * Internal server error
 */
export type RecipientGetDocumentRecipientInternalServerErrorData = {
  message: string;
  code: string;
  issues?:
    | Array<RecipientGetDocumentRecipientInternalServerErrorIssue>
    | undefined;
};

/**
 * Internal server error
 */
export class RecipientGetDocumentRecipientInternalServerError
  extends DocumensoError
{
  code: string;
  issues?:
    | Array<RecipientGetDocumentRecipientInternalServerErrorIssue>
    | undefined;

  /** The original data that was passed to this error instance. */
  data$: RecipientGetDocumentRecipientInternalServerErrorData;

  constructor(
    err: RecipientGetDocumentRecipientInternalServerErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "RecipientGetDocumentRecipientInternalServerError";
  }
}

export type RecipientGetDocumentRecipientNotFoundIssue = {
  message: string;
};

/**
 * Not found
 */
export type RecipientGetDocumentRecipientNotFoundErrorData = {
  message: string;
  code: string;
  issues?: Array<RecipientGetDocumentRecipientNotFoundIssue> | undefined;
};

/**
 * Not found
 */
export class RecipientGetDocumentRecipientNotFoundError extends DocumensoError {
  code: string;
  issues?: Array<RecipientGetDocumentRecipientNotFoundIssue> | undefined;

  /** The original data that was passed to this error instance. */
  data$: RecipientGetDocumentRecipientNotFoundErrorData;

  constructor(
    err: RecipientGetDocumentRecipientNotFoundErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "RecipientGetDocumentRecipientNotFoundError";
  }
}

export type RecipientGetDocumentRecipientBadRequestIssue = {
  message: string;
};

/**
 * Invalid input data
 */
export type RecipientGetDocumentRecipientBadRequestErrorData = {
  message: string;
  code: string;
  issues?: Array<RecipientGetDocumentRecipientBadRequestIssue> | undefined;
};

/**
 * Invalid input data
 */
export class RecipientGetDocumentRecipientBadRequestError
  extends DocumensoError
{
  code: string;
  issues?: Array<RecipientGetDocumentRecipientBadRequestIssue> | undefined;

  /** The original data that was passed to this error instance. */
  data$: RecipientGetDocumentRecipientBadRequestErrorData;

  constructor(
    err: RecipientGetDocumentRecipientBadRequestErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "RecipientGetDocumentRecipientBadRequestError";
  }
}

/** @internal */
export const RecipientGetDocumentRecipientInternalServerErrorIssue$inboundSchema:
  z.ZodType<
    RecipientGetDocumentRecipientInternalServerErrorIssue,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type RecipientGetDocumentRecipientInternalServerErrorIssue$Outbound = {
  message: string;
};

/** @internal */
export const RecipientGetDocumentRecipientInternalServerErrorIssue$outboundSchema:
  z.ZodType<
    RecipientGetDocumentRecipientInternalServerErrorIssue$Outbound,
    z.ZodTypeDef,
    RecipientGetDocumentRecipientInternalServerErrorIssue
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientGetDocumentRecipientInternalServerErrorIssue$ {
  /** @deprecated use `RecipientGetDocumentRecipientInternalServerErrorIssue$inboundSchema` instead. */
  export const inboundSchema =
    RecipientGetDocumentRecipientInternalServerErrorIssue$inboundSchema;
  /** @deprecated use `RecipientGetDocumentRecipientInternalServerErrorIssue$outboundSchema` instead. */
  export const outboundSchema =
    RecipientGetDocumentRecipientInternalServerErrorIssue$outboundSchema;
  /** @deprecated use `RecipientGetDocumentRecipientInternalServerErrorIssue$Outbound` instead. */
  export type Outbound =
    RecipientGetDocumentRecipientInternalServerErrorIssue$Outbound;
}

export function recipientGetDocumentRecipientInternalServerErrorIssueToJSON(
  recipientGetDocumentRecipientInternalServerErrorIssue:
    RecipientGetDocumentRecipientInternalServerErrorIssue,
): string {
  return JSON.stringify(
    RecipientGetDocumentRecipientInternalServerErrorIssue$outboundSchema.parse(
      recipientGetDocumentRecipientInternalServerErrorIssue,
    ),
  );
}

export function recipientGetDocumentRecipientInternalServerErrorIssueFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientGetDocumentRecipientInternalServerErrorIssue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientGetDocumentRecipientInternalServerErrorIssue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientGetDocumentRecipientInternalServerErrorIssue' from JSON`,
  );
}

/** @internal */
export const RecipientGetDocumentRecipientInternalServerError$inboundSchema:
  z.ZodType<
    RecipientGetDocumentRecipientInternalServerError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() =>
        RecipientGetDocumentRecipientInternalServerErrorIssue$inboundSchema
      ),
    ).optional(),
    request$: z.instanceof(Request),
    response$: z.instanceof(Response),
    body$: z.string(),
  })
    .transform((v) => {
      return new RecipientGetDocumentRecipientInternalServerError(v, {
        request: v.request$,
        response: v.response$,
        body: v.body$,
      });
    });

/** @internal */
export type RecipientGetDocumentRecipientInternalServerError$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<RecipientGetDocumentRecipientInternalServerErrorIssue$Outbound>
    | undefined;
};

/** @internal */
export const RecipientGetDocumentRecipientInternalServerError$outboundSchema:
  z.ZodType<
    RecipientGetDocumentRecipientInternalServerError$Outbound,
    z.ZodTypeDef,
    RecipientGetDocumentRecipientInternalServerError
  > = z.instanceof(RecipientGetDocumentRecipientInternalServerError)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          RecipientGetDocumentRecipientInternalServerErrorIssue$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientGetDocumentRecipientInternalServerError$ {
  /** @deprecated use `RecipientGetDocumentRecipientInternalServerError$inboundSchema` instead. */
  export const inboundSchema =
    RecipientGetDocumentRecipientInternalServerError$inboundSchema;
  /** @deprecated use `RecipientGetDocumentRecipientInternalServerError$outboundSchema` instead. */
  export const outboundSchema =
    RecipientGetDocumentRecipientInternalServerError$outboundSchema;
  /** @deprecated use `RecipientGetDocumentRecipientInternalServerError$Outbound` instead. */
  export type Outbound =
    RecipientGetDocumentRecipientInternalServerError$Outbound;
}

/** @internal */
export const RecipientGetDocumentRecipientNotFoundIssue$inboundSchema:
  z.ZodType<RecipientGetDocumentRecipientNotFoundIssue, z.ZodTypeDef, unknown> =
    z.object({
      message: z.string(),
    });

/** @internal */
export type RecipientGetDocumentRecipientNotFoundIssue$Outbound = {
  message: string;
};

/** @internal */
export const RecipientGetDocumentRecipientNotFoundIssue$outboundSchema:
  z.ZodType<
    RecipientGetDocumentRecipientNotFoundIssue$Outbound,
    z.ZodTypeDef,
    RecipientGetDocumentRecipientNotFoundIssue
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientGetDocumentRecipientNotFoundIssue$ {
  /** @deprecated use `RecipientGetDocumentRecipientNotFoundIssue$inboundSchema` instead. */
  export const inboundSchema =
    RecipientGetDocumentRecipientNotFoundIssue$inboundSchema;
  /** @deprecated use `RecipientGetDocumentRecipientNotFoundIssue$outboundSchema` instead. */
  export const outboundSchema =
    RecipientGetDocumentRecipientNotFoundIssue$outboundSchema;
  /** @deprecated use `RecipientGetDocumentRecipientNotFoundIssue$Outbound` instead. */
  export type Outbound = RecipientGetDocumentRecipientNotFoundIssue$Outbound;
}

export function recipientGetDocumentRecipientNotFoundIssueToJSON(
  recipientGetDocumentRecipientNotFoundIssue:
    RecipientGetDocumentRecipientNotFoundIssue,
): string {
  return JSON.stringify(
    RecipientGetDocumentRecipientNotFoundIssue$outboundSchema.parse(
      recipientGetDocumentRecipientNotFoundIssue,
    ),
  );
}

export function recipientGetDocumentRecipientNotFoundIssueFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientGetDocumentRecipientNotFoundIssue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientGetDocumentRecipientNotFoundIssue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientGetDocumentRecipientNotFoundIssue' from JSON`,
  );
}

/** @internal */
export const RecipientGetDocumentRecipientNotFoundError$inboundSchema:
  z.ZodType<RecipientGetDocumentRecipientNotFoundError, z.ZodTypeDef, unknown> =
    z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() => RecipientGetDocumentRecipientNotFoundIssue$inboundSchema),
      ).optional(),
      request$: z.instanceof(Request),
      response$: z.instanceof(Response),
      body$: z.string(),
    })
      .transform((v) => {
        return new RecipientGetDocumentRecipientNotFoundError(v, {
          request: v.request$,
          response: v.response$,
          body: v.body$,
        });
      });

/** @internal */
export type RecipientGetDocumentRecipientNotFoundError$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<RecipientGetDocumentRecipientNotFoundIssue$Outbound>
    | undefined;
};

/** @internal */
export const RecipientGetDocumentRecipientNotFoundError$outboundSchema:
  z.ZodType<
    RecipientGetDocumentRecipientNotFoundError$Outbound,
    z.ZodTypeDef,
    RecipientGetDocumentRecipientNotFoundError
  > = z.instanceof(RecipientGetDocumentRecipientNotFoundError)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() => RecipientGetDocumentRecipientNotFoundIssue$outboundSchema),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientGetDocumentRecipientNotFoundError$ {
  /** @deprecated use `RecipientGetDocumentRecipientNotFoundError$inboundSchema` instead. */
  export const inboundSchema =
    RecipientGetDocumentRecipientNotFoundError$inboundSchema;
  /** @deprecated use `RecipientGetDocumentRecipientNotFoundError$outboundSchema` instead. */
  export const outboundSchema =
    RecipientGetDocumentRecipientNotFoundError$outboundSchema;
  /** @deprecated use `RecipientGetDocumentRecipientNotFoundError$Outbound` instead. */
  export type Outbound = RecipientGetDocumentRecipientNotFoundError$Outbound;
}

/** @internal */
export const RecipientGetDocumentRecipientBadRequestIssue$inboundSchema:
  z.ZodType<
    RecipientGetDocumentRecipientBadRequestIssue,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type RecipientGetDocumentRecipientBadRequestIssue$Outbound = {
  message: string;
};

/** @internal */
export const RecipientGetDocumentRecipientBadRequestIssue$outboundSchema:
  z.ZodType<
    RecipientGetDocumentRecipientBadRequestIssue$Outbound,
    z.ZodTypeDef,
    RecipientGetDocumentRecipientBadRequestIssue
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientGetDocumentRecipientBadRequestIssue$ {
  /** @deprecated use `RecipientGetDocumentRecipientBadRequestIssue$inboundSchema` instead. */
  export const inboundSchema =
    RecipientGetDocumentRecipientBadRequestIssue$inboundSchema;
  /** @deprecated use `RecipientGetDocumentRecipientBadRequestIssue$outboundSchema` instead. */
  export const outboundSchema =
    RecipientGetDocumentRecipientBadRequestIssue$outboundSchema;
  /** @deprecated use `RecipientGetDocumentRecipientBadRequestIssue$Outbound` instead. */
  export type Outbound = RecipientGetDocumentRecipientBadRequestIssue$Outbound;
}

export function recipientGetDocumentRecipientBadRequestIssueToJSON(
  recipientGetDocumentRecipientBadRequestIssue:
    RecipientGetDocumentRecipientBadRequestIssue,
): string {
  return JSON.stringify(
    RecipientGetDocumentRecipientBadRequestIssue$outboundSchema.parse(
      recipientGetDocumentRecipientBadRequestIssue,
    ),
  );
}

export function recipientGetDocumentRecipientBadRequestIssueFromJSON(
  jsonString: string,
): SafeParseResult<
  RecipientGetDocumentRecipientBadRequestIssue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      RecipientGetDocumentRecipientBadRequestIssue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'RecipientGetDocumentRecipientBadRequestIssue' from JSON`,
  );
}

/** @internal */
export const RecipientGetDocumentRecipientBadRequestError$inboundSchema:
  z.ZodType<
    RecipientGetDocumentRecipientBadRequestError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => RecipientGetDocumentRecipientBadRequestIssue$inboundSchema),
    ).optional(),
    request$: z.instanceof(Request),
    response$: z.instanceof(Response),
    body$: z.string(),
  })
    .transform((v) => {
      return new RecipientGetDocumentRecipientBadRequestError(v, {
        request: v.request$,
        response: v.response$,
        body: v.body$,
      });
    });

/** @internal */
export type RecipientGetDocumentRecipientBadRequestError$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<RecipientGetDocumentRecipientBadRequestIssue$Outbound>
    | undefined;
};

/** @internal */
export const RecipientGetDocumentRecipientBadRequestError$outboundSchema:
  z.ZodType<
    RecipientGetDocumentRecipientBadRequestError$Outbound,
    z.ZodTypeDef,
    RecipientGetDocumentRecipientBadRequestError
  > = z.instanceof(RecipientGetDocumentRecipientBadRequestError)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          RecipientGetDocumentRecipientBadRequestIssue$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecipientGetDocumentRecipientBadRequestError$ {
  /** @deprecated use `RecipientGetDocumentRecipientBadRequestError$inboundSchema` instead. */
  export const inboundSchema =
    RecipientGetDocumentRecipientBadRequestError$inboundSchema;
  /** @deprecated use `RecipientGetDocumentRecipientBadRequestError$outboundSchema` instead. */
  export const outboundSchema =
    RecipientGetDocumentRecipientBadRequestError$outboundSchema;
  /** @deprecated use `RecipientGetDocumentRecipientBadRequestError$Outbound` instead. */
  export type Outbound = RecipientGetDocumentRecipientBadRequestError$Outbound;
}
