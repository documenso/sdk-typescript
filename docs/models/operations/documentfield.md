# DocumentField

## Example Usage

```typescript
import { DocumentField } from "@documenso/sdk-typescript/models/operations";

let value: DocumentField = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "EMAIL",
  id: 6761.94,
  secondaryId: "<id>",
  recipientId: 2069.76,
  page: 3142.11,
  customText: "<value>",
  inserted: false,
  fieldMeta: null,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `envelopeId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `envelopeItemId`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `type`                                                                       | [operations.DocumentFieldType](../../models/operations/documentfieldtype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `id`                                                                         | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `secondaryId`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `recipientId`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `page`                                                                       | *number*                                                                     | :heavy_check_mark:                                                           | The page number of the field on the document. Starts from 1.                 |
| `positionX`                                                                  | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `positionY`                                                                  | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `width`                                                                      | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `height`                                                                     | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `customText`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `inserted`                                                                   | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `fieldMeta`                                                                  | *operations.DocumentFieldMetaUnion*                                          | :heavy_check_mark:                                                           | N/A                                                                          |
| `documentId`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `templateId`                                                                 | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |