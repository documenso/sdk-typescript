/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type DocumentDuplicateDocumentDocumentsIssues = {
  message: string;
};

/**
 * Internal server error
 */
export type DocumentDuplicateDocumentDocumentsResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<DocumentDuplicateDocumentDocumentsIssues> | undefined;
};

/**
 * Internal server error
 */
export class DocumentDuplicateDocumentDocumentsResponseBody extends Error {
  code: string;
  issues?: Array<DocumentDuplicateDocumentDocumentsIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: DocumentDuplicateDocumentDocumentsResponseBodyData;

  constructor(err: DocumentDuplicateDocumentDocumentsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "DocumentDuplicateDocumentDocumentsResponseBody";
  }
}

export type DocumentDuplicateDocumentIssues = {
  message: string;
};

/**
 * Invalid input data
 */
export type DocumentDuplicateDocumentResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<DocumentDuplicateDocumentIssues> | undefined;
};

/**
 * Invalid input data
 */
export class DocumentDuplicateDocumentResponseBody extends Error {
  code: string;
  issues?: Array<DocumentDuplicateDocumentIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: DocumentDuplicateDocumentResponseBodyData;

  constructor(err: DocumentDuplicateDocumentResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "DocumentDuplicateDocumentResponseBody";
  }
}

/** @internal */
export const DocumentDuplicateDocumentDocumentsIssues$inboundSchema: z.ZodType<
  DocumentDuplicateDocumentDocumentsIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type DocumentDuplicateDocumentDocumentsIssues$Outbound = {
  message: string;
};

/** @internal */
export const DocumentDuplicateDocumentDocumentsIssues$outboundSchema: z.ZodType<
  DocumentDuplicateDocumentDocumentsIssues$Outbound,
  z.ZodTypeDef,
  DocumentDuplicateDocumentDocumentsIssues
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentDuplicateDocumentDocumentsIssues$ {
  /** @deprecated use `DocumentDuplicateDocumentDocumentsIssues$inboundSchema` instead. */
  export const inboundSchema =
    DocumentDuplicateDocumentDocumentsIssues$inboundSchema;
  /** @deprecated use `DocumentDuplicateDocumentDocumentsIssues$outboundSchema` instead. */
  export const outboundSchema =
    DocumentDuplicateDocumentDocumentsIssues$outboundSchema;
  /** @deprecated use `DocumentDuplicateDocumentDocumentsIssues$Outbound` instead. */
  export type Outbound = DocumentDuplicateDocumentDocumentsIssues$Outbound;
}

export function documentDuplicateDocumentDocumentsIssuesToJSON(
  documentDuplicateDocumentDocumentsIssues:
    DocumentDuplicateDocumentDocumentsIssues,
): string {
  return JSON.stringify(
    DocumentDuplicateDocumentDocumentsIssues$outboundSchema.parse(
      documentDuplicateDocumentDocumentsIssues,
    ),
  );
}

export function documentDuplicateDocumentDocumentsIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  DocumentDuplicateDocumentDocumentsIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DocumentDuplicateDocumentDocumentsIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DocumentDuplicateDocumentDocumentsIssues' from JSON`,
  );
}

/** @internal */
export const DocumentDuplicateDocumentDocumentsResponseBody$inboundSchema:
  z.ZodType<
    DocumentDuplicateDocumentDocumentsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => DocumentDuplicateDocumentDocumentsIssues$inboundSchema),
    ).optional(),
  })
    .transform((v) => {
      return new DocumentDuplicateDocumentDocumentsResponseBody(v);
    });

/** @internal */
export type DocumentDuplicateDocumentDocumentsResponseBody$Outbound = {
  message: string;
  code: string;
  issues?: Array<DocumentDuplicateDocumentDocumentsIssues$Outbound> | undefined;
};

