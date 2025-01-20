# FieldCreateTemplateFieldResponseBody

Successful response

## Example Usage

```typescript
import { FieldCreateTemplateFieldResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldResponseBody = {
  type: "SIGNATURE",
  id: 575753,
  secondaryId: "<id>",
  documentId: 186130,
  templateId: 9248,
  recipientId: 927754,
  page: 5371.4,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "initials",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [operations.FieldCreateTemplateFieldType](../../models/operations/fieldcreatetemplatefieldtype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
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
| `fieldMeta`                                                                                        | *operations.FieldCreateTemplateFieldFieldMeta*                                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |