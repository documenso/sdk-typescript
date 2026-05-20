# DataEnvelopeItemPdfReplaced

## Example Usage

```typescript
import { DataEnvelopeItemPdfReplaced } from "@documenso/sdk-typescript/models/operations";

let value: DataEnvelopeItemPdfReplaced = {
  type: "ENVELOPE_ITEM_PDF_REPLACED",
  data: {
    envelopeItemId: "<id>",
    envelopeItemTitle: "<value>",
  },
  id: "<id>",
  createdAt: "1734782391118",
  envelopeId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"ENVELOPE_ITEM_PDF_REPLACED"*                                                               | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [operations.EnvelopeAuditLogFindData4](../../models/operations/envelopeauditlogfinddata4.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createdAt`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `envelopeId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `email`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `userId`                                                                                     | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `userAgent`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `ipAddress`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |