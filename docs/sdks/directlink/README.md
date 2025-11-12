# DirectLink
(*templates.directLink*)

## Overview

### Available Operations

* [create](#create) - Create direct link
* [delete](#delete) - Delete direct link
* [toggle](#toggle) - Toggle direct link

## create

Create a direct link for a template

### Example Usage

<!-- UsageSnippet language="typescript" operationID="template-createTemplateDirectLink" method="post" path="/template/direct/create" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.templates.directLink.create({
    templateId: 5094.31,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { templatesDirectLinkCreate } from "@documenso/sdk-typescript/funcs/templatesDirectLinkCreate.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await templatesDirectLinkCreate(documenso, {
    templateId: 5094.31,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("templatesDirectLinkCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TemplateCreateTemplateDirectLinkRequest](../../models/operations/templatecreatetemplatedirectlinkrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TemplateCreateTemplateDirectLinkResponse](../../models/operations/templatecreatetemplatedirectlinkresponse.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.TemplateCreateTemplateDirectLinkBadRequestError     | 400                                                        | application/json                                           |
| errors.TemplateCreateTemplateDirectLinkUnauthorizedError   | 401                                                        | application/json                                           |
| errors.TemplateCreateTemplateDirectLinkForbiddenError      | 403                                                        | application/json                                           |
| errors.TemplateCreateTemplateDirectLinkInternalServerError | 500                                                        | application/json                                           |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## delete

Delete a direct link for a template

### Example Usage

<!-- UsageSnippet language="typescript" operationID="template-deleteTemplateDirectLink" method="post" path="/template/direct/delete" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.templates.directLink.delete({
    templateId: 9950.03,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { templatesDirectLinkDelete } from "@documenso/sdk-typescript/funcs/templatesDirectLinkDelete.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await templatesDirectLinkDelete(documenso, {
    templateId: 9950.03,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("templatesDirectLinkDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TemplateDeleteTemplateDirectLinkRequest](../../models/operations/templatedeletetemplatedirectlinkrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TemplateDeleteTemplateDirectLinkResponse](../../models/operations/templatedeletetemplatedirectlinkresponse.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.TemplateDeleteTemplateDirectLinkBadRequestError     | 400                                                        | application/json                                           |
| errors.TemplateDeleteTemplateDirectLinkUnauthorizedError   | 401                                                        | application/json                                           |
| errors.TemplateDeleteTemplateDirectLinkForbiddenError      | 403                                                        | application/json                                           |
| errors.TemplateDeleteTemplateDirectLinkInternalServerError | 500                                                        | application/json                                           |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |

## toggle

Enable or disable a direct link for a template

### Example Usage

<!-- UsageSnippet language="typescript" operationID="template-toggleTemplateDirectLink" method="post" path="/template/direct/toggle" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.templates.directLink.toggle({
    templateId: 6583.54,
    enabled: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { DocumensoCore } from "@documenso/sdk-typescript/core.js";
import { templatesDirectLinkToggle } from "@documenso/sdk-typescript/funcs/templatesDirectLinkToggle.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await templatesDirectLinkToggle(documenso, {
    templateId: 6583.54,
    enabled: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("templatesDirectLinkToggle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TemplateToggleTemplateDirectLinkRequest](../../models/operations/templatetoggletemplatedirectlinkrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TemplateToggleTemplateDirectLinkResponse](../../models/operations/templatetoggletemplatedirectlinkresponse.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.TemplateToggleTemplateDirectLinkBadRequestError     | 400                                                        | application/json                                           |
| errors.TemplateToggleTemplateDirectLinkUnauthorizedError   | 401                                                        | application/json                                           |
| errors.TemplateToggleTemplateDirectLinkForbiddenError      | 403                                                        | application/json                                           |
| errors.TemplateToggleTemplateDirectLinkInternalServerError | 500                                                        | application/json                                           |
| errors.APIError                                            | 4XX, 5XX                                                   | \*/\*                                                      |