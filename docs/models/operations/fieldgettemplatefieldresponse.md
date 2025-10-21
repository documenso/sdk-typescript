# FieldGetTemplateFieldResponse

Successful response

## Example Usage

```typescript
import { FieldGetTemplateFieldResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldGetTemplateFieldResponse = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "EMAIL",
  id: 9395.67,
  secondaryId: "<id>",
  recipientId: 9346.03,
  page: 9753.93,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "dropdown",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `envelopeItemId`                                                                             | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `type`                                                                                       | [operations.FieldGetTemplateFieldType](../../models/operations/fieldgettemplatefieldtype.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
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
| `fieldMeta`                                                                                  | *operations.FieldGetTemplateFieldFieldMetaUnion*                                             | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `documentId`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `templateId`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |