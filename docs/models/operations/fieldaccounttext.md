# FieldAccountText

## Example Usage

```typescript
import { FieldAccountText } from "@documenso/sdk-typescript/models/operations";

let value: FieldAccountText = {
  type: "TEXT",
  pageNumber: 6712.11,
  pageX: 1603.1,
  pageY: 2578.52,
  width: 7602.6,
  height: 8675.65,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [operations.TypeAccountText1](../../models/operations/typeaccounttext1.md)         | :heavy_check_mark:                                                                 | N/A                                                                                |
| `fieldMeta`                                                                        | [operations.FieldMetaAccountText](../../models/operations/fieldmetaaccounttext.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `pageNumber`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | The page number the field will be on.                                              |
| `pageX`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The X coordinate of where the field will be placed.                                |
| `pageY`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The Y coordinate of where the field will be placed.                                |
| `width`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The width of the field.                                                            |
| `height`                                                                           | *number*                                                                           | :heavy_check_mark:                                                                 | The height of the field.                                                           |