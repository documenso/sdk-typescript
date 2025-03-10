/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type DocumentSetSettingsForDocumentDocumentsIssues = {
  message: string;
};

/**
 * Internal server error
 */
export type DocumentSetSettingsForDocumentDocumentsResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<DocumentSetSettingsForDocumentDocumentsIssues> | undefined;
};

/**
 * Internal server error
 */
export class DocumentSetSettingsForDocumentDocumentsResponseBody extends Error {
  code: string;
  issues?: Array<DocumentSetSettingsForDocumentDocumentsIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: DocumentSetSettingsForDocumentDocumentsResponseBodyData;

  constructor(err: DocumentSetSettingsForDocumentDocumentsResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "DocumentSetSettingsForDocumentDocumentsResponseBody";
  }
}

export type DocumentSetSettingsForDocumentIssues = {
  message: string;
};

/**
 * Invalid input data
 */
export type DocumentSetSettingsForDocumentResponseBodyData = {
  message: string;
  code: string;
  issues?: Array<DocumentSetSettingsForDocumentIssues> | undefined;
};

/**
 * Invalid input data
 */
export class DocumentSetSettingsForDocumentResponseBody extends Error {
  code: string;
  issues?: Array<DocumentSetSettingsForDocumentIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: DocumentSetSettingsForDocumentResponseBodyData;

  constructor(err: DocumentSetSettingsForDocumentResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "DocumentSetSettingsForDocumentResponseBody";
  }
}

/** @internal */
export const DocumentSetSettingsForDocumentDocumentsIssues$inboundSchema:
  z.ZodType<
    DocumentSetSettingsForDocumentDocumentsIssues,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type DocumentSetSettingsForDocumentDocumentsIssues$Outbound = {
  message: string;
};

/** @internal */
export const DocumentSetSettingsForDocumentDocumentsIssues$outboundSchema:
  z.ZodType<
    DocumentSetSettingsForDocumentDocumentsIssues$Outbound,
    z.ZodTypeDef,
    DocumentSetSettingsForDocumentDocumentsIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentSetSettingsForDocumentDocumentsIssues$ {
  /** @deprecated use `DocumentSetSettingsForDocumentDocumentsIssues$inboundSchema` instead. */
  export const inboundSchema =
    DocumentSetSettingsForDocumentDocumentsIssues$inboundSchema;
  /** @deprecated use `DocumentSetSettingsForDocumentDocumentsIssues$outboundSchema` instead. */
  export const outboundSchema =
    DocumentSetSettingsForDocumentDocumentsIssues$outboundSchema;
  /** @deprecated use `DocumentSetSettingsForDocumentDocumentsIssues$Outbound` instead. */
  export type Outbound = DocumentSetSettingsForDocumentDocumentsIssues$Outbound;
}

export function documentSetSettingsForDocumentDocumentsIssuesToJSON(
  documentSetSettingsForDocumentDocumentsIssues:
    DocumentSetSettingsForDocumentDocumentsIssues,
): string {
  return JSON.stringify(
    DocumentSetSettingsForDocumentDocumentsIssues$outboundSchema.parse(
      documentSetSettingsForDocumentDocumentsIssues,
    ),
  );
}

export function documentSetSettingsForDocumentDocumentsIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  DocumentSetSettingsForDocumentDocumentsIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DocumentSetSettingsForDocumentDocumentsIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DocumentSetSettingsForDocumentDocumentsIssues' from JSON`,
  );
}

/** @internal */
export const DocumentSetSettingsForDocumentDocumentsResponseBody$inboundSchema:
  z.ZodType<
    DocumentSetSettingsForDocumentDocumentsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => DocumentSetSettingsForDocumentDocumentsIssues$inboundSchema),
    ).optional(),
  })
    .transform((v) => {
      return new DocumentSetSettingsForDocumentDocumentsResponseBody(v);
    });

/** @internal */
export type DocumentSetSettingsForDocumentDocumentsResponseBody$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<DocumentSetSettingsForDocumentDocumentsIssues$Outbound>
    | undefined;
};

/** @internal */
export const DocumentSetSettingsForDocumentDocumentsResponseBody$outboundSchema:
  z.ZodType<
    DocumentSetSettingsForDocumentDocumentsResponseBody$Outbound,
    z.ZodTypeDef,
    DocumentSetSettingsForDocumentDocumentsResponseBody
  > = z.instanceof(DocumentSetSettingsForDocumentDocumentsResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          DocumentSetSettingsForDocumentDocumentsIssues$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentSetSettingsForDocumentDocumentsResponseBody$ {
  /** @deprecated use `DocumentSetSettingsForDocumentDocumentsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DocumentSetSettingsForDocumentDocumentsResponseBody$inboundSchema;
  /** @deprecated use `DocumentSetSettingsForDocumentDocumentsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DocumentSetSettingsForDocumentDocumentsResponseBody$outboundSchema;
  /** @deprecated use `DocumentSetSettingsForDocumentDocumentsResponseBody$Outbound` instead. */
  export type Outbound =
    DocumentSetSettingsForDocumentDocumentsResponseBody$Outbound;
}

/** @internal */
export const DocumentSetSettingsForDocumentIssues$inboundSchema: z.ZodType<
  DocumentSetSettingsForDocumentIssues,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type DocumentSetSettingsForDocumentIssues$Outbound = {
  message: string;
};

/** @internal */
export const DocumentSetSettingsForDocumentIssues$outboundSchema: z.ZodType<
  DocumentSetSettingsForDocumentIssues$Outbound,
  z.ZodTypeDef,
  DocumentSetSettingsForDocumentIssues
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentSetSettingsForDocumentIssues$ {
  /** @deprecated use `DocumentSetSettingsForDocumentIssues$inboundSchema` instead. */
  export const inboundSchema =
    DocumentSetSettingsForDocumentIssues$inboundSchema;
  /** @deprecated use `DocumentSetSettingsForDocumentIssues$outboundSchema` instead. */
  export const outboundSchema =
    DocumentSetSettingsForDocumentIssues$outboundSchema;
  /** @deprecated use `DocumentSetSettingsForDocumentIssues$Outbound` instead. */
  export type Outbound = DocumentSetSettingsForDocumentIssues$Outbound;
}

export function documentSetSettingsForDocumentIssuesToJSON(
  documentSetSettingsForDocumentIssues: DocumentSetSettingsForDocumentIssues,
): string {
  return JSON.stringify(
    DocumentSetSettingsForDocumentIssues$outboundSchema.parse(
      documentSetSettingsForDocumentIssues,
    ),
  );
}

export function documentSetSettingsForDocumentIssuesFromJSON(
  jsonString: string,
): SafeParseResult<DocumentSetSettingsForDocumentIssues, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DocumentSetSettingsForDocumentIssues$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentSetSettingsForDocumentIssues' from JSON`,
  );
}

/** @internal */
export const DocumentSetSettingsForDocumentResponseBody$inboundSchema:
  z.ZodType<DocumentSetSettingsForDocumentResponseBody, z.ZodTypeDef, unknown> =
    z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() => DocumentSetSettingsForDocumentIssues$inboundSchema),
      ).optional(),
    })
      .transform((v) => {
        return new DocumentSetSettingsForDocumentResponseBody(v);
      });

/** @internal */
export type DocumentSetSettingsForDocumentResponseBody$Outbound = {
  message: string;
  code: string;
  issues?: Array<DocumentSetSettingsForDocumentIssues$Outbound> | undefined;
};

/** @internal */
export const DocumentSetSettingsForDocumentResponseBody$outboundSchema:
  z.ZodType<
    DocumentSetSettingsForDocumentResponseBody$Outbound,
    z.ZodTypeDef,
    DocumentSetSettingsForDocumentResponseBody
  > = z.instanceof(DocumentSetSettingsForDocumentResponseBody)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() => DocumentSetSettingsForDocumentIssues$outboundSchema),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentSetSettingsForDocumentResponseBody$ {
  /** @deprecated use `DocumentSetSettingsForDocumentResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    DocumentSetSettingsForDocumentResponseBody$inboundSchema;
  /** @deprecated use `DocumentSetSettingsForDocumentResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DocumentSetSettingsForDocumentResponseBody$outboundSchema;
  /** @deprecated use `DocumentSetSettingsForDocumentResponseBody$Outbound` instead. */
  export type Outbound = DocumentSetSettingsForDocumentResponseBody$Outbound;
}
