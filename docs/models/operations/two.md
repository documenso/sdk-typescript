# Two

## Example Usage

```typescript
import { Two } from "@documenso/sdk-typescript/models/operations";

let value: Two = {
  type: "FREE_SIGNATURE",
  pageNumber: 2703.28,
  pageX: 1314.82,
  pageY: 553.74,
  width: 3015.98,
  height: 2621.18,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `type`                                                         | [operations.FieldsType](../../models/operations/fieldstype.md) | :heavy_check_mark:                                             | N/A                                                            |
| `pageNumber`                                                   | *number*                                                       | :heavy_check_mark:                                             | The page number the field will be on.                          |
| `pageX`                                                        | *number*                                                       | :heavy_check_mark:                                             | The X coordinate of where the field will be placed.            |
| `pageY`                                                        | *number*                                                       | :heavy_check_mark:                                             | The Y coordinate of where the field will be placed.            |
| `width`                                                        | *number*                                                       | :heavy_check_mark:                                             | The width of the field.                                        |
| `height`                                                       | *number*                                                       | :heavy_check_mark:                                             | The height of the field.                                       |