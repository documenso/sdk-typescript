/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues = {
  message: string;
};

/**
 * Internal server error
 */
export type TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBodyData =
  {
    message: string;
    code: string;
    issues?:
      | Array<TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues>
      | undefined;
  };

/**
 * Internal server error
 */
export class TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody
  extends Error
{
  code: string;
  issues?:
    | Array<TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues>
    | undefined;

  /** The original data that was passed to this error instance. */
  data$: TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBodyData;

  constructor(
    err: TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name =
      "TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody";
  }
}

export type TemplateToggleTemplateDirectLinkIssues = {
  message: string;
};

/**
 * Invalid input data
 */
export type TemplateToggleTemplateDirectLinkResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<TemplateToggleTemplateDirectLinkIssues> | undefined;
};

/**
 * Invalid input data
 */
export class TemplateToggleTemplateDirectLinkResponseBody extends Error {
  code: string;
  issues?: Array<TemplateToggleTemplateDirectLinkIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: TemplateToggleTemplateDirectLinkResponseBodyData;

  constructor(err: TemplateToggleTemplateDirectLinkResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "TemplateToggleTemplateDirectLinkResponseBody";
  }
}

/** @internal */
export const TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$inboundSchema:
  z.ZodType<
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$Outbound =
  {
    message: string;
  };

/** @internal */
export const TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$outboundSchema:
  z.ZodType<
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$Outbound,
    z.ZodTypeDef,
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$ {
  /** @deprecated use `TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$inboundSchema` instead. */
  export const inboundSchema =
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$inboundSchema;
  /** @deprecated use `TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$outboundSchema` instead. */
  export const outboundSchema =
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$outboundSchema;
  /** @deprecated use `TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$Outbound` instead. */
  export type Outbound =
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$Outbound;
}

export function templateToggleTemplateDirectLinkTemplatesDirectLinkIssuesToJSON(
  templateToggleTemplateDirectLinkTemplatesDirectLinkIssues:
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues,
): string {
  return JSON.stringify(
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$outboundSchema
      .parse(templateToggleTemplateDirectLinkTemplatesDirectLinkIssues),
  );
}

export function templateToggleTemplateDirectLinkTemplatesDirectLinkIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues' from JSON`,
  );
}

/** @internal */
export const TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody$inboundSchema:
  z.ZodType<
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() =>
        TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$inboundSchema
      ),
    ).optional(),
  })
    .transform((v) => {
      return new TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody(
        v,
      );
    });

/** @internal */
export type TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody$Outbound =
  {
    message: string;
    code: string;
    issues?:
      | Array<
        TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$Outbound
      >
      | undefined;
  };

/** @internal */
export const TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody$outboundSchema:
  z.ZodType<
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody$Outbound,
    z.ZodTypeDef,
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody
  > = z.instanceof(
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody,
  )
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          TemplateToggleTemplateDirectLinkTemplatesDirectLinkIssues$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody$ {
  /** @deprecated use `TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody$inboundSchema;
  /** @deprecated use `TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody$outboundSchema;
  /** @deprecated use `TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody$Outbound` instead. */
  export type Outbound =
    TemplateToggleTemplateDirectLinkTemplatesDirectLinkResponseBody$Outbound;
}

/** @internal */
export const TemplateToggleTemplateDirectLinkIssues$inboundSchema: z.ZodType<
  TemplateToggleTemplateDirectLinkIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type TemplateToggleTemplateDirectLinkIssues$Outbound = {
  message: string;
};

/** @internal */
export const TemplateToggleTemplateDirectLinkIssues$outboundSchema: z.ZodType<
  TemplateToggleTemplateDirectLinkIssues$Outbound,
  z.ZodTypeDef,
  TemplateToggleTemplateDirectLinkIssues
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateToggleTemplateDirectLinkIssues$ {
  /** @deprecated use `TemplateToggleTemplateDirectLinkIssues$inboundSchema` instead. */
  export const inboundSchema =
    TemplateToggleTemplateDirectLinkIssues$inboundSchema;
  /** @deprecated use `TemplateToggleTemplateDirectLinkIssues$outboundSchema` instead. */
  export const outboundSchema =
    TemplateToggleTemplateDirectLinkIssues$outboundSchema;
  /** @deprecated use `TemplateToggleTemplateDirectLinkIssues$Outbound` instead. */
  export type Outbound = TemplateToggleTemplateDirectLinkIssues$Outbound;
}

export function templateToggleTemplateDirectLinkIssuesToJSON(
  templateToggleTemplateDirectLinkIssues:
    TemplateToggleTemplateDirectLinkIssues,
): string {
  return JSON.stringify(
    TemplateToggleTemplateDirectLinkIssues$outboundSchema.parse(
      templateToggleTemplateDirectLinkIssues,
    ),
  );
}

export function templateToggleTemplateDirectLinkIssuesFromJSON(
  jsonString: string,
): SafeParseResult<TemplateToggleTemplateDirectLinkIssues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      TemplateToggleTemplateDirectLinkIssues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TemplateToggleTemplateDirectLinkIssues' from JSON`,
  );
}

/** @internal */
export const TemplateToggleTemplateDirectLinkResponseBody$inboundSchema:
  z.ZodType<
    TemplateToggleTemplateDirectLinkResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => TemplateToggleTemplateDirectLinkIssues$inboundSchema),
    ).optional(),
  })
    .transform((v) => {
      return new TemplateToggleTemplateDirectLinkResponseBody(v);
    });

/** @internal */
export type TemplateToggleTemplateDirectLinkResponseBody$Outbound = {
  message: string;
  code: string;
  issues?: Array<TemplateToggleTemplateDirectLinkIssues$Outbound> | undefined;
};

/** @internal */
export const TemplateToggleTemplateDirectLinkResponseBody$outboundSchema:
  z.ZodType<
    TemplateToggleTemplateDirectLinkResponseBody$Outbound,
    z.ZodTypeDef,
    TemplateToggleTemplateDirectLinkResponseBody
  > = z.instanceof(TemplateToggleTemplateDirectLinkResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() => TemplateToggleTemplateDirectLinkIssues$outboundSchema),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TemplateToggleTemplateDirectLinkResponseBody$ {
  /** @deprecated use `TemplateToggleTemplateDirectLinkResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    TemplateToggleTemplateDirectLinkResponseBody$inboundSchema;
  /** @deprecated use `TemplateToggleTemplateDirectLinkResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    TemplateToggleTemplateDirectLinkResponseBody$outboundSchema;
  /** @deprecated use `TemplateToggleTemplateDirectLinkResponseBody$Outbound` instead. */
  export type Outbound = TemplateToggleTemplateDirectLinkResponseBody$Outbound;
}
