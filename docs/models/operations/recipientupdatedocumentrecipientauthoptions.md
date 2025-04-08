# RecipientUpdateDocumentRecipientAuthOptions

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                   | [operations.RecipientUpdateDocumentRecipientAccessAuthResponse](../../models/operations/recipientupdatedocumentrecipientaccessauthresponse.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to access the document.                                                                  |
| `actionAuth`                                                                                                                                   | [operations.RecipientUpdateDocumentRecipientActionAuthResponse](../../models/operations/recipientupdatedocumentrecipientactionauthresponse.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to sign the document.                                                                    |