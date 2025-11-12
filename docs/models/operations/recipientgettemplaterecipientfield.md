# RecipientGetTemplateRecipientField

## Example Usage

```typescript
import { RecipientGetTemplateRecipientField } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetTemplateRecipientField = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "CHECKBOX",
  id: 353.33,
  secondaryId: "<id>",
  recipientId: 7147.87,
  page: 9460.94,
  positionX: "<value>",
  positionY: "<value>",
  width: "<value>",
  height: "<value>",
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    fontSize: 12,
    type: "initials",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `envelopeId`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `envelopeItemId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | [operations.RecipientGetTemplateRecipientType](../../models/operations/recipientgettemplaterecipienttype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `secondaryId`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `recipientId`                                                                                                | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `page`                                                                                                       | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `positionX`                                                                                                  | *any*                                                                                                        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `positionY`                                                                                                  | *any*                                                                                                        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `width`                                                                                                      | *any*                                                                                                        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `height`                                                                                                     | *any*                                                                                                        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `customText`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `inserted`                                                                                                   | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `fieldMeta`                                                                                                  | *operations.RecipientGetTemplateRecipientFieldMetaUnion*                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `documentId`                                                                                                 | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `templateId`                                                                                                 | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |