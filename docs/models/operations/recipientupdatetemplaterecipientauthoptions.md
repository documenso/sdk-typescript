# RecipientUpdateTemplateRecipientAuthOptions

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                   | [operations.RecipientUpdateTemplateRecipientResponseAccessAuth](../../models/operations/recipientupdatetemplaterecipientresponseaccessauth.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to access the document.                                                                  |
| `actionAuth`                                                                                                                                   | [operations.RecipientUpdateTemplateRecipientResponseActionAuth](../../models/operations/recipientupdatetemplaterecipientresponseactionauth.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to sign the document.                                                                    |