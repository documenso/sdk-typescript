# DocumentCreateDocumentTemporaryRecipientAuthOptions

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryRecipientAuthOptions = {
  accessAuth: [],
  actionAuth: [
    "PASSKEY",
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accessAuth`                                                                     | [operations.DocumentAccessAuth](../../models/operations/documentaccessauth.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `actionAuth`                                                                     | [operations.DocumentActionAuth](../../models/operations/documentactionauth.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |