# DataDocumentOpened

## Example Usage

```typescript
import { DataDocumentOpened } from "@documenso/sdk-typescript/models/operations";

let value: DataDocumentOpened = {
  type: "DOCUMENT_OPENED",
  data: {
    recipientEmail: "<value>",
    recipientName: "<value>",
    recipientId: 4561.6,
    recipientRole: "<value>",
    accessAuth: [],
  },
  id: "<id>",
  createdAt: "1725596441917",
  envelopeId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | *"DOCUMENT_OPENED"*                                                                            | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.EnvelopeAuditLogFindData16](../../models/operations/envelopeauditlogfinddata16.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `envelopeId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `email`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userId`                                                                                       | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userAgent`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `ipAddress`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |