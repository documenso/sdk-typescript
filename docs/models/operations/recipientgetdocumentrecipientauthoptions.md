# RecipientGetDocumentRecipientAuthOptions

## Example Usage

```typescript
import { RecipientGetDocumentRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetDocumentRecipientAuthOptions = {
  accessAuth: [
    "ACCOUNT",
  ],
  actionAuth: [
    "PASSKEY",
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                               | [operations.RecipientGetDocumentRecipientAccessAuth](../../models/operations/recipientgetdocumentrecipientaccessauth.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `actionAuth`                                                                                                               | [operations.RecipientGetDocumentRecipientActionAuth](../../models/operations/recipientgetdocumentrecipientactionauth.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |