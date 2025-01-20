# FieldCreateTemplateFieldField1

## Example Usage

```typescript
import { FieldCreateTemplateFieldField1 } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldField1 = {
  type: "SIGNATURE",
  recipientId: 4301.81,
  pageNumber: 9090.93,
  pageX: 1873.61,
  pageY: 6977.29,
  width: 9703.76,
  height: 1752.75,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [operations.FieldCreateTemplateFieldFieldType](../../models/operations/fieldcreatetemplatefieldfieldtype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `recipientId`                                                                                                | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the recipient to create the field for.                                                             |
| `pageNumber`                                                                                                 | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The page number the field will be on.                                                                        |
| `pageX`                                                                                                      | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The X coordinate of where the field will be placed.                                                          |
| `pageY`                                                                                                      | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The Y coordinate of where the field will be placed.                                                          |
| `width`                                                                                                      | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The width of the field.                                                                                      |
| `height`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | The height of the field.                                                                                     |