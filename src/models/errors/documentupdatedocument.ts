/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { DocumensoError } from "./documensoerror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type DocumentUpdateDocumentInternalServerErrorIssue = {
  message: string;
};

/**
 * Internal server error
 */
export type DocumentUpdateDocumentInternalServerErrorData = {
  message: string;
  code: string;
  issues?: Array<DocumentUpdateDocumentInternalServerErrorIssue> | undefined;
};

/**
 * Internal server error
 */
export class DocumentUpdateDocumentInternalServerError extends DocumensoError {
  code: string;
  issues?: Array<DocumentUpdateDocumentInternalServerErrorIssue> | undefined;

  /** The original data that was passed to this error instance. */
  data$: DocumentUpdateDocumentInternalServerErrorData;

  constructor(
    err: DocumentUpdateDocumentInternalServerErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "DocumentUpdateDocumentInternalServerError";
  }
}

export type DocumentUpdateDocumentBadRequestIssue = {
  message: string;
};

/**
 * Invalid input data
 */
export type DocumentUpdateDocumentBadRequestErrorData = {
  message: string;
  code: string;
  issues?: Array<DocumentUpdateDocumentBadRequestIssue> | undefined;
};

/**
 * Invalid input data
 */
export class DocumentUpdateDocumentBadRequestError extends DocumensoError {
  code: string;
  issues?: Array<DocumentUpdateDocumentBadRequestIssue> | undefined;

  /** The original data that was passed to this error instance. */
  data$: DocumentUpdateDocumentBadRequestErrorData;

  constructor(
    err: DocumentUpdateDocumentBadRequestErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "DocumentUpdateDocumentBadRequestError";
  }
}

/** @internal */
export const DocumentUpdateDocumentInternalServerErrorIssue$inboundSchema:
  z.ZodType<
    DocumentUpdateDocumentInternalServerErrorIssue,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type DocumentUpdateDocumentInternalServerErrorIssue$Outbound = {
  message: string;
};

/** @internal */
export const DocumentUpdateDocumentInternalServerErrorIssue$outboundSchema:
  z.ZodType<
    DocumentUpdateDocumentInternalServerErrorIssue$Outbound,
    z.ZodTypeDef,
    DocumentUpdateDocumentInternalServerErrorIssue
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentUpdateDocumentInternalServerErrorIssue$ {
  /** @deprecated use `DocumentUpdateDocumentInternalServerErrorIssue$inboundSchema` instead. */
  export const inboundSchema =
    DocumentUpdateDocumentInternalServerErrorIssue$inboundSchema;
  /** @deprecated use `DocumentUpdateDocumentInternalServerErrorIssue$outboundSchema` instead. */
  export const outboundSchema =
    DocumentUpdateDocumentInternalServerErrorIssue$outboundSchema;
  /** @deprecated use `DocumentUpdateDocumentInternalServerErrorIssue$Outbound` instead. */
  export type Outbound =
    DocumentUpdateDocumentInternalServerErrorIssue$Outbound;
}

export function documentUpdateDocumentInternalServerErrorIssueToJSON(
  documentUpdateDocumentInternalServerErrorIssue:
    DocumentUpdateDocumentInternalServerErrorIssue,
): string {
  return JSON.stringify(
    DocumentUpdateDocumentInternalServerErrorIssue$outboundSchema.parse(
      documentUpdateDocumentInternalServerErrorIssue,
    ),
  );
}

export function documentUpdateDocumentInternalServerErrorIssueFromJSON(
  jsonString: string,
): SafeParseResult<
  DocumentUpdateDocumentInternalServerErrorIssue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DocumentUpdateDocumentInternalServerErrorIssue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DocumentUpdateDocumentInternalServerErrorIssue' from JSON`,
  );
}

/** @internal */
export const DocumentUpdateDocumentInternalServerError$inboundSchema: z.ZodType<
  DocumentUpdateDocumentInternalServerError,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  issues: z.array(
    z.lazy(() => DocumentUpdateDocumentInternalServerErrorIssue$inboundSchema),
  ).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new DocumentUpdateDocumentInternalServerError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type DocumentUpdateDocumentInternalServerError$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<DocumentUpdateDocumentInternalServerErrorIssue$Outbound>
    | undefined;
};

/** @internal */
export const DocumentUpdateDocumentInternalServerError$outboundSchema:
  z.ZodType<
    DocumentUpdateDocumentInternalServerError$Outbound,
    z.ZodTypeDef,
    DocumentUpdateDocumentInternalServerError
  > = z.instanceof(DocumentUpdateDocumentInternalServerError)
    .transform(v => v.data$)
    .pipe(z.object({
      message: z.string(),
      code: z.string(),
      issues: z.array(
        z.lazy(() =>
          DocumentUpdateDocumentInternalServerErrorIssue$outboundSchema
        ),
      ).optional(),
    }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentUpdateDocumentInternalServerError$ {
  /** @deprecated use `DocumentUpdateDocumentInternalServerError$inboundSchema` instead. */
  export const inboundSchema =
    DocumentUpdateDocumentInternalServerError$inboundSchema;
  /** @deprecated use `DocumentUpdateDocumentInternalServerError$outboundSchema` instead. */
  export const outboundSchema =
    DocumentUpdateDocumentInternalServerError$outboundSchema;
  /** @deprecated use `DocumentUpdateDocumentInternalServerError$Outbound` instead. */
  export type Outbound = DocumentUpdateDocumentInternalServerError$Outbound;
}

/** @internal */
export const DocumentUpdateDocumentBadRequestIssue$inboundSchema: z.ZodType<
  DocumentUpdateDocumentBadRequestIssue,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type DocumentUpdateDocumentBadRequestIssue$Outbound = {
  message: string;
};

/** @internal */
export const DocumentUpdateDocumentBadRequestIssue$outboundSchema: z.ZodType<
  DocumentUpdateDocumentBadRequestIssue$Outbound,
  z.ZodTypeDef,
  DocumentUpdateDocumentBadRequestIssue
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentUpdateDocumentBadRequestIssue$ {
  /** @deprecated use `DocumentUpdateDocumentBadRequestIssue$inboundSchema` instead. */
  export const inboundSchema =
    DocumentUpdateDocumentBadRequestIssue$inboundSchema;
  /** @deprecated use `DocumentUpdateDocumentBadRequestIssue$outboundSchema` instead. */
  export const outboundSchema =
    DocumentUpdateDocumentBadRequestIssue$outboundSchema;
  /** @deprecated use `DocumentUpdateDocumentBadRequestIssue$Outbound` instead. */
  export type Outbound = DocumentUpdateDocumentBadRequestIssue$Outbound;
}

export function documentUpdateDocumentBadRequestIssueToJSON(
  documentUpdateDocumentBadRequestIssue: DocumentUpdateDocumentBadRequestIssue,
): string {
  return JSON.stringify(
    DocumentUpdateDocumentBadRequestIssue$outboundSchema.parse(
      documentUpdateDocumentBadRequestIssue,
    ),
  );
}

export function documentUpdateDocumentBadRequestIssueFromJSON(
  jsonString: string,
): SafeParseResult<DocumentUpdateDocumentBadRequestIssue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DocumentUpdateDocumentBadRequestIssue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentUpdateDocumentBadRequestIssue' from JSON`,
  );
}

/** @internal */
export const DocumentUpdateDocumentBadRequestError$inboundSchema: z.ZodType<
  DocumentUpdateDocumentBadRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  issues: z.array(
    z.lazy(() => DocumentUpdateDocumentBadRequestIssue$inboundSchema),
  ).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new DocumentUpdateDocumentBadRequestError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type DocumentUpdateDocumentBadRequestError$Outbound = {
  message: string;
  code: string;
  issues?: Array<DocumentUpdateDocumentBadRequestIssue$Outbound> | undefined;
};

/** @internal */
export const DocumentUpdateDocumentBadRequestError$outboundSchema: z.ZodType<
  DocumentUpdateDocumentBadRequestError$Outbound,
  z.ZodTypeDef,
  DocumentUpdateDocumentBadRequestError
> = z.instanceof(DocumentUpdateDocumentBadRequestError)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => DocumentUpdateDocumentBadRequestIssue$outboundSchema),
    ).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentUpdateDocumentBadRequestError$ {
  /** @deprecated use `DocumentUpdateDocumentBadRequestError$inboundSchema` instead. */
  export const inboundSchema =
    DocumentUpdateDocumentBadRequestError$inboundSchema;
  /** @deprecated use `DocumentUpdateDocumentBadRequestError$outboundSchema` instead. */
  export const outboundSchema =
    DocumentUpdateDocumentBadRequestError$outboundSchema;
  /** @deprecated use `DocumentUpdateDocumentBadRequestError$Outbound` instead. */
  export type Outbound = DocumentUpdateDocumentBadRequestError$Outbound;
}
