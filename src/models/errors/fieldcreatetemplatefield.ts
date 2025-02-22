/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type FieldCreateTemplateFieldTemplatesFieldsIssues = {
  message: string;
};

/**
 * Internal server error
 */
export type FieldCreateTemplateFieldTemplatesFieldsResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<FieldCreateTemplateFieldTemplatesFieldsIssues> | undefined;
};

/**
 * Internal server error
 */
export class FieldCreateTemplateFieldTemplatesFieldsResponseBody extends Error {
  code: string;
  issues?: Array<FieldCreateTemplateFieldTemplatesFieldsIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: FieldCreateTemplateFieldTemplatesFieldsResponseBodyData;

  constructor(err: FieldCreateTemplateFieldTemplatesFieldsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "FieldCreateTemplateFieldTemplatesFieldsResponseBody";
  }
}

export type FieldCreateTemplateFieldIssues = {
  message: string;
};

/**
 * Invalid input data
 */
export type FieldCreateTemplateFieldResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<FieldCreateTemplateFieldIssues> | undefined;
};

/**
 * Invalid input data
 */
export class FieldCreateTemplateFieldResponseBody extends Error {
  code: string;
  issues?: Array<FieldCreateTemplateFieldIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: FieldCreateTemplateFieldResponseBodyData;

  constructor(err: FieldCreateTemplateFieldResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "FieldCreateTemplateFieldResponseBody";
  }
}

/** @internal */
export const FieldCreateTemplateFieldTemplatesFieldsIssues$inboundSchema:
  z.ZodType<
    FieldCreateTemplateFieldTemplatesFieldsIssues,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type FieldCreateTemplateFieldTemplatesFieldsIssues$Outbound = {
  message: string;
};

/** @internal */
export const FieldCreateTemplateFieldTemplatesFieldsIssues$outboundSchema:
  z.ZodType<
    FieldCreateTemplateFieldTemplatesFieldsIssues$Outbound,
    z.ZodTypeDef,
    FieldCreateTemplateFieldTemplatesFieldsIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldCreateTemplateFieldTemplatesFieldsIssues$ {
  /** @deprecated use `FieldCreateTemplateFieldTemplatesFieldsIssues$inboundSchema` instead. */
  export const inboundSchema =
    FieldCreateTemplateFieldTemplatesFieldsIssues$inboundSchema;
  /** @deprecated use `FieldCreateTemplateFieldTemplatesFieldsIssues$outboundSchema` instead. */
  export const outboundSchema =
    FieldCreateTemplateFieldTemplatesFieldsIssues$outboundSchema;
  /** @deprecated use `FieldCreateTemplateFieldTemplatesFieldsIssues$Outbound` instead. */
  export type Outbound = FieldCreateTemplateFieldTemplatesFieldsIssues$Outbound;
}

export function fieldCreateTemplateFieldTemplatesFieldsIssuesToJSON(
  fieldCreateTemplateFieldTemplatesFieldsIssues:
    FieldCreateTemplateFieldTemplatesFieldsIssues,
): string {
  return JSON.stringify(
    FieldCreateTemplateFieldTemplatesFieldsIssues$outboundSchema.parse(
      fieldCreateTemplateFieldTemplatesFieldsIssues,
    ),
  );
}

