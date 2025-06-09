# FieldGetDocumentFieldResponse

Successful response

## Example Usage

```typescript
import { FieldGetDocumentFieldResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldGetDocumentFieldResponse = {
  type: "INITIALS",
  id: 4256.77,
  secondaryId: "<id>",
  documentId: 6822.42,
  templateId: 8991.32,
  recipientId: 2659.39,
  page: 4332.76,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "number",
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
| `fieldMeta`                                                                                  | *operations.FieldGetDocumentFieldFieldMetaUnion*                                             | :heavy_check_mark:                                                                           | N/A                                                                                          |