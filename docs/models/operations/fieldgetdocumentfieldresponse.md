# FieldGetDocumentFieldResponse

Successful response

## Example Usage

```typescript
import { FieldGetDocumentFieldResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldGetDocumentFieldResponse = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "INITIALS",
  id: 4256.77,
  secondaryId: "<id>",
  recipientId: 7400.94,
  page: 6822.42,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "email",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `envelopeItemId`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | [operations.FieldGetDocumentFieldType](../../models/operations/fieldgetdocumentfieldtype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `id`                                                                                         | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `secondaryId`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `recipientId`                                                                                | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `page`                                                                                       | *number*                                                                                     | :heavy_check_mark:                                                                           | The page number of the field on the document. Starts from 1.                                 |
| `positionX`                                                                                  | *any*                                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `positionY`                                                                                  | *any*                                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `width`                                                                                      | *any*                                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `height`                                                                                     | *any*                                                                                        | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `customText`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `inserted`                                                                                   | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `fieldMeta`                                                                                  | *operations.FieldGetDocumentFieldFieldMetaUnion*                                             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `documentId`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `templateId`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |