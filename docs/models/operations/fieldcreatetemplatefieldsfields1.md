# FieldCreateTemplateFieldsFields1

## Example Usage

```typescript
import { FieldCreateTemplateFieldsFields1 } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsFields1 = {
  type: "SIGNATURE",
  recipientId: 8115.19,
  pageNumber: 4760.84,
  pageX: 5231.56,
  pageY: 2505.2,
  width: 6050.43,
  height: 3029.05,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.FieldCreateTemplateFieldsFieldsType](../../models/operations/fieldcreatetemplatefieldsfieldstype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `recipientId`                                                                                                    | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the recipient to create the field for.                                                                 |
| `pageNumber`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The page number the field will be on.                                                                            |
| `pageX`                                                                                                          | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The X coordinate of where the field will be placed.                                                              |
| `pageY`                                                                                                          | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The Y coordinate of where the field will be placed.                                                              |
| `width`                                                                                                          | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The width of the field.                                                                                          |
| `height`                                                                                                         | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The height of the field.                                                                                         |