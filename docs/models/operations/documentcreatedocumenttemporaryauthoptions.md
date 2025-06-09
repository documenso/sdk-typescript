# DocumentCreateDocumentTemporaryAuthOptions

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryAuthOptions = {
  globalAccessAuth: [
    "ACCOUNT",
  ],
  globalActionAuth: [],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                           | [operations.DocumentGlobalAccessAuth](../../models/operations/documentglobalaccessauth.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `globalActionAuth`                                                                           | [operations.DocumentGlobalActionAuth](../../models/operations/documentglobalactionauth.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |