# FieldCreateTemplateFieldField2

## Example Usage

```typescript
import { FieldCreateTemplateFieldField2 } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldField2 = {
  type: "FREE_SIGNATURE",
  recipientId: 5124.08,
  pageNumber: 3017.01,
  pageX: 8618.23,
  pageY: 8443.27,
  width: 3154.65,
  height: 5995.81,
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