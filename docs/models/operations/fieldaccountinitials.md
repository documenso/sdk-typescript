# FieldAccountInitials

## Example Usage

```typescript
import { FieldAccountInitials } from "@documenso/sdk-typescript/models/operations";

let value: FieldAccountInitials = {
  type: "INITIALS",
  pageNumber: 9161.99,
  pageX: 5530.59,
  pageY: 649.42,
  width: 6255.52,
  height: 8456.49,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.TypeAccountInitials1](../../models/operations/typeaccountinitials1.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `fieldMeta`                                                                                | [operations.FieldMetaAccountInitials](../../models/operations/fieldmetaaccountinitials.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `pageNumber`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | The page number the field will be on.                                                      |
| `pageX`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The X coordinate of where the field will be placed.                                        |
| `pageY`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The Y coordinate of where the field will be placed.                                        |
| `width`                                                                                    | *number*                                                                                   | :heavy_check_mark:                                                                         | The width of the field.                                                                    |
| `height`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | The height of the field.                                                                   |