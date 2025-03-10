# FieldUpdateTemplateFieldResponseBody

Successful response

## Example Usage

```typescript
import { FieldUpdateTemplateFieldResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldResponseBody = {
  type: "DROPDOWN",
  id: 644416,
  secondaryId: "<id>",
  documentId: 365998,
  templateId: 102019,
  recipientId: 787850,
  page: 7080.75,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "dropdown",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [operations.FieldUpdateTemplateFieldType](../../models/operations/fieldupdatetemplatefieldtype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `secondaryId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `documentId`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `templateId`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `recipientId`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `page`                                                                                             | *number*                                                                                           | :heavy_check_mark:                                                                                 | The page number of the field on the document. Starts from 1.                                       |
| `positionX`                                                                                        | *any*                                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `positionY`                                                                                        | *any*                                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `width`                                                                                            | *any*                                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `height`                                                                                           | *any*                                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `customText`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `inserted`                                                                                         | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `fieldMeta`                                                                                        | *operations.FieldUpdateTemplateFieldFieldMeta*                                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |