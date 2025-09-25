<img src="https://github.com/documenso/documenso/assets/13398220/a643571f-0239-46a6-a73e-6bef38d1228b" alt="Documenso Logo">

&nbsp;

<div align="center">
    <a href="https://www.speakeasy.com/?utm_source=@documenso/sdk-typescript&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

## Documenso TypeScript SDK

A type-safe SDK for seamless integration with Documenso v2 API, providing first-class TypeScript support.

This SDK offers a strongly-typed interface to interact with Documenso's API, enabling you to:
- Handle document signing workflows with full type safety
- Leverage autocomplete in your IDE
- Catch potential errors at compile time

The full Documenso API can be viewed [here](https://openapi.documenso.com/), which includes TypeScript examples.

## ⚠️ Warning

Documenso v2 API and SDKs are currently in beta. There may be to breaking changes.

To keep updated, please follow the discussions here:
- [Feedback](https://github.com/documenso/documenso/discussions/1611)
- [Breaking change alerts](https://github.com/documenso/documenso/discussions/1612)

<!-- No Summary [summary] -->

## Table of Contents
<!-- $toc-max-depth=2 -->
* [Overview](#documenso-typescript-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [Document creation example](#document-creation-example)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- No Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @documenso/sdk-typescript
```

### PNPM

```bash
pnpm add @documenso/sdk-typescript
```

### Bun

```bash
bun add @documenso/sdk-typescript
```

### Yarn

```bash
yarn add @documenso/sdk-typescript
```



### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Documenso": {
      "command": "npx",
      "args": [
        "-y", "--package", "@documenso/sdk-typescript",
        "--",
        "mcp", "start",
        "--api-key", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Documenso": {
      "command": "npx",
      "args": [
        "-y", "--package", "@documenso/sdk-typescript",
        "--",
        "mcp", "start",
        "--api-key", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @documenso/sdk-typescript -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

## Authentication

To use the SDK, you will need a Documenso API key which can be created [here](https://docs.documenso.com/developers/public-api/authentication#creating-an-api-key
).

```ts
const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});
```

## Document creation example

Currently creating a document involves two steps:

1. Create the document
2. Upload the PDF

This is a temporary measure, in the near future prior to the full release we will merge these two tasks into one request. 

Here is a full example of the document creation process which you can copy and run.

Note that the function is temporarily called `createV0`, which will be replaced by `create` once we resolve the 2 step workaround.

```typescript
import { Documenso } from "@documenso/sdk-typescript";
import fs from "fs";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function uploadFileToPresignedUrl(filePath: string, uploadUrl: string) {
  const fileBuffer = await fs.promises.readFile(filePath);

  // Make PUT request to pre-signed URL
  const response = await fetch(uploadUrl, {
    method: "PUT",
    body: fileBuffer,
    headers: {
      "Content-Type": "application/octet-stream",
    },
  });

  if (!response.ok) {
    throw new Error(`Upload failed with status: ${response.status}`);
  }
}

const main = async () => {
  const createDocumentResponse = await documenso.documents.createV0({
    title: "Document title",
    recipients: [
      {
        email: "example@documenso.com",
        name: "Example Doe",
        role: "SIGNER",
        fields: [
          {
            type: "SIGNATURE",
            pageNumber: 1,
            pageX: 10,
            pageY: 10,
            width: 10,
            height: 10,
          },
          {
            type: "INITIALS",
            pageNumber: 1,
            pageX: 20,
            pageY: 20,
            width: 10,
            height: 10,
          },
        ],
      },
      {
        email: "admin@documenso.com",
        name: "Admin Doe",
        role: "APPROVER",
        fields: [
          {
            type: "SIGNATURE",
            pageNumber: 1,
            pageX: 10,
            pageY: 50,
            width: 10,
            height: 10,
          },
        ],
      },
    ],
    meta: {
      timezone: "Australia/Melbourne",
      dateFormat: "MM/dd/yyyy hh:mm a",
      language: "de",
      subject: "Email subject",
      message: "Email message",
      emailSettings: {
        recipientRemoved: false,
      },
    },
  });

  const { document, uploadUrl } = createDocumentResponse;

  // Upload the PDF you want attached to the document.
  // Replace demo.pdf with your file to upload relative to this file.
  await uploadFileToPresignedUrl("./demo.pdf", uploadUrl);

  return document;
};

main()
```
<!-- No SDK Example Usage [usage] -->
<!-- No Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [document](docs/sdks/document/README.md)

* [documentDownload](docs/sdks/document/README.md#documentdownload) - Download document (beta)

### [documents](docs/sdks/documents/README.md)

* [get](docs/sdks/documents/README.md#get) - Get document
* [find](docs/sdks/documents/README.md#find) - Find documents
* [update](docs/sdks/documents/README.md#update) - Update document
* [delete](docs/sdks/documents/README.md#delete) - Delete document
* [duplicate](docs/sdks/documents/README.md#duplicate) - Duplicate document
* [distribute](docs/sdks/documents/README.md#distribute) - Distribute document
* [redistribute](docs/sdks/documents/README.md#redistribute) - Redistribute document
* [createV0](docs/sdks/documents/README.md#createv0) - Create document

#### [documents.fields](docs/sdks/documentsfields/README.md)

* [get](docs/sdks/documentsfields/README.md#get) - Get document field
* [create](docs/sdks/documentsfields/README.md#create) - Create document field
* [createMany](docs/sdks/documentsfields/README.md#createmany) - Create document fields
* [update](docs/sdks/documentsfields/README.md#update) - Update document field
* [updateMany](docs/sdks/documentsfields/README.md#updatemany) - Update document fields
* [delete](docs/sdks/documentsfields/README.md#delete) - Delete document field

#### [documents.recipients](docs/sdks/documentsrecipients/README.md)

* [get](docs/sdks/documentsrecipients/README.md#get) - Get document recipient
* [create](docs/sdks/documentsrecipients/README.md#create) - Create document recipient
* [createMany](docs/sdks/documentsrecipients/README.md#createmany) - Create document recipients
* [update](docs/sdks/documentsrecipients/README.md#update) - Update document recipient
* [updateMany](docs/sdks/documentsrecipients/README.md#updatemany) - Update document recipients
* [delete](docs/sdks/documentsrecipients/README.md#delete) - Delete document recipient

### [embedding](docs/sdks/embedding/README.md)

* [embeddingPresignCreateEmbeddingPresignToken](docs/sdks/embedding/README.md#embeddingpresigncreateembeddingpresigntoken) - Create embedding presign token
* [embeddingPresignVerifyEmbeddingPresignToken](docs/sdks/embedding/README.md#embeddingpresignverifyembeddingpresigntoken) - Verify embedding presign token

### [template](docs/sdks/template/README.md)

* [templateCreateTemplateTemporary](docs/sdks/template/README.md#templatecreatetemplatetemporary) - Create template

### [templates](docs/sdks/templates/README.md)

* [find](docs/sdks/templates/README.md#find) - Find templates
* [get](docs/sdks/templates/README.md#get) - Get template
* [update](docs/sdks/templates/README.md#update) - Update template
* [duplicate](docs/sdks/templates/README.md#duplicate) - Duplicate template
* [delete](docs/sdks/templates/README.md#delete) - Delete template
* [use](docs/sdks/templates/README.md#use) - Use template

#### [templates.directLink](docs/sdks/directlink/README.md)

* [create](docs/sdks/directlink/README.md#create) - Create direct link
* [delete](docs/sdks/directlink/README.md#delete) - Delete direct link
* [toggle](docs/sdks/directlink/README.md#toggle) - Toggle direct link

#### [templates.fields](docs/sdks/templatesfields/README.md)

* [create](docs/sdks/templatesfields/README.md#create) - Create template field
* [get](docs/sdks/templatesfields/README.md#get) - Get template field
* [createMany](docs/sdks/templatesfields/README.md#createmany) - Create template fields
* [update](docs/sdks/templatesfields/README.md#update) - Update template field
* [updateMany](docs/sdks/templatesfields/README.md#updatemany) - Update template fields
* [delete](docs/sdks/templatesfields/README.md#delete) - Delete template field

#### [templates.recipients](docs/sdks/templatesrecipients/README.md)

* [get](docs/sdks/templatesrecipients/README.md#get) - Get template recipient
* [create](docs/sdks/templatesrecipients/README.md#create) - Create template recipient
* [createMany](docs/sdks/templatesrecipients/README.md#createmany) - Create template recipients
* [update](docs/sdks/templatesrecipients/README.md#update) - Update template recipient
* [updateMany](docs/sdks/templatesrecipients/README.md#updatemany) - Update template recipients
* [delete](docs/sdks/templatesrecipients/README.md#delete) - Delete template recipient

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- No Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.documents.get({
    documentId: 6150.61,
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`DocumensoError`](./src/models/errors/documensoerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Documenso } from "@documenso/sdk-typescript";
import * as errors from "@documenso/sdk-typescript/models/errors";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  try {
    const result = await documenso.documents.get({
      documentId: 6150.61,
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.DocumensoError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.DocumentGetBadRequestError) {
        console.log(error.data$.message); // string
        console.log(error.data$.code); // string
        console.log(error.data$.issues); // DocumentGetBadRequestIssue[]
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`DocumensoError`](./src/models/errors/documensoerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (105)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`DocumensoError`](./src/models/errors/documensoerror.ts)**:
* [`DocumentGetBadRequestError`](./src/models/errors/documentgetbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`DocumentFindBadRequestError`](./src/models/errors/documentfindbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`DocumentUpdateBadRequestError`](./src/models/errors/documentupdatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`DocumentDeleteBadRequestError`](./src/models/errors/documentdeletebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`DocumentDuplicateBadRequestError`](./src/models/errors/documentduplicatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`DocumentDistributeBadRequestError`](./src/models/errors/documentdistributebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`DocumentRedistributeBadRequestError`](./src/models/errors/documentredistributebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`DocumentCreateDocumentTemporaryBadRequestError`](./src/models/errors/documentcreatedocumenttemporarybadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`DocumentDownloadBadRequestError`](./src/models/errors/documentdownloadbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`TemplateFindTemplatesBadRequestError`](./src/models/errors/templatefindtemplatesbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`TemplateGetTemplateByIdBadRequestError`](./src/models/errors/templategettemplatebyidbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`TemplateUpdateTemplateBadRequestError`](./src/models/errors/templateupdatetemplatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`TemplateDuplicateTemplateBadRequestError`](./src/models/errors/templateduplicatetemplatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`TemplateDeleteTemplateBadRequestError`](./src/models/errors/templatedeletetemplatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`TemplateCreateDocumentFromTemplateBadRequestError`](./src/models/errors/templatecreatedocumentfromtemplatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`TemplateCreateTemplateTemporaryBadRequestError`](./src/models/errors/templatecreatetemplatetemporarybadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`EmbeddingPresignCreateEmbeddingPresignTokenBadRequestError`](./src/models/errors/embeddingpresigncreateembeddingpresigntokenbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`EmbeddingPresignVerifyEmbeddingPresignTokenBadRequestError`](./src/models/errors/embeddingpresignverifyembeddingpresigntokenbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`FieldGetDocumentFieldBadRequestError`](./src/models/errors/fieldgetdocumentfieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`FieldCreateDocumentFieldBadRequestError`](./src/models/errors/fieldcreatedocumentfieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`FieldCreateDocumentFieldsBadRequestError`](./src/models/errors/fieldcreatedocumentfieldsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`FieldUpdateDocumentFieldBadRequestError`](./src/models/errors/fieldupdatedocumentfieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`FieldUpdateDocumentFieldsBadRequestError`](./src/models/errors/fieldupdatedocumentfieldsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`FieldDeleteDocumentFieldBadRequestError`](./src/models/errors/fielddeletedocumentfieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`RecipientGetDocumentRecipientBadRequestError`](./src/models/errors/recipientgetdocumentrecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`RecipientCreateDocumentRecipientBadRequestError`](./src/models/errors/recipientcreatedocumentrecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`RecipientCreateDocumentRecipientsBadRequestError`](./src/models/errors/recipientcreatedocumentrecipientsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`RecipientUpdateDocumentRecipientBadRequestError`](./src/models/errors/recipientupdatedocumentrecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`RecipientUpdateDocumentRecipientsBadRequestError`](./src/models/errors/recipientupdatedocumentrecipientsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`RecipientDeleteDocumentRecipientBadRequestError`](./src/models/errors/recipientdeletedocumentrecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`FieldCreateTemplateFieldBadRequestError`](./src/models/errors/fieldcreatetemplatefieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`FieldGetTemplateFieldBadRequestError`](./src/models/errors/fieldgettemplatefieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`FieldCreateTemplateFieldsBadRequestError`](./src/models/errors/fieldcreatetemplatefieldsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`FieldUpdateTemplateFieldBadRequestError`](./src/models/errors/fieldupdatetemplatefieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`FieldUpdateTemplateFieldsBadRequestError`](./src/models/errors/fieldupdatetemplatefieldsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`FieldDeleteTemplateFieldBadRequestError`](./src/models/errors/fielddeletetemplatefieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`RecipientGetTemplateRecipientBadRequestError`](./src/models/errors/recipientgettemplaterecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`RecipientCreateTemplateRecipientBadRequestError`](./src/models/errors/recipientcreatetemplaterecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`RecipientCreateTemplateRecipientsBadRequestError`](./src/models/errors/recipientcreatetemplaterecipientsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`RecipientUpdateTemplateRecipientBadRequestError`](./src/models/errors/recipientupdatetemplaterecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`RecipientUpdateTemplateRecipientsBadRequestError`](./src/models/errors/recipientupdatetemplaterecipientsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`RecipientDeleteTemplateRecipientBadRequestError`](./src/models/errors/recipientdeletetemplaterecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`TemplateCreateTemplateDirectLinkBadRequestError`](./src/models/errors/templatecreatetemplatedirectlinkbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`TemplateDeleteTemplateDirectLinkBadRequestError`](./src/models/errors/templatedeletetemplatedirectlinkbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`TemplateToggleTemplateDirectLinkBadRequestError`](./src/models/errors/templatetoggletemplatedirectlinkbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 45 methods.*
* [`DocumentGetNotFoundError`](./src/models/errors/documentgetnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 45 methods.*
* [`DocumentFindNotFoundError`](./src/models/errors/documentfindnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 45 methods.*
* [`DocumentDownloadNotFoundError`](./src/models/errors/documentdownloadnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 45 methods.*
* [`TemplateFindTemplatesNotFoundError`](./src/models/errors/templatefindtemplatesnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 45 methods.*
* [`TemplateGetTemplateByIdNotFoundError`](./src/models/errors/templategettemplatebyidnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 45 methods.*
* [`FieldGetDocumentFieldNotFoundError`](./src/models/errors/fieldgetdocumentfieldnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 45 methods.*
* [`RecipientGetDocumentRecipientNotFoundError`](./src/models/errors/recipientgetdocumentrecipientnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 45 methods.*
* [`FieldGetTemplateFieldNotFoundError`](./src/models/errors/fieldgettemplatefieldnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 45 methods.*
* [`RecipientGetTemplateRecipientNotFoundError`](./src/models/errors/recipientgettemplaterecipientnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 45 methods.*
* [`DocumentGetInternalServerError`](./src/models/errors/documentgetinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`DocumentFindInternalServerError`](./src/models/errors/documentfindinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`DocumentUpdateInternalServerError`](./src/models/errors/documentupdateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`DocumentDeleteInternalServerError`](./src/models/errors/documentdeleteinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`DocumentDuplicateInternalServerError`](./src/models/errors/documentduplicateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`DocumentDistributeInternalServerError`](./src/models/errors/documentdistributeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`DocumentRedistributeInternalServerError`](./src/models/errors/documentredistributeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`DocumentCreateDocumentTemporaryInternalServerError`](./src/models/errors/documentcreatedocumenttemporaryinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`DocumentDownloadInternalServerError`](./src/models/errors/documentdownloadinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`TemplateFindTemplatesInternalServerError`](./src/models/errors/templatefindtemplatesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`TemplateGetTemplateByIdInternalServerError`](./src/models/errors/templategettemplatebyidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`TemplateUpdateTemplateInternalServerError`](./src/models/errors/templateupdatetemplateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`TemplateDuplicateTemplateInternalServerError`](./src/models/errors/templateduplicatetemplateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`TemplateDeleteTemplateInternalServerError`](./src/models/errors/templatedeletetemplateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`TemplateCreateDocumentFromTemplateInternalServerError`](./src/models/errors/templatecreatedocumentfromtemplateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`TemplateCreateTemplateTemporaryInternalServerError`](./src/models/errors/templatecreatetemplatetemporaryinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`EmbeddingPresignCreateEmbeddingPresignTokenInternalServerError`](./src/models/errors/embeddingpresigncreateembeddingpresigntokeninternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`EmbeddingPresignVerifyEmbeddingPresignTokenInternalServerError`](./src/models/errors/embeddingpresignverifyembeddingpresigntokeninternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`FieldGetDocumentFieldInternalServerError`](./src/models/errors/fieldgetdocumentfieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`FieldCreateDocumentFieldInternalServerError`](./src/models/errors/fieldcreatedocumentfieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`FieldCreateDocumentFieldsInternalServerError`](./src/models/errors/fieldcreatedocumentfieldsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`FieldUpdateDocumentFieldInternalServerError`](./src/models/errors/fieldupdatedocumentfieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`FieldUpdateDocumentFieldsInternalServerError`](./src/models/errors/fieldupdatedocumentfieldsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`FieldDeleteDocumentFieldInternalServerError`](./src/models/errors/fielddeletedocumentfieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`RecipientGetDocumentRecipientInternalServerError`](./src/models/errors/recipientgetdocumentrecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`RecipientCreateDocumentRecipientInternalServerError`](./src/models/errors/recipientcreatedocumentrecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`RecipientCreateDocumentRecipientsInternalServerError`](./src/models/errors/recipientcreatedocumentrecipientsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`RecipientUpdateDocumentRecipientInternalServerError`](./src/models/errors/recipientupdatedocumentrecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`RecipientUpdateDocumentRecipientsInternalServerError`](./src/models/errors/recipientupdatedocumentrecipientsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`RecipientDeleteDocumentRecipientInternalServerError`](./src/models/errors/recipientdeletedocumentrecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`FieldCreateTemplateFieldInternalServerError`](./src/models/errors/fieldcreatetemplatefieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`FieldGetTemplateFieldInternalServerError`](./src/models/errors/fieldgettemplatefieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`FieldCreateTemplateFieldsInternalServerError`](./src/models/errors/fieldcreatetemplatefieldsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`FieldUpdateTemplateFieldInternalServerError`](./src/models/errors/fieldupdatetemplatefieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`FieldUpdateTemplateFieldsInternalServerError`](./src/models/errors/fieldupdatetemplatefieldsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`FieldDeleteTemplateFieldInternalServerError`](./src/models/errors/fielddeletetemplatefieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`RecipientGetTemplateRecipientInternalServerError`](./src/models/errors/recipientgettemplaterecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`RecipientCreateTemplateRecipientInternalServerError`](./src/models/errors/recipientcreatetemplaterecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`RecipientCreateTemplateRecipientsInternalServerError`](./src/models/errors/recipientcreatetemplaterecipientsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`RecipientUpdateTemplateRecipientInternalServerError`](./src/models/errors/recipientupdatetemplaterecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`RecipientUpdateTemplateRecipientsInternalServerError`](./src/models/errors/recipientupdatetemplaterecipientsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`RecipientDeleteTemplateRecipientInternalServerError`](./src/models/errors/recipientdeletetemplaterecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`TemplateCreateTemplateDirectLinkInternalServerError`](./src/models/errors/templatecreatetemplatedirectlinkinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`TemplateDeleteTemplateDirectLinkInternalServerError`](./src/models/errors/templatedeletetemplatedirectlinkinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`TemplateToggleTemplateDirectLinkInternalServerError`](./src/models/errors/templatetoggletemplatedirectlinkinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 45 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  serverURL: "https://app.documenso.com/api/v2-beta",
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
<!-- End Server Selection [server] -->

<!-- No Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Documenso } from "@documenso/sdk-typescript";

const sdk = new Documenso({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `DOCUMENSO_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@documenso/sdk-typescript&utm_campaign=typescript)
