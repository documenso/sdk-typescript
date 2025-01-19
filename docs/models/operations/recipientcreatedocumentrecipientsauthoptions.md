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

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                                           | [operations.RecipientCreateDocumentRecipientsDocumentsRecipientsAccessAuth](../../models/operations/recipientcreatedocumentrecipientsdocumentsrecipientsaccessauth.md) | :heavy_check_mark:                                                                                                                                                     | The type of authentication required for the recipient to access the document.                                                                                          |
| `actionAuth`                                                                                                                                                           | [operations.RecipientCreateDocumentRecipientsDocumentsRecipientsActionAuth](../../models/operations/recipientcreatedocumentrecipientsdocumentsrecipientsactionauth.md) | :heavy_check_mark:                                                                                                                                                     | The type of authentication required for the recipient to sign the document.                                                                                            |