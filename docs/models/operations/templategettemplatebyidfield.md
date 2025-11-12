# TemplateGetTemplateByIdField

## Example Usage

```typescript
import { TemplateGetTemplateByIdField } from "@documenso/sdk-typescript/models/operations";

let value: TemplateGetTemplateByIdField = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "CHECKBOX",
  id: 9718.06,
  secondaryId: "<id>",
  recipientId: 7520.74,
  page: 7559.54,
  positionX: "<value>",
  positionY: "<value>",
  width: "<value>",
  height: "<value>",
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    fontSize: 12,
    type: "name",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `envelopeItemId`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | [operations.TemplateGetTemplateByIdFieldType](../../models/operations/templategettemplatebyidfieldtype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `secondaryId`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `recipientId`                                                                                              | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `page`                                                                                                     | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `positionX`                                                                                                | *any*                                                                                                      | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `positionY`                                                                                                | *any*                                                                                                      | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `width`                                                                                                    | *any*                                                                                                      | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `height`                                                                                                   | *any*                                                                                                      | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `customText`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `inserted`                                                                                                 | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `fieldMeta`                                                                                                | *operations.TemplateGetTemplateByIdFieldMetaUnion*                                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `documentId`                                                                                               | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `templateId`                                                                                               | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |