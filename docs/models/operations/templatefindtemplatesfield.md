# TemplateFindTemplatesField

## Example Usage

```typescript
import { TemplateFindTemplatesField } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesField = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "DATE",
  id: 7270,
  secondaryId: "<id>",
  recipientId: 1138.27,
  page: 3090.81,
  positionX: "<value>",
  positionY: "<value>",
  width: "<value>",
  height: "<value>",
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    fontSize: 12,
    type: "email",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `envelopeId`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `envelopeItemId`                                                                                       | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.TemplateFindTemplatesFieldType](../../models/operations/templatefindtemplatesfieldtype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `secondaryId`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `recipientId`                                                                                          | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `page`                                                                                                 | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `positionX`                                                                                            | *any*                                                                                                  | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `positionY`                                                                                            | *any*                                                                                                  | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `width`                                                                                                | *any*                                                                                                  | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `height`                                                                                               | *any*                                                                                                  | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `customText`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `inserted`                                                                                             | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `fieldMeta`                                                                                            | *operations.TemplateFindTemplatesFieldMetaUnion*                                                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `documentId`                                                                                           | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `templateId`                                                                                           | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |