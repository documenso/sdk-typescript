# DataDocumentRecipientCscAuthorized

## Example Usage

```typescript
import { DataDocumentRecipientCscAuthorized } from "@documenso/sdk-typescript/models/operations";

let value: DataDocumentRecipientCscAuthorized = {
  type: "DOCUMENT_RECIPIENT_CSC_AUTHORIZED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 8640.63,
    recipientRole: "<value>",
    providerId: "<id>",
    credentialId: "<id>",
    sessionId: "<id>",
    sadExpiresAt: "<value>",
  },
  id: "<id>",
  createdAt: "1723352037968",
  envelopeId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | *"DOCUMENT_RECIPIENT_CSC_AUTHORIZED"*                                                          | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.EnvelopeAuditLogFindData40](../../models/operations/envelopeauditlogfinddata40.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `envelopeId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `email`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userId`                                                                                       | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userAgent`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `ipAddress`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |