# FieldCreateTemplateFieldFieldEmail

## Example Usage

```typescript
import { FieldCreateTemplateFieldFieldEmail } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldFieldEmail = {
  type: "EMAIL",
  recipientId: 5371.4,
  pageNumber: 924.48,
  pageX: 8429.21,
  pageY: 9832.03,
  width: 4486.01,
  height: 424.89,
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [operations.FieldCreateTemplateFieldFieldTypeEmail](../../models/operations/fieldcreatetemplatefieldfieldtypeemail.md)           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `fieldMeta`                                                                                                                      | [operations.FieldCreateTemplateFieldFieldFieldMetaEmail](../../models/operations/fieldcreatetemplatefieldfieldfieldmetaemail.md) | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `recipientId`                                                                                                                    | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The ID of the recipient to create the field for.                                                                                 |
| `pageNumber`                                                                                                                     | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The page number the field will be on.                                                                                            |
| `pageX`                                                                                                                          | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The X coordinate of where the field will be placed.                                                                              |
| `pageY`                                                                                                                          | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The Y coordinate of where the field will be placed.                                                                              |
| `width`                                                                                                                          | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The width of the field.                                                                                                          |
| `height`                                                                                                                         | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The height of the field.                                                                                                         |