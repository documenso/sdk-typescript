# DataEnvelopeItemCreated

## Example Usage

```typescript
import { DataEnvelopeItemCreated } from "@documenso/sdk-typescript/models/operations";

let value: DataEnvelopeItemCreated = {
  type: "ENVELOPE_ITEM_CREATED",
  data: {
    envelopeItemId: "<id>",
    envelopeItemTitle: "<value>",
  },
  id: "<id>",
  createdAt: "1732799650517",
  envelopeId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"ENVELOPE_ITEM_CREATED"*                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [operations.EnvelopeAuditLogFindData1](../../models/operations/envelopeauditlogfinddata1.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `envelopeId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `email`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `userId`                                                                                     | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `userAgent`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `ipAddress`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |