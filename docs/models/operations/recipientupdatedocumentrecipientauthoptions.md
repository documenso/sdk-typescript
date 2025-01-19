# RecipientUpdateDocumentRecipientAuthOptions

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "EXPLICIT_NONE",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                                         | [operations.RecipientUpdateDocumentRecipientDocumentsRecipientsAccessAuth](../../models/operations/recipientupdatedocumentrecipientdocumentsrecipientsaccessauth.md) | :heavy_check_mark:                                                                                                                                                   | The type of authentication required for the recipient to access the document.                                                                                        |
| `actionAuth`                                                                                                                                                         | [operations.RecipientUpdateDocumentRecipientDocumentsRecipientsActionAuth](../../models/operations/recipientupdatedocumentrecipientdocumentsrecipientsactionauth.md) | :heavy_check_mark:                                                                                                                                                   | The type of authentication required for the recipient to sign the document.                                                                                          |