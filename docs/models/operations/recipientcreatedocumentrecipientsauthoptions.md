# RecipientCreateDocumentRecipientsAuthOptions

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accessAuth`                                                                                                                                     | [operations.RecipientCreateDocumentRecipientsAccessAuthResponse](../../models/operations/recipientcreatedocumentrecipientsaccessauthresponse.md) | :heavy_check_mark:                                                                                                                               | The type of authentication required for the recipient to access the document.                                                                    |
| `actionAuth`                                                                                                                                     | [operations.RecipientCreateDocumentRecipientsActionAuthResponse](../../models/operations/recipientcreatedocumentrecipientsactionauthresponse.md) | :heavy_check_mark:                                                                                                                               | The type of authentication required for the recipient to sign the document.                                                                      |