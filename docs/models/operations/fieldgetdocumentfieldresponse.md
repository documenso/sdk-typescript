# FieldGetDocumentFieldResponse

Successful response

## Example Usage

```typescript
import { FieldGetDocumentFieldResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldGetDocumentFieldResponse = {
  type: "INITIALS",
  id: 191.22,
  secondaryId: "<id>",
  documentId: 5181.5,
  templateId: 8427.77,
  recipientId: 3732.16,
  page: 2228.64,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "initials",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | [operations.FieldGetDocumentFieldType](../../models/operations/fieldgetdocumentfieldtype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `secondaryId`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `documentId`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `templateId`                                                                                 | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `recipientId`                                                                                | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `page`                                                                                       | *number*                                                                                     | :heavy_check_mark:                                                                           | The page number of the field on the document. Starts from 1.                                 |
| `positionX`                                                                                  | *any*                                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `positionY`                                                                                  | *any*                                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `width`                                                                                      | *any*                                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `height`                                                                                     | *any*                                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `customText`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `inserted`                                                                                   | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `fieldMeta`                                                                                  | *operations.FieldGetDocumentFieldFieldMeta*                                                  | :heavy_check_mark:                                                                           | N/A                                                                                          |