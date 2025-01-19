# DocumentCreateDocumentTemporaryDocumentsAuthOptions

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryDocumentsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryDocumentsAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "EXPLICIT_NONE",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                 | [operations.DocumentCreateDocumentTemporaryAccessAuth](../../models/operations/documentcreatedocumenttemporaryaccessauth.md) | :heavy_check_mark:                                                                                                           | The type of authentication required for the recipient to access the document.                                                |
| `actionAuth`                                                                                                                 | [operations.DocumentCreateDocumentTemporaryActionAuth](../../models/operations/documentcreatedocumenttemporaryactionauth.md) | :heavy_check_mark:                                                                                                           | The type of authentication required for the recipient to sign the document.                                                  |