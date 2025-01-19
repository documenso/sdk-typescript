# One

## Example Usage

```typescript
import { One } from "@documenso/sdk-typescript/models/operations";

let value: One = {
  type: "SIGNATURE",
  pageNumber: 4561.41,
  pageX: 6832.82,
  pageY: 6956.26,
  width: 2835.19,
  height: 3799.27,
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `type`                                              | [operations.Type](../../models/operations/type.md)  | :heavy_check_mark:                                  | N/A                                                 |
| `pageNumber`                                        | *number*                                            | :heavy_check_mark:                                  | The page number the field will be on.               |
| `pageX`                                             | *number*                                            | :heavy_check_mark:                                  | The X coordinate of where the field will be placed. |
| `pageY`                                             | *number*                                            | :heavy_check_mark:                                  | The Y coordinate of where the field will be placed. |
| `width`                                             | *number*                                            | :heavy_check_mark:                                  | The width of the field.                             |
| `height`                                            | *number*                                            | :heavy_check_mark:                                  | The height of the field.                            |