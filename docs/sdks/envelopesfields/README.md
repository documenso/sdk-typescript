# Envelopes.Fields

## Overview

### Available Operations

* [get](#get) - Get envelope field
* [createMany](#createmany) - Create envelope fields
* [updateMany](#updatemany) - Update envelope fields
* [delete](#delete) - Delete envelope field

## get

Returns an envelope field given an ID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-field-get" method="get" path="/envelope/field/{fieldId}" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopes.fields.get({
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
import { envelopesFieldsGet } from "@documenso/sdk-typescript/funcs/envelopesFieldsGet.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopesFieldsGet(documenso, {
    fieldId: 6981.76,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopesFieldsGet failed:", res.error);
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

## createMany

Create multiple fields for an envelope

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-field-createMany" method="post" path="/envelope/field/create-many" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopes.fields.createMany({
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
import { envelopesFieldsCreateMany } from "@documenso/sdk-typescript/funcs/envelopesFieldsCreateMany.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopesFieldsCreateMany(documenso, {
    envelopeId: "<id>",
    data: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopesFieldsCreateMany failed:", res.error);
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

## updateMany

Update multiple envelope fields for an envelope

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-field-updateMany" method="post" path="/envelope/field/update-many" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopes.fields.updateMany({
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
import { envelopesFieldsUpdateMany } from "@documenso/sdk-typescript/funcs/envelopesFieldsUpdateMany.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopesFieldsUpdateMany(documenso, {
    envelopeId: "<id>",
    data: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopesFieldsUpdateMany failed:", res.error);
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

## delete

Delete an envelope field

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-field-delete" method="post" path="/envelope/field/delete" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopes.fields.delete({
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
import { envelopesFieldsDelete } from "@documenso/sdk-typescript/funcs/envelopesFieldsDelete.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopesFieldsDelete(documenso, {
    fieldId: 2481.37,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopesFieldsDelete failed:", res.error);
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

**Promise\<[operations.EnvelopeFieldDeleteResponse](../../models/operations/envelopefielddeleteresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.EnvelopeFieldDeleteBadRequestError     | 400                                           | application/json                              |
| errors.EnvelopeFieldDeleteUnauthorizedError   | 401                                           | application/json                              |
| errors.EnvelopeFieldDeleteForbiddenError      | 403                                           | application/json                              |
| errors.EnvelopeFieldDeleteInternalServerError | 500                                           | application/json                              |
| errors.APIError                               | 4XX, 5XX                                      | \*/\*                                         |