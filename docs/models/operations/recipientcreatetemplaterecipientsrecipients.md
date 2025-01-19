# RecipientCreateTemplateRecipientsRecipients

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsRecipients } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsRecipients = {
  email: "Tierra35@yahoo.com",
  name: "<value>",
  role: "CC",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `role`                                                                                                                           | [operations.RecipientCreateTemplateRecipientsRole](../../models/operations/recipientcreatetemplaterecipientsrole.md)             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `signingOrder`                                                                                                                   | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `accessAuth`                                                                                                                     | [operations.RecipientCreateTemplateRecipientsAccessAuth](../../models/operations/recipientcreatetemplaterecipientsaccessauth.md) | :heavy_minus_sign:                                                                                                               | The type of authentication required for the recipient to access the document.                                                    |
| `actionAuth`                                                                                                                     | [operations.RecipientCreateTemplateRecipientsActionAuth](../../models/operations/recipientcreatetemplaterecipientsactionauth.md) | :heavy_minus_sign:                                                                                                               | The type of authentication required for the recipient to sign the document.                                                      |