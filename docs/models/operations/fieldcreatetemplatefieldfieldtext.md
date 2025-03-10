# FieldCreateTemplateFieldFieldText

## Example Usage

```typescript
import { FieldCreateTemplateFieldFieldText } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldFieldText = {
  type: "TEXT",
  recipientId: 5008.28,
  pageNumber: 2864.86,
  pageX: 2851.75,
  pageY: 3559.27,
  width: 3147.33,
  height: 5786.1,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.FieldCreateTemplateFieldFieldTypeText](../../models/operations/fieldcreatetemplatefieldfieldtypetext.md)           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `fieldMeta`                                                                                                                    | [operations.FieldCreateTemplateFieldFieldFieldMetaText](../../models/operations/fieldcreatetemplatefieldfieldfieldmetatext.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `recipientId`                                                                                                                  | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the recipient to create the field for.                                                                               |
| `pageNumber`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The page number the field will be on.                                                                                          |
| `pageX`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The X coordinate of where the field will be placed.                                                                            |
| `pageY`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The Y coordinate of where the field will be placed.                                                                            |
| `width`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The width of the field.                                                                                                        |
| `height`                                                                                                                       | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The height of the field.                                                                                                       |