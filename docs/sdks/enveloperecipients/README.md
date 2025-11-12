# EnvelopeRecipients
(*envelopeRecipients*)

## Overview

### Available Operations

* [envelopeRecipientGet](#enveloperecipientget) - Get envelope recipient
* [envelopeRecipientCreateMany](#enveloperecipientcreatemany) - Create envelope recipients
* [envelopeRecipientUpdateMany](#enveloperecipientupdatemany) - Update envelope recipients
* [envelopeRecipientDelete](#enveloperecipientdelete) - Delete envelope recipient

## envelopeRecipientGet

Returns an envelope recipient given an ID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-recipient-get" method="get" path="/envelope/recipient/{recipientId}" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopeRecipients.envelopeRecipientGet({
    recipientId: 8771.72,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { envelopeRecipientsEnvelopeRecipientGet } from "@documenso/sdk-typescript/funcs/envelopeRecipientsEnvelopeRecipientGet.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeRecipientsEnvelopeRecipientGet(documenso, {
    recipientId: 8771.72,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeRecipientsEnvelopeRecipientGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeRecipientGetRequest](../../models/operations/enveloperecipientgetrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvelopeRecipientGetResponse](../../models/operations/enveloperecipientgetresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.EnvelopeRecipientGetBadRequestError     | 400                                            | application/json                               |
| errors.EnvelopeRecipientGetUnauthorizedError   | 401                                            | application/json                               |
| errors.EnvelopeRecipientGetForbiddenError      | 403                                            | application/json                               |
| errors.EnvelopeRecipientGetNotFoundError       | 404                                            | application/json                               |
| errors.EnvelopeRecipientGetInternalServerError | 500                                            | application/json                               |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |

## envelopeRecipientCreateMany

Create multiple recipients for an envelope

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-recipient-createMany" method="post" path="/envelope/recipient/create-many" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopeRecipients.envelopeRecipientCreateMany({
    envelopeId: "<id>",
    data: [
      {
        email: "Ed16@yahoo.com",
        name: "<value>",
        role: "SIGNER",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { envelopeRecipientsEnvelopeRecipientCreateMany } from "@documenso/sdk-typescript/funcs/envelopeRecipientsEnvelopeRecipientCreateMany.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeRecipientsEnvelopeRecipientCreateMany(documenso, {
    envelopeId: "<id>",
    data: [
      {
        email: "Ed16@yahoo.com",
        name: "<value>",
        role: "SIGNER",
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeRecipientsEnvelopeRecipientCreateMany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeRecipientCreateManyRequest](../../models/operations/enveloperecipientcreatemanyrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvelopeRecipientCreateManyResponse](../../models/operations/enveloperecipientcreatemanyresponse.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.EnvelopeRecipientCreateManyBadRequestError     | 400                                                   | application/json                                      |
| errors.EnvelopeRecipientCreateManyUnauthorizedError   | 401                                                   | application/json                                      |
| errors.EnvelopeRecipientCreateManyForbiddenError      | 403                                                   | application/json                                      |
| errors.EnvelopeRecipientCreateManyInternalServerError | 500                                                   | application/json                                      |
| errors.APIError                                       | 4XX, 5XX                                              | \*/\*                                                 |

## envelopeRecipientUpdateMany

Update multiple recipients for an envelope

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-recipient-updateMany" method="post" path="/envelope/recipient/update-many" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopeRecipients.envelopeRecipientUpdateMany({
    envelopeId: "<id>",
    data: [
      {
        id: 8894.57,
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { envelopeRecipientsEnvelopeRecipientUpdateMany } from "@documenso/sdk-typescript/funcs/envelopeRecipientsEnvelopeRecipientUpdateMany.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeRecipientsEnvelopeRecipientUpdateMany(documenso, {
    envelopeId: "<id>",
    data: [
      {
        id: 8894.57,
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeRecipientsEnvelopeRecipientUpdateMany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeRecipientUpdateManyRequest](../../models/operations/enveloperecipientupdatemanyrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvelopeRecipientUpdateManyResponse](../../models/operations/enveloperecipientupdatemanyresponse.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.EnvelopeRecipientUpdateManyBadRequestError     | 400                                                   | application/json                                      |
| errors.EnvelopeRecipientUpdateManyUnauthorizedError   | 401                                                   | application/json                                      |
| errors.EnvelopeRecipientUpdateManyForbiddenError      | 403                                                   | application/json                                      |
| errors.EnvelopeRecipientUpdateManyInternalServerError | 500                                                   | application/json                                      |
| errors.APIError                                       | 4XX, 5XX                                              | \*/\*                                                 |

## envelopeRecipientDelete

Delete an envelope recipient

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-recipient-delete" method="post" path="/envelope/recipient/delete" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopeRecipients.envelopeRecipientDelete({
    recipientId: 4834.93,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { envelopeRecipientsEnvelopeRecipientDelete } from "@documenso/sdk-typescript/funcs/envelopeRecipientsEnvelopeRecipientDelete.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeRecipientsEnvelopeRecipientDelete(documenso, {
    recipientId: 4834.93,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeRecipientsEnvelopeRecipientDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeRecipientDeleteRequest](../../models/operations/enveloperecipientdeleterequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.EnvelopeRecipientDeleteBadRequestError     | 400                                               | application/json                                  |
| errors.EnvelopeRecipientDeleteUnauthorizedError   | 401                                               | application/json                                  |
| errors.EnvelopeRecipientDeleteForbiddenError      | 403                                               | application/json                                  |
| errors.EnvelopeRecipientDeleteInternalServerError | 500                                               | application/json                                  |
| errors.APIError                                   | 4XX, 5XX                                          | \*/\*                                             |