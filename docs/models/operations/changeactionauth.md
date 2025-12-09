# ChangeActionAuth

## Example Usage

```typescript
import { ChangeActionAuth } from "@documenso/sdk-typescript/models/operations";

let value: ChangeActionAuth = {
  from: [
    "<value 1>",
    "<value 2>",
  ],
  to: "<value>",
  type: "ACTION_AUTH",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `from`                        | *operations.ChangeFromUnion1* | :heavy_check_mark:            | N/A                           |
| `to`                          | *operations.ChangeToUnion1*   | :heavy_check_mark:            | N/A                           |
| `type`                        | *"ACTION_AUTH"*               | :heavy_check_mark:            | N/A                           |