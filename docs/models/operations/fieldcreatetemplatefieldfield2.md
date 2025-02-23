# FieldCreateTemplateFieldField2

## Example Usage

```typescript
import { FieldCreateTemplateFieldField2 } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldField2 = {
  type: "FREE_SIGNATURE",
  recipientId: 149.76,
  pageNumber: 4573.89,
  pageX: 6443.97,
  pageY: 603.79,
  width: 6147.63,
  height: 9444.05,
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                     | [operations.FieldCreateTemplateFieldFieldTemplatesFieldsType](../../models/operations/fieldcreatetemplatefieldfieldtemplatesfieldstype.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `recipientId`                                                                                                                              | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The ID of the recipient to create the field for.                                                                                           |
| `pageNumber`                                                                                                                               | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The page number the field will be on.                                                                                                      |
| `pageX`                                                                                                                                    | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The X coordinate of where the field will be placed.                                                                                        |
| `pageY`                                                                                                                                    | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The Y coordinate of where the field will be placed.                                                                                        |
| `width`                                                                                                                                    | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The width of the field.                                                                                                                    |
| `height`                                                                                                                                   | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The height of the field.                                                                                                                   |