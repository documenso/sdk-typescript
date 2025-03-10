# FieldCreateTemplateFieldFieldName

## Example Usage

```typescript
import { FieldCreateTemplateFieldFieldName } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldFieldName = {
  type: "NAME",
  recipientId: 3816.54,
  pageNumber: 8855.23,
  pageX: 1480.38,
  pageY: 8239.9,
  width: 149.76,
  height: 4573.89,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.FieldCreateTemplateFieldFieldTypeName](../../models/operations/fieldcreatetemplatefieldfieldtypename.md)           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `fieldMeta`                                                                                                                    | [operations.FieldCreateTemplateFieldFieldFieldMetaName](../../models/operations/fieldcreatetemplatefieldfieldfieldmetaname.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `recipientId`                                                                                                                  | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the recipient to create the field for.                                                                               |
| `pageNumber`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The page number the field will be on.                                                                                          |
| `pageX`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The X coordinate of where the field will be placed.                                                                            |
| `pageY`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The Y coordinate of where the field will be placed.                                                                            |
| `width`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The width of the field.                                                                                                        |
| `height`                                                                                                                       | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The height of the field.                                                                                                       |