# RecipientCreateTemplateRecipientAuthOptions

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "EXPLICIT_NONE",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                                         | [operations.RecipientCreateTemplateRecipientTemplatesRecipientsAccessAuth](../../models/operations/recipientcreatetemplaterecipienttemplatesrecipientsaccessauth.md) | :heavy_check_mark:                                                                                                                                                   | The type of authentication required for the recipient to access the document.                                                                                        |
| `actionAuth`                                                                                                                                                         | [operations.RecipientCreateTemplateRecipientTemplatesRecipientsActionAuth](../../models/operations/recipientcreatetemplaterecipienttemplatesrecipientsactionauth.md) | :heavy_check_mark:                                                                                                                                                   | The type of authentication required for the recipient to sign the document.                                                                                          |