export function fieldCreateTemplateFieldTemplatesFieldsIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  FieldCreateTemplateFieldTemplatesFieldsIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      FieldCreateTemplateFieldTemplatesFieldsIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'FieldCreateTemplateFieldTemplatesFieldsIssues' from JSON`,
  );
}

/** @internal */
export const FieldCreateTemplateFieldTemplatesFieldsResponseBody$inboundSchema:
  z.ZodType<
    FieldCreateTemplateFieldTemplatesFieldsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => FieldCreateTemplateFieldTemplatesFieldsIssues$inboundSchema),
    ).optional(),
  })
    .transform((v) => {
      return new FieldCreateTemplateFieldTemplatesFieldsResponseBody(v);
    });

/** @internal */
export type FieldCreateTemplateFieldTemplatesFieldsResponseBody$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<FieldCreateTemplateFieldTemplatesFieldsIssues$Outbound>
    | undefined;
};

/** @internal */
export const FieldCreateTemplateFieldTemplatesFieldsResponseBody$outboundSchema:
  z.ZodType<
    FieldCreateTemplateFieldTemplatesFieldsResponseBody$Outbound,
    z.ZodTypeDef,
    FieldCreateTemplateFieldTemplatesFieldsResponseBody
  > = z.instanceof(FieldCreateTemplateFieldTemplatesFieldsResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          FieldCreateTemplateFieldTemplatesFieldsIssues$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldCreateTemplateFieldTemplatesFieldsResponseBody$ {
  /** @deprecated use `FieldCreateTemplateFieldTemplatesFieldsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    FieldCreateTemplateFieldTemplatesFieldsResponseBody$inboundSchema;
  /** @deprecated use `FieldCreateTemplateFieldTemplatesFieldsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    FieldCreateTemplateFieldTemplatesFieldsResponseBody$outboundSchema;
  /** @deprecated use `FieldCreateTemplateFieldTemplatesFieldsResponseBody$Outbound` instead. */
  export type Outbound =
    FieldCreateTemplateFieldTemplatesFieldsResponseBody$Outbound;
}

/** @internal */
export const FieldCreateTemplateFieldIssues$inboundSchema: z.ZodType<
  FieldCreateTemplateFieldIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type FieldCreateTemplateFieldIssues$Outbound = {
  message: string;
};

/** @internal */
export const FieldCreateTemplateFieldIssues$outboundSchema: z.ZodType<
  FieldCreateTemplateFieldIssues$Outbound,
  z.ZodTypeDef,
  FieldCreateTemplateFieldIssues
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldCreateTemplateFieldIssues$ {
  /** @deprecated use `FieldCreateTemplateFieldIssues$inboundSchema` instead. */
  export const inboundSchema = FieldCreateTemplateFieldIssues$inboundSchema;
  /** @deprecated use `FieldCreateTemplateFieldIssues$outboundSchema` instead. */
  export const outboundSchema = FieldCreateTemplateFieldIssues$outboundSchema;
  /** @deprecated use `FieldCreateTemplateFieldIssues$Outbound` instead. */
  export type Outbound = FieldCreateTemplateFieldIssues$Outbound;
}

export function fieldCreateTemplateFieldIssuesToJSON(
  fieldCreateTemplateFieldIssues: FieldCreateTemplateFieldIssues,
): string {
  return JSON.stringify(
    FieldCreateTemplateFieldIssues$outboundSchema.parse(
      fieldCreateTemplateFieldIssues,
    ),
  );
}

export function fieldCreateTemplateFieldIssuesFromJSON(
  jsonString: string,
): SafeParseResult<FieldCreateTemplateFieldIssues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FieldCreateTemplateFieldIssues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FieldCreateTemplateFieldIssues' from JSON`,
  );
}

/** @internal */
export const FieldCreateTemplateFieldResponseBody$inboundSchema: z.ZodType<
  FieldCreateTemplateFieldResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  issues: z.array(z.lazy(() => FieldCreateTemplateFieldIssues$inboundSchema))
    .optional(),
})
  .transform((v) => {
    return new FieldCreateTemplateFieldResponseBody(v);
  });

/** @internal */
export type FieldCreateTemplateFieldResponseBody$Outbound = {
  message: string;
  code: string;
  issues?: Array<FieldCreateTemplateFieldIssues$Outbound> | undefined;
};

/** @internal */
export const FieldCreateTemplateFieldResponseBody$outboundSchema: z.ZodType<
  FieldCreateTemplateFieldResponseBody$Outbound,
  z.ZodTypeDef,
  FieldCreateTemplateFieldResponseBody
> = z.instanceof(FieldCreateTemplateFieldResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(z.lazy(() => FieldCreateTemplateFieldIssues$outboundSchema))
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldCreateTemplateFieldResponseBody$ {
  /** @deprecated use `FieldCreateTemplateFieldResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    FieldCreateTemplateFieldResponseBody$inboundSchema;
  /** @deprecated use `FieldCreateTemplateFieldResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    FieldCreateTemplateFieldResponseBody$outboundSchema;
  /** @deprecated use `FieldCreateTemplateFieldResponseBody$Outbound` instead. */
  export type Outbound = FieldCreateTemplateFieldResponseBody$Outbound;
}
