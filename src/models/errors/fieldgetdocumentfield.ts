/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type FieldGetDocumentFieldDocumentsFieldsResponseIssues = {
  message: string;
};

/**
 * Internal server error
 */
export type FieldGetDocumentFieldDocumentsFieldsResponseResponseBodyData = {
  message: string;
  code: string;
  issues?:
    | Array<FieldGetDocumentFieldDocumentsFieldsResponseIssues>
    | undefined;
};

/**
 * Internal server error
 */
export class FieldGetDocumentFieldDocumentsFieldsResponseResponseBody
  extends Error
{
  code: string;
  issues?:
    | Array<FieldGetDocumentFieldDocumentsFieldsResponseIssues>
    | undefined;

  /** The original data that was passed to this error instance. */
  data$: FieldGetDocumentFieldDocumentsFieldsResponseResponseBodyData;

  constructor(
    err: FieldGetDocumentFieldDocumentsFieldsResponseResponseBodyData,
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "FieldGetDocumentFieldDocumentsFieldsResponseResponseBody";
  }
}

export type FieldGetDocumentFieldDocumentsFieldsIssues = {
  message: string;
};

/**
 * Not found
 */
export type FieldGetDocumentFieldDocumentsFieldsResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<FieldGetDocumentFieldDocumentsFieldsIssues> | undefined;
};

/**
 * Not found
 */
export class FieldGetDocumentFieldDocumentsFieldsResponseBody extends Error {
  code: string;
  issues?: Array<FieldGetDocumentFieldDocumentsFieldsIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: FieldGetDocumentFieldDocumentsFieldsResponseBodyData;

  constructor(err: FieldGetDocumentFieldDocumentsFieldsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "FieldGetDocumentFieldDocumentsFieldsResponseBody";
  }
}

export type FieldGetDocumentFieldIssues = {
  message: string;
};

/**
 * Invalid input data
 */
export type FieldGetDocumentFieldResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<FieldGetDocumentFieldIssues> | undefined;
};

/**
 * Invalid input data
 */
export class FieldGetDocumentFieldResponseBody extends Error {
  code: string;
  issues?: Array<FieldGetDocumentFieldIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: FieldGetDocumentFieldResponseBodyData;

  constructor(err: FieldGetDocumentFieldResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "FieldGetDocumentFieldResponseBody";
  }
}

/** @internal */
export const FieldGetDocumentFieldDocumentsFieldsResponseIssues$inboundSchema:
  z.ZodType<
    FieldGetDocumentFieldDocumentsFieldsResponseIssues,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type FieldGetDocumentFieldDocumentsFieldsResponseIssues$Outbound = {
  message: string;
};

/** @internal */
export const FieldGetDocumentFieldDocumentsFieldsResponseIssues$outboundSchema:
  z.ZodType<
    FieldGetDocumentFieldDocumentsFieldsResponseIssues$Outbound,
    z.ZodTypeDef,
    FieldGetDocumentFieldDocumentsFieldsResponseIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldGetDocumentFieldDocumentsFieldsResponseIssues$ {
  /** @deprecated use `FieldGetDocumentFieldDocumentsFieldsResponseIssues$inboundSchema` instead. */
  export const inboundSchema =
    FieldGetDocumentFieldDocumentsFieldsResponseIssues$inboundSchema;
  /** @deprecated use `FieldGetDocumentFieldDocumentsFieldsResponseIssues$outboundSchema` instead. */
  export const outboundSchema =
    FieldGetDocumentFieldDocumentsFieldsResponseIssues$outboundSchema;
  /** @deprecated use `FieldGetDocumentFieldDocumentsFieldsResponseIssues$Outbound` instead. */
  export type Outbound =
    FieldGetDocumentFieldDocumentsFieldsResponseIssues$Outbound;
}

export function fieldGetDocumentFieldDocumentsFieldsResponseIssuesToJSON(
  fieldGetDocumentFieldDocumentsFieldsResponseIssues:
    FieldGetDocumentFieldDocumentsFieldsResponseIssues,
): string {
  return JSON.stringify(
    FieldGetDocumentFieldDocumentsFieldsResponseIssues$outboundSchema.parse(
      fieldGetDocumentFieldDocumentsFieldsResponseIssues,
    ),
  );
}

