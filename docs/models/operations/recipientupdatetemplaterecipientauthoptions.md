# RecipientUpdateTemplateRecipientAuthOptions

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                                         | [operations.RecipientUpdateTemplateRecipientTemplatesRecipientsAccessAuth](../../models/operations/recipientupdatetemplaterecipienttemplatesrecipientsaccessauth.md) | :heavy_check_mark:                                                                                                                                                   | The type of authentication required for the recipient to access the document.                                                                                        |
| `actionAuth`                                                                                                                                                         | [operations.RecipientUpdateTemplateRecipientTemplatesRecipientsActionAuth](../../models/operations/recipientupdatetemplaterecipienttemplatesrecipientsactionauth.md) | :heavy_check_mark:                                                                                                                                                   | The type of authentication required for the recipient to sign the document.                                                                                          |