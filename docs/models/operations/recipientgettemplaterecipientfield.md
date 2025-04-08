# RecipientGetTemplateRecipientField

## Example Usage

```typescript
import { RecipientGetTemplateRecipientField } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetTemplateRecipientField = {
  type: "CHECKBOX",
  id: 353.33,
  secondaryId: "<id>",
  documentId: 7147.87,
  templateId: 9460.94,
  recipientId: 8750.63,
  page: 3908.47,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "name",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [operations.RecipientGetTemplateRecipientType](../../models/operations/recipientgettemplaterecipienttype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `secondaryId`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `documentId`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `templateId`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `recipientId`                                                                                                | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `page`                                                                                                       | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The page number of the field on the document. Starts from 1.                                                 |
| `positionX`                                                                                                  | *any*                                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `positionY`                                                                                                  | *any*                                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `width`                                                                                                      | *any*                                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `height`                                                                                                     | *any*                                                                                                        | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `customText`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `inserted`                                                                                                   | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `fieldMeta`                                                                                                  | *operations.RecipientGetTemplateRecipientFieldMetaUnion*                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |