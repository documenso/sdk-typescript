# FieldAccountEmail

## Example Usage

```typescript
import { FieldAccountEmail } from "@documenso/sdk-typescript/models/operations";

let value: FieldAccountEmail = {
  type: "EMAIL",
  pageNumber: 3100.48,
  pageX: 5194.55,
  pageY: 8301.68,
  width: 5624.76,
  height: 6587.83,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | [operations.TypeAccountEmail1](../../models/operations/typeaccountemail1.md)         | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `fieldMeta`                                                                          | [operations.FieldMetaAccountEmail](../../models/operations/fieldmetaaccountemail.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `pageNumber`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | The page number the field will be on.                                                |
| `pageX`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | The X coordinate of where the field will be placed.                                  |
| `pageY`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | The Y coordinate of where the field will be placed.                                  |
| `width`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | The width of the field.                                                              |
| `height`                                                                             | *number*                                                                             | :heavy_check_mark:                                                                   | The height of the field.                                                             |