# Embedding
(*embedding*)

## Overview

### Available Operations

* [embeddingPresignCreateEmbeddingPresignToken](#embeddingpresigncreateembeddingpresigntoken) - Create embedding presign token
* [embeddingPresignVerifyEmbeddingPresignToken](#embeddingpresignverifyembeddingpresigntoken) - Verify embedding presign token

## embeddingPresignCreateEmbeddingPresignToken

Creates a presign token for embedding operations with configurable expiration time

### Example Usage

```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.embedding.embeddingPresignCreateEmbeddingPresignToken({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { embeddingEmbeddingPresignCreateEmbeddingPresignToken } from "@documenso/sdk-typescript/funcs/embeddingEmbeddingPresignCreateEmbeddingPresignToken.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await embeddingEmbeddingPresignCreateEmbeddingPresignToken(documenso, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("embeddingEmbeddingPresignCreateEmbeddingPresignToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EmbeddingPresignCreateEmbeddingPresignTokenRequest](../../models/operations/embeddingpresigncreateembeddingpresigntokenrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EmbeddingPresignCreateEmbeddingPresignTokenResponse](../../models/operations/embeddingpresigncreateembeddingpresigntokenresponse.md)\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.EmbeddingPresignCreateEmbeddingPresignTokenBadRequestError     | 400                                                                   | application/json                                                      |
| errors.EmbeddingPresignCreateEmbeddingPresignTokenInternalServerError | 500                                                                   | application/json                                                      |
| errors.APIError                                                       | 4XX, 5XX                                                              | \*/\*                                                                 |

## embeddingPresignVerifyEmbeddingPresignToken

Verifies a presign token for embedding operations and returns the associated API token

### Example Usage

```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.embedding.embeddingPresignVerifyEmbeddingPresignToken({
    token: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { embeddingEmbeddingPresignVerifyEmbeddingPresignToken } from "@documenso/sdk-typescript/funcs/embeddingEmbeddingPresignVerifyEmbeddingPresignToken.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await embeddingEmbeddingPresignVerifyEmbeddingPresignToken(documenso, {
    token: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("embeddingEmbeddingPresignVerifyEmbeddingPresignToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EmbeddingPresignVerifyEmbeddingPresignTokenRequest](../../models/operations/embeddingpresignverifyembeddingpresigntokenrequest.md)                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EmbeddingPresignVerifyEmbeddingPresignTokenResponse](../../models/operations/embeddingpresignverifyembeddingpresigntokenresponse.md)\>**

### Errors

| Error Type                                                            | Status Code                                                           | Content Type                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| errors.EmbeddingPresignVerifyEmbeddingPresignTokenBadRequestError     | 400                                                                   | application/json                                                      |
| errors.EmbeddingPresignVerifyEmbeddingPresignTokenInternalServerError | 500                                                                   | application/json                                                      |
| errors.APIError                                                       | 4XX, 5XX                                                              | \*/\*                                                                 |