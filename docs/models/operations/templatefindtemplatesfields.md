# TemplateFindTemplatesFields

## Example Usage

```typescript
import { TemplateFindTemplatesFields } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesFields = {
  type: "FREE_SIGNATURE",
  id: 884361,
  secondaryId: "<id>",
  documentId: 769156,
  templateId: 711871,
  recipientId: 53733,
  page: 3962.23,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "name",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.TemplateFindTemplatesTemplatesType](../../models/operations/templatefindtemplatestemplatestype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `id`                                                                                                           | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `secondaryId`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `documentId`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `templateId`                                                                                                   | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `recipientId`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `page`                                                                                                         | *number*                                                                                                       | :heavy_check_mark:                                                                                             | The page number of the field on the document. Starts from 1.                                                   |
| `positionX`                                                                                                    | *any*                                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `positionY`                                                                                                    | *any*                                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `width`                                                                                                        | *any*                                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `height`                                                                                                       | *any*                                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `customText`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `inserted`                                                                                                     | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `fieldMeta`                                                                                                    | *operations.TemplateFindTemplatesFieldMeta*                                                                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |