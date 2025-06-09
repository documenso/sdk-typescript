# DocumentSendDocumentAuthOptions

## Example Usage

```typescript
import { DocumentSendDocumentAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentSendDocumentAuthOptions = {
  globalAccessAuth: [],
  globalActionAuth: [
    "TWO_FACTOR_AUTH",
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                   | [operations.DocumentSendDocumentGlobalAccessAuth](../../models/operations/documentsenddocumentglobalaccessauth.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `globalActionAuth`                                                                                                   | [operations.DocumentSendDocumentGlobalActionAuth](../../models/operations/documentsenddocumentglobalactionauth.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |