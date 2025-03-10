# DocumentFindDocumentsRecipientsAuthOptions

## Example Usage

```typescript
import { DocumentFindDocumentsRecipientsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindDocumentsRecipientsAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                             | [operations.DocumentFindDocumentsAccessAuth](../../models/operations/documentfinddocumentsaccessauth.md) | :heavy_check_mark:                                                                                       | The type of authentication required for the recipient to access the document.                            |
| `actionAuth`                                                                                             | [operations.DocumentFindDocumentsActionAuth](../../models/operations/documentfinddocumentsactionauth.md) | :heavy_check_mark:                                                                                       | The type of authentication required for the recipient to sign the document.                              |