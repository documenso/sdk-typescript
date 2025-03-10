# DocumentFields

## Example Usage

```typescript
import { DocumentFields } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFields = {
  type: "EMAIL",
  id: 708.69,
  secondaryId: "<id>",
  documentId: 2927.94,
  templateId: 1523.54,
  recipientId: 4174.86,
  page: 1312.89,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "number",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [operations.DocumentFieldsType](../../models/operations/documentfieldstype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `id`                                                                           | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `secondaryId`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `documentId`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `templateId`                                                                   | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `recipientId`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `page`                                                                         | *number*                                                                       | :heavy_check_mark:                                                             | The page number of the field on the document. Starts from 1.                   |
| `positionX`                                                                    | *any*                                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `positionY`                                                                    | *any*                                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `width`                                                                        | *any*                                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `height`                                                                       | *any*                                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |
| `customText`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `inserted`                                                                     | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `fieldMeta`                                                                    | *operations.DocumentCreateDocumentTemporaryFieldMeta*                          | :heavy_check_mark:                                                             | N/A                                                                            |