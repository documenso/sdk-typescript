# FieldAccountRadio

## Example Usage

```typescript
import { FieldAccountRadio } from "@documenso/sdk-typescript/models/operations";

let value: FieldAccountRadio = {
  type: "RADIO",
  pageNumber: 6509.89,
  pageX: 3531.62,
  pageY: 3316.38,
  width: 6478.49,
  height: 4894.58,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | [operations.TypeAccountRadio1](../../models/operations/typeaccountradio1.md)         | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `fieldMeta`                                                                          | [operations.FieldMetaAccountRadio](../../models/operations/fieldmetaaccountradio.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `pageNumber`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | The page number the field will be on.                                                |
| `pageX`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | The X coordinate of where the field will be placed.                                  |
| `pageY`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | The Y coordinate of where the field will be placed.                                  |
| `width`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | The width of the field.                                                              |
| `height`                                                                             | *number*                                                                             | :heavy_check_mark:                                                                   | The height of the field.                                                             |