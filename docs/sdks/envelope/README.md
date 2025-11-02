# Envelope
(*envelope*)

## Overview

### Available Operations

* [envelopeAttachmentFind](#envelopeattachmentfind) - Find attachments
* [envelopeAttachmentCreate](#envelopeattachmentcreate) - Create attachment
* [envelopeAttachmentUpdate](#envelopeattachmentupdate) - Update attachment
* [envelopeAttachmentDelete](#envelopeattachmentdelete) - Delete attachment

## envelopeAttachmentFind

Find all attachments for an envelope

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-attachment-find" method="get" path="/envelope/attachment" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelope.envelopeAttachmentFind({
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
import { envelopeEnvelopeAttachmentFind } from "@documenso/sdk-typescript/funcs/envelopeEnvelopeAttachmentFind.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeEnvelopeAttachmentFind(documenso, {
    envelopeId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeEnvelopeAttachmentFind failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeAttachmentFindRequest](../../models/operations/envelopeattachmentfindrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvelopeAttachmentFindResponse](../../models/operations/envelopeattachmentfindresponse.md)\>**

### Errors

| Error Type                                       | Status Code                                      | Content Type                                     |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| errors.EnvelopeAttachmentFindBadRequestError     | 400                                              | application/json                                 |
| errors.EnvelopeAttachmentFindNotFoundError       | 404                                              | application/json                                 |
| errors.EnvelopeAttachmentFindInternalServerError | 500                                              | application/json                                 |
| errors.APIError                                  | 4XX, 5XX                                         | \*/\*                                            |

## envelopeAttachmentCreate

Create a new attachment for an envelope

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-attachment-create" method="post" path="/envelope/attachment/create" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelope.envelopeAttachmentCreate({
    envelopeId: "<id>",
    data: {
      label: "<value>",
      data: "https://lustrous-skeleton.info",
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
import { envelopeEnvelopeAttachmentCreate } from "@documenso/sdk-typescript/funcs/envelopeEnvelopeAttachmentCreate.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeEnvelopeAttachmentCreate(documenso, {
    envelopeId: "<id>",
    data: {
      label: "<value>",
      data: "https://lustrous-skeleton.info",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeEnvelopeAttachmentCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeAttachmentCreateRequest](../../models/operations/envelopeattachmentcreaterequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.EnvelopeAttachmentCreateBadRequestError     | 400                                                | application/json                                   |
| errors.EnvelopeAttachmentCreateInternalServerError | 500                                                | application/json                                   |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |

## envelopeAttachmentUpdate

Update an existing attachment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-attachment-update" method="post" path="/envelope/attachment/update" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelope.envelopeAttachmentUpdate({
    id: "<id>",
    data: {
      label: "<value>",
      data: "https://tough-premier.biz",
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
import { envelopeEnvelopeAttachmentUpdate } from "@documenso/sdk-typescript/funcs/envelopeEnvelopeAttachmentUpdate.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeEnvelopeAttachmentUpdate(documenso, {
    id: "<id>",
    data: {
      label: "<value>",
      data: "https://tough-premier.biz",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeEnvelopeAttachmentUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeAttachmentUpdateRequest](../../models/operations/envelopeattachmentupdaterequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.EnvelopeAttachmentUpdateBadRequestError     | 400                                                | application/json                                   |
| errors.EnvelopeAttachmentUpdateInternalServerError | 500                                                | application/json                                   |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |

## envelopeAttachmentDelete

Delete an attachment from an envelope

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-attachment-delete" method="post" path="/envelope/attachment/delete" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelope.envelopeAttachmentDelete({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { envelopeEnvelopeAttachmentDelete } from "@documenso/sdk-typescript/funcs/envelopeEnvelopeAttachmentDelete.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeEnvelopeAttachmentDelete(documenso, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeEnvelopeAttachmentDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeAttachmentDeleteRequest](../../models/operations/envelopeattachmentdeleterequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.EnvelopeAttachmentDeleteBadRequestError     | 400                                                | application/json                                   |
| errors.EnvelopeAttachmentDeleteInternalServerError | 500                                                | application/json                                   |
| errors.APIError                                    | 4XX, 5XX                                           | \*/\*                                              |