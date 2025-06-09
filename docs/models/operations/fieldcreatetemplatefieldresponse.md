# FieldCreateTemplateFieldResponse

Successful response

## Example Usage

```typescript
import { FieldCreateTemplateFieldResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldResponse = {
  type: "CHECKBOX",
  id: 994.15,
  secondaryId: "<id>",
  documentId: 9901.8,
  templateId: 3859.65,
  recipientId: 7861.45,
  page: 5905.76,
  customText: "<value>",
  inserted: false,
  fieldMeta: null,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.FieldCreateTemplateFieldTypeResponse](../../models/operations/fieldcreatetemplatefieldtyperesponse.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `id`                                                                                                               | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `secondaryId`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `documentId`                                                                                                       | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `templateId`                                                                                                       | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `recipientId`                                                                                                      | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `page`                                                                                                             | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | The page number of the field on the document. Starts from 1.                                                       |
| `positionX`                                                                                                        | *any*                                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `positionY`                                                                                                        | *any*                                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `width`                                                                                                            | *any*                                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `height`                                                                                                           | *any*                                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `customText`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `inserted`                                                                                                         | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `fieldMeta`                                                                                                        | *operations.FieldCreateTemplateFieldFieldMetaUnion*                                                                | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |