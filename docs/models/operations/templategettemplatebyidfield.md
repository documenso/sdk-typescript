# TemplateGetTemplateByIdField

## Example Usage

```typescript
import { TemplateGetTemplateByIdField } from "@documenso/sdk-typescript/models/operations";

let value: TemplateGetTemplateByIdField = {
  type: "CHECKBOX",
  id: 9718.06,
  secondaryId: "<id>",
  documentId: 7559.54,
  templateId: 5207.36,
  recipientId: 2803.38,
  page: 9949.9,
  customText: "<value>",
  inserted: true,
  fieldMeta: {
    type: "dropdown",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.TemplateGetTemplateByIdFieldType](../../models/operations/templategettemplatebyidfieldtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `secondaryId`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `documentId`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `templateId`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `recipientId`                                                                                              | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `page`                                                                                                     | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The page number of the field on the document. Starts from 1.                                               |
| `positionX`                                                                                                | *any*                                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `positionY`                                                                                                | *any*                                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `width`                                                                                                    | *any*                                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `height`                                                                                                   | *any*                                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `customText`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `inserted`                                                                                                 | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `fieldMeta`                                                                                                | *operations.TemplateGetTemplateByIdFieldMetaUnion*                                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |