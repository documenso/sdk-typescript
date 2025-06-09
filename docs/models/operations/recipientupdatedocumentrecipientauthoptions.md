# RecipientUpdateDocumentRecipientAuthOptions

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientAuthOptions = {
  accessAuth: [],
  actionAuth: [
    "TWO_FACTOR_AUTH",
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accessAuth`                                                                                                                                     | [operations.RecipientUpdateDocumentRecipientAccessAuthResponse](../../models/operations/recipientupdatedocumentrecipientaccessauthresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `actionAuth`                                                                                                                                     | [operations.RecipientUpdateDocumentRecipientActionAuthResponse](../../models/operations/recipientupdatedocumentrecipientactionauthresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |