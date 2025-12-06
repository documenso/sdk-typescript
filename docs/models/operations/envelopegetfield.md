# EnvelopeGetField

## Example Usage

```typescript
import { EnvelopeGetField } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeGetField = {
  envelopeId: "<id>",
  envelopeItemId: "<id>",
  type: "NAME",
  id: 2215.48,
  secondaryId: "<id>",
  recipientId: 7940.27,
  page: 2465.76,
  positionX: "<value>",
  positionY: "<value>",
  width: "<value>",
  height: "<value>",
  customText: "<value>",
  inserted: true,
  fieldMeta: {
    fontSize: 12,
    type: "date",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `envelopeId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `envelopeItemId`                                                                           | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [operations.EnvelopeGetFieldTypeEnum](../../models/operations/envelopegetfieldtypeenum.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
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
| `fieldMeta`                                                                                | *operations.EnvelopeGetFieldMetaUnion*                                                     | :heavy_check_mark:                                                                         | N/A                                                                                        |