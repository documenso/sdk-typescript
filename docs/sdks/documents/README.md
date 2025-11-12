# Documents
(*documents*)

## Overview

### Available Operations

* [get](#get) - Get document
* [find](#find) - Find documents
* [create](#create) - Create document
* [update](#update) - Update document
* [delete](#delete) - Delete document
* [duplicate](#duplicate) - Duplicate document
* [distribute](#distribute) - Distribute document
* [redistribute](#redistribute) - Redistribute document
* [download](#download) - Download document
* [downloadDeprecated](#downloaddeprecated) - Download document (beta)
* [createV0](#createv0) - Create document

## get

Returns a document given an ID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="document-get" method="get" path="/document/{documentId}" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.documents.get({
    documentId: 6150.61,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { documentsGet } from "@documenso/sdk-typescript/funcs/documentsGet.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await documentsGet(documenso, {
    documentId: 6150.61,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentGetRequest](../../models/operations/documentgetrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentGetResponse](../../models/operations/documentgetresponse.md)\>**

### Errors

| Error Type                            | Status Code                           | Content Type                          |
| ------------------------------------- | ------------------------------------- | ------------------------------------- |
| errors.DocumentGetBadRequestError     | 400                                   | application/json                      |
| errors.DocumentGetUnauthorizedError   | 401                                   | application/json                      |
| errors.DocumentGetForbiddenError      | 403                                   | application/json                      |
| errors.DocumentGetNotFoundError       | 404                                   | application/json                      |
| errors.DocumentGetInternalServerError | 500                                   | application/json                      |
| errors.APIError                       | 4XX, 5XX                              | \*/\*                                 |

## find

Find documents based on a search criteria

### Example Usage

<!-- UsageSnippet language="typescript" operationID="document-find" method="get" path="/document" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.documents.find({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { documentsFind } from "@documenso/sdk-typescript/funcs/documentsFind.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await documentsFind(documenso, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsFind failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentFindRequest](../../models/operations/documentfindrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentFindResponse](../../models/operations/documentfindresponse.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.DocumentFindBadRequestError     | 400                                    | application/json                       |
| errors.DocumentFindUnauthorizedError   | 401                                    | application/json                       |
| errors.DocumentFindForbiddenError      | 403                                    | application/json                       |
| errors.DocumentFindNotFoundError       | 404                                    | application/json                       |
| errors.DocumentFindInternalServerError | 500                                    | application/json                       |
| errors.APIError                        | 4XX, 5XX                               | \*/\*                                  |

## create

Create a document using form data.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="document-create" method="post" path="/document/create" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";
import { openAsBlob } from "node:fs";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.documents.create({
    payload: {
      title: "<value>",
    },
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { documentsCreate } from "@documenso/sdk-typescript/funcs/documentsCreate.js";
import { openAsBlob } from "node:fs";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await documentsCreate(documenso, {
    payload: {
      title: "<value>",
    },
    file: await openAsBlob("example.file"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentCreateRequest](../../models/operations/documentcreaterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentCreateResponse](../../models/operations/documentcreateresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.DocumentCreateBadRequestError     | 400                                      | application/json                         |
| errors.DocumentCreateUnauthorizedError   | 401                                      | application/json                         |
| errors.DocumentCreateForbiddenError      | 403                                      | application/json                         |
| errors.DocumentCreateInternalServerError | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## update

Update document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="document-update" method="post" path="/document/update" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.documents.update({
    documentId: 3428.95,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { documentsUpdate } from "@documenso/sdk-typescript/funcs/documentsUpdate.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await documentsUpdate(documenso, {
    documentId: 3428.95,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentUpdateRequest](../../models/operations/documentupdaterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentUpdateResponse](../../models/operations/documentupdateresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.DocumentUpdateBadRequestError     | 400                                      | application/json                         |
| errors.DocumentUpdateUnauthorizedError   | 401                                      | application/json                         |
| errors.DocumentUpdateForbiddenError      | 403                                      | application/json                         |
| errors.DocumentUpdateInternalServerError | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## delete

Delete document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="document-delete" method="post" path="/document/delete" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.documents.delete({
    documentId: 3963.4,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { documentsDelete } from "@documenso/sdk-typescript/funcs/documentsDelete.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await documentsDelete(documenso, {
    documentId: 3963.4,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentDeleteRequest](../../models/operations/documentdeleterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentDeleteResponse](../../models/operations/documentdeleteresponse.md)\>**

### Errors

| Error Type                               | Status Code                              | Content Type                             |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| errors.DocumentDeleteBadRequestError     | 400                                      | application/json                         |
| errors.DocumentDeleteUnauthorizedError   | 401                                      | application/json                         |
| errors.DocumentDeleteForbiddenError      | 403                                      | application/json                         |
| errors.DocumentDeleteInternalServerError | 500                                      | application/json                         |
| errors.APIError                          | 4XX, 5XX                                 | \*/\*                                    |

## duplicate

Duplicate document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="document-duplicate" method="post" path="/document/duplicate" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.documents.duplicate({
    documentId: 5285.3,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { documentsDuplicate } from "@documenso/sdk-typescript/funcs/documentsDuplicate.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await documentsDuplicate(documenso, {
    documentId: 5285.3,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsDuplicate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentDuplicateRequest](../../models/operations/documentduplicaterequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentDuplicateResponse](../../models/operations/documentduplicateresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.DocumentDuplicateBadRequestError     | 400                                         | application/json                            |
| errors.DocumentDuplicateUnauthorizedError   | 401                                         | application/json                            |
| errors.DocumentDuplicateForbiddenError      | 403                                         | application/json                            |
| errors.DocumentDuplicateInternalServerError | 500                                         | application/json                            |
| errors.APIError                             | 4XX, 5XX                                    | \*/\*                                       |

## distribute

Send the document out to recipients based on your distribution method

### Example Usage

<!-- UsageSnippet language="typescript" operationID="document-distribute" method="post" path="/document/distribute" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.documents.distribute({
    documentId: 7548.74,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { documentsDistribute } from "@documenso/sdk-typescript/funcs/documentsDistribute.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await documentsDistribute(documenso, {
    documentId: 7548.74,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsDistribute failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentDistributeRequest](../../models/operations/documentdistributerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentDistributeResponse](../../models/operations/documentdistributeresponse.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.DocumentDistributeBadRequestError     | 400                                          | application/json                             |
| errors.DocumentDistributeUnauthorizedError   | 401                                          | application/json                             |
| errors.DocumentDistributeForbiddenError      | 403                                          | application/json                             |
| errors.DocumentDistributeInternalServerError | 500                                          | application/json                             |
| errors.APIError                              | 4XX, 5XX                                     | \*/\*                                        |

## redistribute

Redistribute the document to the provided recipients who have not actioned the document. Will use the distribution method set in the document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="document-redistribute" method="post" path="/document/redistribute" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.documents.redistribute({
    documentId: 9084.69,
    recipients: [
      6011.8,
      4441.56,
      4251.15,
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
import { documentsRedistribute } from "@documenso/sdk-typescript/funcs/documentsRedistribute.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await documentsRedistribute(documenso, {
    documentId: 9084.69,
    recipients: [
      6011.8,
      4441.56,
      4251.15,
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsRedistribute failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentRedistributeRequest](../../models/operations/documentredistributerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentRedistributeResponse](../../models/operations/documentredistributeresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.DocumentRedistributeBadRequestError     | 400                                            | application/json                               |
| errors.DocumentRedistributeUnauthorizedError   | 401                                            | application/json                               |
| errors.DocumentRedistributeForbiddenError      | 403                                            | application/json                               |
| errors.DocumentRedistributeInternalServerError | 500                                            | application/json                               |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |

## download

Download document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="document-download" method="get" path="/document/{documentId}/download" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.documents.download({
    documentId: 5396.97,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { documentsDownload } from "@documenso/sdk-typescript/funcs/documentsDownload.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await documentsDownload(documenso, {
    documentId: 5396.97,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsDownload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentDownloadRequest](../../models/operations/documentdownloadrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentDownloadResponse](../../models/operations/documentdownloadresponse.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.DocumentDownloadBadRequestError     | 400                                        | application/json                           |
| errors.DocumentDownloadUnauthorizedError   | 401                                        | application/json                           |
| errors.DocumentDownloadForbiddenError      | 403                                        | application/json                           |
| errors.DocumentDownloadNotFoundError       | 404                                        | application/json                           |
| errors.DocumentDownloadInternalServerError | 500                                        | application/json                           |
| errors.APIError                            | 4XX, 5XX                                   | \*/\*                                      |

## downloadDeprecated

Get a pre-signed download URL for the original or signed version of a document

### Example Usage

<!-- UsageSnippet language="typescript" operationID="document-downloadBeta" method="get" path="/document/{documentId}/download-beta" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.documents.downloadDeprecated({
    documentId: 9550.11,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { documentsDownloadDeprecated } from "@documenso/sdk-typescript/funcs/documentsDownloadDeprecated.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await documentsDownloadDeprecated(documenso, {
    documentId: 9550.11,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsDownloadDeprecated failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentDownloadBetaRequest](../../models/operations/documentdownloadbetarequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentDownloadBetaResponse](../../models/operations/documentdownloadbetaresponse.md)\>**

### Errors

| Error Type                                     | Status Code                                    | Content Type                                   |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| errors.DocumentDownloadBetaBadRequestError     | 400                                            | application/json                               |
| errors.DocumentDownloadBetaUnauthorizedError   | 401                                            | application/json                               |
| errors.DocumentDownloadBetaForbiddenError      | 403                                            | application/json                               |
| errors.DocumentDownloadBetaNotFoundError       | 404                                            | application/json                               |
| errors.DocumentDownloadBetaInternalServerError | 500                                            | application/json                               |
| errors.APIError                                | 4XX, 5XX                                       | \*/\*                                          |

## createV0

You will need to upload the PDF to the provided URL returned. Note: Once V2 API is released, this will be removed since we will allow direct uploads, instead of using an upload URL.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="document-createDocumentTemporary" method="post" path="/document/create/beta" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.documents.createV0({
    title: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { documentsCreateV0 } from "@documenso/sdk-typescript/funcs/documentsCreateV0.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await documentsCreateV0(documenso, {
    title: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("documentsCreateV0 failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DocumentCreateDocumentTemporaryRequest](../../models/operations/documentcreatedocumenttemporaryrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DocumentCreateDocumentTemporaryResponse](../../models/operations/documentcreatedocumenttemporaryresponse.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.DocumentCreateDocumentTemporaryBadRequestError     | 400                                                       | application/json                                          |
| errors.DocumentCreateDocumentTemporaryUnauthorizedError   | 401                                                       | application/json                                          |
| errors.DocumentCreateDocumentTemporaryForbiddenError      | 403                                                       | application/json                                          |
| errors.DocumentCreateDocumentTemporaryInternalServerError | 500                                                       | application/json                                          |
| errors.APIError                                           | 4XX, 5XX                                                  | \*/\*                                                     |