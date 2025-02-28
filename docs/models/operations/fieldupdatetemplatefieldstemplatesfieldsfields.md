# FieldUpdateTemplateFieldsTemplatesFieldsFields

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsTemplatesFieldsFields } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsTemplatesFieldsFields = {
  type: "DATE",
  id: 478773,
  secondaryId: "<id>",
  documentId: 243941,
  templateId: 722151,
  recipientId: 112788,
  page: 9904.54,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "checkbox",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.FieldUpdateTemplateFieldsType](../../models/operations/fieldupdatetemplatefieldstype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `secondaryId`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `documentId`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `templateId`                                                                                         | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `recipientId`                                                                                        | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `page`                                                                                               | *number*                                                                                             | :heavy_check_mark:                                                                                   | The page number of the field on the document. Starts from 1.                                         |
| `positionX`                                                                                          | *any*                                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `positionY`                                                                                          | *any*                                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `width`                                                                                              | *any*                                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `height`                                                                                             | *any*                                                                                                | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `customText`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `inserted`                                                                                           | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `fieldMeta`                                                                                          | *operations.FieldUpdateTemplateFieldsFieldMeta*                                                      | :heavy_check_mark:                                                                                   | N/A                                                                                                  |