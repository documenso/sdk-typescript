# DocumentGetRecipientAuthOptions

## Example Usage

```typescript
import { DocumentGetRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetRecipientAuthOptions = {
  accessAuth: [],
  actionAuth: [
    "EXPLICIT_NONE",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `accessAuth`                                                                           | [operations.DocumentGetAccessAuth](../../models/operations/documentgetaccessauth.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `actionAuth`                                                                           | [operations.DocumentGetActionAuth](../../models/operations/documentgetactionauth.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |