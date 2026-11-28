# DataContentUpdated

## Example Usage

```typescript
import { DataContentUpdated } from "@documenso/sdk-typescript/models/operations";

let value: DataContentUpdated = {
  type: "CONTENT_UPDATED",
  data: {
    contentId: "<id>",
    contentType: "<value>",
    envelopeItemId: "<id>",
    changes: [],
  },
  id: "<id>",
  createdAt: "1729599407490",
  envelopeId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | *"CONTENT_UPDATED"*                                                                            | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.EnvelopeAuditLogFindData32](../../models/operations/envelopeauditlogfinddata32.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `envelopeId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `email`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userId`                                                                                       | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userAgent`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `ipAddress`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |