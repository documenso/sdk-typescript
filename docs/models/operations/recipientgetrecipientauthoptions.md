# RecipientGetRecipientAuthOptions

## Example Usage

```typescript
import { RecipientGetRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "ACCOUNT",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                             | [operations.RecipientGetRecipientAccessAuth](../../models/operations/recipientgetrecipientaccessauth.md) | :heavy_check_mark:                                                                                       | The type of authentication required for the recipient to access the document.                            |
| `actionAuth`                                                                                             | [operations.RecipientGetRecipientActionAuth](../../models/operations/recipientgetrecipientactionauth.md) | :heavy_check_mark:                                                                                       | The type of authentication required for the recipient to sign the document.                              |