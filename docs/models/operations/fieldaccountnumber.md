# FieldAccountNumber

## Example Usage

```typescript
import { FieldAccountNumber } from "@documenso/sdk-typescript/models/operations";

let value: FieldAccountNumber = {
  type: "NUMBER",
  pageNumber: 3857.68,
  pageX: 3638.13,
  pageY: 9783.24,
  width: 4996.05,
  height: 5383.49,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [operations.TypeAccountNumber1](../../models/operations/typeaccountnumber1.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `fieldMeta`                                                                            | [operations.FieldMetaAccountNumber](../../models/operations/fieldmetaaccountnumber.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `pageNumber`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | The page number the field will be on.                                                  |
| `pageX`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | The X coordinate of where the field will be placed.                                    |
| `pageY`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | The Y coordinate of where the field will be placed.                                    |
| `width`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | The width of the field.                                                                |
| `height`                                                                               | *number*                                                                               | :heavy_check_mark:                                                                     | The height of the field.                                                               |