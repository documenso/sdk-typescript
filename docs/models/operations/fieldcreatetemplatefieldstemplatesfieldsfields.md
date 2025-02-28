# FieldCreateTemplateFieldsTemplatesFieldsFields

## Example Usage

```typescript
import { FieldCreateTemplateFieldsTemplatesFieldsFields } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsTemplatesFieldsFields = {
  type: "DROPDOWN",
  id: 528082,
  secondaryId: "<id>",
  documentId: 801274,
  templateId: 50291,
  recipientId: 420910,
  page: 2569.75,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "email",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.FieldCreateTemplateFieldsType](../../models/operations/fieldcreatetemplatefieldstype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
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
| `fieldMeta`                                                                                          | *operations.FieldCreateTemplateFieldsFieldMeta*                                                      | :heavy_check_mark:                                                                                   | N/A                                                                                                  |