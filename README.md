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

* [find](docs/sdks/documents/README.md#find) - Find documents
* [get](docs/sdks/documents/README.md#get) - Get document
* [createV0](docs/sdks/documents/README.md#createv0) - Create document
* [update](docs/sdks/documents/README.md#update) - Update document
* [delete](docs/sdks/documents/README.md#delete) - Delete document
* [moveToTeam](docs/sdks/documents/README.md#movetoteam) - Move document
* [distribute](docs/sdks/documents/README.md#distribute) - Distribute document
* [redistribute](docs/sdks/documents/README.md#redistribute) - Redistribute document
* [duplicate](docs/sdks/documents/README.md#duplicate) - Duplicate document

#### [documents.fields](docs/sdks/fields/README.md)

* [get](docs/sdks/fields/README.md#get) - Get document field
* [create](docs/sdks/fields/README.md#create) - Create document field
* [createMany](docs/sdks/fields/README.md#createmany) - Create document fields
* [update](docs/sdks/fields/README.md#update) - Update document field
* [updateMany](docs/sdks/fields/README.md#updatemany) - Update document fields
* [delete](docs/sdks/fields/README.md#delete) - Delete document field

#### [documents.recipients](docs/sdks/recipients/README.md)

* [get](docs/sdks/recipients/README.md#get) - Get document recipient
* [create](docs/sdks/recipients/README.md#create) - Create document recipient
* [createMany](docs/sdks/recipients/README.md#createmany) - Create document recipients
* [update](docs/sdks/recipients/README.md#update) - Update document recipient
* [updateMany](docs/sdks/recipients/README.md#updatemany) - Update document recipients
* [delete](docs/sdks/recipients/README.md#delete) - Delete document recipient

### [templates](docs/sdks/templates/README.md)

* [find](docs/sdks/templates/README.md#find) - Find templates
* [get](docs/sdks/templates/README.md#get) - Get template
* [update](docs/sdks/templates/README.md#update) - Update template
* [duplicate](docs/sdks/templates/README.md#duplicate) - Duplicate template
* [delete](docs/sdks/templates/README.md#delete) - Delete template
* [use](docs/sdks/templates/README.md#use) - Use template
* [moveToTeam](docs/sdks/templates/README.md#movetoteam) - Move template

#### [templates.directLink](docs/sdks/directlink/README.md)

* [create](docs/sdks/directlink/README.md#create) - Create direct link
* [delete](docs/sdks/directlink/README.md#delete) - Delete direct link
* [toggle](docs/sdks/directlink/README.md#toggle) - Toggle direct link

#### [templates.fields](docs/sdks/documensofields/README.md)

* [create](docs/sdks/documensofields/README.md#create) - Create template field
* [get](docs/sdks/documensofields/README.md#get) - Get template field
* [createMany](docs/sdks/documensofields/README.md#createmany) - Create template fields
* [update](docs/sdks/documensofields/README.md#update) - Update template field
* [updateMany](docs/sdks/documensofields/README.md#updatemany) - Update template fields
* [delete](docs/sdks/documensofields/README.md#delete) - Delete template field

#### [templates.recipients](docs/sdks/documensorecipients/README.md)

* [get](docs/sdks/documensorecipients/README.md#get) - Get template recipient
* [create](docs/sdks/documensorecipients/README.md#create) - Create template recipient
* [createMany](docs/sdks/documensorecipients/README.md#createmany) - Create template recipients
* [update](docs/sdks/documensorecipients/README.md#update) - Update template recipient
* [updateMany](docs/sdks/documensorecipients/README.md#updatemany) - Update template recipients
* [delete](docs/sdks/documensorecipients/README.md#delete) - Delete template recipient

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
  const result = await documenso.documents.find({
    orderByDirection: "desc",
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

  // Handle the result
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
  const result = await documenso.documents.find({
    orderByDirection: "desc",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `find` method may throw the following errors:

| Error Type                                                | Status Code | Content Type     |
| --------------------------------------------------------- | ----------- | ---------------- |
| errors.DocumentFindDocumentsResponseBody                  | 400         | application/json |
| errors.DocumentFindDocumentsDocumentsResponseBody         | 404         | application/json |
| errors.DocumentFindDocumentsDocumentsResponseResponseBody | 500         | application/json |
| errors.APIError                                           | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { Documenso } from "@documenso/sdk-typescript";
import {
  DocumentFindDocumentsDocumentsResponseBody,
  DocumentFindDocumentsDocumentsResponseResponseBody,
  DocumentFindDocumentsResponseBody,
  SDKValidationError,
} from "@documenso/sdk-typescript/models/errors";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  let result;
  try {
    result = await documenso.documents.find({
      orderByDirection: "desc",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof DocumentFindDocumentsResponseBody): {
        // Handle err.data$: DocumentFindDocumentsResponseBodyData
        console.error(err);
        return;
      }
      case (err instanceof DocumentFindDocumentsDocumentsResponseBody): {
        // Handle err.data$: DocumentFindDocumentsDocumentsResponseBodyData
        console.error(err);
        return;
      }
      case (err
        instanceof DocumentFindDocumentsDocumentsResponseResponseBody): {
        // Handle err.data$: DocumentFindDocumentsDocumentsResponseResponseBodyData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- No Server Selection [server] -->
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
