# EnvelopeFieldGetResponse

Successful response

## Example Usage

```typescript
import { EnvelopeFieldGetResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeFieldGetResponse = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "RADIO",
  id: 3555.71,
  secondaryId: "<id>",
  recipientId: 9411.42,
  page: 3449.44,
  positionX: "<value>",
  positionY: "<value>",
  width: "<value>",
  height: "<value>",
  customText: "<value>",
  inserted: true,
  fieldMeta: {
    fontSize: 12,
    type: "checkbox",
    direction: "vertical",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `envelopeId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `envelopeItemId`                                                                           | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [operations.EnvelopeFieldGetTypeEnum](../../models/operations/envelopefieldgettypeenum.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `secondaryId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `recipientId`                                                                              | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `page`                                                                                     | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `positionX`                                                                                | *any*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `positionY`                                                                                | *any*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `width`                                                                                    | *any*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `height`                                                                                   | *any*                                                                                      | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customText`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `inserted`                                                                                 | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `fieldMeta`                                                                                | *operations.EnvelopeFieldGetFieldMetaUnion*                                                | :heavy_check_mark:                                                                         | N/A                                                                                        |