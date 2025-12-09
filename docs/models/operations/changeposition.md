# ChangePosition

## Example Usage

```typescript
import { ChangePosition } from "@documenso/sdk-typescript/models/operations";

let value: ChangePosition = {
  type: "POSITION",
  from: {
    page: 6349.45,
    positionX: 9065.35,
    positionY: 5207.41,
  },
  to: {
    page: 3540.14,
    positionX: 9008.77,
    positionY: 3467.71,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `type`                                                           | *"POSITION"*                                                     | :heavy_check_mark:                                               | N/A                                                              |
| `from`                                                           | [operations.ChangeFrom2](../../models/operations/changefrom2.md) | :heavy_check_mark:                                               | N/A                                                              |
| `to`                                                             | [operations.ChangeTo2](../../models/operations/changeto2.md)     | :heavy_check_mark:                                               | N/A                                                              |