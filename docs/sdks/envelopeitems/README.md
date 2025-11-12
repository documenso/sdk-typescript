# EnvelopeItems
(*envelopeItems*)

## Overview

### Available Operations

* [envelopeItemDownload](#envelopeitemdownload) - Download an envelope item

## envelopeItemDownload

Download an envelope item by its ID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-item-download" method="get" path="/envelopeItem/{envelopeItemId}/download" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopeItems.envelopeItemDownload({
    envelopeItemId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { envelopeItemsEnvelopeItemDownload } from "@documenso/sdk-typescript/funcs/envelopeItemsEnvelopeItemDownload.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeItemsEnvelopeItemDownload(documenso, {
    envelopeItemId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeItemsEnvelopeItemDownload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeItemDownloadRequest](../../models/operations/envelopeitemdownloadrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvelopeItemDownloadResponse](../../models/operations/envelopeitemdownloadresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.EnvelopeItemDownloadBadRequestError     | 400                                            | application/json                               |
| errors.EnvelopeItemDownloadUnauthorizedError   | 401                                            | application/json                               |
| errors.EnvelopeItemDownloadForbiddenError      | 403                                            | application/json                               |
| errors.EnvelopeItemDownloadNotFoundError       | 404                                            | application/json                               |
| errors.EnvelopeItemDownloadInternalServerError | 500                                            | application/json                               |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |