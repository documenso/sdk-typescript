# TextAccount

## Example Usage

```typescript
import { TextAccount } from "@documenso/sdk-typescript/models/operations";

let value: TextAccount = {
  type: "TEXT",
  pageNumber: 811.01,
  pageX: 4072.41,
  pageY: 2322.34,
  width: 1324.87,
  height: 534.27,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | [operations.TypeAccountText](../../models/operations/typeaccounttext.md)           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `fieldMeta`                                                                        | [operations.FieldMetaTextAccount](../../models/operations/fieldmetatextaccount.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `pageNumber`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | The page number the field will be on.                                              |
| `pageX`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The X coordinate of where the field will be placed.                                |
| `pageY`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The Y coordinate of where the field will be placed.                                |
| `width`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The width of the field.                                                            |
| `height`                                                                           | *number*                                                                           | :heavy_check_mark:                                                                 | The height of the field.                                                           |