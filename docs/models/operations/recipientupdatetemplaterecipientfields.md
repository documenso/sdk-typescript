# RecipientUpdateTemplateRecipientFields

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientFields } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientFields = {
  type: "INITIALS",
  id: 990540,
  secondaryId: "<id>",
  documentId: 571498,
  templateId: 732815,
  recipientId: 98250,
  page: 3661.17,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "dropdown",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.RecipientUpdateTemplateRecipientType](../../models/operations/recipientupdatetemplaterecipienttype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
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
| `fieldMeta`                                                                                                        | *operations.RecipientUpdateTemplateRecipientFieldMeta*                                                             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |