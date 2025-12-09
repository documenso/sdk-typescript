# EnvelopeRecipientGetField

## Example Usage

```typescript
import { EnvelopeRecipientGetField } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeRecipientGetField = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "CHECKBOX",
  id: 8088.54,
  secondaryId: "<id>",
  recipientId: 3788.4,
  page: 1914.88,
  positionX: "<value>",
  positionY: "<value>",
  width: "<value>",
  height: "<value>",
  customText: "<value>",
  inserted: false,
  fieldMeta: {
    fontSize: 12,
    type: "text",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `envelopeItemId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [operations.EnvelopeRecipientGetTypeEnum](../../models/operations/enveloperecipientgettypeenum.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `secondaryId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `recipientId`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `page`                                                                                             | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `positionX`                                                                                        | *any*                                                                                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `positionY`                                                                                        | *any*                                                                                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `width`                                                                                            | *any*                                                                                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `height`                                                                                           | *any*                                                                                              | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `customText`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `inserted`                                                                                         | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `fieldMeta`                                                                                        | *operations.EnvelopeRecipientGetFieldMetaUnion*                                                    | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `documentId`                                                                                       | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `templateId`                                                                                       | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |