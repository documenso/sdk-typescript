# DataFieldUpdated

## Example Usage

```typescript
import { DataFieldUpdated } from "@documenso/sdk-typescript/models/operations";

let value: DataFieldUpdated = {
  type: "FIELD_UPDATED",
  data: {
    fieldId: "<id>",
    fieldRecipientEmail: "<value>",
    fieldRecipientId: 9060.75,
    fieldType: "<value>",
    changes: [
      {
        type: "POSITION",
        from: {
          page: 6349.45,
          positionX: 9065.35,
          positionY: 5207.41,
        },
        to: {
          page: 3540.14,
          positionX: 9008.77,
          positionY: 3467.71,
        },
      },
    ],
  },
  id: "<id>",
  createdAt: "1730089775773",
  envelopeId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | *"FIELD_UPDATED"*                                                                              | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [operations.EnvelopeAuditLogFindData28](../../models/operations/envelopeauditlogfinddata28.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `envelopeId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `email`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userId`                                                                                       | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `userAgent`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `ipAddress`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |