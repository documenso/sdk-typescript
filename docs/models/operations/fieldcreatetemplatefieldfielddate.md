# FieldCreateTemplateFieldFieldDate

## Example Usage

```typescript
import { FieldCreateTemplateFieldFieldDate } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldFieldDate = {
  type: "DATE",
  recipientId: 6089.93,
  pageNumber: 9248.7,
  pageX: 5738.25,
  pageY: 7137.43,
  width: 8393.82,
  height: 860.55,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [operations.FieldCreateTemplateFieldTypeDateRequest1](../../models/operations/fieldcreatetemplatefieldtypedaterequest1.md)         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `fieldMeta`                                                                                                                        | [operations.FieldCreateTemplateFieldFieldMetaDateRequest](../../models/operations/fieldcreatetemplatefieldfieldmetadaterequest.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `recipientId`                                                                                                                      | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The ID of the recipient to create the field for.                                                                                   |
| `pageNumber`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The page number the field will be on.                                                                                              |
| `pageX`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The X coordinate of where the field will be placed.                                                                                |
| `pageY`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The Y coordinate of where the field will be placed.                                                                                |
| `width`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The width of the field.                                                                                                            |
| `height`                                                                                                                           | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The height of the field.                                                                                                           |