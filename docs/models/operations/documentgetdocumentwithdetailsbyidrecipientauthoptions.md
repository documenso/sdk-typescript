# DocumentGetDocumentWithDetailsByIdRecipientAuthOptions

## Example Usage

```typescript
import { DocumentGetDocumentWithDetailsByIdRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetDocumentWithDetailsByIdRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "ACCOUNT",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                       | [operations.DocumentGetDocumentWithDetailsByIdAccessAuth](../../models/operations/documentgetdocumentwithdetailsbyidaccessauth.md) | :heavy_check_mark:                                                                                                                 | The type of authentication required for the recipient to access the document.                                                      |
| `actionAuth`                                                                                                                       | [operations.DocumentGetDocumentWithDetailsByIdActionAuth](../../models/operations/documentgetdocumentwithdetailsbyidactionauth.md) | :heavy_check_mark:                                                                                                                 | The type of authentication required for the recipient to sign the document.                                                        |