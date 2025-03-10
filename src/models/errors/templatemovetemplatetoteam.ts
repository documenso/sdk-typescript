/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type TemplateMoveTemplateToTeamInternalServerErrorIssues = {
  message: string;
};

/**
 * Internal server error
 */
export type TemplateMoveTemplateToTeamInternalServerErrorData = {
  message: string;
  code: string;
  issues?:
    | Array<TemplateMoveTemplateToTeamInternalServerErrorIssues>
    | undefined;
};

/**
 * Internal server error
 */
export class TemplateMoveTemplateToTeamInternalServerError extends Error {
  code: string;
  issues?:
    | Array<TemplateMoveTemplateToTeamInternalServerErrorIssues>
    | undefined;

  /** The original data that was passed to this error instance. */
  data$: TemplateMoveTemplateToTeamInternalServerErrorData;

  constructor(err: TemplateMoveTemplateToTeamInternalServerErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "TemplateMoveTemplateToTeamInternalServerError";
  }
}

export type TemplateMoveTemplateToTeamBadRequestIssues = {
  message: string;
};

/**
 * Invalid input data
 */
export type TemplateMoveTemplateToTeamBadRequestErrorData = {
  message: string;
  code: string;
  issues?: Array<TemplateMoveTemplateToTeamBadRequestIssues> | undefined;
};

/**
 * Invalid input data
 */
export class TemplateMoveTemplateToTeamBadRequestError extends Error {
  code: string;
  issues?: Array<TemplateMoveTemplateToTeamBadRequestIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: TemplateMoveTemplateToTeamBadRequestErrorData;

  constructor(err: TemplateMoveTemplateToTeamBadRequestErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "TemplateMoveTemplateToTeamBadRequestError";
  }
}

/** @internal */
export const TemplateMoveTemplateToTeamInternalServerErrorIssues$inboundSchema:
  z.ZodType<
    TemplateMoveTemplateToTeamInternalServerErrorIssues,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type TemplateMoveTemplateToTeamInternalServerErrorIssues$Outbound = {
  message: string;
};

/** @internal */
export const TemplateMoveTemplateToTeamInternalServerErrorIssues$outboundSchema:
  z.ZodType<
    TemplateMoveTemplateToTeamInternalServerErrorIssues$Outbound,
    z.ZodTypeDef,
    TemplateMoveTemplateToTeamInternalServerErrorIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateMoveTemplateToTeamInternalServerErrorIssues$ {
  /** @deprecated use `TemplateMoveTemplateToTeamInternalServerErrorIssues$inboundSchema` instead. */
  export const inboundSchema =
    TemplateMoveTemplateToTeamInternalServerErrorIssues$inboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamInternalServerErrorIssues$outboundSchema` instead. */
  export const outboundSchema =
    TemplateMoveTemplateToTeamInternalServerErrorIssues$outboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamInternalServerErrorIssues$Outbound` instead. */
  export type Outbound =
    TemplateMoveTemplateToTeamInternalServerErrorIssues$Outbound;
}

export function templateMoveTemplateToTeamInternalServerErrorIssuesToJSON(
  templateMoveTemplateToTeamInternalServerErrorIssues:
    TemplateMoveTemplateToTeamInternalServerErrorIssues,
): string {
  return JSON.stringify(
    TemplateMoveTemplateToTeamInternalServerErrorIssues$outboundSchema.parse(
      templateMoveTemplateToTeamInternalServerErrorIssues,
    ),
  );
}

export function templateMoveTemplateToTeamInternalServerErrorIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  TemplateMoveTemplateToTeamInternalServerErrorIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TemplateMoveTemplateToTeamInternalServerErrorIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TemplateMoveTemplateToTeamInternalServerErrorIssues' from JSON`,
  );
}

/** @internal */
export const TemplateMoveTemplateToTeamInternalServerError$inboundSchema:
  z.ZodType<
    TemplateMoveTemplateToTeamInternalServerError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() =>
        TemplateMoveTemplateToTeamInternalServerErrorIssues$inboundSchema
      ),
    ).optional(),
  })
    .transform((v) => {
      return new TemplateMoveTemplateToTeamInternalServerError(v);
    });

/** @internal */
export type TemplateMoveTemplateToTeamInternalServerError$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<TemplateMoveTemplateToTeamInternalServerErrorIssues$Outbound>
    | undefined;
};

/** @internal */
export const TemplateMoveTemplateToTeamInternalServerError$outboundSchema:
  z.ZodType<
    TemplateMoveTemplateToTeamInternalServerError$Outbound,
    z.ZodTypeDef,
    TemplateMoveTemplateToTeamInternalServerError
  > = z.instanceof(TemplateMoveTemplateToTeamInternalServerError)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          TemplateMoveTemplateToTeamInternalServerErrorIssues$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateMoveTemplateToTeamInternalServerError$ {
  /** @deprecated use `TemplateMoveTemplateToTeamInternalServerError$inboundSchema` instead. */
  export const inboundSchema =
    TemplateMoveTemplateToTeamInternalServerError$inboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamInternalServerError$outboundSchema` instead. */
  export const outboundSchema =
    TemplateMoveTemplateToTeamInternalServerError$outboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamInternalServerError$Outbound` instead. */
  export type Outbound = TemplateMoveTemplateToTeamInternalServerError$Outbound;
}

/** @internal */
export const TemplateMoveTemplateToTeamBadRequestIssues$inboundSchema:
  z.ZodType<TemplateMoveTemplateToTeamBadRequestIssues, z.ZodTypeDef, unknown> =
    z.object({
      message: z.string(),
    });

/** @internal */
export type TemplateMoveTemplateToTeamBadRequestIssues$Outbound = {
  message: string;
};

/** @internal */
export const TemplateMoveTemplateToTeamBadRequestIssues$outboundSchema:
  z.ZodType<
    TemplateMoveTemplateToTeamBadRequestIssues$Outbound,
    z.ZodTypeDef,
    TemplateMoveTemplateToTeamBadRequestIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateMoveTemplateToTeamBadRequestIssues$ {
  /** @deprecated use `TemplateMoveTemplateToTeamBadRequestIssues$inboundSchema` instead. */
  export const inboundSchema =
    TemplateMoveTemplateToTeamBadRequestIssues$inboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamBadRequestIssues$outboundSchema` instead. */
  export const outboundSchema =
    TemplateMoveTemplateToTeamBadRequestIssues$outboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamBadRequestIssues$Outbound` instead. */
  export type Outbound = TemplateMoveTemplateToTeamBadRequestIssues$Outbound;
}

export function templateMoveTemplateToTeamBadRequestIssuesToJSON(
  templateMoveTemplateToTeamBadRequestIssues:
    TemplateMoveTemplateToTeamBadRequestIssues,
): string {
  return JSON.stringify(
    TemplateMoveTemplateToTeamBadRequestIssues$outboundSchema.parse(
      templateMoveTemplateToTeamBadRequestIssues,
    ),
  );
}

export function templateMoveTemplateToTeamBadRequestIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  TemplateMoveTemplateToTeamBadRequestIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TemplateMoveTemplateToTeamBadRequestIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TemplateMoveTemplateToTeamBadRequestIssues' from JSON`,
  );
}

/** @internal */
export const TemplateMoveTemplateToTeamBadRequestError$inboundSchema: z.ZodType<
  TemplateMoveTemplateToTeamBadRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  issues: z.array(
    z.lazy(() => TemplateMoveTemplateToTeamBadRequestIssues$inboundSchema),
  ).optional(),
})
  .transform((v) => {
    return new TemplateMoveTemplateToTeamBadRequestError(v);
  });

/** @internal */
export type TemplateMoveTemplateToTeamBadRequestError$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<TemplateMoveTemplateToTeamBadRequestIssues$Outbound>
    | undefined;
};

/** @internal */
export const TemplateMoveTemplateToTeamBadRequestError$outboundSchema:
  z.ZodType<
    TemplateMoveTemplateToTeamBadRequestError$Outbound,
    z.ZodTypeDef,
    TemplateMoveTemplateToTeamBadRequestError
  > = z.instanceof(TemplateMoveTemplateToTeamBadRequestError)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() => TemplateMoveTemplateToTeamBadRequestIssues$outboundSchema),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateMoveTemplateToTeamBadRequestError$ {
  /** @deprecated use `TemplateMoveTemplateToTeamBadRequestError$inboundSchema` instead. */
  export const inboundSchema =
    TemplateMoveTemplateToTeamBadRequestError$inboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamBadRequestError$outboundSchema` instead. */
  export const outboundSchema =
    TemplateMoveTemplateToTeamBadRequestError$outboundSchema;
  /** @deprecated use `TemplateMoveTemplateToTeamBadRequestError$Outbound` instead. */
  export type Outbound = TemplateMoveTemplateToTeamBadRequestError$Outbound;
}
