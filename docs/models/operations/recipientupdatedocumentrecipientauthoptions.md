# RecipientUpdateDocumentRecipientAuthOptions

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "ACCOUNT",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                   | [operations.RecipientUpdateDocumentRecipientResponseAccessAuth](../../models/operations/recipientupdatedocumentrecipientresponseaccessauth.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to access the document.                                                                  |
| `actionAuth`                                                                                                                                   | [operations.RecipientUpdateDocumentRecipientResponseActionAuth](../../models/operations/recipientupdatedocumentrecipientresponseactionauth.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to sign the document.                                                                    |