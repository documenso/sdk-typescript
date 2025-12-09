# RecipientUpdateTemplateRecipientAuthOptions

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientAuthOptions = {
  accessAuth: [
    "TWO_FACTOR_AUTH",
  ],
  actionAuth: [
    "PASSKEY",
  ],
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accessAuth`                                                                                                                                           | [operations.RecipientUpdateTemplateRecipientAuthOptionsAccessAuth](../../models/operations/recipientupdatetemplaterecipientauthoptionsaccessauth.md)[] | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `actionAuth`                                                                                                                                           | [operations.RecipientUpdateTemplateRecipientAuthOptionsActionAuth](../../models/operations/recipientupdatetemplaterecipientauthoptionsactionauth.md)[] | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |