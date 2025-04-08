# RecipientCreateTemplateRecipientAuthOptions

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                   | [operations.RecipientCreateTemplateRecipientAccessAuthResponse](../../models/operations/recipientcreatetemplaterecipientaccessauthresponse.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to access the document.                                                                  |
| `actionAuth`                                                                                                                                   | [operations.RecipientCreateTemplateRecipientActionAuthResponse](../../models/operations/recipientcreatetemplaterecipientactionauthresponse.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to sign the document.                                                                    |