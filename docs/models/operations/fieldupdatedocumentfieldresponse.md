# FieldUpdateDocumentFieldResponse

Successful response

## Example Usage

```typescript
import { FieldUpdateDocumentFieldResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldResponse = {
  type: "INITIALS",
  id: 4615.62,
  secondaryId: "<id>",
  documentId: 2178.8,
  templateId: null,
  recipientId: 712.57,
  page: 9356.51,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "date",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.FieldUpdateDocumentFieldTypeResponse](../../models/operations/fieldupdatedocumentfieldtyperesponse.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
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
| `fieldMeta`                                                                                                        | *operations.FieldUpdateDocumentFieldFieldMetaUnion*                                                                | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |