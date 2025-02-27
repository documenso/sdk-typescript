/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type DocumentFindDocumentsDocumentsIssues = {
  message: string;
};

/**
 * Internal server error
 */
export type DocumentFindDocumentsDocumentsResponseResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<DocumentFindDocumentsDocumentsIssues> | undefined;
};

/**
 * Internal server error
 */
export class DocumentFindDocumentsDocumentsResponseResponseBody extends Error {
  code: string;
  issues?: Array<DocumentFindDocumentsDocumentsIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: DocumentFindDocumentsDocumentsResponseResponseBodyData;

  constructor(err: DocumentFindDocumentsDocumentsResponseResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "DocumentFindDocumentsDocumentsResponseResponseBody";
  }
}

export type DocumentFindDocumentsIssues = {
  message: string;
};

/**
 * Not found
 */
export type DocumentFindDocumentsDocumentsResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<DocumentFindDocumentsIssues> | undefined;
};

/**
 * Not found
 */
export class DocumentFindDocumentsDocumentsResponseBody extends Error {
  code: string;
  issues?: Array<DocumentFindDocumentsIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: DocumentFindDocumentsDocumentsResponseBodyData;

  constructor(err: DocumentFindDocumentsDocumentsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "DocumentFindDocumentsDocumentsResponseBody";
  }
}

export type Issues = {
  message: string;
};

/**
 * Invalid input data
 */
export type DocumentFindDocumentsResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<Issues> | undefined;
};

/**
 * Invalid input data
 */
export class DocumentFindDocumentsResponseBody extends Error {
  code: string;
  issues?: Array<Issues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: DocumentFindDocumentsResponseBodyData;

  constructor(err: DocumentFindDocumentsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "DocumentFindDocumentsResponseBody";
  }
}

/** @internal */
export const DocumentFindDocumentsDocumentsIssues$inboundSchema: z.ZodType<
  DocumentFindDocumentsDocumentsIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type DocumentFindDocumentsDocumentsIssues$Outbound = {
  message: string;
};

/** @internal */
export const DocumentFindDocumentsDocumentsIssues$outboundSchema: z.ZodType<
  DocumentFindDocumentsDocumentsIssues$Outbound,
  z.ZodTypeDef,
  DocumentFindDocumentsDocumentsIssues
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentFindDocumentsDocumentsIssues$ {
  /** @deprecated use `DocumentFindDocumentsDocumentsIssues$inboundSchema` instead. */
  export const inboundSchema =
    DocumentFindDocumentsDocumentsIssues$inboundSchema;
  /** @deprecated use `DocumentFindDocumentsDocumentsIssues$outboundSchema` instead. */
  export const outboundSchema =
    DocumentFindDocumentsDocumentsIssues$outboundSchema;
  /** @deprecated use `DocumentFindDocumentsDocumentsIssues$Outbound` instead. */
  export type Outbound = DocumentFindDocumentsDocumentsIssues$Outbound;
}

export function documentFindDocumentsDocumentsIssuesToJSON(
  documentFindDocumentsDocumentsIssues: DocumentFindDocumentsDocumentsIssues,
): string {
  return JSON.stringify(
    DocumentFindDocumentsDocumentsIssues$outboundSchema.parse(
      documentFindDocumentsDocumentsIssues,
    ),
  );
}

export function documentFindDocumentsDocumentsIssuesFromJSON(
  jsonString: string,
): SafeParseResult<DocumentFindDocumentsDocumentsIssues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DocumentFindDocumentsDocumentsIssues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentFindDocumentsDocumentsIssues' from JSON`,
  );
}

/** @internal */
export const DocumentFindDocumentsDocumentsResponseResponseBody$inboundSchema:
  z.ZodType<
    DocumentFindDocumentsDocumentsResponseResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => DocumentFindDocumentsDocumentsIssues$inboundSchema),
    ).optional(),
  })
    .transform((v) => {
      return new DocumentFindDocumentsDocumentsResponseResponseBody(v);
    });

/** @internal */
export type DocumentFindDocumentsDocumentsResponseResponseBody$Outbound = {
  message: string;
  code: string;
  issues?: Array<DocumentFindDocumentsDocumentsIssues$Outbound> | undefined;
};

/** @internal */
export const DocumentFindDocumentsDocumentsResponseResponseBody$outboundSchema:
  z.ZodType<
    DocumentFindDocumentsDocumentsResponseResponseBody$Outbound,
    z.ZodTypeDef,
    DocumentFindDocumentsDocumentsResponseResponseBody
  > = z.instanceof(DocumentFindDocumentsDocumentsResponseResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() => DocumentFindDocumentsDocumentsIssues$outboundSchema),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentFindDocumentsDocumentsResponseResponseBody$ {
  /** @deprecated use `DocumentFindDocumentsDocumentsResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DocumentFindDocumentsDocumentsResponseResponseBody$inboundSchema;
  /** @deprecated use `DocumentFindDocumentsDocumentsResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DocumentFindDocumentsDocumentsResponseResponseBody$outboundSchema;
  /** @deprecated use `DocumentFindDocumentsDocumentsResponseResponseBody$Outbound` instead. */
  export type Outbound =
    DocumentFindDocumentsDocumentsResponseResponseBody$Outbound;
}

/** @internal */
export const DocumentFindDocumentsIssues$inboundSchema: z.ZodType<
  DocumentFindDocumentsIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type DocumentFindDocumentsIssues$Outbound = {
  message: string;
};

/** @internal */
export const DocumentFindDocumentsIssues$outboundSchema: z.ZodType<
  DocumentFindDocumentsIssues$Outbound,
  z.ZodTypeDef,
  DocumentFindDocumentsIssues
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentFindDocumentsIssues$ {
  /** @deprecated use `DocumentFindDocumentsIssues$inboundSchema` instead. */
  export const inboundSchema = DocumentFindDocumentsIssues$inboundSchema;
  /** @deprecated use `DocumentFindDocumentsIssues$outboundSchema` instead. */
  export const outboundSchema = DocumentFindDocumentsIssues$outboundSchema;
  /** @deprecated use `DocumentFindDocumentsIssues$Outbound` instead. */
  export type Outbound = DocumentFindDocumentsIssues$Outbound;
}

export function documentFindDocumentsIssuesToJSON(
  documentFindDocumentsIssues: DocumentFindDocumentsIssues,
): string {
  return JSON.stringify(
    DocumentFindDocumentsIssues$outboundSchema.parse(
      documentFindDocumentsIssues,
    ),
  );
}

export function documentFindDocumentsIssuesFromJSON(
  jsonString: string,
): SafeParseResult<DocumentFindDocumentsIssues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentFindDocumentsIssues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentFindDocumentsIssues' from JSON`,
  );
}

/** @internal */
export const DocumentFindDocumentsDocumentsResponseBody$inboundSchema:
  z.ZodType<DocumentFindDocumentsDocumentsResponseBody, z.ZodTypeDef, unknown> =
    z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(z.lazy(() => DocumentFindDocumentsIssues$inboundSchema))
        .optional(),
    })
      .transform((v) => {
        return new DocumentFindDocumentsDocumentsResponseBody(v);
      });

/** @internal */
export type DocumentFindDocumentsDocumentsResponseBody$Outbound = {
  message: string;
  code: string;
  issues?: Array<DocumentFindDocumentsIssues$Outbound> | undefined;
};

/** @internal */
export const DocumentFindDocumentsDocumentsResponseBody$outboundSchema:
  z.ZodType<
    DocumentFindDocumentsDocumentsResponseBody$Outbound,
    z.ZodTypeDef,
    DocumentFindDocumentsDocumentsResponseBody
  > = z.instanceof(DocumentFindDocumentsDocumentsResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(z.lazy(() => DocumentFindDocumentsIssues$outboundSchema))
        .optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentFindDocumentsDocumentsResponseBody$ {
  /** @deprecated use `DocumentFindDocumentsDocumentsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DocumentFindDocumentsDocumentsResponseBody$inboundSchema;
  /** @deprecated use `DocumentFindDocumentsDocumentsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DocumentFindDocumentsDocumentsResponseBody$outboundSchema;
  /** @deprecated use `DocumentFindDocumentsDocumentsResponseBody$Outbound` instead. */
  export type Outbound = DocumentFindDocumentsDocumentsResponseBody$Outbound;
}

/** @internal */
export const Issues$inboundSchema: z.ZodType<Issues, z.ZodTypeDef, unknown> = z
  .object({
    message: z.string(),
  });

/** @internal */
export type Issues$Outbound = {
  message: string;
};

/** @internal */
export const Issues$outboundSchema: z.ZodType<
  Issues$Outbound,
  z.ZodTypeDef,
  Issues
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Issues$ {
  /** @deprecated use `Issues$inboundSchema` instead. */
  export const inboundSchema = Issues$inboundSchema;
  /** @deprecated use `Issues$outboundSchema` instead. */
  export const outboundSchema = Issues$outboundSchema;
  /** @deprecated use `Issues$Outbound` instead. */
  export type Outbound = Issues$Outbound;
}

export function issuesToJSON(issues: Issues): string {
  return JSON.stringify(Issues$outboundSchema.parse(issues));
}

export function issuesFromJSON(
  jsonString: string,
): SafeParseResult<Issues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Issues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Issues' from JSON`,
  );
}

/** @internal */
export const DocumentFindDocumentsResponseBody$inboundSchema: z.ZodType<
  DocumentFindDocumentsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  issues: z.array(z.lazy(() => Issues$inboundSchema)).optional(),
})
  .transform((v) => {
    return new DocumentFindDocumentsResponseBody(v);
  });

/** @internal */
export type DocumentFindDocumentsResponseBody$Outbound = {
  message: string;
  code: string;
  issues?: Array<Issues$Outbound> | undefined;
};

/** @internal */
export const DocumentFindDocumentsResponseBody$outboundSchema: z.ZodType<
  DocumentFindDocumentsResponseBody$Outbound,
  z.ZodTypeDef,
  DocumentFindDocumentsResponseBody
> = z.instanceof(DocumentFindDocumentsResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(z.lazy(() => Issues$outboundSchema)).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentFindDocumentsResponseBody$ {
  /** @deprecated use `DocumentFindDocumentsResponseBody$inboundSchema` instead. */
  export const inboundSchema = DocumentFindDocumentsResponseBody$inboundSchema;
  /** @deprecated use `DocumentFindDocumentsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DocumentFindDocumentsResponseBody$outboundSchema;
  /** @deprecated use `DocumentFindDocumentsResponseBody$Outbound` instead. */
  export type Outbound = DocumentFindDocumentsResponseBody$Outbound;
}
