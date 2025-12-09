# ChangeDimension

## Example Usage

```typescript
import { ChangeDimension } from "@documenso/sdk-typescript/models/operations";

let value: ChangeDimension = {
  type: "DIMENSION",
  from: {
    width: 3148.09,
    height: 626.91,
  },
  to: {
    width: 76.63,
    height: 9050.09,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | *"DIMENSION"*                                                    | :heavy_check_mark:                                               | N/A                                                              |
| `from`                                                           | [operations.ChangeFrom1](../../models/operations/changefrom1.md) | :heavy_check_mark:                                               | N/A                                                              |
| `to`                                                             | [operations.ChangeTo1](../../models/operations/changeto1.md)     | :heavy_check_mark:                                               | N/A                                                              |