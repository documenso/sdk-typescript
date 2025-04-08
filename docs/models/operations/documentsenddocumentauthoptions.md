# DocumentSendDocumentAuthOptions

## Example Usage

```typescript
import { DocumentSendDocumentAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentSendDocumentAuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                  | [operations.DocumentSendDocumentGlobalAccessAuth](../../models/operations/documentsenddocumentglobalaccessauth.md)                  | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to access the document.                                                       |
| `globalActionAuth`                                                                                                                  | [operations.DocumentSendDocumentGlobalActionAuth](../../models/operations/documentsenddocumentglobalactionauth.md)                  | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only. |