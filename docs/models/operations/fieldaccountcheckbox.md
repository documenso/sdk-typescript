# FieldAccountCheckbox

## Example Usage

```typescript
import { FieldAccountCheckbox } from "@documenso/sdk-typescript/models/operations";

let value: FieldAccountCheckbox = {
  type: "CHECKBOX",
  pageNumber: 1043.67,
  pageX: 593.49,
  pageY: 4384.3,
  width: 8626.07,
  height: 6817.06,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.TypeAccountCheckbox1](../../models/operations/typeaccountcheckbox1.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `fieldMeta`                                                                                | [operations.FieldMetaAccountCheckbox](../../models/operations/fieldmetaaccountcheckbox.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `pageNumber`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | The page number the field will be on.                                                      |
| `pageX`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The X coordinate of where the field will be placed.                                        |
| `pageY`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The Y coordinate of where the field will be placed.                                        |
| `width`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The width of the field.                                                                    |
| `height`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | The height of the field.                                                                   |