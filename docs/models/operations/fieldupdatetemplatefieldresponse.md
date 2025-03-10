# FieldUpdateTemplateFieldResponse

Successful response

## Example Usage

```typescript
import { FieldUpdateTemplateFieldResponse } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldResponse = {
  type: "EMAIL",
  id: 8207.35,
  secondaryId: "<id>",
  documentId: 9238.79,
  templateId: 4813.07,
  recipientId: 6873.52,
  page: 8010.59,
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    type: "text",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.FieldUpdateTemplateFieldResponseType](../../models/operations/fieldupdatetemplatefieldresponsetype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `id`                                                                                                               | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `secondaryId`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `documentId`                                                                                                       | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `templateId`                                                                                                       | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `recipientId`                                                                                                      | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `page`                                                                                                             | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | The page number of the field on the document. Starts from 1.                                                       |
| `positionX`                                                                                                        | *any*                                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `positionY`                                                                                                        | *any*                                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `width`                                                                                                            | *any*                                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `height`                                                                                                           | *any*                                                                                                              | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `customText`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `inserted`                                                                                                         | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `fieldMeta`                                                                                                        | *operations.FieldUpdateTemplateFieldFieldMeta*                                                                     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |