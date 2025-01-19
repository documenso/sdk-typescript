# RecipientCreateDocumentRecipientsRecipients

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsRecipients } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsRecipients = {
  email: "Joy55@gmail.com",
  name: "<value>",
  role: "APPROVER",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `role`                                                                                                                           | [operations.RecipientCreateDocumentRecipientsRole](../../models/operations/recipientcreatedocumentrecipientsrole.md)             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `signingOrder`                                                                                                                   | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `accessAuth`                                                                                                                     | [operations.RecipientCreateDocumentRecipientsAccessAuth](../../models/operations/recipientcreatedocumentrecipientsaccessauth.md) | :heavy_minus_sign:                                                                                                               | The type of authentication required for the recipient to access the document.                                                    |
| `actionAuth`                                                                                                                     | [operations.RecipientCreateDocumentRecipientsActionAuth](../../models/operations/recipientcreatedocumentrecipientsactionauth.md) | :heavy_minus_sign:                                                                                                               | The type of authentication required for the recipient to sign the document.                                                      |