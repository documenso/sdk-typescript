# DocumentGetField

## Example Usage

```typescript
import { DocumentGetField } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetField = {
  type: "NAME",
  id: 360.06,
  secondaryId: "<id>",
  documentId: null,
  templateId: 8098.07,
  recipientId: 4974.55,
  page: 7914.94,
  customText: "<value>",
  inserted: true,
  fieldMeta: {
    type: "checkbox",
    direction: "vertical",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [operations.DocumentGetFieldType](../../models/operations/documentgetfieldtype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `id`                                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `secondaryId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `documentId`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `templateId`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `recipientId`                                                                      | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `page`                                                                             | *number*                                                                           | :heavy_check_mark:                                                                 | The page number of the field on the document. Starts from 1.                       |
| `positionX`                                                                        | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `positionY`                                                                        | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `width`                                                                            | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `height`                                                                           | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `customText`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `inserted`                                                                         | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `fieldMeta`                                                                        | *operations.DocumentGetFieldMetaUnion*                                             | :heavy_check_mark:                                                                 | N/A                                                                                |