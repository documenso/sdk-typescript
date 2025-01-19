# FieldCreateDocumentFieldsDocumentsFieldsFields

## Example Usage

```typescript
import { FieldCreateDocumentFieldsDocumentsFieldsFields } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsDocumentsFieldsFields = {
  type: "DATE",
  id: 290248,
  secondaryId: "<id>",
  documentId: 304173,
  templateId: 591065,
  recipientId: 921719,
  page: 8052.64,
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
| `type`                                                                                               | [operations.FieldCreateDocumentFieldsType](../../models/operations/fieldcreatedocumentfieldstype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
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
| `fieldMeta`                                                                                          | *operations.FieldCreateDocumentFieldsFieldMeta*                                                      | :heavy_check_mark:                                                                                   | N/A                                                                                                  |