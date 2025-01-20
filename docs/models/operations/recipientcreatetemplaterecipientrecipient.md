# RecipientCreateTemplateRecipientRecipient

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientRecipient } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientRecipient = {
  email: "Adell53@yahoo.com",
  name: "<value>",
  role: "APPROVER",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `email`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `role`                                                                                                                         | [operations.RecipientCreateTemplateRecipientRole](../../models/operations/recipientcreatetemplaterecipientrole.md)             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signingOrder`                                                                                                                 | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `accessAuth`                                                                                                                   | [operations.RecipientCreateTemplateRecipientAccessAuth](../../models/operations/recipientcreatetemplaterecipientaccessauth.md) | :heavy_minus_sign:                                                                                                             | The type of authentication required for the recipient to access the document.                                                  |
| `actionAuth`                                                                                                                   | [operations.RecipientCreateTemplateRecipientActionAuth](../../models/operations/recipientcreatetemplaterecipientactionauth.md) | :heavy_minus_sign:                                                                                                             | The type of authentication required for the recipient to sign the document.                                                    |