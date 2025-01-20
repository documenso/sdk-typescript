# FieldCreateDocumentFieldResponseBody

Successful response

## Example Usage

```typescript
import { FieldCreateDocumentFieldResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldResponseBody = {
  type: "DATE",
  id: 914864,
  secondaryId: "<id>",
  documentId: 49348,
  templateId: 292888,
  recipientId: 715053,
  page: 4181.09,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "name",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [operations.FieldCreateDocumentFieldType](../../models/operations/fieldcreatedocumentfieldtype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `secondaryId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `documentId`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `templateId`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `recipientId`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `page`                                                                                             | *number*                                                                                           | :heavy_check_mark:                                                                                 | The page number of the field on the document. Starts from 1.                                       |
| `positionX`                                                                                        | *any*                                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `positionY`                                                                                        | *any*                                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `width`                                                                                            | *any*                                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `height`                                                                                           | *any*                                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `customText`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `inserted`                                                                                         | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `fieldMeta`                                                                                        | *operations.FieldCreateDocumentFieldFieldMeta*                                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |