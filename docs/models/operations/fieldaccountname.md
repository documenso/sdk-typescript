# FieldAccountName

## Example Usage

```typescript
import { FieldAccountName } from "@documenso/sdk-typescript/models/operations";

let value: FieldAccountName = {
  type: "NAME",
  pageNumber: 2108.26,
  pageX: 4266.41,
  pageY: 1094.32,
  width: 2454.7,
  height: 4220.4,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [operations.TypeAccountName1](../../models/operations/typeaccountname1.md)         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `fieldMeta`                                                                        | [operations.FieldMetaAccountName](../../models/operations/fieldmetaaccountname.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `pageNumber`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | The page number the field will be on.                                              |
| `pageX`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The X coordinate of where the field will be placed.                                |
| `pageY`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The Y coordinate of where the field will be placed.                                |
| `width`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The width of the field.                                                            |
| `height`                                                                           | *number*                                                                           | :heavy_check_mark:                                                                 | The height of the field.                                                           |