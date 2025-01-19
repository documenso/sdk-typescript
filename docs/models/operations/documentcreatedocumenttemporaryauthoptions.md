# DocumentCreateDocumentTemporaryAuthOptions

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryAuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                       | [operations.DocumentCreateDocumentTemporaryGlobalAccessAuth](../../models/operations/documentcreatedocumenttemporaryglobalaccessauth.md) | :heavy_check_mark:                                                                                                                       | The type of authentication required for the recipient to access the document.                                                            |
| `globalActionAuth`                                                                                                                       | [operations.DocumentCreateDocumentTemporaryGlobalActionAuth](../../models/operations/documentcreatedocumenttemporaryglobalactionauth.md) | :heavy_check_mark:                                                                                                                       | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.      |