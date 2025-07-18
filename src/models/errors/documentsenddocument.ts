/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { DocumensoError } from "./documensoerror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

export type DocumentSendDocumentInternalServerErrorIssue = {
  message: string;
};

/**
 * Internal server error
 */
export type DocumentSendDocumentInternalServerErrorData = {
  message: string;
  code: string;
  issues?: Array<DocumentSendDocumentInternalServerErrorIssue> | undefined;
};

/**
 * Internal server error
 */
export class DocumentSendDocumentInternalServerError extends DocumensoError {
  code: string;
  issues?: Array<DocumentSendDocumentInternalServerErrorIssue> | undefined;

  /** The original data that was passed to this error instance. */
  data$: DocumentSendDocumentInternalServerErrorData;

  constructor(
    err: DocumentSendDocumentInternalServerErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "DocumentSendDocumentInternalServerError";
  }
}

export type DocumentSendDocumentBadRequestIssue = {
  message: string;
};

/**
 * Invalid input data
 */
export type DocumentSendDocumentBadRequestErrorData = {
  message: string;
  code: string;
  issues?: Array<DocumentSendDocumentBadRequestIssue> | undefined;
};

/**
 * Invalid input data
 */
export class DocumentSendDocumentBadRequestError extends DocumensoError {
  code: string;
  issues?: Array<DocumentSendDocumentBadRequestIssue> | undefined;

  /** The original data that was passed to this error instance. */
  data$: DocumentSendDocumentBadRequestErrorData;

  constructor(
    err: DocumentSendDocumentBadRequestErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.code = err.code;
    if (err.issues != null) this.issues = err.issues;

    this.name = "DocumentSendDocumentBadRequestError";
  }
}

/** @internal */
export const DocumentSendDocumentInternalServerErrorIssue$inboundSchema:
  z.ZodType<
    DocumentSendDocumentInternalServerErrorIssue,
    z.ZodTypeDef,
    unknown
  > = z.object({
    message: z.string(),
  });

/** @internal */
export type DocumentSendDocumentInternalServerErrorIssue$Outbound = {
  message: string;
};

/** @internal */
export const DocumentSendDocumentInternalServerErrorIssue$outboundSchema:
  z.ZodType<
    DocumentSendDocumentInternalServerErrorIssue$Outbound,
    z.ZodTypeDef,
    DocumentSendDocumentInternalServerErrorIssue
  > = z.object({
    message: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentSendDocumentInternalServerErrorIssue$ {
  /** @deprecated use `DocumentSendDocumentInternalServerErrorIssue$inboundSchema` instead. */
  export const inboundSchema =
    DocumentSendDocumentInternalServerErrorIssue$inboundSchema;
  /** @deprecated use `DocumentSendDocumentInternalServerErrorIssue$outboundSchema` instead. */
  export const outboundSchema =
    DocumentSendDocumentInternalServerErrorIssue$outboundSchema;
  /** @deprecated use `DocumentSendDocumentInternalServerErrorIssue$Outbound` instead. */
  export type Outbound = DocumentSendDocumentInternalServerErrorIssue$Outbound;
}

export function documentSendDocumentInternalServerErrorIssueToJSON(
  documentSendDocumentInternalServerErrorIssue:
    DocumentSendDocumentInternalServerErrorIssue,
): string {
  return JSON.stringify(
    DocumentSendDocumentInternalServerErrorIssue$outboundSchema.parse(
      documentSendDocumentInternalServerErrorIssue,
    ),
  );
}

export function documentSendDocumentInternalServerErrorIssueFromJSON(
  jsonString: string,
): SafeParseResult<
  DocumentSendDocumentInternalServerErrorIssue,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DocumentSendDocumentInternalServerErrorIssue$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DocumentSendDocumentInternalServerErrorIssue' from JSON`,
  );
}

/** @internal */
export const DocumentSendDocumentInternalServerError$inboundSchema: z.ZodType<
  DocumentSendDocumentInternalServerError,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  issues: z.array(
    z.lazy(() => DocumentSendDocumentInternalServerErrorIssue$inboundSchema),
  ).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new DocumentSendDocumentInternalServerError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type DocumentSendDocumentInternalServerError$Outbound = {
  message: string;
  code: string;
  issues?:
    | Array<DocumentSendDocumentInternalServerErrorIssue$Outbound>
    | undefined;
};

/** @internal */
export const DocumentSendDocumentInternalServerError$outboundSchema: z.ZodType<
  DocumentSendDocumentInternalServerError$Outbound,
  z.ZodTypeDef,
  DocumentSendDocumentInternalServerError
> = z.instanceof(DocumentSendDocumentInternalServerError)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => DocumentSendDocumentInternalServerErrorIssue$outboundSchema),
    ).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentSendDocumentInternalServerError$ {
  /** @deprecated use `DocumentSendDocumentInternalServerError$inboundSchema` instead. */
  export const inboundSchema =
    DocumentSendDocumentInternalServerError$inboundSchema;
  /** @deprecated use `DocumentSendDocumentInternalServerError$outboundSchema` instead. */
  export const outboundSchema =
    DocumentSendDocumentInternalServerError$outboundSchema;
  /** @deprecated use `DocumentSendDocumentInternalServerError$Outbound` instead. */
  export type Outbound = DocumentSendDocumentInternalServerError$Outbound;
}

/** @internal */
export const DocumentSendDocumentBadRequestIssue$inboundSchema: z.ZodType<
  DocumentSendDocumentBadRequestIssue,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
});

/** @internal */
export type DocumentSendDocumentBadRequestIssue$Outbound = {
  message: string;
};

/** @internal */
export const DocumentSendDocumentBadRequestIssue$outboundSchema: z.ZodType<
  DocumentSendDocumentBadRequestIssue$Outbound,
  z.ZodTypeDef,
  DocumentSendDocumentBadRequestIssue
> = z.object({
  message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentSendDocumentBadRequestIssue$ {
  /** @deprecated use `DocumentSendDocumentBadRequestIssue$inboundSchema` instead. */
  export const inboundSchema =
    DocumentSendDocumentBadRequestIssue$inboundSchema;
  /** @deprecated use `DocumentSendDocumentBadRequestIssue$outboundSchema` instead. */
  export const outboundSchema =
    DocumentSendDocumentBadRequestIssue$outboundSchema;
  /** @deprecated use `DocumentSendDocumentBadRequestIssue$Outbound` instead. */
  export type Outbound = DocumentSendDocumentBadRequestIssue$Outbound;
}

export function documentSendDocumentBadRequestIssueToJSON(
  documentSendDocumentBadRequestIssue: DocumentSendDocumentBadRequestIssue,
): string {
  return JSON.stringify(
    DocumentSendDocumentBadRequestIssue$outboundSchema.parse(
      documentSendDocumentBadRequestIssue,
    ),
  );
}

export function documentSendDocumentBadRequestIssueFromJSON(
  jsonString: string,
): SafeParseResult<DocumentSendDocumentBadRequestIssue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DocumentSendDocumentBadRequestIssue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentSendDocumentBadRequestIssue' from JSON`,
  );
}

/** @internal */
export const DocumentSendDocumentBadRequestError$inboundSchema: z.ZodType<
  DocumentSendDocumentBadRequestError,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  code: z.string(),
  issues: z.array(
    z.lazy(() => DocumentSendDocumentBadRequestIssue$inboundSchema),
  ).optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new DocumentSendDocumentBadRequestError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type DocumentSendDocumentBadRequestError$Outbound = {
  message: string;
  code: string;
  issues?: Array<DocumentSendDocumentBadRequestIssue$Outbound> | undefined;
};

/** @internal */
export const DocumentSendDocumentBadRequestError$outboundSchema: z.ZodType<
  DocumentSendDocumentBadRequestError$Outbound,
  z.ZodTypeDef,
  DocumentSendDocumentBadRequestError
> = z.instanceof(DocumentSendDocumentBadRequestError)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    code: z.string(),
    issues: z.array(
      z.lazy(() => DocumentSendDocumentBadRequestIssue$outboundSchema),
    ).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentSendDocumentBadRequestError$ {
  /** @deprecated use `DocumentSendDocumentBadRequestError$inboundSchema` instead. */
  export const inboundSchema =
    DocumentSendDocumentBadRequestError$inboundSchema;
  /** @deprecated use `DocumentSendDocumentBadRequestError$outboundSchema` instead. */
  export const outboundSchema =
    DocumentSendDocumentBadRequestError$outboundSchema;
  /** @deprecated use `DocumentSendDocumentBadRequestError$Outbound` instead. */
  export type Outbound = DocumentSendDocumentBadRequestError$Outbound;
}
