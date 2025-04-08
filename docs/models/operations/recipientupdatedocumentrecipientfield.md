# RecipientUpdateDocumentRecipientField

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientField } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientField = {
  type: "DROPDOWN",
  id: 460.56,
  secondaryId: "<id>",
  documentId: 2031.68,
  templateId: 8322.25,
  recipientId: 5460.53,
  page: 7652.17,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "checkbox",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.RecipientUpdateDocumentRecipientType](../../models/operations/recipientupdatedocumentrecipienttype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
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
| `fieldMeta`                                                                                                        | *operations.RecipientUpdateDocumentRecipientFieldMetaUnion*                                                        | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |