# One

## Example Usage

```typescript
import { One } from "@documenso/sdk-typescript/models/operations";

let value: One = {
  type: "SIGNATURE",
  pageNumber: 3738.13,
  pageX: 5876,
  pageY: 2728.22,
  width: 3708.53,
  height: 1970.54,
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