# ChangeProperty

## Example Usage

```typescript
import { ChangeProperty } from "@documenso/sdk-typescript/models/operations";

let value: ChangeProperty = {
  type: "PROPERTY",
  key: "<key>",
  from: null,
  to: true,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | [operations.TypeProperty](../../models/operations/typeproperty.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `key`                                                              | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `from`                                                             | *operations.FromProperty*                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `to`                                                               | *operations.ToProperty*                                            | :heavy_check_mark:                                                 | N/A                                                                |