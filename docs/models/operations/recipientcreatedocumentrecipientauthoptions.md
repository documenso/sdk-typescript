# RecipientCreateDocumentRecipientAuthOptions

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                   | [operations.RecipientCreateDocumentRecipientResponseAccessAuth](../../models/operations/recipientcreatedocumentrecipientresponseaccessauth.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to access the document.                                                                  |
| `actionAuth`                                                                                                                                   | [operations.RecipientCreateDocumentRecipientResponseActionAuth](../../models/operations/recipientcreatedocumentrecipientresponseactionauth.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to sign the document.                                                                    |