/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type TemplateCreateDocumentFromTemplateTemplatesIssues = {
  message: string;
};

/**
 * Internal server error
 */
export type TemplateCreateDocumentFromTemplateTemplatesResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<TemplateCreateDocumentFromTemplateTemplatesIssues> | undefined;
};

/**
 * Internal server error
 */
export class TemplateCreateDocumentFromTemplateTemplatesResponseBody
  extends Error
{
  code: string;
  issues?: Array<TemplateCreateDocumentFromTemplateTemplatesIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: TemplateCreateDocumentFromTemplateTemplatesResponseBodyData;

  constructor(
    err: TemplateCreateDocumentFromTemplateTemplatesResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "TemplateCreateDocumentFromTemplateTemplatesResponseBody";
  }
}

export type TemplateCreateDocumentFromTemplateIssues = {
  message: string;
};

/**
 * Invalid input data
 */
export type TemplateCreateDocumentFromTemplateResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<TemplateCreateDocumentFromTemplateIssues> | undefined;
};

/**
 * Invalid input data
 */
export class TemplateCreateDocumentFromTemplateResponseBody extends Error {
  code: string;
  issues?: Array<TemplateCreateDocumentFromTemplateIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: TemplateCreateDocumentFromTemplateResponseBodyData;

  constructor(err: TemplateCreateDocumentFromTemplateResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "TemplateCreateDocumentFromTemplateResponseBody";
  }
}

/** @internal */
export const TemplateCreateDocumentFromTemplateTemplatesIssues$inboundSchema:
  z.ZodType<
    TemplateCreateDocumentFromTemplateTemplatesIssues,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type TemplateCreateDocumentFromTemplateTemplatesIssues$Outbound = {
  message: string;
};

/** @internal */
export const TemplateCreateDocumentFromTemplateTemplatesIssues$outboundSchema:
  z.ZodType<
    TemplateCreateDocumentFromTemplateTemplatesIssues$Outbound,
    z.ZodTypeDef,
    TemplateCreateDocumentFromTemplateTemplatesIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateCreateDocumentFromTemplateTemplatesIssues$ {
  /** @deprecated use `TemplateCreateDocumentFromTemplateTemplatesIssues$inboundSchema` instead. */
  export const inboundSchema =
    TemplateCreateDocumentFromTemplateTemplatesIssues$inboundSchema;
  /** @deprecated use `TemplateCreateDocumentFromTemplateTemplatesIssues$outboundSchema` instead. */
  export const outboundSchema =
    TemplateCreateDocumentFromTemplateTemplatesIssues$outboundSchema;
  /** @deprecated use `TemplateCreateDocumentFromTemplateTemplatesIssues$Outbound` instead. */
  export type Outbound =
    TemplateCreateDocumentFromTemplateTemplatesIssues$Outbound;
}

export function templateCreateDocumentFromTemplateTemplatesIssuesToJSON(
  templateCreateDocumentFromTemplateTemplatesIssues:
    TemplateCreateDocumentFromTemplateTemplatesIssues,
): string {
  return JSON.stringify(
    TemplateCreateDocumentFromTemplateTemplatesIssues$outboundSchema.parse(
      templateCreateDocumentFromTemplateTemplatesIssues,
    ),
  );
}

export function templateCreateDocumentFromTemplateTemplatesIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  TemplateCreateDocumentFromTemplateTemplatesIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TemplateCreateDocumentFromTemplateTemplatesIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TemplateCreateDocumentFromTemplateTemplatesIssues' from JSON`,
  );
}

/** @internal */
export const TemplateCreateDocumentFromTemplateTemplatesResponseBody$inboundSchema:
  z.ZodType<
    TemplateCreateDocumentFromTemplateTemplatesResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() =>
        TemplateCreateDocumentFromTemplateTemplatesIssues$inboundSchema
      ),
    ).optional(),
  })
    .transform((v) => {
      return new TemplateCreateDocumentFromTemplateTemplatesResponseBody(v);
    });

/** @internal */
export type TemplateCreateDocumentFromTemplateTemplatesResponseBody$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<TemplateCreateDocumentFromTemplateTemplatesIssues$Outbound>
    | undefined;
};

/** @internal */
export const TemplateCreateDocumentFromTemplateTemplatesResponseBody$outboundSchema:
  z.ZodType<
    TemplateCreateDocumentFromTemplateTemplatesResponseBody$Outbound,
    z.ZodTypeDef,
    TemplateCreateDocumentFromTemplateTemplatesResponseBody
  > = z.instanceof(TemplateCreateDocumentFromTemplateTemplatesResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          TemplateCreateDocumentFromTemplateTemplatesIssues$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateCreateDocumentFromTemplateTemplatesResponseBody$ {
  /** @deprecated use `TemplateCreateDocumentFromTemplateTemplatesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    TemplateCreateDocumentFromTemplateTemplatesResponseBody$inboundSchema;
  /** @deprecated use `TemplateCreateDocumentFromTemplateTemplatesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    TemplateCreateDocumentFromTemplateTemplatesResponseBody$outboundSchema;
  /** @deprecated use `TemplateCreateDocumentFromTemplateTemplatesResponseBody$Outbound` instead. */
  export type Outbound =
    TemplateCreateDocumentFromTemplateTemplatesResponseBody$Outbound;
}

/** @internal */
export const TemplateCreateDocumentFromTemplateIssues$inboundSchema: z.ZodType<
  TemplateCreateDocumentFromTemplateIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type TemplateCreateDocumentFromTemplateIssues$Outbound = {
  message: string;
};

/** @internal */
export const TemplateCreateDocumentFromTemplateIssues$outboundSchema: z.ZodType<
  TemplateCreateDocumentFromTemplateIssues$Outbound,
  z.ZodTypeDef,
  TemplateCreateDocumentFromTemplateIssues
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateCreateDocumentFromTemplateIssues$ {
  /** @deprecated use `TemplateCreateDocumentFromTemplateIssues$inboundSchema` instead. */
  export const inboundSchema =
    TemplateCreateDocumentFromTemplateIssues$inboundSchema;
  /** @deprecated use `TemplateCreateDocumentFromTemplateIssues$outboundSchema` instead. */
  export const outboundSchema =
    TemplateCreateDocumentFromTemplateIssues$outboundSchema;
  /** @deprecated use `TemplateCreateDocumentFromTemplateIssues$Outbound` instead. */
  export type Outbound = TemplateCreateDocumentFromTemplateIssues$Outbound;
}

export function templateCreateDocumentFromTemplateIssuesToJSON(
  templateCreateDocumentFromTemplateIssues:
    TemplateCreateDocumentFromTemplateIssues,
): string {
  return JSON.stringify(
    TemplateCreateDocumentFromTemplateIssues$outboundSchema.parse(
      templateCreateDocumentFromTemplateIssues,
    ),
  );
}

export function templateCreateDocumentFromTemplateIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  TemplateCreateDocumentFromTemplateIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TemplateCreateDocumentFromTemplateIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TemplateCreateDocumentFromTemplateIssues' from JSON`,
  );
}

/** @internal */
export const TemplateCreateDocumentFromTemplateResponseBody$inboundSchema:
  z.ZodType<
    TemplateCreateDocumentFromTemplateResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => TemplateCreateDocumentFromTemplateIssues$inboundSchema),
    ).optional(),
  })
    .transform((v) => {
      return new TemplateCreateDocumentFromTemplateResponseBody(v);
    });

/** @internal */
export type TemplateCreateDocumentFromTemplateResponseBody$Outbound = {
  message: string;
  code: string;
  issues?: Array<TemplateCreateDocumentFromTemplateIssues$Outbound> | undefined;
};

/** @internal */
export const TemplateCreateDocumentFromTemplateResponseBody$outboundSchema:
  z.ZodType<
    TemplateCreateDocumentFromTemplateResponseBody$Outbound,
    z.ZodTypeDef,
    TemplateCreateDocumentFromTemplateResponseBody
  > = z.instanceof(TemplateCreateDocumentFromTemplateResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() => TemplateCreateDocumentFromTemplateIssues$outboundSchema),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateCreateDocumentFromTemplateResponseBody$ {
  /** @deprecated use `TemplateCreateDocumentFromTemplateResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    TemplateCreateDocumentFromTemplateResponseBody$inboundSchema;
  /** @deprecated use `TemplateCreateDocumentFromTemplateResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    TemplateCreateDocumentFromTemplateResponseBody$outboundSchema;
  /** @deprecated use `TemplateCreateDocumentFromTemplateResponseBody$Outbound` instead. */
  export type Outbound =
    TemplateCreateDocumentFromTemplateResponseBody$Outbound;
}
