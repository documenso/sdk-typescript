# EnvelopeFields
(*envelopeFields*)

## Overview

### Available Operations

* [envelopeFieldGet](#envelopefieldget) - Get envelope field
* [envelopeFieldCreateMany](#envelopefieldcreatemany) - Create envelope fields
* [envelopeFieldUpdateMany](#envelopefieldupdatemany) - Update envelope fields
* [envelopeFieldDelete](#envelopefielddelete) - Delete envelope field

## envelopeFieldGet

Returns an envelope field given an ID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-field-get" method="get" path="/envelope/field/{fieldId}" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopeFields.envelopeFieldGet({
    fieldId: 6981.76,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { envelopeFieldsEnvelopeFieldGet } from "@documenso/sdk-typescript/funcs/envelopeFieldsEnvelopeFieldGet.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeFieldsEnvelopeFieldGet(documenso, {
    fieldId: 6981.76,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeFieldsEnvelopeFieldGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeFieldGetRequest](../../models/operations/envelopefieldgetrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvelopeFieldGetResponse](../../models/operations/envelopefieldgetresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.EnvelopeFieldGetBadRequestError     | 400                                        | application/json                           |
| errors.EnvelopeFieldGetUnauthorizedError   | 401                                        | application/json                           |
| errors.EnvelopeFieldGetForbiddenError      | 403                                        | application/json                           |
| errors.EnvelopeFieldGetNotFoundError       | 404                                        | application/json                           |
| errors.EnvelopeFieldGetInternalServerError | 500                                        | application/json                           |
| errors.APIError                            | 4XX, 5XX                                   | \*/\*                                      |

## envelopeFieldCreateMany

Create multiple fields for an envelope

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-field-createMany" method="post" path="/envelope/field/create-many" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopeFields.envelopeFieldCreateMany({
    envelopeId: "<id>",
    data: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { envelopeFieldsEnvelopeFieldCreateMany } from "@documenso/sdk-typescript/funcs/envelopeFieldsEnvelopeFieldCreateMany.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeFieldsEnvelopeFieldCreateMany(documenso, {
    envelopeId: "<id>",
    data: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeFieldsEnvelopeFieldCreateMany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeFieldCreateManyRequest](../../models/operations/envelopefieldcreatemanyrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvelopeFieldCreateManyResponse](../../models/operations/envelopefieldcreatemanyresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.EnvelopeFieldCreateManyBadRequestError     | 400                                               | application/json                                  |
| errors.EnvelopeFieldCreateManyUnauthorizedError   | 401                                               | application/json                                  |
| errors.EnvelopeFieldCreateManyForbiddenError      | 403                                               | application/json                                  |
| errors.EnvelopeFieldCreateManyInternalServerError | 500                                               | application/json                                  |
| errors.APIError                                   | 4XX, 5XX                                          | \*/\*                                             |

## envelopeFieldUpdateMany

Update multiple envelope fields for an envelope

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-field-updateMany" method="post" path="/envelope/field/update-many" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopeFields.envelopeFieldUpdateMany({
    envelopeId: "<id>",
    data: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { envelopeFieldsEnvelopeFieldUpdateMany } from "@documenso/sdk-typescript/funcs/envelopeFieldsEnvelopeFieldUpdateMany.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeFieldsEnvelopeFieldUpdateMany(documenso, {
    envelopeId: "<id>",
    data: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeFieldsEnvelopeFieldUpdateMany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeFieldUpdateManyRequest](../../models/operations/envelopefieldupdatemanyrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvelopeFieldUpdateManyResponse](../../models/operations/envelopefieldupdatemanyresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.EnvelopeFieldUpdateManyBadRequestError     | 400                                               | application/json                                  |
| errors.EnvelopeFieldUpdateManyUnauthorizedError   | 401                                               | application/json                                  |
| errors.EnvelopeFieldUpdateManyForbiddenError      | 403                                               | application/json                                  |
| errors.EnvelopeFieldUpdateManyInternalServerError | 500                                               | application/json                                  |
| errors.APIError                                   | 4XX, 5XX                                          | \*/\*                                             |

## envelopeFieldDelete

Delete an envelope field

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-field-delete" method="post" path="/envelope/field/delete" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopeFields.envelopeFieldDelete({
    fieldId: 2481.37,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { envelopeFieldsEnvelopeFieldDelete } from "@documenso/sdk-typescript/funcs/envelopeFieldsEnvelopeFieldDelete.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeFieldsEnvelopeFieldDelete(documenso, {
    fieldId: 2481.37,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeFieldsEnvelopeFieldDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeFieldDeleteRequest](../../models/operations/envelopefielddeleterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.EnvelopeFieldDeleteBadRequestError     | 400                                           | application/json                              |
| errors.EnvelopeFieldDeleteUnauthorizedError   | 401                                           | application/json                              |
| errors.EnvelopeFieldDeleteForbiddenError      | 403                                           | application/json                              |
| errors.EnvelopeFieldDeleteInternalServerError | 500                                           | application/json                              |
| errors.APIError                               | 4XX, 5XX                                      | \*/\*                                         |