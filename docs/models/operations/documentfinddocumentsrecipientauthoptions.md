# DocumentFindDocumentsRecipientAuthOptions

## Example Usage

```typescript
import { DocumentFindDocumentsRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindDocumentsRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "EXPLICIT_NONE",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                             | [operations.DocumentFindDocumentsAccessAuth](../../models/operations/documentfinddocumentsaccessauth.md) | :heavy_check_mark:                                                                                       | The type of authentication required for the recipient to access the document.                            |
| `actionAuth`                                                                                             | [operations.DocumentFindDocumentsActionAuth](../../models/operations/documentfinddocumentsactionauth.md) | :heavy_check_mark:                                                                                       | The type of authentication required for the recipient to sign the document.                              |