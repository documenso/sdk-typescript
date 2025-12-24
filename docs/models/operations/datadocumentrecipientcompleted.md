# DataDocumentRecipientCompleted

## Example Usage

```typescript
import { DataDocumentRecipientCompleted } from "@documenso/sdk-typescript/models/operations";

let value: DataDocumentRecipientCompleted = {
  type: "DOCUMENT_RECIPIENT_COMPLETED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 9099.79,
    recipientRole: "<value>",
    actionAuth: [
      "ACCOUNT",
    ],
  },
  id: "<id>",
  createdAt: "1716992419397",
  envelopeId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | *"DOCUMENT_RECIPIENT_COMPLETED"*                                                               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.EnvelopeAuditLogFindData19](../../models/operations/envelopeauditlogfinddata19.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `envelopeId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `email`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userId`                                                                                       | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userAgent`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `ipAddress`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |