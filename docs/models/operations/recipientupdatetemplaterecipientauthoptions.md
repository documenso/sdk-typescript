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

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accessAuth`                                                                                                                                     | [operations.RecipientUpdateTemplateRecipientAccessAuthResponse](../../models/operations/recipientupdatetemplaterecipientaccessauthresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `actionAuth`                                                                                                                                     | [operations.RecipientUpdateTemplateRecipientActionAuthResponse](../../models/operations/recipientupdatetemplaterecipientactionauthresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |