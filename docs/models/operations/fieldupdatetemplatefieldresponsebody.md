# FieldUpdateTemplateFieldResponseBody

Successful response

## Example Usage

```typescript
import { FieldUpdateTemplateFieldResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldResponseBody = {
  type: "NAME",
  id: 263079,
  secondaryId: "<id>",
  documentId: 333507,
  templateId: 572317,
  recipientId: 894870,
  page: 1762.81,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "email",
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