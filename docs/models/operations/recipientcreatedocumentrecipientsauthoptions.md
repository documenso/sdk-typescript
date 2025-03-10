# RecipientCreateDocumentRecipientsAuthOptions

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "ACCOUNT",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accessAuth`                                                                                                                                     | [operations.RecipientCreateDocumentRecipientsResponseAccessAuth](../../models/operations/recipientcreatedocumentrecipientsresponseaccessauth.md) | :heavy_check_mark:                                                                                                                               | The type of authentication required for the recipient to access the document.                                                                    |
| `actionAuth`                                                                                                                                     | [operations.RecipientCreateDocumentRecipientsResponseActionAuth](../../models/operations/recipientcreatedocumentrecipientsresponseactionauth.md) | :heavy_check_mark:                                                                                                                               | The type of authentication required for the recipient to sign the document.                                                                      |