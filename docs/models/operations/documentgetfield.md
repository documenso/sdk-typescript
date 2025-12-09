# DocumentGetField

## Example Usage

```typescript
import { DocumentGetField } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetField = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "NAME",
  id: 360.06,
  secondaryId: "<id>",
  recipientId: 472.22,
  page: 3997.02,
  positionX: "<value>",
  positionY: "<value>",
  width: "<value>",
  height: "<value>",
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    fontSize: 12,
    type: "radio",
    direction: "vertical",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `envelopeId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `envelopeItemId`                                                                           | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [operations.DocumentGetFieldTypeEnum](../../models/operations/documentgetfieldtypeenum.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `secondaryId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `recipientId`                                                                              | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `page`                                                                                     | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `positionX`                                                                                | *any*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `positionY`                                                                                | *any*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `width`                                                                                    | *any*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `height`                                                                                   | *any*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customText`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `inserted`                                                                                 | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `fieldMeta`                                                                                | *operations.DocumentGetFieldMetaUnion*                                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `documentId`                                                                               | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `templateId`                                                                               | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |