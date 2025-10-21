# DocumentGetField

## Example Usage

```typescript
import { DocumentGetField } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetField = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "NAME",
  id: 360.06,
  secondaryId: "<id>",
  recipientId: 472.22,
  page: 3997.02,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "checkbox",
    direction: "vertical",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `envelopeId`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `envelopeItemId`                                                                   | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | [operations.DocumentGetFieldType](../../models/operations/documentgetfieldtype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `id`                                                                               | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `secondaryId`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `recipientId`                                                                      | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `page`                                                                             | *number*                                                                           | :heavy_check_mark:                                                                 | The page number of the field on the document. Starts from 1.                       |
| `positionX`                                                                        | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `positionY`                                                                        | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `width`                                                                            | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `height`                                                                           | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `customText`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `inserted`                                                                         | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `fieldMeta`                                                                        | *operations.DocumentGetFieldMetaUnion*                                             | :heavy_check_mark:                                                                 | N/A                                                                                |
| `documentId`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `templateId`                                                                       | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |