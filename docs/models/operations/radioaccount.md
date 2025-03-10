# RadioAccount

## Example Usage

```typescript
import { RadioAccount } from "@documenso/sdk-typescript/models/operations";

let value: RadioAccount = {
  type: "RADIO",
  pageNumber: 1369,
  pageX: 8221.18,
  pageY: 1898.48,
  width: 5113.19,
  height: 2243.17,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | [operations.TypeAccountRadio](../../models/operations/typeaccountradio.md)           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `fieldMeta`                                                                          | [operations.FieldMetaRadioAccount](../../models/operations/fieldmetaradioaccount.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `pageNumber`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | The page number the field will be on.                                                |
| `pageX`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | The X coordinate of where the field will be placed.                                  |
| `pageY`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | The Y coordinate of where the field will be placed.                                  |
| `width`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | The width of the field.                                                              |
| `height`                                                                             | *number*                                                                             | :heavy_check_mark:                                                                   | The height of the field.                                                             |