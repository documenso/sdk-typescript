# Template

## Overview

### Available Operations

* [templateGetMany](#templategetmany) - Get multiple templates
* [templateCreateTemplateTemporary](#templatecreatetemplatetemporary) - Create template

## templateGetMany

Retrieve multiple templates by their IDs

### Example Usage

<!-- UsageSnippet language="typescript" operationID="template-getMany" method="post" path="/template/get-many" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.template.templateGetMany({
    templateIds: [
      618.65,
      1418.73,
      1001.18,
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
import { templateTemplateGetMany } from "@documenso/sdk-typescript/funcs/templateTemplateGetMany.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await templateTemplateGetMany(documenso, {
    templateIds: [
      618.65,
      1418.73,
      1001.18,
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("templateTemplateGetMany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TemplateGetManyRequest](../../models/operations/templategetmanyrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TemplateGetManyResponse](../../models/operations/templategetmanyresponse.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.TemplateGetManyBadRequestError     | 400                                       | application/json                          |
| errors.TemplateGetManyUnauthorizedError   | 401                                       | application/json                          |
| errors.TemplateGetManyForbiddenError      | 403                                       | application/json                          |
| errors.TemplateGetManyInternalServerError | 500                                       | application/json                          |
| errors.APIError                           | 4XX, 5XX                                  | \*/\*                                     |

## templateCreateTemplateTemporary

You will need to upload the PDF to the provided URL returned. Note: Once V2 API is released, this will be removed since we will allow direct uploads, instead of using an upload URL.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="template-createTemplateTemporary" method="post" path="/template/create/beta" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.template.templateCreateTemplateTemporary({
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
import { templateTemplateCreateTemplateTemporary } from "@documenso/sdk-typescript/funcs/templateTemplateCreateTemplateTemporary.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await templateTemplateCreateTemplateTemporary(documenso, {
    title: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("templateTemplateCreateTemplateTemporary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TemplateCreateTemplateTemporaryRequest](../../models/operations/templatecreatetemplatetemporaryrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TemplateCreateTemplateTemporaryResponse](../../models/operations/templatecreatetemplatetemporaryresponse.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.TemplateCreateTemplateTemporaryBadRequestError     | 400                                                       | application/json                                          |
| errors.TemplateCreateTemplateTemporaryUnauthorizedError   | 401                                                       | application/json                                          |
| errors.TemplateCreateTemplateTemporaryForbiddenError      | 403                                                       | application/json                                          |
| errors.TemplateCreateTemplateTemporaryInternalServerError | 500                                                       | application/json                                          |
| errors.APIError                                           | 4XX, 5XX                                                  | \*/\*                                                     |