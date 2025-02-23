# FieldCreateDocumentFieldsDocumentsFieldsFields

## Example Usage

```typescript
import { FieldCreateDocumentFieldsDocumentsFieldsFields } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsDocumentsFieldsFields = {
  type: "RADIO",
  id: 848346,
  secondaryId: "<id>",
  documentId: 490420,
  templateId: 185348,
  recipientId: 995816,
  page: 1293.55,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "text",
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