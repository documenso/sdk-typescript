# RecipientUpdateDocumentRecipientsAuthOptions

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientsAuthOptions = {
  accessAuth: [
    "ACCOUNT",
  ],
  actionAuth: [
    "TWO_FACTOR_AUTH",
  ],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                       | [operations.RecipientUpdateDocumentRecipientsAccessAuthResponse](../../models/operations/recipientupdatedocumentrecipientsaccessauthresponse.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `actionAuth`                                                                                                                                       | [operations.RecipientUpdateDocumentRecipientsActionAuthResponse](../../models/operations/recipientupdatedocumentrecipientsactionauthresponse.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |