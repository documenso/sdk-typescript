# RecipientUpdateDocumentRecipientsAuthOptions

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientsAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                                           | [operations.RecipientUpdateDocumentRecipientsDocumentsRecipientsAccessAuth](../../models/operations/recipientupdatedocumentrecipientsdocumentsrecipientsaccessauth.md) | :heavy_check_mark:                                                                                                                                                     | The type of authentication required for the recipient to access the document.                                                                                          |
| `actionAuth`                                                                                                                                                           | [operations.RecipientUpdateDocumentRecipientsDocumentsRecipientsActionAuth](../../models/operations/recipientupdatedocumentrecipientsdocumentsrecipientsactionauth.md) | :heavy_check_mark:                                                                                                                                                     | The type of authentication required for the recipient to sign the document.                                                                                            |