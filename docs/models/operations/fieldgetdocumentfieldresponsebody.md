# FieldGetDocumentFieldResponseBody

Successful response

## Example Usage

```typescript
import { FieldGetDocumentFieldResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldGetDocumentFieldResponseBody = {
  type: "RADIO",
  id: 109784,
  secondaryId: "<id>",
  documentId: 606308,
  templateId: 703218,
  recipientId: 634786,
  page: 9591.43,
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