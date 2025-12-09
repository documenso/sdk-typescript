# ChangeRole

## Example Usage

```typescript
import { ChangeRole } from "@documenso/sdk-typescript/models/operations";

let value: ChangeRole = {
  from: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  to: [
    "<value 1>",
    "<value 2>",
  ],
  type: "ROLE",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `from`                        | *operations.ChangeFromUnion4* | :heavy_check_mark:            | N/A                           |
| `to`                          | *operations.ChangeToUnion4*   | :heavy_check_mark:            | N/A                           |
| `type`                        | *"ROLE"*                      | :heavy_check_mark:            | N/A                           |