/** @internal */
export const DocumentDuplicateDocumentDocumentsResponseBody$outboundSchema:
  z.ZodType<
    DocumentDuplicateDocumentDocumentsResponseBody$Outbound,
    z.ZodTypeDef,
    DocumentDuplicateDocumentDocumentsResponseBody
  > = z.instanceof(DocumentDuplicateDocumentDocumentsResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() => DocumentDuplicateDocumentDocumentsIssues$outboundSchema),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentDuplicateDocumentDocumentsResponseBody$ {
  /** @deprecated use `DocumentDuplicateDocumentDocumentsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DocumentDuplicateDocumentDocumentsResponseBody$inboundSchema;
  /** @deprecated use `DocumentDuplicateDocumentDocumentsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DocumentDuplicateDocumentDocumentsResponseBody$outboundSchema;
  /** @deprecated use `DocumentDuplicateDocumentDocumentsResponseBody$Outbound` instead. */
  export type Outbound =
    DocumentDuplicateDocumentDocumentsResponseBody$Outbound;
}

/** @internal */
export const DocumentDuplicateDocumentIssues$inboundSchema: z.ZodType<
  DocumentDuplicateDocumentIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type DocumentDuplicateDocumentIssues$Outbound = {
  message: string;
};

/** @internal */
export const DocumentDuplicateDocumentIssues$outboundSchema: z.ZodType<
  DocumentDuplicateDocumentIssues$Outbound,
  z.ZodTypeDef,
  DocumentDuplicateDocumentIssues
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentDuplicateDocumentIssues$ {
  /** @deprecated use `DocumentDuplicateDocumentIssues$inboundSchema` instead. */
  export const inboundSchema = DocumentDuplicateDocumentIssues$inboundSchema;
  /** @deprecated use `DocumentDuplicateDocumentIssues$outboundSchema` instead. */
  export const outboundSchema = DocumentDuplicateDocumentIssues$outboundSchema;
  /** @deprecated use `DocumentDuplicateDocumentIssues$Outbound` instead. */
  export type Outbound = DocumentDuplicateDocumentIssues$Outbound;
}

export function documentDuplicateDocumentIssuesToJSON(
  documentDuplicateDocumentIssues: DocumentDuplicateDocumentIssues,
): string {
  return JSON.stringify(
    DocumentDuplicateDocumentIssues$outboundSchema.parse(
      documentDuplicateDocumentIssues,
    ),
  );
}

export function documentDuplicateDocumentIssuesFromJSON(
  jsonString: string,
): SafeParseResult<DocumentDuplicateDocumentIssues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentDuplicateDocumentIssues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentDuplicateDocumentIssues' from JSON`,
  );
}

/** @internal */
export const DocumentDuplicateDocumentResponseBody$inboundSchema: z.ZodType<
  DocumentDuplicateDocumentResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  issues: z.array(z.lazy(() => DocumentDuplicateDocumentIssues$inboundSchema))
    .optional(),
})
  .transform((v) => {
    return new DocumentDuplicateDocumentResponseBody(v);
  });

/** @internal */
export type DocumentDuplicateDocumentResponseBody$Outbound = {
  message: string;
  code: string;
  issues?: Array<DocumentDuplicateDocumentIssues$Outbound> | undefined;
};

/** @internal */
export const DocumentDuplicateDocumentResponseBody$outboundSchema: z.ZodType<
  DocumentDuplicateDocumentResponseBody$Outbound,
  z.ZodTypeDef,
  DocumentDuplicateDocumentResponseBody
> = z.instanceof(DocumentDuplicateDocumentResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => DocumentDuplicateDocumentIssues$outboundSchema),
    ).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentDuplicateDocumentResponseBody$ {
  /** @deprecated use `DocumentDuplicateDocumentResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DocumentDuplicateDocumentResponseBody$inboundSchema;
  /** @deprecated use `DocumentDuplicateDocumentResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DocumentDuplicateDocumentResponseBody$outboundSchema;
  /** @deprecated use `DocumentDuplicateDocumentResponseBody$Outbound` instead. */
  export type Outbound = DocumentDuplicateDocumentResponseBody$Outbound;
}
