# DocumentGetDocumentWithDetailsByIdRecipientsAuthOptions

## Example Usage

```typescript
import { DocumentGetDocumentWithDetailsByIdRecipientsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetDocumentWithDetailsByIdRecipientsAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                       | [operations.DocumentGetDocumentWithDetailsByIdAccessAuth](../../models/operations/documentgetdocumentwithdetailsbyidaccessauth.md) | :heavy_check_mark:                                                                                                                 | The type of authentication required for the recipient to access the document.                                                      |
| `actionAuth`                                                                                                                       | [operations.DocumentGetDocumentWithDetailsByIdActionAuth](../../models/operations/documentgetdocumentwithdetailsbyidactionauth.md) | :heavy_check_mark:                                                                                                                 | The type of authentication required for the recipient to sign the document.                                                        |