# DataDocumentViewed

## Example Usage

```typescript
import { DataDocumentViewed } from "@documenso/sdk-typescript/models/operations";

let value: DataDocumentViewed = {
  type: "DOCUMENT_VIEWED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 1341.02,
    recipientRole: "<value>",
    accessAuth: [
      "TWO_FACTOR_AUTH",
    ],
  },
  id: "<id>",
  createdAt: "1727002097674",
  envelopeId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | *"DOCUMENT_VIEWED"*                                                                            | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.EnvelopeAuditLogFindData17](../../models/operations/envelopeauditlogfinddata17.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `envelopeId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `email`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userId`                                                                                       | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userAgent`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `ipAddress`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |