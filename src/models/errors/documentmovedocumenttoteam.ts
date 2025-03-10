/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type DocumentMoveDocumentToTeamInternalServerErrorIssues = {
  message: string;
};

/**
 * Internal server error
 */
export type DocumentMoveDocumentToTeamInternalServerErrorData = {
  message: string;
  code: string;
  issues?:
    | Array<DocumentMoveDocumentToTeamInternalServerErrorIssues>
    | undefined;
};

/**
 * Internal server error
 */
export class DocumentMoveDocumentToTeamInternalServerError extends Error {
  code: string;
  issues?:
    | Array<DocumentMoveDocumentToTeamInternalServerErrorIssues>
    | undefined;

  /** The original data that was passed to this error instance. */
  data$: DocumentMoveDocumentToTeamInternalServerErrorData;

  constructor(err: DocumentMoveDocumentToTeamInternalServerErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "DocumentMoveDocumentToTeamInternalServerError";
  }
}

export type DocumentMoveDocumentToTeamBadRequestIssues = {
  message: string;
};

/**
 * Invalid input data
 */
export type DocumentMoveDocumentToTeamBadRequestErrorData = {
  message: string;
  code: string;
  issues?: Array<DocumentMoveDocumentToTeamBadRequestIssues> | undefined;
};

/**
 * Invalid input data
 */
export class DocumentMoveDocumentToTeamBadRequestError extends Error {
  code: string;
  issues?: Array<DocumentMoveDocumentToTeamBadRequestIssues> | undefined;

  /** The original data that was passed to this error instance. */
  data$: DocumentMoveDocumentToTeamBadRequestErrorData;

  constructor(err: DocumentMoveDocumentToTeamBadRequestErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "DocumentMoveDocumentToTeamBadRequestError";
  }
}

/** @internal */
export const DocumentMoveDocumentToTeamInternalServerErrorIssues$inboundSchema:
  z.ZodType<
    DocumentMoveDocumentToTeamInternalServerErrorIssues,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type DocumentMoveDocumentToTeamInternalServerErrorIssues$Outbound = {
  message: string;
};

/** @internal */
export const DocumentMoveDocumentToTeamInternalServerErrorIssues$outboundSchema:
  z.ZodType<
    DocumentMoveDocumentToTeamInternalServerErrorIssues$Outbound,
    z.ZodTypeDef,
    DocumentMoveDocumentToTeamInternalServerErrorIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentMoveDocumentToTeamInternalServerErrorIssues$ {
  /** @deprecated use `DocumentMoveDocumentToTeamInternalServerErrorIssues$inboundSchema` instead. */
  export const inboundSchema =
    DocumentMoveDocumentToTeamInternalServerErrorIssues$inboundSchema;
  /** @deprecated use `DocumentMoveDocumentToTeamInternalServerErrorIssues$outboundSchema` instead. */
  export const outboundSchema =
    DocumentMoveDocumentToTeamInternalServerErrorIssues$outboundSchema;
  /** @deprecated use `DocumentMoveDocumentToTeamInternalServerErrorIssues$Outbound` instead. */
  export type Outbound =
    DocumentMoveDocumentToTeamInternalServerErrorIssues$Outbound;
}

export function documentMoveDocumentToTeamInternalServerErrorIssuesToJSON(
  documentMoveDocumentToTeamInternalServerErrorIssues:
    DocumentMoveDocumentToTeamInternalServerErrorIssues,
): string {
  return JSON.stringify(
    DocumentMoveDocumentToTeamInternalServerErrorIssues$outboundSchema.parse(
      documentMoveDocumentToTeamInternalServerErrorIssues,
    ),
  );
}

export function documentMoveDocumentToTeamInternalServerErrorIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  DocumentMoveDocumentToTeamInternalServerErrorIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DocumentMoveDocumentToTeamInternalServerErrorIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DocumentMoveDocumentToTeamInternalServerErrorIssues' from JSON`,
  );
}

/** @internal */
export const DocumentMoveDocumentToTeamInternalServerError$inboundSchema:
  z.ZodType<
    DocumentMoveDocumentToTeamInternalServerError,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() =>
        DocumentMoveDocumentToTeamInternalServerErrorIssues$inboundSchema
      ),
    ).optional(),
  })
    .transform((v) => {
      return new DocumentMoveDocumentToTeamInternalServerError(v);
    });

/** @internal */
export type DocumentMoveDocumentToTeamInternalServerError$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<DocumentMoveDocumentToTeamInternalServerErrorIssues$Outbound>
    | undefined;
};

/** @internal */
export const DocumentMoveDocumentToTeamInternalServerError$outboundSchema:
  z.ZodType<
    DocumentMoveDocumentToTeamInternalServerError$Outbound,
    z.ZodTypeDef,
    DocumentMoveDocumentToTeamInternalServerError
  > = z.instanceof(DocumentMoveDocumentToTeamInternalServerError)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          DocumentMoveDocumentToTeamInternalServerErrorIssues$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentMoveDocumentToTeamInternalServerError$ {
  /** @deprecated use `DocumentMoveDocumentToTeamInternalServerError$inboundSchema` instead. */
  export const inboundSchema =
    DocumentMoveDocumentToTeamInternalServerError$inboundSchema;
  /** @deprecated use `DocumentMoveDocumentToTeamInternalServerError$outboundSchema` instead. */
  export const outboundSchema =
    DocumentMoveDocumentToTeamInternalServerError$outboundSchema;
  /** @deprecated use `DocumentMoveDocumentToTeamInternalServerError$Outbound` instead. */
  export type Outbound = DocumentMoveDocumentToTeamInternalServerError$Outbound;
}

/** @internal */
export const DocumentMoveDocumentToTeamBadRequestIssues$inboundSchema:
  z.ZodType<DocumentMoveDocumentToTeamBadRequestIssues, z.ZodTypeDef, unknown> =
    z.object({
      message: z.string(),
    });

/** @internal */
export type DocumentMoveDocumentToTeamBadRequestIssues$Outbound = {
  message: string;
};

/** @internal */
export const DocumentMoveDocumentToTeamBadRequestIssues$outboundSchema:
  z.ZodType<
    DocumentMoveDocumentToTeamBadRequestIssues$Outbound,
    z.ZodTypeDef,
    DocumentMoveDocumentToTeamBadRequestIssues
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentMoveDocumentToTeamBadRequestIssues$ {
  /** @deprecated use `DocumentMoveDocumentToTeamBadRequestIssues$inboundSchema` instead. */
  export const inboundSchema =
    DocumentMoveDocumentToTeamBadRequestIssues$inboundSchema;
  /** @deprecated use `DocumentMoveDocumentToTeamBadRequestIssues$outboundSchema` instead. */
  export const outboundSchema =
    DocumentMoveDocumentToTeamBadRequestIssues$outboundSchema;
  /** @deprecated use `DocumentMoveDocumentToTeamBadRequestIssues$Outbound` instead. */
  export type Outbound = DocumentMoveDocumentToTeamBadRequestIssues$Outbound;
}

export function documentMoveDocumentToTeamBadRequestIssuesToJSON(
  documentMoveDocumentToTeamBadRequestIssues:
    DocumentMoveDocumentToTeamBadRequestIssues,
): string {
  return JSON.stringify(
    DocumentMoveDocumentToTeamBadRequestIssues$outboundSchema.parse(
      documentMoveDocumentToTeamBadRequestIssues,
    ),
  );
}

export function documentMoveDocumentToTeamBadRequestIssuesFromJSON(
  jsonString: string,
): SafeParseResult<
  DocumentMoveDocumentToTeamBadRequestIssues,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DocumentMoveDocumentToTeamBadRequestIssues$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DocumentMoveDocumentToTeamBadRequestIssues' from JSON`,
  );
}

/** @internal */
export const DocumentMoveDocumentToTeamBadRequestError$inboundSchema: z.ZodType<
  DocumentMoveDocumentToTeamBadRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  issues: z.array(
    z.lazy(() => DocumentMoveDocumentToTeamBadRequestIssues$inboundSchema),
  ).optional(),
})
  .transform((v) => {
    return new DocumentMoveDocumentToTeamBadRequestError(v);
  });

/** @internal */
export type DocumentMoveDocumentToTeamBadRequestError$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<DocumentMoveDocumentToTeamBadRequestIssues$Outbound>
    | undefined;
};

/** @internal */
export const DocumentMoveDocumentToTeamBadRequestError$outboundSchema:
  z.ZodType<
    DocumentMoveDocumentToTeamBadRequestError$Outbound,
    z.ZodTypeDef,
    DocumentMoveDocumentToTeamBadRequestError
  > = z.instanceof(DocumentMoveDocumentToTeamBadRequestError)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() => DocumentMoveDocumentToTeamBadRequestIssues$outboundSchema),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentMoveDocumentToTeamBadRequestError$ {
  /** @deprecated use `DocumentMoveDocumentToTeamBadRequestError$inboundSchema` instead. */
  export const inboundSchema =
    DocumentMoveDocumentToTeamBadRequestError$inboundSchema;
  /** @deprecated use `DocumentMoveDocumentToTeamBadRequestError$outboundSchema` instead. */
  export const outboundSchema =
    DocumentMoveDocumentToTeamBadRequestError$outboundSchema;
  /** @deprecated use `DocumentMoveDocumentToTeamBadRequestError$Outbound` instead. */
  export type Outbound = DocumentMoveDocumentToTeamBadRequestError$Outbound;
}
