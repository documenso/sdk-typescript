# Field1

## Example Usage

```typescript
import { Field1 } from "@documenso/sdk-typescript/models/operations";

let value: Field1 = {
  type: "SIGNATURE",
  recipientId: 9707.32,
  pageNumber: 38.6,
  pageX: 1785.8,
  pageY: 6128.67,
  width: 813.69,
  height: 8818.97,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | [operations.FieldType](../../models/operations/fieldtype.md) | :heavy_check_mark:                                           | N/A                                                          |
| `recipientId`                                                | *number*                                                     | :heavy_check_mark:                                           | The ID of the recipient to create the field for.             |
| `pageNumber`                                                 | *number*                                                     | :heavy_check_mark:                                           | The page number the field will be on.                        |
| `pageX`                                                      | *number*                                                     | :heavy_check_mark:                                           | The X coordinate of where the field will be placed.          |
| `pageY`                                                      | *number*                                                     | :heavy_check_mark:                                           | The Y coordinate of where the field will be placed.          |
| `width`                                                      | *number*                                                     | :heavy_check_mark:                                           | The width of the field.                                      |
| `height`                                                     | *number*                                                     | :heavy_check_mark:                                           | The height of the field.                                     |