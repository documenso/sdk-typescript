# FieldUpdateTemplateFieldsFieldResponse

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsFieldResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsFieldResponse = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "TEXT",
  id: 3097.8,
  secondaryId: "<id>",
  recipientId: 375.86,
  page: 4055.95,
  positionX: "<value>",
  positionY: "<value>",
  width: "<value>",
  height: "<value>",
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    fontSize: 12,
    type: "checkbox",
    direction: "vertical",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `envelopeItemId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [operations.FieldUpdateTemplateFieldsTypeResponse](../../models/operations/fieldupdatetemplatefieldstyperesponse.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `id`                                                                                                                 | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `secondaryId`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `recipientId`                                                                                                        | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `page`                                                                                                               | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `positionX`                                                                                                          | *any*                                                                                                                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `positionY`                                                                                                          | *any*                                                                                                                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `width`                                                                                                              | *any*                                                                                                                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `height`                                                                                                             | *any*                                                                                                                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `customText`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `inserted`                                                                                                           | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `fieldMeta`                                                                                                          | *operations.FieldUpdateTemplateFieldsFieldMetaUnion*                                                                 | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `documentId`                                                                                                         | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `templateId`                                                                                                         | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |