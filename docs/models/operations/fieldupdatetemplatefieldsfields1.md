# FieldUpdateTemplateFieldsFields1

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsFields1 } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsFields1 = {
  type: "SIGNATURE",
  id: 5724.5,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.FieldUpdateTemplateFieldsFieldsType](../../models/operations/fieldupdatetemplatefieldsfieldstype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the field to update.                                                                                   |
| `pageNumber`                                                                                                     | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The page number the field will be on.                                                                            |
| `pageX`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The X coordinate of where the field will be placed.                                                              |
| `pageY`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The Y coordinate of where the field will be placed.                                                              |
| `width`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The width of the field.                                                                                          |
| `height`                                                                                                         | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | The height of the field.                                                                                         |