# DocumentCreateDocumentTemporaryRecipientAuthOptions

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accessAuth`                                                                   | [operations.DocumentAccessAuth](../../models/operations/documentaccessauth.md) | :heavy_check_mark:                                                             | The type of authentication required for the recipient to access the document.  |
| `actionAuth`                                                                   | [operations.DocumentActionAuth](../../models/operations/documentactionauth.md) | :heavy_check_mark:                                                             | The type of authentication required for the recipient to sign the document.    |