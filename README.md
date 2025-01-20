# @documenso/sdk-typescript

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *@documenso/sdk-typescript* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@documenso/sdk-typescript&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

Documenso v2 beta API: Subject to breaking changes until v2 is fully released.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@documenso/sdk-typescript](#documensosdk-typescript)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

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

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
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
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  | Environment Variable |
| -------- | ------ | ------- | -------------------- |
| `apiKey` | apiKey | API key | `DOCUMENSO_API_KEY`  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
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
<!-- End Authentication [security] -->

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

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`documentsCreateV0`](docs/sdks/documents/README.md#createv0) - Create document
- [`documentsDelete`](docs/sdks/documents/README.md#delete) - Delete document
- [`documentsDistribute`](docs/sdks/documents/README.md#distribute) - Distribute document
- [`documentsDuplicate`](docs/sdks/documents/README.md#duplicate) - Duplicate document
- [`documentsFieldsCreate`](docs/sdks/fields/README.md#create) - Create document field
- [`documentsFieldsCreateMany`](docs/sdks/fields/README.md#createmany) - Create document fields
- [`documentsFieldsDelete`](docs/sdks/fields/README.md#delete) - Delete document field
- [`documentsFieldsGet`](docs/sdks/fields/README.md#get) - Get document field
- [`documentsFieldsUpdate`](docs/sdks/fields/README.md#update) - Update document field
- [`documentsFieldsUpdateMany`](docs/sdks/fields/README.md#updatemany) - Update document fields
- [`documentsFind`](docs/sdks/documents/README.md#find) - Find documents
- [`documentsGet`](docs/sdks/documents/README.md#get) - Get document
- [`documentsMoveToTeam`](docs/sdks/documents/README.md#movetoteam) - Move document
- [`documentsRecipientsCreate`](docs/sdks/recipients/README.md#create) - Create document recipient
- [`documentsRecipientsCreateMany`](docs/sdks/recipients/README.md#createmany) - Create document recipients
- [`documentsRecipientsDelete`](docs/sdks/recipients/README.md#delete) - Delete document recipient
- [`documentsRecipientsGet`](docs/sdks/recipients/README.md#get) - Get document recipient
- [`documentsRecipientsUpdate`](docs/sdks/recipients/README.md#update) - Update document recipient
- [`documentsRecipientsUpdateMany`](docs/sdks/recipients/README.md#updatemany) - Update document recipients
- [`documentsRedistribute`](docs/sdks/documents/README.md#redistribute) - Redistribute document
- [`documentsUpdate`](docs/sdks/documents/README.md#update) - Update document
- [`templatesDelete`](docs/sdks/templates/README.md#delete) - Delete template
- [`templatesDirectLinkCreate`](docs/sdks/directlink/README.md#create) - Create direct link
- [`templatesDirectLinkDelete`](docs/sdks/directlink/README.md#delete) - Delete direct link
- [`templatesDirectLinkToggle`](docs/sdks/directlink/README.md#toggle) - Toggle direct link
- [`templatesDuplicate`](docs/sdks/templates/README.md#duplicate) - Duplicate template
- [`templatesFieldsCreate`](docs/sdks/documensofields/README.md#create) - Create template field
- [`templatesFieldsCreateMany`](docs/sdks/documensofields/README.md#createmany) - Create template fields
- [`templatesFieldsDelete`](docs/sdks/documensofields/README.md#delete) - Delete template field
- [`templatesFieldsGet`](docs/sdks/documensofields/README.md#get) - Get template field
- [`templatesFieldsUpdate`](docs/sdks/documensofields/README.md#update) - Update template field
- [`templatesFieldsUpdateMany`](docs/sdks/documensofields/README.md#updatemany) - Update template fields
- [`templatesFind`](docs/sdks/templates/README.md#find) - Find templates
- [`templatesGet`](docs/sdks/templates/README.md#get) - Get template
- [`templatesMoveToTeam`](docs/sdks/templates/README.md#movetoteam) - Move template
- [`templatesRecipientsCreate`](docs/sdks/documensorecipients/README.md#create) - Create template recipient
- [`templatesRecipientsCreateMany`](docs/sdks/documensorecipients/README.md#createmany) - Create template recipients
- [`templatesRecipientsDelete`](docs/sdks/documensorecipients/README.md#delete) - Delete template recipient
- [`templatesRecipientsGet`](docs/sdks/documensorecipients/README.md#get) - Get template recipient
- [`templatesRecipientsUpdate`](docs/sdks/documensorecipients/README.md#update) - Update template recipient
- [`templatesRecipientsUpdateMany`](docs/sdks/documensorecipients/README.md#updatemany) - Update template recipients
- [`templatesUpdate`](docs/sdks/templates/README.md#update) - Update template
- [`templatesUse`](docs/sdks/templates/README.md#use) - Use template

</details>
<!-- End Standalone functions [standalone-funcs] -->

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

| Error Type                      | Status Code | Content Type     |
| ------------------------------- | ----------- | ---------------- |
| errors.ErrorBADREQUEST          | 400         | application/json |
| errors.ErrorNOTFOUND            | 404         | application/json |
| errors.Errorinternalservererror | 500         | application/json |
| errors.APIError                 | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { Documenso } from "@documenso/sdk-typescript";
import {
  ErrorBADREQUEST,
  Errorinternalservererror,
  ErrorNOTFOUND,
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
      case (err instanceof ErrorBADREQUEST): {
        // Handle err.data$: ErrorBADREQUESTData
        console.error(err);
        return;
      }
      case (err instanceof ErrorNOTFOUND): {
        // Handle err.data$: ErrorNOTFOUNDData
        console.error(err);
        return;
      }
      case (err instanceof Errorinternalservererror): {
        // Handle err.data$: ErrorinternalservererrorData
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


<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  serverURL: "https://app.documenso.com/api/v2-beta",
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Documenso } from "@documenso/sdk-typescript";
import { HTTPClient } from "@documenso/sdk-typescript/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Documenso({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

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
