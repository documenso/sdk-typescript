# FieldCreateTemplateFieldField1

## Example Usage

```typescript
import { FieldCreateTemplateFieldField1 } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldField1 = {
  type: "SIGNATURE",
  recipientId: 1602.6,
  pageNumber: 7296.12,
  pageX: 6090.94,
  pageY: 1851.16,
  width: 62.03,
  height: 92.84,
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