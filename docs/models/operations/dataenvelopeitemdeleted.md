# DataEnvelopeItemDeleted

## Example Usage

```typescript
import { DataEnvelopeItemDeleted } from "@documenso/sdk-typescript/models/operations";

let value: DataEnvelopeItemDeleted = {
  type: "ENVELOPE_ITEM_DELETED",
  data: {
    envelopeItemId: "<id>",
    envelopeItemTitle: "<value>",
  },
  id: "<id>",
  createdAt: "1714267258181",
  envelopeId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"ENVELOPE_ITEM_DELETED"*                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [operations.EnvelopeAuditLogFindData2](../../models/operations/envelopeauditlogfinddata2.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `envelopeId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `email`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `userId`                                                                                     | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `userAgent`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `ipAddress`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |