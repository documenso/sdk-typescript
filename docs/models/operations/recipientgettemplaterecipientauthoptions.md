# RecipientGetTemplateRecipientAuthOptions

## Example Usage

```typescript
import { RecipientGetTemplateRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetTemplateRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `accessAuth`                                                                                                             | [operations.RecipientGetTemplateRecipientAccessAuth](../../models/operations/recipientgettemplaterecipientaccessauth.md) | :heavy_check_mark:                                                                                                       | The type of authentication required for the recipient to access the document.                                            |
| `actionAuth`                                                                                                             | [operations.RecipientGetTemplateRecipientActionAuth](../../models/operations/recipientgettemplaterecipientactionauth.md) | :heavy_check_mark:                                                                                                       | The type of authentication required for the recipient to sign the document.                                              |