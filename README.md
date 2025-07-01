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
yarn add @documenso/sdk-typescript zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
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


### [documents](docs/sdks/documents/README.md)

* [update](docs/sdks/documents/README.md#update) - Update document
* [find](docs/sdks/documents/README.md#find) - Find documents
* [get](docs/sdks/documents/README.md#get) - Get document
* [createV0](docs/sdks/documents/README.md#createv0) - Create document
* [delete](docs/sdks/documents/README.md#delete) - Delete document
* [distribute](docs/sdks/documents/README.md#distribute) - Distribute document
* [redistribute](docs/sdks/documents/README.md#redistribute) - Redistribute document
* [duplicate](docs/sdks/documents/README.md#duplicate) - Duplicate document

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
  const result = await documenso.documents.update({
    documentId: 9701.92,
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
  const result = await documenso.documents.update({
    documentId: 9701.92,
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
    const result = await documenso.documents.update({
      documentId: 9701.92,
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
      if (error instanceof errors.DocumentUpdateDocumentBadRequestError) {
        console.log(error.data$.message); // string
        console.log(error.data$.code); // string
        console.log(error.data$.issues); // DocumentUpdateDocumentBadRequestIssue[]
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`DocumensoError`](./src/models/errors/documensoerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (100)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`DocumensoError`](./src/models/errors/documensoerror.ts)**:
* [`DocumentUpdateDocumentBadRequestError`](docs/models/errors/documentupdatedocumentbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`DocumentFindDocumentsBadRequestError`](docs/models/errors/documentfinddocumentsbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`DocumentGetDocumentWithDetailsByIdBadRequestError`](docs/models/errors/documentgetdocumentwithdetailsbyidbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`DocumentCreateDocumentTemporaryBadRequestError`](docs/models/errors/documentcreatedocumenttemporarybadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`DocumentDeleteDocumentBadRequestError`](docs/models/errors/documentdeletedocumentbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`DocumentSendDocumentBadRequestError`](docs/models/errors/documentsenddocumentbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`DocumentResendDocumentBadRequestError`](docs/models/errors/documentresenddocumentbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`DocumentDuplicateDocumentBadRequestError`](docs/models/errors/documentduplicatedocumentbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`TemplateFindTemplatesBadRequestError`](docs/models/errors/templatefindtemplatesbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`TemplateGetTemplateByIdBadRequestError`](docs/models/errors/templategettemplatebyidbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`TemplateUpdateTemplateBadRequestError`](docs/models/errors/templateupdatetemplatebadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`TemplateDuplicateTemplateBadRequestError`](docs/models/errors/templateduplicatetemplatebadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`TemplateDeleteTemplateBadRequestError`](docs/models/errors/templatedeletetemplatebadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`TemplateCreateDocumentFromTemplateBadRequestError`](docs/models/errors/templatecreatedocumentfromtemplatebadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`EmbeddingPresignCreateEmbeddingPresignTokenBadRequestError`](docs/models/errors/embeddingpresigncreateembeddingpresigntokenbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`EmbeddingPresignVerifyEmbeddingPresignTokenBadRequestError`](docs/models/errors/embeddingpresignverifyembeddingpresigntokenbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`FieldGetDocumentFieldBadRequestError`](docs/models/errors/fieldgetdocumentfieldbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`FieldCreateDocumentFieldBadRequestError`](docs/models/errors/fieldcreatedocumentfieldbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`FieldCreateDocumentFieldsBadRequestError`](docs/models/errors/fieldcreatedocumentfieldsbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`FieldUpdateDocumentFieldBadRequestError`](docs/models/errors/fieldupdatedocumentfieldbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`FieldUpdateDocumentFieldsBadRequestError`](docs/models/errors/fieldupdatedocumentfieldsbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`FieldDeleteDocumentFieldBadRequestError`](docs/models/errors/fielddeletedocumentfieldbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`RecipientGetDocumentRecipientBadRequestError`](docs/models/errors/recipientgetdocumentrecipientbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`RecipientCreateDocumentRecipientBadRequestError`](docs/models/errors/recipientcreatedocumentrecipientbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`RecipientCreateDocumentRecipientsBadRequestError`](docs/models/errors/recipientcreatedocumentrecipientsbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`RecipientUpdateDocumentRecipientBadRequestError`](docs/models/errors/recipientupdatedocumentrecipientbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`RecipientUpdateDocumentRecipientsBadRequestError`](docs/models/errors/recipientupdatedocumentrecipientsbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`RecipientDeleteDocumentRecipientBadRequestError`](docs/models/errors/recipientdeletedocumentrecipientbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`FieldCreateTemplateFieldBadRequestError`](docs/models/errors/fieldcreatetemplatefieldbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`FieldGetTemplateFieldBadRequestError`](docs/models/errors/fieldgettemplatefieldbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`FieldCreateTemplateFieldsBadRequestError`](docs/models/errors/fieldcreatetemplatefieldsbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`FieldUpdateTemplateFieldBadRequestError`](docs/models/errors/fieldupdatetemplatefieldbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`FieldUpdateTemplateFieldsBadRequestError`](docs/models/errors/fieldupdatetemplatefieldsbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`FieldDeleteTemplateFieldBadRequestError`](docs/models/errors/fielddeletetemplatefieldbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`RecipientGetTemplateRecipientBadRequestError`](docs/models/errors/recipientgettemplaterecipientbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`RecipientCreateTemplateRecipientBadRequestError`](docs/models/errors/recipientcreatetemplaterecipientbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`RecipientCreateTemplateRecipientsBadRequestError`](docs/models/errors/recipientcreatetemplaterecipientsbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`RecipientUpdateTemplateRecipientBadRequestError`](docs/models/errors/recipientupdatetemplaterecipientbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`RecipientUpdateTemplateRecipientsBadRequestError`](docs/models/errors/recipientupdatetemplaterecipientsbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`RecipientDeleteTemplateRecipientBadRequestError`](docs/models/errors/recipientdeletetemplaterecipientbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`TemplateCreateTemplateDirectLinkBadRequestError`](docs/models/errors/templatecreatetemplatedirectlinkbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`TemplateDeleteTemplateDirectLinkBadRequestError`](docs/models/errors/templatedeletetemplatedirectlinkbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`TemplateToggleTemplateDirectLinkBadRequestError`](docs/models/errors/templatetoggletemplatedirectlinkbadrequesterror.md): Invalid input data. Status code `400`. Applicable to 1 of 43 methods.*
* [`DocumentFindDocumentsNotFoundError`](docs/models/errors/documentfinddocumentsnotfounderror.md): Not found. Status code `404`. Applicable to 1 of 43 methods.*
* [`DocumentGetDocumentWithDetailsByIdNotFoundError`](docs/models/errors/documentgetdocumentwithdetailsbyidnotfounderror.md): Not found. Status code `404`. Applicable to 1 of 43 methods.*
* [`TemplateFindTemplatesNotFoundError`](docs/models/errors/templatefindtemplatesnotfounderror.md): Not found. Status code `404`. Applicable to 1 of 43 methods.*
* [`TemplateGetTemplateByIdNotFoundError`](docs/models/errors/templategettemplatebyidnotfounderror.md): Not found. Status code `404`. Applicable to 1 of 43 methods.*
* [`FieldGetDocumentFieldNotFoundError`](docs/models/errors/fieldgetdocumentfieldnotfounderror.md): Not found. Status code `404`. Applicable to 1 of 43 methods.*
* [`RecipientGetDocumentRecipientNotFoundError`](docs/models/errors/recipientgetdocumentrecipientnotfounderror.md): Not found. Status code `404`. Applicable to 1 of 43 methods.*
* [`FieldGetTemplateFieldNotFoundError`](docs/models/errors/fieldgettemplatefieldnotfounderror.md): Not found. Status code `404`. Applicable to 1 of 43 methods.*
* [`RecipientGetTemplateRecipientNotFoundError`](docs/models/errors/recipientgettemplaterecipientnotfounderror.md): Not found. Status code `404`. Applicable to 1 of 43 methods.*
* [`DocumentUpdateDocumentInternalServerError`](docs/models/errors/documentupdatedocumentinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`DocumentFindDocumentsInternalServerError`](docs/models/errors/documentfinddocumentsinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`DocumentGetDocumentWithDetailsByIdInternalServerError`](docs/models/errors/documentgetdocumentwithdetailsbyidinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`DocumentCreateDocumentTemporaryInternalServerError`](docs/models/errors/documentcreatedocumenttemporaryinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`DocumentDeleteDocumentInternalServerError`](docs/models/errors/documentdeletedocumentinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`DocumentSendDocumentInternalServerError`](docs/models/errors/documentsenddocumentinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`DocumentResendDocumentInternalServerError`](docs/models/errors/documentresenddocumentinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`DocumentDuplicateDocumentInternalServerError`](docs/models/errors/documentduplicatedocumentinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`TemplateFindTemplatesInternalServerError`](docs/models/errors/templatefindtemplatesinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`TemplateGetTemplateByIdInternalServerError`](docs/models/errors/templategettemplatebyidinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`TemplateUpdateTemplateInternalServerError`](docs/models/errors/templateupdatetemplateinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`TemplateDuplicateTemplateInternalServerError`](docs/models/errors/templateduplicatetemplateinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`TemplateDeleteTemplateInternalServerError`](docs/models/errors/templatedeletetemplateinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`TemplateCreateDocumentFromTemplateInternalServerError`](docs/models/errors/templatecreatedocumentfromtemplateinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`EmbeddingPresignCreateEmbeddingPresignTokenInternalServerError`](docs/models/errors/embeddingpresigncreateembeddingpresigntokeninternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`EmbeddingPresignVerifyEmbeddingPresignTokenInternalServerError`](docs/models/errors/embeddingpresignverifyembeddingpresigntokeninternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`FieldGetDocumentFieldInternalServerError`](docs/models/errors/fieldgetdocumentfieldinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`FieldCreateDocumentFieldInternalServerError`](docs/models/errors/fieldcreatedocumentfieldinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`FieldCreateDocumentFieldsInternalServerError`](docs/models/errors/fieldcreatedocumentfieldsinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`FieldUpdateDocumentFieldInternalServerError`](docs/models/errors/fieldupdatedocumentfieldinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`FieldUpdateDocumentFieldsInternalServerError`](docs/models/errors/fieldupdatedocumentfieldsinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`FieldDeleteDocumentFieldInternalServerError`](docs/models/errors/fielddeletedocumentfieldinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`RecipientGetDocumentRecipientInternalServerError`](docs/models/errors/recipientgetdocumentrecipientinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`RecipientCreateDocumentRecipientInternalServerError`](docs/models/errors/recipientcreatedocumentrecipientinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`RecipientCreateDocumentRecipientsInternalServerError`](docs/models/errors/recipientcreatedocumentrecipientsinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`RecipientUpdateDocumentRecipientInternalServerError`](docs/models/errors/recipientupdatedocumentrecipientinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`RecipientUpdateDocumentRecipientsInternalServerError`](docs/models/errors/recipientupdatedocumentrecipientsinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`RecipientDeleteDocumentRecipientInternalServerError`](docs/models/errors/recipientdeletedocumentrecipientinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`FieldCreateTemplateFieldInternalServerError`](docs/models/errors/fieldcreatetemplatefieldinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`FieldGetTemplateFieldInternalServerError`](docs/models/errors/fieldgettemplatefieldinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`FieldCreateTemplateFieldsInternalServerError`](docs/models/errors/fieldcreatetemplatefieldsinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`FieldUpdateTemplateFieldInternalServerError`](docs/models/errors/fieldupdatetemplatefieldinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`FieldUpdateTemplateFieldsInternalServerError`](docs/models/errors/fieldupdatetemplatefieldsinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`FieldDeleteTemplateFieldInternalServerError`](docs/models/errors/fielddeletetemplatefieldinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`RecipientGetTemplateRecipientInternalServerError`](docs/models/errors/recipientgettemplaterecipientinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`RecipientCreateTemplateRecipientInternalServerError`](docs/models/errors/recipientcreatetemplaterecipientinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`RecipientCreateTemplateRecipientsInternalServerError`](docs/models/errors/recipientcreatetemplaterecipientsinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`RecipientUpdateTemplateRecipientInternalServerError`](docs/models/errors/recipientupdatetemplaterecipientinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`RecipientUpdateTemplateRecipientsInternalServerError`](docs/models/errors/recipientupdatetemplaterecipientsinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`RecipientDeleteTemplateRecipientInternalServerError`](docs/models/errors/recipientdeletetemplaterecipientinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`TemplateCreateTemplateDirectLinkInternalServerError`](docs/models/errors/templatecreatetemplatedirectlinkinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`TemplateDeleteTemplateDirectLinkInternalServerError`](docs/models/errors/templatedeletetemplatedirectlinkinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
* [`TemplateToggleTemplateDirectLinkInternalServerError`](docs/models/errors/templatetoggletemplatedirectlinkinternalservererror.md): Internal server error. Status code `500`. Applicable to 1 of 43 methods.*
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
  const result = await documenso.documents.update({
    documentId: 9701.92,
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
