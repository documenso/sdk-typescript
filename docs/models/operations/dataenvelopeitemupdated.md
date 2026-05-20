# DataEnvelopeItemUpdated

## Example Usage

```typescript
import { DataEnvelopeItemUpdated } from "@documenso/sdk-typescript/models/operations";

let value: DataEnvelopeItemUpdated = {
  type: "ENVELOPE_ITEM_UPDATED",
  data: {
    envelopeItemId: "<id>",
    changes: [
      {
        field: "<value>",
        from: "<value>",
        to: "<value>",
      },
    ],
  },
  id: "<id>",
  createdAt: "1735532989032",
  envelopeId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"ENVELOPE_ITEM_UPDATED"*                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [operations.EnvelopeAuditLogFindData3](../../models/operations/envelopeauditlogfinddata3.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `envelopeId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `email`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `userId`                                                                                     | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `userAgent`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `ipAddress`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |