# RecipientCreateDocumentRecipientAuthOptions

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "ACCOUNT",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                   | [operations.RecipientCreateDocumentRecipientAccessAuthResponse](../../models/operations/recipientcreatedocumentrecipientaccessauthresponse.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to access the document.                                                                  |
| `actionAuth`                                                                                                                                   | [operations.RecipientCreateDocumentRecipientActionAuthResponse](../../models/operations/recipientcreatedocumentrecipientactionauthresponse.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to sign the document.                                                                    |