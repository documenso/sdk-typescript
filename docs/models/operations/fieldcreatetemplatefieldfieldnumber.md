# FieldCreateTemplateFieldFieldNumber

## Example Usage

```typescript
import { FieldCreateTemplateFieldFieldNumber } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldFieldNumber = {
  type: "NUMBER",
  recipientId: 5494.19,
  pageNumber: 7046.44,
  pageX: 9229.15,
  pageY: 6170.35,
  width: 8878.35,
  height: 7012.57,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [operations.FieldCreateTemplateFieldFieldTypeNumber](../../models/operations/fieldcreatetemplatefieldfieldtypenumber.md)           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `fieldMeta`                                                                                                                        | [operations.FieldCreateTemplateFieldFieldFieldMetaNumber](../../models/operations/fieldcreatetemplatefieldfieldfieldmetanumber.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `recipientId`                                                                                                                      | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The ID of the recipient to create the field for.                                                                                   |
| `pageNumber`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The page number the field will be on.                                                                                              |
| `pageX`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The X coordinate of where the field will be placed.                                                                                |
| `pageY`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The Y coordinate of where the field will be placed.                                                                                |
| `width`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The width of the field.                                                                                                            |
| `height`                                                                                                                           | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The height of the field.                                                                                                           |