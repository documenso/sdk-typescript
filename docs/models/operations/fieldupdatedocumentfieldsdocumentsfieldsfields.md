# FieldUpdateDocumentFieldsDocumentsFieldsFields

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsDocumentsFieldsFields } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsDocumentsFieldsFields = {
  type: "CHECKBOX",
  id: 152027,
  secondaryId: "<id>",
  documentId: 664,
  templateId: 941668,
  recipientId: 278325,
  page: 1858.97,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "radio",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.FieldUpdateDocumentFieldsType](../../models/operations/fieldupdatedocumentfieldstype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `secondaryId`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `documentId`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `templateId`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `recipientId`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_check_mark:                                                                                   | The page number of the field on the document. Starts from 1.                                         |
| `positionX`                                                                                          | *any*                                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `positionY`                                                                                          | *any*                                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `width`                                                                                              | *any*                                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `height`                                                                                             | *any*                                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `customText`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `inserted`                                                                                           | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `fieldMeta`                                                                                          | *operations.FieldUpdateDocumentFieldsFieldMeta*                                                      | :heavy_check_mark:                                                                                   | N/A                                                                                                  |