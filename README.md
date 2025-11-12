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

* [documentCreate](docs/sdks/document/README.md#documentcreate) - Create document
* [documentDownloadBeta](docs/sdks/document/README.md#documentdownloadbeta) - Download document (beta)
* [documentDownload](docs/sdks/document/README.md#documentdownload) - Download document
* [documentCreateDocumentFormData](docs/sdks/document/README.md#documentcreatedocumentformdata) - Create document
* [documentAttachmentCreate](docs/sdks/document/README.md#documentattachmentcreate) - Create attachment
* [documentAttachmentUpdate](docs/sdks/document/README.md#documentattachmentupdate) - Update attachment
* [documentAttachmentDelete](docs/sdks/document/README.md#documentattachmentdelete) - Delete attachment
* [documentAttachmentFind](docs/sdks/document/README.md#documentattachmentfind) - Find attachments

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

### [envelope](docs/sdks/envelope/README.md)

* [envelopeGet](docs/sdks/envelope/README.md#envelopeget) - Get envelope
* [envelopeCreate](docs/sdks/envelope/README.md#envelopecreate) - Create envelope
* [envelopeUse](docs/sdks/envelope/README.md#envelopeuse) - Use envelope
* [envelopeUpdate](docs/sdks/envelope/README.md#envelopeupdate) - Update envelope
* [envelopeDelete](docs/sdks/envelope/README.md#envelopedelete) - Delete envelope
* [envelopeDuplicate](docs/sdks/envelope/README.md#envelopeduplicate) - Duplicate envelope
* [envelopeDistribute](docs/sdks/envelope/README.md#envelopedistribute) - Distribute envelope
* [envelopeRedistribute](docs/sdks/envelope/README.md#enveloperedistribute) - Redistribute envelope

### [envelopeAttachments](docs/sdks/envelopeattachments/README.md)

* [envelopeAttachmentFind](docs/sdks/envelopeattachments/README.md#envelopeattachmentfind) - Find attachments
* [envelopeAttachmentCreate](docs/sdks/envelopeattachments/README.md#envelopeattachmentcreate) - Create attachment
* [envelopeAttachmentUpdate](docs/sdks/envelopeattachments/README.md#envelopeattachmentupdate) - Update attachment
* [envelopeAttachmentDelete](docs/sdks/envelopeattachments/README.md#envelopeattachmentdelete) - Delete attachment

### [envelopeFields](docs/sdks/envelopefields/README.md)

* [envelopeFieldGet](docs/sdks/envelopefields/README.md#envelopefieldget) - Get envelope field
* [envelopeFieldCreateMany](docs/sdks/envelopefields/README.md#envelopefieldcreatemany) - Create envelope fields
* [envelopeFieldUpdateMany](docs/sdks/envelopefields/README.md#envelopefieldupdatemany) - Update envelope fields
* [envelopeFieldDelete](docs/sdks/envelopefields/README.md#envelopefielddelete) - Delete envelope field

### [envelopeItems](docs/sdks/envelopeitems/README.md)

* [envelopeItemCreateMany](docs/sdks/envelopeitems/README.md#envelopeitemcreatemany) - Create envelope items
* [envelopeItemUpdateMany](docs/sdks/envelopeitems/README.md#envelopeitemupdatemany) - Update envelope items
* [envelopeItemDelete](docs/sdks/envelopeitems/README.md#envelopeitemdelete) - Delete envelope item

### [envelopeRecipients](docs/sdks/enveloperecipients/README.md)

* [envelopeRecipientGet](docs/sdks/enveloperecipients/README.md#enveloperecipientget) - Get envelope recipient
* [envelopeRecipientCreateMany](docs/sdks/enveloperecipients/README.md#enveloperecipientcreatemany) - Create envelope recipients
* [envelopeRecipientUpdateMany](docs/sdks/enveloperecipients/README.md#enveloperecipientupdatemany) - Update envelope recipients
* [envelopeRecipientDelete](docs/sdks/enveloperecipients/README.md#enveloperecipientdelete) - Delete envelope recipient

### [folder](docs/sdks/folder/README.md)

* [folderFindFolders](docs/sdks/folder/README.md#folderfindfolders) - Find folders
* [folderCreateFolder](docs/sdks/folder/README.md#foldercreatefolder) - Create new folder
* [folderUpdateFolder](docs/sdks/folder/README.md#folderupdatefolder) - Update folder
* [folderDeleteFolder](docs/sdks/folder/README.md#folderdeletefolder) - Delete folder

### [template](docs/sdks/template/README.md)

* [templateCreateTemplate](docs/sdks/template/README.md#templatecreatetemplate) - Create template
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
  const result = await documenso.envelopeAttachments.envelopeAttachmentFind({
    envelopeId: "<id>",
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
  const result = await documenso.envelopeAttachments.envelopeAttachmentFind({
    envelopeId: "<id>",
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
    const result = await documenso.envelopeAttachments.envelopeAttachmentFind({
      envelopeId: "<id>",
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
      if (error instanceof errors.EnvelopeAttachmentFindBadRequestError) {
        console.log(error.data$.message); // string
        console.log(error.data$.code); // string
        console.log(error.data$.issues); // EnvelopeAttachmentFindBadRequestIssue[]
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`DocumensoError`](./src/models/errors/documensoerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (342)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`DocumensoError`](./src/models/errors/documensoerror.ts)**:
* [`EnvelopeAttachmentFindBadRequestError`](./src/models/errors/envelopeattachmentfindbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentCreateBadRequestError`](./src/models/errors/envelopeattachmentcreatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentUpdateBadRequestError`](./src/models/errors/envelopeattachmentupdatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentDeleteBadRequestError`](./src/models/errors/envelopeattachmentdeletebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeItemCreateManyBadRequestError`](./src/models/errors/envelopeitemcreatemanybadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeItemUpdateManyBadRequestError`](./src/models/errors/envelopeitemupdatemanybadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeItemDeleteBadRequestError`](./src/models/errors/envelopeitemdeletebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientGetBadRequestError`](./src/models/errors/enveloperecipientgetbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientCreateManyBadRequestError`](./src/models/errors/enveloperecipientcreatemanybadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientUpdateManyBadRequestError`](./src/models/errors/enveloperecipientupdatemanybadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientDeleteBadRequestError`](./src/models/errors/enveloperecipientdeletebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldGetBadRequestError`](./src/models/errors/envelopefieldgetbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldCreateManyBadRequestError`](./src/models/errors/envelopefieldcreatemanybadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldUpdateManyBadRequestError`](./src/models/errors/envelopefieldupdatemanybadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldDeleteBadRequestError`](./src/models/errors/envelopefielddeletebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeGetBadRequestError`](./src/models/errors/envelopegetbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeCreateBadRequestError`](./src/models/errors/envelopecreatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeUseBadRequestError`](./src/models/errors/envelopeusebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeUpdateBadRequestError`](./src/models/errors/envelopeupdatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeDeleteBadRequestError`](./src/models/errors/envelopedeletebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeDuplicateBadRequestError`](./src/models/errors/envelopeduplicatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeDistributeBadRequestError`](./src/models/errors/envelopedistributebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeRedistributeBadRequestError`](./src/models/errors/enveloperedistributebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentGetBadRequestError`](./src/models/errors/documentgetbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentFindBadRequestError`](./src/models/errors/documentfindbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentUpdateBadRequestError`](./src/models/errors/documentupdatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentDeleteBadRequestError`](./src/models/errors/documentdeletebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentDuplicateBadRequestError`](./src/models/errors/documentduplicatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentDistributeBadRequestError`](./src/models/errors/documentdistributebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentRedistributeBadRequestError`](./src/models/errors/documentredistributebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentCreateDocumentTemporaryBadRequestError`](./src/models/errors/documentcreatedocumenttemporarybadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentCreateBadRequestError`](./src/models/errors/documentcreatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentDownloadBetaBadRequestError`](./src/models/errors/documentdownloadbetabadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentDownloadBadRequestError`](./src/models/errors/documentdownloadbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentCreateDocumentFormDataBadRequestError`](./src/models/errors/documentcreatedocumentformdatabadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentCreateBadRequestError`](./src/models/errors/documentattachmentcreatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentUpdateBadRequestError`](./src/models/errors/documentattachmentupdatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentDeleteBadRequestError`](./src/models/errors/documentattachmentdeletebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentFindBadRequestError`](./src/models/errors/documentattachmentfindbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`TemplateFindTemplatesBadRequestError`](./src/models/errors/templatefindtemplatesbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`TemplateGetTemplateByIdBadRequestError`](./src/models/errors/templategettemplatebyidbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`TemplateUpdateTemplateBadRequestError`](./src/models/errors/templateupdatetemplatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`TemplateDuplicateTemplateBadRequestError`](./src/models/errors/templateduplicatetemplatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`TemplateDeleteTemplateBadRequestError`](./src/models/errors/templatedeletetemplatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`TemplateCreateDocumentFromTemplateBadRequestError`](./src/models/errors/templatecreatedocumentfromtemplatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FolderFindFoldersBadRequestError`](./src/models/errors/folderfindfoldersbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FolderCreateFolderBadRequestError`](./src/models/errors/foldercreatefolderbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FolderUpdateFolderBadRequestError`](./src/models/errors/folderupdatefolderbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FolderDeleteFolderBadRequestError`](./src/models/errors/folderdeletefolderbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`TemplateCreateTemplateBadRequestError`](./src/models/errors/templatecreatetemplatebadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`TemplateCreateTemplateTemporaryBadRequestError`](./src/models/errors/templatecreatetemplatetemporarybadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EmbeddingPresignCreateEmbeddingPresignTokenBadRequestError`](./src/models/errors/embeddingpresigncreateembeddingpresigntokenbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EmbeddingPresignVerifyEmbeddingPresignTokenBadRequestError`](./src/models/errors/embeddingpresignverifyembeddingpresigntokenbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FieldGetDocumentFieldBadRequestError`](./src/models/errors/fieldgetdocumentfieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FieldCreateDocumentFieldBadRequestError`](./src/models/errors/fieldcreatedocumentfieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FieldCreateDocumentFieldsBadRequestError`](./src/models/errors/fieldcreatedocumentfieldsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FieldUpdateDocumentFieldBadRequestError`](./src/models/errors/fieldupdatedocumentfieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FieldUpdateDocumentFieldsBadRequestError`](./src/models/errors/fieldupdatedocumentfieldsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FieldDeleteDocumentFieldBadRequestError`](./src/models/errors/fielddeletedocumentfieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`RecipientGetDocumentRecipientBadRequestError`](./src/models/errors/recipientgetdocumentrecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`RecipientCreateDocumentRecipientBadRequestError`](./src/models/errors/recipientcreatedocumentrecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`RecipientCreateDocumentRecipientsBadRequestError`](./src/models/errors/recipientcreatedocumentrecipientsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateDocumentRecipientBadRequestError`](./src/models/errors/recipientupdatedocumentrecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateDocumentRecipientsBadRequestError`](./src/models/errors/recipientupdatedocumentrecipientsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`RecipientDeleteDocumentRecipientBadRequestError`](./src/models/errors/recipientdeletedocumentrecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FieldCreateTemplateFieldBadRequestError`](./src/models/errors/fieldcreatetemplatefieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FieldGetTemplateFieldBadRequestError`](./src/models/errors/fieldgettemplatefieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FieldCreateTemplateFieldsBadRequestError`](./src/models/errors/fieldcreatetemplatefieldsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FieldUpdateTemplateFieldBadRequestError`](./src/models/errors/fieldupdatetemplatefieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FieldUpdateTemplateFieldsBadRequestError`](./src/models/errors/fieldupdatetemplatefieldsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`FieldDeleteTemplateFieldBadRequestError`](./src/models/errors/fielddeletetemplatefieldbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`RecipientGetTemplateRecipientBadRequestError`](./src/models/errors/recipientgettemplaterecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`RecipientCreateTemplateRecipientBadRequestError`](./src/models/errors/recipientcreatetemplaterecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`RecipientCreateTemplateRecipientsBadRequestError`](./src/models/errors/recipientcreatetemplaterecipientsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateTemplateRecipientBadRequestError`](./src/models/errors/recipientupdatetemplaterecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateTemplateRecipientsBadRequestError`](./src/models/errors/recipientupdatetemplaterecipientsbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`RecipientDeleteTemplateRecipientBadRequestError`](./src/models/errors/recipientdeletetemplaterecipientbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`TemplateCreateTemplateDirectLinkBadRequestError`](./src/models/errors/templatecreatetemplatedirectlinkbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`TemplateDeleteTemplateDirectLinkBadRequestError`](./src/models/errors/templatedeletetemplatedirectlinkbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`TemplateToggleTemplateDirectLinkBadRequestError`](./src/models/errors/templatetoggletemplatedirectlinkbadrequesterror.ts): Invalid input data. Status code `400`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentFindUnauthorizedError`](./src/models/errors/envelopeattachmentfindunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentCreateUnauthorizedError`](./src/models/errors/envelopeattachmentcreateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentUpdateUnauthorizedError`](./src/models/errors/envelopeattachmentupdateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentDeleteUnauthorizedError`](./src/models/errors/envelopeattachmentdeleteunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeItemCreateManyUnauthorizedError`](./src/models/errors/envelopeitemcreatemanyunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeItemUpdateManyUnauthorizedError`](./src/models/errors/envelopeitemupdatemanyunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeItemDeleteUnauthorizedError`](./src/models/errors/envelopeitemdeleteunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientGetUnauthorizedError`](./src/models/errors/enveloperecipientgetunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientCreateManyUnauthorizedError`](./src/models/errors/enveloperecipientcreatemanyunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientUpdateManyUnauthorizedError`](./src/models/errors/enveloperecipientupdatemanyunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientDeleteUnauthorizedError`](./src/models/errors/enveloperecipientdeleteunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldGetUnauthorizedError`](./src/models/errors/envelopefieldgetunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldCreateManyUnauthorizedError`](./src/models/errors/envelopefieldcreatemanyunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldUpdateManyUnauthorizedError`](./src/models/errors/envelopefieldupdatemanyunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldDeleteUnauthorizedError`](./src/models/errors/envelopefielddeleteunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeGetUnauthorizedError`](./src/models/errors/envelopegetunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeCreateUnauthorizedError`](./src/models/errors/envelopecreateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeUseUnauthorizedError`](./src/models/errors/envelopeuseunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeUpdateUnauthorizedError`](./src/models/errors/envelopeupdateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeDeleteUnauthorizedError`](./src/models/errors/envelopedeleteunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeDuplicateUnauthorizedError`](./src/models/errors/envelopeduplicateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeDistributeUnauthorizedError`](./src/models/errors/envelopedistributeunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeRedistributeUnauthorizedError`](./src/models/errors/enveloperedistributeunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentGetUnauthorizedError`](./src/models/errors/documentgetunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentFindUnauthorizedError`](./src/models/errors/documentfindunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentUpdateUnauthorizedError`](./src/models/errors/documentupdateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentDeleteUnauthorizedError`](./src/models/errors/documentdeleteunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentDuplicateUnauthorizedError`](./src/models/errors/documentduplicateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentDistributeUnauthorizedError`](./src/models/errors/documentdistributeunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentRedistributeUnauthorizedError`](./src/models/errors/documentredistributeunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentCreateDocumentTemporaryUnauthorizedError`](./src/models/errors/documentcreatedocumenttemporaryunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentCreateUnauthorizedError`](./src/models/errors/documentcreateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentDownloadBetaUnauthorizedError`](./src/models/errors/documentdownloadbetaunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentDownloadUnauthorizedError`](./src/models/errors/documentdownloadunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentCreateDocumentFormDataUnauthorizedError`](./src/models/errors/documentcreatedocumentformdataunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentCreateUnauthorizedError`](./src/models/errors/documentattachmentcreateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentUpdateUnauthorizedError`](./src/models/errors/documentattachmentupdateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentDeleteUnauthorizedError`](./src/models/errors/documentattachmentdeleteunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentFindUnauthorizedError`](./src/models/errors/documentattachmentfindunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`TemplateFindTemplatesUnauthorizedError`](./src/models/errors/templatefindtemplatesunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`TemplateGetTemplateByIdUnauthorizedError`](./src/models/errors/templategettemplatebyidunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`TemplateUpdateTemplateUnauthorizedError`](./src/models/errors/templateupdatetemplateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`TemplateDuplicateTemplateUnauthorizedError`](./src/models/errors/templateduplicatetemplateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`TemplateDeleteTemplateUnauthorizedError`](./src/models/errors/templatedeletetemplateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`TemplateCreateDocumentFromTemplateUnauthorizedError`](./src/models/errors/templatecreatedocumentfromtemplateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FolderFindFoldersUnauthorizedError`](./src/models/errors/folderfindfoldersunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FolderCreateFolderUnauthorizedError`](./src/models/errors/foldercreatefolderunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FolderUpdateFolderUnauthorizedError`](./src/models/errors/folderupdatefolderunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FolderDeleteFolderUnauthorizedError`](./src/models/errors/folderdeletefolderunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`TemplateCreateTemplateUnauthorizedError`](./src/models/errors/templatecreatetemplateunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`TemplateCreateTemplateTemporaryUnauthorizedError`](./src/models/errors/templatecreatetemplatetemporaryunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EmbeddingPresignCreateEmbeddingPresignTokenUnauthorizedError`](./src/models/errors/embeddingpresigncreateembeddingpresigntokenunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EmbeddingPresignVerifyEmbeddingPresignTokenUnauthorizedError`](./src/models/errors/embeddingpresignverifyembeddingpresigntokenunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FieldGetDocumentFieldUnauthorizedError`](./src/models/errors/fieldgetdocumentfieldunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FieldCreateDocumentFieldUnauthorizedError`](./src/models/errors/fieldcreatedocumentfieldunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FieldCreateDocumentFieldsUnauthorizedError`](./src/models/errors/fieldcreatedocumentfieldsunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FieldUpdateDocumentFieldUnauthorizedError`](./src/models/errors/fieldupdatedocumentfieldunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FieldUpdateDocumentFieldsUnauthorizedError`](./src/models/errors/fieldupdatedocumentfieldsunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FieldDeleteDocumentFieldUnauthorizedError`](./src/models/errors/fielddeletedocumentfieldunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`RecipientGetDocumentRecipientUnauthorizedError`](./src/models/errors/recipientgetdocumentrecipientunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`RecipientCreateDocumentRecipientUnauthorizedError`](./src/models/errors/recipientcreatedocumentrecipientunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`RecipientCreateDocumentRecipientsUnauthorizedError`](./src/models/errors/recipientcreatedocumentrecipientsunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateDocumentRecipientUnauthorizedError`](./src/models/errors/recipientupdatedocumentrecipientunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateDocumentRecipientsUnauthorizedError`](./src/models/errors/recipientupdatedocumentrecipientsunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`RecipientDeleteDocumentRecipientUnauthorizedError`](./src/models/errors/recipientdeletedocumentrecipientunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FieldCreateTemplateFieldUnauthorizedError`](./src/models/errors/fieldcreatetemplatefieldunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FieldGetTemplateFieldUnauthorizedError`](./src/models/errors/fieldgettemplatefieldunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FieldCreateTemplateFieldsUnauthorizedError`](./src/models/errors/fieldcreatetemplatefieldsunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FieldUpdateTemplateFieldUnauthorizedError`](./src/models/errors/fieldupdatetemplatefieldunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FieldUpdateTemplateFieldsUnauthorizedError`](./src/models/errors/fieldupdatetemplatefieldsunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`FieldDeleteTemplateFieldUnauthorizedError`](./src/models/errors/fielddeletetemplatefieldunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`RecipientGetTemplateRecipientUnauthorizedError`](./src/models/errors/recipientgettemplaterecipientunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`RecipientCreateTemplateRecipientUnauthorizedError`](./src/models/errors/recipientcreatetemplaterecipientunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`RecipientCreateTemplateRecipientsUnauthorizedError`](./src/models/errors/recipientcreatetemplaterecipientsunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateTemplateRecipientUnauthorizedError`](./src/models/errors/recipientupdatetemplaterecipientunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateTemplateRecipientsUnauthorizedError`](./src/models/errors/recipientupdatetemplaterecipientsunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`RecipientDeleteTemplateRecipientUnauthorizedError`](./src/models/errors/recipientdeletetemplaterecipientunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`TemplateCreateTemplateDirectLinkUnauthorizedError`](./src/models/errors/templatecreatetemplatedirectlinkunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`TemplateDeleteTemplateDirectLinkUnauthorizedError`](./src/models/errors/templatedeletetemplatedirectlinkunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`TemplateToggleTemplateDirectLinkUnauthorizedError`](./src/models/errors/templatetoggletemplatedirectlinkunauthorizederror.ts): Authorization not provided. Status code `401`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentFindForbiddenError`](./src/models/errors/envelopeattachmentfindforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentCreateForbiddenError`](./src/models/errors/envelopeattachmentcreateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentUpdateForbiddenError`](./src/models/errors/envelopeattachmentupdateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentDeleteForbiddenError`](./src/models/errors/envelopeattachmentdeleteforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeItemCreateManyForbiddenError`](./src/models/errors/envelopeitemcreatemanyforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeItemUpdateManyForbiddenError`](./src/models/errors/envelopeitemupdatemanyforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeItemDeleteForbiddenError`](./src/models/errors/envelopeitemdeleteforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientGetForbiddenError`](./src/models/errors/enveloperecipientgetforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientCreateManyForbiddenError`](./src/models/errors/enveloperecipientcreatemanyforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientUpdateManyForbiddenError`](./src/models/errors/enveloperecipientupdatemanyforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientDeleteForbiddenError`](./src/models/errors/enveloperecipientdeleteforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldGetForbiddenError`](./src/models/errors/envelopefieldgetforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldCreateManyForbiddenError`](./src/models/errors/envelopefieldcreatemanyforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldUpdateManyForbiddenError`](./src/models/errors/envelopefieldupdatemanyforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldDeleteForbiddenError`](./src/models/errors/envelopefielddeleteforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeGetForbiddenError`](./src/models/errors/envelopegetforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeCreateForbiddenError`](./src/models/errors/envelopecreateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeUseForbiddenError`](./src/models/errors/envelopeuseforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeUpdateForbiddenError`](./src/models/errors/envelopeupdateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeDeleteForbiddenError`](./src/models/errors/envelopedeleteforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeDuplicateForbiddenError`](./src/models/errors/envelopeduplicateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeDistributeForbiddenError`](./src/models/errors/envelopedistributeforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeRedistributeForbiddenError`](./src/models/errors/enveloperedistributeforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentGetForbiddenError`](./src/models/errors/documentgetforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentFindForbiddenError`](./src/models/errors/documentfindforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentUpdateForbiddenError`](./src/models/errors/documentupdateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentDeleteForbiddenError`](./src/models/errors/documentdeleteforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentDuplicateForbiddenError`](./src/models/errors/documentduplicateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentDistributeForbiddenError`](./src/models/errors/documentdistributeforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentRedistributeForbiddenError`](./src/models/errors/documentredistributeforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentCreateDocumentTemporaryForbiddenError`](./src/models/errors/documentcreatedocumenttemporaryforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentCreateForbiddenError`](./src/models/errors/documentcreateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentDownloadBetaForbiddenError`](./src/models/errors/documentdownloadbetaforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentDownloadForbiddenError`](./src/models/errors/documentdownloadforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentCreateDocumentFormDataForbiddenError`](./src/models/errors/documentcreatedocumentformdataforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentCreateForbiddenError`](./src/models/errors/documentattachmentcreateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentUpdateForbiddenError`](./src/models/errors/documentattachmentupdateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentDeleteForbiddenError`](./src/models/errors/documentattachmentdeleteforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentFindForbiddenError`](./src/models/errors/documentattachmentfindforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`TemplateFindTemplatesForbiddenError`](./src/models/errors/templatefindtemplatesforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`TemplateGetTemplateByIdForbiddenError`](./src/models/errors/templategettemplatebyidforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`TemplateUpdateTemplateForbiddenError`](./src/models/errors/templateupdatetemplateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`TemplateDuplicateTemplateForbiddenError`](./src/models/errors/templateduplicatetemplateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`TemplateDeleteTemplateForbiddenError`](./src/models/errors/templatedeletetemplateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`TemplateCreateDocumentFromTemplateForbiddenError`](./src/models/errors/templatecreatedocumentfromtemplateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FolderFindFoldersForbiddenError`](./src/models/errors/folderfindfoldersforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FolderCreateFolderForbiddenError`](./src/models/errors/foldercreatefolderforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FolderUpdateFolderForbiddenError`](./src/models/errors/folderupdatefolderforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FolderDeleteFolderForbiddenError`](./src/models/errors/folderdeletefolderforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`TemplateCreateTemplateForbiddenError`](./src/models/errors/templatecreatetemplateforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`TemplateCreateTemplateTemporaryForbiddenError`](./src/models/errors/templatecreatetemplatetemporaryforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EmbeddingPresignCreateEmbeddingPresignTokenForbiddenError`](./src/models/errors/embeddingpresigncreateembeddingpresigntokenforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EmbeddingPresignVerifyEmbeddingPresignTokenForbiddenError`](./src/models/errors/embeddingpresignverifyembeddingpresigntokenforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FieldGetDocumentFieldForbiddenError`](./src/models/errors/fieldgetdocumentfieldforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FieldCreateDocumentFieldForbiddenError`](./src/models/errors/fieldcreatedocumentfieldforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FieldCreateDocumentFieldsForbiddenError`](./src/models/errors/fieldcreatedocumentfieldsforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FieldUpdateDocumentFieldForbiddenError`](./src/models/errors/fieldupdatedocumentfieldforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FieldUpdateDocumentFieldsForbiddenError`](./src/models/errors/fieldupdatedocumentfieldsforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FieldDeleteDocumentFieldForbiddenError`](./src/models/errors/fielddeletedocumentfieldforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`RecipientGetDocumentRecipientForbiddenError`](./src/models/errors/recipientgetdocumentrecipientforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`RecipientCreateDocumentRecipientForbiddenError`](./src/models/errors/recipientcreatedocumentrecipientforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`RecipientCreateDocumentRecipientsForbiddenError`](./src/models/errors/recipientcreatedocumentrecipientsforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateDocumentRecipientForbiddenError`](./src/models/errors/recipientupdatedocumentrecipientforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateDocumentRecipientsForbiddenError`](./src/models/errors/recipientupdatedocumentrecipientsforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`RecipientDeleteDocumentRecipientForbiddenError`](./src/models/errors/recipientdeletedocumentrecipientforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FieldCreateTemplateFieldForbiddenError`](./src/models/errors/fieldcreatetemplatefieldforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FieldGetTemplateFieldForbiddenError`](./src/models/errors/fieldgettemplatefieldforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FieldCreateTemplateFieldsForbiddenError`](./src/models/errors/fieldcreatetemplatefieldsforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FieldUpdateTemplateFieldForbiddenError`](./src/models/errors/fieldupdatetemplatefieldforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FieldUpdateTemplateFieldsForbiddenError`](./src/models/errors/fieldupdatetemplatefieldsforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`FieldDeleteTemplateFieldForbiddenError`](./src/models/errors/fielddeletetemplatefieldforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`RecipientGetTemplateRecipientForbiddenError`](./src/models/errors/recipientgettemplaterecipientforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`RecipientCreateTemplateRecipientForbiddenError`](./src/models/errors/recipientcreatetemplaterecipientforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`RecipientCreateTemplateRecipientsForbiddenError`](./src/models/errors/recipientcreatetemplaterecipientsforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateTemplateRecipientForbiddenError`](./src/models/errors/recipientupdatetemplaterecipientforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateTemplateRecipientsForbiddenError`](./src/models/errors/recipientupdatetemplaterecipientsforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`RecipientDeleteTemplateRecipientForbiddenError`](./src/models/errors/recipientdeletetemplaterecipientforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`TemplateCreateTemplateDirectLinkForbiddenError`](./src/models/errors/templatecreatetemplatedirectlinkforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`TemplateDeleteTemplateDirectLinkForbiddenError`](./src/models/errors/templatedeletetemplatedirectlinkforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`TemplateToggleTemplateDirectLinkForbiddenError`](./src/models/errors/templatetoggletemplatedirectlinkforbiddenerror.ts): Insufficient access. Status code `403`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentFindNotFoundError`](./src/models/errors/envelopeattachmentfindnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientGetNotFoundError`](./src/models/errors/enveloperecipientgetnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldGetNotFoundError`](./src/models/errors/envelopefieldgetnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`EnvelopeGetNotFoundError`](./src/models/errors/envelopegetnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`DocumentGetNotFoundError`](./src/models/errors/documentgetnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`DocumentFindNotFoundError`](./src/models/errors/documentfindnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`DocumentDownloadBetaNotFoundError`](./src/models/errors/documentdownloadbetanotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`DocumentDownloadNotFoundError`](./src/models/errors/documentdownloadnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentFindNotFoundError`](./src/models/errors/documentattachmentfindnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`TemplateFindTemplatesNotFoundError`](./src/models/errors/templatefindtemplatesnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`TemplateGetTemplateByIdNotFoundError`](./src/models/errors/templategettemplatebyidnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`FolderFindFoldersNotFoundError`](./src/models/errors/folderfindfoldersnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`FieldGetDocumentFieldNotFoundError`](./src/models/errors/fieldgetdocumentfieldnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`RecipientGetDocumentRecipientNotFoundError`](./src/models/errors/recipientgetdocumentrecipientnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`FieldGetTemplateFieldNotFoundError`](./src/models/errors/fieldgettemplatefieldnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`RecipientGetTemplateRecipientNotFoundError`](./src/models/errors/recipientgettemplaterecipientnotfounderror.ts): Not found. Status code `404`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentFindInternalServerError`](./src/models/errors/envelopeattachmentfindinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentCreateInternalServerError`](./src/models/errors/envelopeattachmentcreateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentUpdateInternalServerError`](./src/models/errors/envelopeattachmentupdateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeAttachmentDeleteInternalServerError`](./src/models/errors/envelopeattachmentdeleteinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeItemCreateManyInternalServerError`](./src/models/errors/envelopeitemcreatemanyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeItemUpdateManyInternalServerError`](./src/models/errors/envelopeitemupdatemanyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeItemDeleteInternalServerError`](./src/models/errors/envelopeitemdeleteinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientGetInternalServerError`](./src/models/errors/enveloperecipientgetinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientCreateManyInternalServerError`](./src/models/errors/enveloperecipientcreatemanyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientUpdateManyInternalServerError`](./src/models/errors/enveloperecipientupdatemanyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeRecipientDeleteInternalServerError`](./src/models/errors/enveloperecipientdeleteinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldGetInternalServerError`](./src/models/errors/envelopefieldgetinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldCreateManyInternalServerError`](./src/models/errors/envelopefieldcreatemanyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldUpdateManyInternalServerError`](./src/models/errors/envelopefieldupdatemanyinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeFieldDeleteInternalServerError`](./src/models/errors/envelopefielddeleteinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeGetInternalServerError`](./src/models/errors/envelopegetinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeCreateInternalServerError`](./src/models/errors/envelopecreateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeUseInternalServerError`](./src/models/errors/envelopeuseinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeUpdateInternalServerError`](./src/models/errors/envelopeupdateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeDeleteInternalServerError`](./src/models/errors/envelopedeleteinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeDuplicateInternalServerError`](./src/models/errors/envelopeduplicateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeDistributeInternalServerError`](./src/models/errors/envelopedistributeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EnvelopeRedistributeInternalServerError`](./src/models/errors/enveloperedistributeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentGetInternalServerError`](./src/models/errors/documentgetinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentFindInternalServerError`](./src/models/errors/documentfindinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentUpdateInternalServerError`](./src/models/errors/documentupdateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentDeleteInternalServerError`](./src/models/errors/documentdeleteinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentDuplicateInternalServerError`](./src/models/errors/documentduplicateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentDistributeInternalServerError`](./src/models/errors/documentdistributeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentRedistributeInternalServerError`](./src/models/errors/documentredistributeinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentCreateDocumentTemporaryInternalServerError`](./src/models/errors/documentcreatedocumenttemporaryinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentCreateInternalServerError`](./src/models/errors/documentcreateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentDownloadBetaInternalServerError`](./src/models/errors/documentdownloadbetainternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentDownloadInternalServerError`](./src/models/errors/documentdownloadinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentCreateDocumentFormDataInternalServerError`](./src/models/errors/documentcreatedocumentformdatainternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentCreateInternalServerError`](./src/models/errors/documentattachmentcreateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentUpdateInternalServerError`](./src/models/errors/documentattachmentupdateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentDeleteInternalServerError`](./src/models/errors/documentattachmentdeleteinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`DocumentAttachmentFindInternalServerError`](./src/models/errors/documentattachmentfindinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`TemplateFindTemplatesInternalServerError`](./src/models/errors/templatefindtemplatesinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`TemplateGetTemplateByIdInternalServerError`](./src/models/errors/templategettemplatebyidinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`TemplateUpdateTemplateInternalServerError`](./src/models/errors/templateupdatetemplateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`TemplateDuplicateTemplateInternalServerError`](./src/models/errors/templateduplicatetemplateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`TemplateDeleteTemplateInternalServerError`](./src/models/errors/templatedeletetemplateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`TemplateCreateDocumentFromTemplateInternalServerError`](./src/models/errors/templatecreatedocumentfromtemplateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FolderFindFoldersInternalServerError`](./src/models/errors/folderfindfoldersinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FolderCreateFolderInternalServerError`](./src/models/errors/foldercreatefolderinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FolderUpdateFolderInternalServerError`](./src/models/errors/folderupdatefolderinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FolderDeleteFolderInternalServerError`](./src/models/errors/folderdeletefolderinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`TemplateCreateTemplateInternalServerError`](./src/models/errors/templatecreatetemplateinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`TemplateCreateTemplateTemporaryInternalServerError`](./src/models/errors/templatecreatetemplatetemporaryinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EmbeddingPresignCreateEmbeddingPresignTokenInternalServerError`](./src/models/errors/embeddingpresigncreateembeddingpresigntokeninternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`EmbeddingPresignVerifyEmbeddingPresignTokenInternalServerError`](./src/models/errors/embeddingpresignverifyembeddingpresigntokeninternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FieldGetDocumentFieldInternalServerError`](./src/models/errors/fieldgetdocumentfieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FieldCreateDocumentFieldInternalServerError`](./src/models/errors/fieldcreatedocumentfieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FieldCreateDocumentFieldsInternalServerError`](./src/models/errors/fieldcreatedocumentfieldsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FieldUpdateDocumentFieldInternalServerError`](./src/models/errors/fieldupdatedocumentfieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FieldUpdateDocumentFieldsInternalServerError`](./src/models/errors/fieldupdatedocumentfieldsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FieldDeleteDocumentFieldInternalServerError`](./src/models/errors/fielddeletedocumentfieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`RecipientGetDocumentRecipientInternalServerError`](./src/models/errors/recipientgetdocumentrecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`RecipientCreateDocumentRecipientInternalServerError`](./src/models/errors/recipientcreatedocumentrecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`RecipientCreateDocumentRecipientsInternalServerError`](./src/models/errors/recipientcreatedocumentrecipientsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateDocumentRecipientInternalServerError`](./src/models/errors/recipientupdatedocumentrecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateDocumentRecipientsInternalServerError`](./src/models/errors/recipientupdatedocumentrecipientsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`RecipientDeleteDocumentRecipientInternalServerError`](./src/models/errors/recipientdeletedocumentrecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FieldCreateTemplateFieldInternalServerError`](./src/models/errors/fieldcreatetemplatefieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FieldGetTemplateFieldInternalServerError`](./src/models/errors/fieldgettemplatefieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FieldCreateTemplateFieldsInternalServerError`](./src/models/errors/fieldcreatetemplatefieldsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FieldUpdateTemplateFieldInternalServerError`](./src/models/errors/fieldupdatetemplatefieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FieldUpdateTemplateFieldsInternalServerError`](./src/models/errors/fieldupdatetemplatefieldsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`FieldDeleteTemplateFieldInternalServerError`](./src/models/errors/fielddeletetemplatefieldinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`RecipientGetTemplateRecipientInternalServerError`](./src/models/errors/recipientgettemplaterecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`RecipientCreateTemplateRecipientInternalServerError`](./src/models/errors/recipientcreatetemplaterecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`RecipientCreateTemplateRecipientsInternalServerError`](./src/models/errors/recipientcreatetemplaterecipientsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateTemplateRecipientInternalServerError`](./src/models/errors/recipientupdatetemplaterecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`RecipientUpdateTemplateRecipientsInternalServerError`](./src/models/errors/recipientupdatetemplaterecipientsinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`RecipientDeleteTemplateRecipientInternalServerError`](./src/models/errors/recipientdeletetemplaterecipientinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`TemplateCreateTemplateDirectLinkInternalServerError`](./src/models/errors/templatecreatetemplatedirectlinkinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`TemplateDeleteTemplateDirectLinkInternalServerError`](./src/models/errors/templatedeletetemplatedirectlinkinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
* [`TemplateToggleTemplateDirectLinkInternalServerError`](./src/models/errors/templatetoggletemplatedirectlinkinternalservererror.ts): Internal server error. Status code `500`. Applicable to 1 of 80 methods.*
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
  serverURL: "https://app.documenso.com/api/v2",
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopeAttachments.envelopeAttachmentFind({
    envelopeId: "<id>",
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
