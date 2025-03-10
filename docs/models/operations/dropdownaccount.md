# DropdownAccount

## Example Usage

```typescript
import { DropdownAccount } from "@documenso/sdk-typescript/models/operations";

let value: DropdownAccount = {
  type: "DROPDOWN",
  pageNumber: 8742.88,
  pageX: 2930.2,
  pageY: 8489.44,
  width: 6178.77,
  height: 132.36,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.TypeAccountDropdown](../../models/operations/typeaccountdropdown.md)           | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `fieldMeta`                                                                                | [operations.FieldMetaDropdownAccount](../../models/operations/fieldmetadropdownaccount.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `pageNumber`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | The page number the field will be on.                                                      |
| `pageX`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The X coordinate of where the field will be placed.                                        |
| `pageY`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The Y coordinate of where the field will be placed.                                        |
| `width`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The width of the field.                                                                    |
| `height`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | The height of the field.                                                                   |