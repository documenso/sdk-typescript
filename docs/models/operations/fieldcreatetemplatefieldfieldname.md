# FieldCreateTemplateFieldFieldName

## Example Usage

```typescript
import { FieldCreateTemplateFieldFieldName } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldFieldName = {
  type: "NAME",
  recipientId: 9027.94,
  pageNumber: 4875.93,
  pageX: 5463.14,
  pageY: 4360.74,
  width: 6465.21,
  height: 9142.6,
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                             | [operations.FieldCreateTemplateFieldTypeNameRequest1](../../models/operations/fieldcreatetemplatefieldtypenamerequest1.md)         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `fieldMeta`                                                                                                                        | [operations.FieldCreateTemplateFieldFieldMetaNameRequest](../../models/operations/fieldcreatetemplatefieldfieldmetanamerequest.md) | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `recipientId`                                                                                                                      | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The ID of the recipient to create the field for.                                                                                   |
| `pageNumber`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The page number the field will be on.                                                                                              |
| `pageX`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The X coordinate of where the field will be placed.                                                                                |
| `pageY`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The Y coordinate of where the field will be placed.                                                                                |
| `width`                                                                                                                            | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The width of the field.                                                                                                            |
| `height`                                                                                                                           | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The height of the field.                                                                                                           |