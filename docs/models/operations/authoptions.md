# AuthOptions

## Example Usage

```typescript
import { AuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: AuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                             | [operations.DocumentGetDocumentWithDetailsByIdGlobalAccessAuth](../../models/operations/documentgetdocumentwithdetailsbyidglobalaccessauth.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to access the document.                                                                  |
| `globalActionAuth`                                                                                                                             | [operations.DocumentGetDocumentWithDetailsByIdGlobalActionAuth](../../models/operations/documentgetdocumentwithdetailsbyidglobalactionauth.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.            |