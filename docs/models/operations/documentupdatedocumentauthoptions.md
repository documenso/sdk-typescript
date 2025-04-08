# DocumentUpdateDocumentAuthOptions

## Example Usage

```typescript
import { DocumentUpdateDocumentAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentUpdateDocumentAuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                     | [operations.DocumentUpdateDocumentGlobalAccessAuthResponse](../../models/operations/documentupdatedocumentglobalaccessauthresponse.md) | :heavy_check_mark:                                                                                                                     | The type of authentication required for the recipient to access the document.                                                          |
| `globalActionAuth`                                                                                                                     | [operations.DocumentUpdateDocumentGlobalActionAuthResponse](../../models/operations/documentupdatedocumentglobalactionauthresponse.md) | :heavy_check_mark:                                                                                                                     | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.    |