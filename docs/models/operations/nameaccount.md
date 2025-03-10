# NameAccount

## Example Usage

```typescript
import { NameAccount } from "@documenso/sdk-typescript/models/operations";

let value: NameAccount = {
  type: "NAME",
  pageNumber: 1314.82,
  pageX: 553.74,
  pageY: 3015.98,
  width: 2621.18,
  height: 4561.41,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [operations.TypeAccountName](../../models/operations/typeaccountname.md)           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `fieldMeta`                                                                        | [operations.FieldMetaNameAccount](../../models/operations/fieldmetanameaccount.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `pageNumber`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | The page number the field will be on.                                              |
| `pageX`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The X coordinate of where the field will be placed.                                |
| `pageY`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The Y coordinate of where the field will be placed.                                |
| `width`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The width of the field.                                                            |
| `height`                                                                           | *number*                                                                           | :heavy_check_mark:                                                                 | The height of the field.                                                           |