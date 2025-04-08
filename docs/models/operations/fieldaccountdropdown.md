# FieldAccountDropdown

## Example Usage

```typescript
import { FieldAccountDropdown } from "@documenso/sdk-typescript/models/operations";

let value: FieldAccountDropdown = {
  type: "DROPDOWN",
  pageNumber: 6845.16,
  pageX: 9424.89,
  pageY: 7008.55,
  width: 9839.88,
  height: 6861.63,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.TypeAccountDropdown1](../../models/operations/typeaccountdropdown1.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `fieldMeta`                                                                                | [operations.FieldMetaAccountDropdown](../../models/operations/fieldmetaaccountdropdown.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `pageNumber`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | The page number the field will be on.                                                      |
| `pageX`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The X coordinate of where the field will be placed.                                        |
| `pageY`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The Y coordinate of where the field will be placed.                                        |
| `width`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The width of the field.                                                                    |
| `height`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | The height of the field.                                                                   |