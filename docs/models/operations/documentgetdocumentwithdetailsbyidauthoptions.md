# DocumentGetDocumentWithDetailsByIdAuthOptions

## Example Usage

```typescript
import { DocumentGetDocumentWithDetailsByIdAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetDocumentWithDetailsByIdAuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                             | [operations.DocumentGetDocumentWithDetailsByIdGlobalAccessAuth](../../models/operations/documentgetdocumentwithdetailsbyidglobalaccessauth.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to access the document.                                                                  |
| `globalActionAuth`                                                                                                                             | [operations.DocumentGetDocumentWithDetailsByIdGlobalActionAuth](../../models/operations/documentgetdocumentwithdetailsbyidglobalactionauth.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.            |