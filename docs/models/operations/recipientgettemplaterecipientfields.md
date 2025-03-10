# RecipientGetTemplateRecipientFields

## Example Usage

```typescript
import { RecipientGetTemplateRecipientFields } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetTemplateRecipientFields = {
  type: "DROPDOWN",
  id: 4498.61,
  secondaryId: "<id>",
  documentId: 2271.29,
  templateId: 2916.66,
  recipientId: 7763.34,
  page: 2733.49,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "date",
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
| `fieldMeta`                                                                                                  | *operations.RecipientGetTemplateRecipientFieldMeta*                                                          | :heavy_check_mark:                                                                                           | N/A                                                                                                          |