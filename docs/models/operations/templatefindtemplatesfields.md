# TemplateFindTemplatesFields

## Example Usage

```typescript
import { TemplateFindTemplatesFields } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesFields = {
  type: "EMAIL",
  id: 2961.28,
  secondaryId: "<id>",
  documentId: 4934.07,
  templateId: 6570.44,
  recipientId: 4610.5,
  page: 9351.61,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "checkbox",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [operations.TemplateFindTemplatesFieldsType](../../models/operations/templatefindtemplatesfieldstype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `secondaryId`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `documentId`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `templateId`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `recipientId`                                                                                            | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `page`                                                                                                   | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The page number of the field on the document. Starts from 1.                                             |
| `positionX`                                                                                              | *any*                                                                                                    | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `positionY`                                                                                              | *any*                                                                                                    | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `width`                                                                                                  | *any*                                                                                                    | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `height`                                                                                                 | *any*                                                                                                    | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `customText`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `inserted`                                                                                               | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `fieldMeta`                                                                                              | *operations.TemplateFindTemplatesFieldMeta*                                                              | :heavy_check_mark:                                                                                       | N/A                                                                                                      |