# RecipientGetDocumentRecipientAuthOptions

## Example Usage

```typescript
import { RecipientGetDocumentRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetDocumentRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `accessAuth`                                                                                                             | [operations.RecipientGetDocumentRecipientAccessAuth](../../models/operations/recipientgetdocumentrecipientaccessauth.md) | :heavy_check_mark:                                                                                                       | The type of authentication required for the recipient to access the document.                                            |
| `actionAuth`                                                                                                             | [operations.RecipientGetDocumentRecipientActionAuth](../../models/operations/recipientgetdocumentrecipientactionauth.md) | :heavy_check_mark:                                                                                                       | The type of authentication required for the recipient to sign the document.                                              |