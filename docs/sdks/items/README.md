# Items
(*envelopes.items*)

## Overview

### Available Operations

* [createMany](#createmany) - Create envelope items
* [updateMany](#updatemany) - Update envelope items
* [delete](#delete) - Delete envelope item

## createMany

Create multiple envelope items for an envelope

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-item-createMany" method="post" path="/envelope/item/create-many" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopes.items.createMany({
    payload: {
      envelopeId: "<id>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { envelopesItemsCreateMany } from "@documenso/sdk-typescript/funcs/envelopesItemsCreateMany.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopesItemsCreateMany(documenso, {
    payload: {
      envelopeId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopesItemsCreateMany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeItemCreateManyRequest](../../models/operations/envelopeitemcreatemanyrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvelopeItemCreateManyResponse](../../models/operations/envelopeitemcreatemanyresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.EnvelopeItemCreateManyBadRequestError     | 400                                              | application/json                                 |
| errors.EnvelopeItemCreateManyUnauthorizedError   | 401                                              | application/json                                 |
| errors.EnvelopeItemCreateManyForbiddenError      | 403                                              | application/json                                 |
| errors.EnvelopeItemCreateManyInternalServerError | 500                                              | application/json                                 |
| errors.APIError                                  | 4XX, 5XX                                         | \*/\*                                            |

## updateMany

Update multiple envelope items for an envelope

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-item-updateMany" method="post" path="/envelope/item/update-many" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopes.items.updateMany({
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
import { envelopesItemsUpdateMany } from "@documenso/sdk-typescript/funcs/envelopesItemsUpdateMany.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopesItemsUpdateMany(documenso, {
    envelopeId: "<id>",
    data: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopesItemsUpdateMany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeItemUpdateManyRequest](../../models/operations/envelopeitemupdatemanyrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvelopeItemUpdateManyResponse](../../models/operations/envelopeitemupdatemanyresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.EnvelopeItemUpdateManyBadRequestError     | 400                                              | application/json                                 |
| errors.EnvelopeItemUpdateManyUnauthorizedError   | 401                                              | application/json                                 |
| errors.EnvelopeItemUpdateManyForbiddenError      | 403                                              | application/json                                 |
| errors.EnvelopeItemUpdateManyInternalServerError | 500                                              | application/json                                 |
| errors.APIError                                  | 4XX, 5XX                                         | \*/\*                                            |

## delete

Delete an envelope item from an envelope

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-item-delete" method="post" path="/envelope/item/delete" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopes.items.delete({
    envelopeId: "<id>",
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
import { envelopesItemsDelete } from "@documenso/sdk-typescript/funcs/envelopesItemsDelete.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopesItemsDelete(documenso, {
    envelopeId: "<id>",
    envelopeItemId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopesItemsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeItemDeleteRequest](../../models/operations/envelopeitemdeleterequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvelopeItemDeleteResponse](../../models/operations/envelopeitemdeleteresponse.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.EnvelopeItemDeleteBadRequestError     | 400                                          | application/json                             |
| errors.EnvelopeItemDeleteUnauthorizedError   | 401                                          | application/json                             |
| errors.EnvelopeItemDeleteForbiddenError      | 403                                          | application/json                             |
| errors.EnvelopeItemDeleteInternalServerError | 500                                          | application/json                             |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |