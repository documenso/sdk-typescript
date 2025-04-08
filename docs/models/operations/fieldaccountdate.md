# FieldAccountDate

## Example Usage

```typescript
import { FieldAccountDate } from "@documenso/sdk-typescript/models/operations";

let value: FieldAccountDate = {
  type: "DATE",
  pageNumber: 7094.78,
  pageX: 4659.23,
  pageY: 7063.61,
  width: 107.05,
  height: 893.44,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [operations.TypeAccountDate1](../../models/operations/typeaccountdate1.md)         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `fieldMeta`                                                                        | [operations.FieldMetaAccountDate](../../models/operations/fieldmetaaccountdate.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `pageNumber`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | The page number the field will be on.                                              |
| `pageX`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The X coordinate of where the field will be placed.                                |
| `pageY`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The Y coordinate of where the field will be placed.                                |
| `width`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The width of the field.                                                            |
| `height`                                                                           | *number*                                                                           | :heavy_check_mark:                                                                 | The height of the field.                                                           |