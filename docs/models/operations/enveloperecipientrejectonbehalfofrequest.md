# EnvelopeRecipientRejectOnBehalfOfRequest

## Example Usage

```typescript
import { EnvelopeRecipientRejectOnBehalfOfRequest } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeRecipientRejectOnBehalfOfRequest = {
  recipientId: 5944.65,
  requestBody: {
    envelopeId: "<id>",
    reason: "<value>",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `recipientId`                                                                                                                      | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The ID of the recipient to reject the document on behalf of.                                                                       |
| `requestBody`                                                                                                                      | [operations.EnvelopeRecipientRejectOnBehalfOfRequestBody](../../models/operations/enveloperecipientrejectonbehalfofrequestbody.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |