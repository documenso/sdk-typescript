# EnvelopeFieldUpdateManyDataResponse

## Example Usage

```typescript
import { EnvelopeFieldUpdateManyDataResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeFieldUpdateManyDataResponse = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "SIGNATURE",
  id: 8624.61,
  secondaryId: "<id>",
  recipientId: 1897.1,
  page: 6402.41,
  positionX: "<value>",
  positionY: "<value>",
  width: "<value>",
  height: "<value>",
  customText: "<value>",
  inserted: true,
  fieldMeta: {
    fontSize: 12,
    type: "email",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `envelopeItemId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [operations.EnvelopeFieldUpdateManyTypeResponse](../../models/operations/envelopefieldupdatemanytyperesponse.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `secondaryId`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `recipientId`                                                                                                    | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `page`                                                                                                           | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `positionX`                                                                                                      | *any*                                                                                                            | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `positionY`                                                                                                      | *any*                                                                                                            | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `width`                                                                                                          | *any*                                                                                                            | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `height`                                                                                                         | *any*                                                                                                            | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `customText`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `inserted`                                                                                                       | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `fieldMeta`                                                                                                      | *operations.EnvelopeFieldUpdateManyFieldMetaUnion*                                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `documentId`                                                                                                     | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `templateId`                                                                                                     | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |