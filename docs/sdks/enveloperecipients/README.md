# EnvelopeRecipients

## Overview

### Available Operations

* [envelopeRecipientRejectOnBehalfOf](#enveloperecipientrejectonbehalfof) - Reject envelope recipient on behalf of

## envelopeRecipientRejectOnBehalfOf

Records a rejection on behalf of a recipient. Use this when a recipient has declined to sign outside of the platform. The rejection is flagged as external in the document audit log. By default the action is attributed to the API user; supply `actAsEmail` to attribute it to a specific team member.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="envelope-recipient-rejectOnBehalfOf" method="post" path="/envelope/recipient/{recipientId}/reject" -->
```typescript
import { Documenso } from "@documenso/sdk-typescript";

const documenso = new Documenso({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const result = await documenso.envelopeRecipients.envelopeRecipientRejectOnBehalfOf({
    recipientId: 51.94,
    requestBody: {
      envelopeId: "<id>",
      reason: "<value>",
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
import { envelopeRecipientsEnvelopeRecipientRejectOnBehalfOf } from "@documenso/sdk-typescript/funcs/envelopeRecipientsEnvelopeRecipientRejectOnBehalfOf.js";

// Use `DocumensoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const documenso = new DocumensoCore({
  apiKey: process.env["DOCUMENSO_API_KEY"] ?? "",
});

async function run() {
  const res = await envelopeRecipientsEnvelopeRecipientRejectOnBehalfOf(documenso, {
    recipientId: 51.94,
    requestBody: {
      envelopeId: "<id>",
      reason: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("envelopeRecipientsEnvelopeRecipientRejectOnBehalfOf failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.EnvelopeRecipientRejectOnBehalfOfRequest](../../models/operations/enveloperecipientrejectonbehalfofrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnvelopeRecipientRejectOnBehalfOfResponse](../../models/operations/enveloperecipientrejectonbehalfofresponse.md)\>**

### Errors

| Error Type                                                  | Status Code                                                 | Content Type                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| errors.EnvelopeRecipientRejectOnBehalfOfBadRequestError     | 400                                                         | application/json                                            |
| errors.EnvelopeRecipientRejectOnBehalfOfUnauthorizedError   | 401                                                         | application/json                                            |
| errors.EnvelopeRecipientRejectOnBehalfOfForbiddenError      | 403                                                         | application/json                                            |
| errors.EnvelopeRecipientRejectOnBehalfOfInternalServerError | 500                                                         | application/json                                            |
| errors.APIError                                             | 4XX, 5XX                                                    | \*/\*                                                       |