# RecipientGetDocumentRecipientField

## Example Usage

```typescript
import { RecipientGetDocumentRecipientField } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetDocumentRecipientField = {
  type: "SIGNATURE",
  id: 7743.27,
  secondaryId: "<id>",
  documentId: 2973.96,
  templateId: 3890.13,
  recipientId: 565.05,
  page: 3748.71,
  customText: "<value>",
  inserted: true,
  fieldMeta: {
    type: "dropdown",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [operations.RecipientGetDocumentRecipientType](../../models/operations/recipientgetdocumentrecipienttype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
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
| `fieldMeta`                                                                                                  | *operations.RecipientGetDocumentRecipientFieldMetaUnion*                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |