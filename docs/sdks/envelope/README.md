# Envelope

## Overview

### Available Operations

* [envelopeAuditLogFind](#envelopeauditlogfind) - Get envelope audit logs

## envelopeAuditLogFind

Find audit logs based on a search criteria

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-auditLog-find" method="get" path="/envelope/{envelopeId}/audit-log" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelope.envelopeAuditLogFind({
    envelopeId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { envelopeEnvelopeAuditLogFind } from "@documenso/sdk-typescript/funcs/envelopeEnvelopeAuditLogFind.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeEnvelopeAuditLogFind(documenso, {
    envelopeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeEnvelopeAuditLogFind failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeAuditLogFindRequest](../../models/operations/envelopeauditlogfindrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvelopeAuditLogFindResponse](../../models/operations/envelopeauditlogfindresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.EnvelopeAuditLogFindBadRequestError     | 400                                            | application/json                               |
| errors.EnvelopeAuditLogFindUnauthorizedError   | 401                                            | application/json                               |
| errors.EnvelopeAuditLogFindForbiddenError      | 403                                            | application/json                               |
| errors.EnvelopeAuditLogFindNotFoundError       | 404                                            | application/json                               |
| errors.EnvelopeAuditLogFindInternalServerError | 500                                            | application/json                               |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |