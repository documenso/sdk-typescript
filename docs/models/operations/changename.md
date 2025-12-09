# ChangeName

## Example Usage

```typescript
import { ChangeName } from "@documenso/sdk-typescript/models/operations";

let value: ChangeName = {
  from: [
    "<value 1>",
    "<value 2>",
  ],
  to: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  type: "NAME",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `from`                        | *operations.ChangeFromUnion3* | :heavy_check_mark:            | N/A                           |
| `to`                          | *operations.ChangeToUnion3*   | :heavy_check_mark:            | N/A                           |
| `type`                        | *"NAME"*                      | :heavy_check_mark:            | N/A                           |