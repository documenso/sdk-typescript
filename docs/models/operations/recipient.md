# Recipient

## Example Usage

```typescript
import { Recipient } from "@documenso/sdk-typescript/models/operations";

let value: Recipient = {
  email: "Bernardo_Wolf@hotmail.com",
  name: "<value>",
  role: "APPROVER",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `email`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `role`                                                                                                                         | [operations.RecipientCreateDocumentRecipientRole](../../models/operations/recipientcreatedocumentrecipientrole.md)             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signingOrder`                                                                                                                 | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `accessAuth`                                                                                                                   | [operations.RecipientCreateDocumentRecipientAccessAuth](../../models/operations/recipientcreatedocumentrecipientaccessauth.md) | :heavy_minus_sign:                                                                                                             | The type of authentication required for the recipient to access the document.                                                  |
| `actionAuth`                                                                                                                   | [operations.RecipientCreateDocumentRecipientActionAuth](../../models/operations/recipientcreatedocumentrecipientactionauth.md) | :heavy_minus_sign:                                                                                                             | The type of authentication required for the recipient to sign the document.                                                    |