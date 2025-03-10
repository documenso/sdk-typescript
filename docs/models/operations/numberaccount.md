# NumberAccount

## Example Usage

```typescript
import { NumberAccount } from "@documenso/sdk-typescript/models/operations";

let value: NumberAccount = {
  type: "NUMBER",
  pageNumber: 8621.92,
  pageX: 9729.2,
  pageY: 9608.35,
  width: 9065.56,
  height: 7740.48,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [operations.TypeAccountNumber](../../models/operations/typeaccountnumber.md)           | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `fieldMeta`                                                                            | [operations.FieldMetaNumberAccount](../../models/operations/fieldmetanumberaccount.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `pageNumber`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | The page number the field will be on.                                                  |
| `pageX`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | The X coordinate of where the field will be placed.                                    |
| `pageY`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | The Y coordinate of where the field will be placed.                                    |
| `width`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | The width of the field.                                                                |
| `height`                                                                               | *number*                                                                               | :heavy_check_mark:                                                                     | The height of the field.                                                               |