# DocumentField

## Example Usage

```typescript
import { DocumentField } from "@documenso/sdk-typescript/models/operations";

let value: DocumentField = {
  type: "EMAIL",
  id: 6761.94,
  secondaryId: "<id>",
  documentId: 3142.11,
  templateId: 179.72,
  recipientId: 123.33,
  page: 2591.61,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "text",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `type`                                                                       | [operations.DocumentFieldType](../../models/operations/documentfieldtype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `id`                                                                         | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `secondaryId`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `documentId`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `templateId`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `recipientId`                                                                | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `page`                                                                       | *number*                                                                     | :heavy_check_mark:                                                           | The page number of the field on the document. Starts from 1.                 |
| `positionX`                                                                  | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `positionY`                                                                  | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `width`                                                                      | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `height`                                                                     | *any*                                                                        | :heavy_minus_sign:                                                           | N/A                                                                          |
| `customText`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `inserted`                                                                   | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `fieldMeta`                                                                  | *operations.DocumentFieldMetaUnion*                                          | :heavy_check_mark:                                                           | N/A                                                                          |