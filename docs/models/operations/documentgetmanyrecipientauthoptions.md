# DocumentGetManyRecipientAuthOptions

## Example Usage

```typescript
import { DocumentGetManyRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetManyRecipientAuthOptions = {
  accessAuth: [
    "ACCOUNT",
  ],
  actionAuth: [
    "EXPLICIT_NONE",
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                   | [operations.DocumentGetManyAccessAuth](../../models/operations/documentgetmanyaccessauth.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `actionAuth`                                                                                   | [operations.DocumentGetManyActionAuth](../../models/operations/documentgetmanyactionauth.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |