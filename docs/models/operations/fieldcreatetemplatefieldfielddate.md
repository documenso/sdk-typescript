# FieldCreateTemplateFieldFieldDate

## Example Usage

```typescript
import { FieldCreateTemplateFieldFieldDate } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldFieldDate = {
  type: "DATE",
  recipientId: 2687.49,
  pageNumber: 1297.62,
  pageX: 588.08,
  pageY: 5757.53,
  width: 1861.3,
  height: 92.48,
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.FieldCreateTemplateFieldFieldTypeDate](../../models/operations/fieldcreatetemplatefieldfieldtypedate.md)           | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `fieldMeta`                                                                                                                    | [operations.FieldCreateTemplateFieldFieldFieldMetaDate](../../models/operations/fieldcreatetemplatefieldfieldfieldmetadate.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `recipientId`                                                                                                                  | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the recipient to create the field for.                                                                               |
| `pageNumber`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The page number the field will be on.                                                                                          |
| `pageX`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The X coordinate of where the field will be placed.                                                                            |
| `pageY`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The Y coordinate of where the field will be placed.                                                                            |
| `width`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The width of the field.                                                                                                        |
| `height`                                                                                                                       | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The height of the field.                                                                                                       |