export function fieldGetDocumentFieldDocumentsFieldsResponseIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  FieldGetDocumentFieldDocumentsFieldsResponseIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      FieldGetDocumentFieldDocumentsFieldsResponseIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'FieldGetDocumentFieldDocumentsFieldsResponseIssues' from JSON`,
  );
}

/** @internal */
export const FieldGetDocumentFieldDocumentsFieldsResponseResponseBody$inboundSchema:
  z.ZodType<
    FieldGetDocumentFieldDocumentsFieldsResponseResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() =>
        FieldGetDocumentFieldDocumentsFieldsResponseIssues$inboundSchema
      ),
    ).optional(),
  })
    .transform((v) => {
      return new FieldGetDocumentFieldDocumentsFieldsResponseResponseBody(v);
    });

/** @internal */
export type FieldGetDocumentFieldDocumentsFieldsResponseResponseBody$Outbound =
  {
    message: string;
    code: string;
    issues?:
      | Array<FieldGetDocumentFieldDocumentsFieldsResponseIssues$Outbound>
      | undefined;
  };

/** @internal */
export const FieldGetDocumentFieldDocumentsFieldsResponseResponseBody$outboundSchema:
  z.ZodType<
    FieldGetDocumentFieldDocumentsFieldsResponseResponseBody$Outbound,
    z.ZodTypeDef,
    FieldGetDocumentFieldDocumentsFieldsResponseResponseBody
  > = z.instanceof(FieldGetDocumentFieldDocumentsFieldsResponseResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          FieldGetDocumentFieldDocumentsFieldsResponseIssues$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldGetDocumentFieldDocumentsFieldsResponseResponseBody$ {
  /** @deprecated use `FieldGetDocumentFieldDocumentsFieldsResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    FieldGetDocumentFieldDocumentsFieldsResponseResponseBody$inboundSchema;
  /** @deprecated use `FieldGetDocumentFieldDocumentsFieldsResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    FieldGetDocumentFieldDocumentsFieldsResponseResponseBody$outboundSchema;
  /** @deprecated use `FieldGetDocumentFieldDocumentsFieldsResponseResponseBody$Outbound` instead. */
  export type Outbound =
    FieldGetDocumentFieldDocumentsFieldsResponseResponseBody$Outbound;
}

/** @internal */
export const FieldGetDocumentFieldDocumentsFieldsIssues$inboundSchema:
  z.ZodType<FieldGetDocumentFieldDocumentsFieldsIssues, z.ZodTypeDef, unknown> =
    z.object({
      message: z.string(),
    });

/** @internal */
export type FieldGetDocumentFieldDocumentsFieldsIssues$Outbound = {
  message: string;
};

/** @internal */
export const FieldGetDocumentFieldDocumentsFieldsIssues$outboundSchema:
  z.ZodType<
    FieldGetDocumentFieldDocumentsFieldsIssues$Outbound,
    z.ZodTypeDef,
    FieldGetDocumentFieldDocumentsFieldsIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldGetDocumentFieldDocumentsFieldsIssues$ {
  /** @deprecated use `FieldGetDocumentFieldDocumentsFieldsIssues$inboundSchema` instead. */
  export const inboundSchema =
    FieldGetDocumentFieldDocumentsFieldsIssues$inboundSchema;
  /** @deprecated use `FieldGetDocumentFieldDocumentsFieldsIssues$outboundSchema` instead. */
  export const outboundSchema =
    FieldGetDocumentFieldDocumentsFieldsIssues$outboundSchema;
  /** @deprecated use `FieldGetDocumentFieldDocumentsFieldsIssues$Outbound` instead. */
  export type Outbound = FieldGetDocumentFieldDocumentsFieldsIssues$Outbound;
}

export function fieldGetDocumentFieldDocumentsFieldsIssuesToJSON(
  fieldGetDocumentFieldDocumentsFieldsIssues:
    FieldGetDocumentFieldDocumentsFieldsIssues,
): string {
  return JSON.stringify(
    FieldGetDocumentFieldDocumentsFieldsIssues$outboundSchema.parse(
      fieldGetDocumentFieldDocumentsFieldsIssues,
    ),
  );
}

export function fieldGetDocumentFieldDocumentsFieldsIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  FieldGetDocumentFieldDocumentsFieldsIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      FieldGetDocumentFieldDocumentsFieldsIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'FieldGetDocumentFieldDocumentsFieldsIssues' from JSON`,
  );
}

/** @internal */
export const FieldGetDocumentFieldDocumentsFieldsResponseBody$inboundSchema:
  z.ZodType<
    FieldGetDocumentFieldDocumentsFieldsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => FieldGetDocumentFieldDocumentsFieldsIssues$inboundSchema),
    ).optional(),
  })
    .transform((v) => {
      return new FieldGetDocumentFieldDocumentsFieldsResponseBody(v);
    });

/** @internal */
export type FieldGetDocumentFieldDocumentsFieldsResponseBody$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<FieldGetDocumentFieldDocumentsFieldsIssues$Outbound>
    | undefined;
};

/** @internal */
export const FieldGetDocumentFieldDocumentsFieldsResponseBody$outboundSchema:
  z.ZodType<
    FieldGetDocumentFieldDocumentsFieldsResponseBody$Outbound,
    z.ZodTypeDef,
    FieldGetDocumentFieldDocumentsFieldsResponseBody
  > = z.instanceof(FieldGetDocumentFieldDocumentsFieldsResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() => FieldGetDocumentFieldDocumentsFieldsIssues$outboundSchema),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldGetDocumentFieldDocumentsFieldsResponseBody$ {
  /** @deprecated use `FieldGetDocumentFieldDocumentsFieldsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    FieldGetDocumentFieldDocumentsFieldsResponseBody$inboundSchema;
  /** @deprecated use `FieldGetDocumentFieldDocumentsFieldsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    FieldGetDocumentFieldDocumentsFieldsResponseBody$outboundSchema;
  /** @deprecated use `FieldGetDocumentFieldDocumentsFieldsResponseBody$Outbound` instead. */
  export type Outbound =
    FieldGetDocumentFieldDocumentsFieldsResponseBody$Outbound;
}

/** @internal */
export const FieldGetDocumentFieldIssues$inboundSchema: z.ZodType<
  FieldGetDocumentFieldIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type FieldGetDocumentFieldIssues$Outbound = {
  message: string;
};

/** @internal */
export const FieldGetDocumentFieldIssues$outboundSchema: z.ZodType<
  FieldGetDocumentFieldIssues$Outbound,
  z.ZodTypeDef,
  FieldGetDocumentFieldIssues
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldGetDocumentFieldIssues$ {
  /** @deprecated use `FieldGetDocumentFieldIssues$inboundSchema` instead. */
  export const inboundSchema = FieldGetDocumentFieldIssues$inboundSchema;
  /** @deprecated use `FieldGetDocumentFieldIssues$outboundSchema` instead. */
  export const outboundSchema = FieldGetDocumentFieldIssues$outboundSchema;
  /** @deprecated use `FieldGetDocumentFieldIssues$Outbound` instead. */
  export type Outbound = FieldGetDocumentFieldIssues$Outbound;
}

export function fieldGetDocumentFieldIssuesToJSON(
  fieldGetDocumentFieldIssues: FieldGetDocumentFieldIssues,
): string {
  return JSON.stringify(
    FieldGetDocumentFieldIssues$outboundSchema.parse(
      fieldGetDocumentFieldIssues,
    ),
  );
}

export function fieldGetDocumentFieldIssuesFromJSON(
  jsonString: string,
): SafeParseResult<FieldGetDocumentFieldIssues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FieldGetDocumentFieldIssues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FieldGetDocumentFieldIssues' from JSON`,
  );
}

/** @internal */
export const FieldGetDocumentFieldResponseBody$inboundSchema: z.ZodType<
  FieldGetDocumentFieldResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  issues: z.array(z.lazy(() => FieldGetDocumentFieldIssues$inboundSchema))
    .optional(),
})
  .transform((v) => {
    return new FieldGetDocumentFieldResponseBody(v);
  });

/** @internal */
export type FieldGetDocumentFieldResponseBody$Outbound = {
  message: string;
  code: string;
  issues?: Array<FieldGetDocumentFieldIssues$Outbound> | undefined;
};

/** @internal */
export const FieldGetDocumentFieldResponseBody$outboundSchema: z.ZodType<
  FieldGetDocumentFieldResponseBody$Outbound,
  z.ZodTypeDef,
  FieldGetDocumentFieldResponseBody
> = z.instanceof(FieldGetDocumentFieldResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(z.lazy(() => FieldGetDocumentFieldIssues$outboundSchema))
      .optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldGetDocumentFieldResponseBody$ {
  /** @deprecated use `FieldGetDocumentFieldResponseBody$inboundSchema` instead. */
  export const inboundSchema = FieldGetDocumentFieldResponseBody$inboundSchema;
  /** @deprecated use `FieldGetDocumentFieldResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    FieldGetDocumentFieldResponseBody$outboundSchema;
  /** @deprecated use `FieldGetDocumentFieldResponseBody$Outbound` instead. */
  export type Outbound = FieldGetDocumentFieldResponseBody$Outbound;
}
