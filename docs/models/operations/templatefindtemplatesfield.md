# TemplateFindTemplatesField

## Example Usage

```typescript
import { TemplateFindTemplatesField } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesField = {
  type: "DATE",
  id: 7270,
  secondaryId: "<id>",
  documentId: 3090.81,
  templateId: 8529.11,
  recipientId: 3354.67,
  page: 6148.64,
  customText: "<value>",
  inserted: false,
  fieldMeta: null,
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [operations.TemplateFindTemplatesFieldType](../../models/operations/templatefindtemplatesfieldtype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `secondaryId`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `documentId`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `templateId`                                                                                           | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `recipientId`                                                                                          | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `page`                                                                                                 | *number*                                                                                               | :heavy_check_mark:                                                                                     | The page number of the field on the document. Starts from 1.                                           |
| `positionX`                                                                                            | *any*                                                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `positionY`                                                                                            | *any*                                                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `width`                                                                                                | *any*                                                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `height`                                                                                               | *any*                                                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `customText`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `inserted`                                                                                             | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `fieldMeta`                                                                                            | *operations.TemplateFindTemplatesFieldMetaUnion*                                                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |