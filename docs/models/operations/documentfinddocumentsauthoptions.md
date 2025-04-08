# DocumentFindDocumentsAuthOptions

## Example Usage

```typescript
import { DocumentFindDocumentsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindDocumentsAuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "ACCOUNT",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                  | [operations.DocumentFindDocumentsGlobalAccessAuth](../../models/operations/documentfinddocumentsglobalaccessauth.md)                | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to access the document.                                                       |
| `globalActionAuth`                                                                                                                  | [operations.DocumentFindDocumentsGlobalActionAuth](../../models/operations/documentfinddocumentsglobalactionauth.md)                | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only. |