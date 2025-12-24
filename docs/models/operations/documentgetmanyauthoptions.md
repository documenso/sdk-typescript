# DocumentGetManyAuthOptions

## Example Usage

```typescript
import { DocumentGetManyAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetManyAuthOptions = {
  globalAccessAuth: [],
  globalActionAuth: [
    "TWO_FACTOR_AUTH",
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                         | [operations.DocumentGetManyGlobalAccessAuth](../../models/operations/documentgetmanyglobalaccessauth.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `globalActionAuth`                                                                                         | [operations.DocumentGetManyGlobalActionAuth](../../models/operations/documentgetmanyglobalactionauth.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |