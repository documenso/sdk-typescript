# DocumentMoveDocumentToTeamAuthOptions

## Example Usage

```typescript
import { DocumentMoveDocumentToTeamAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: DocumentMoveDocumentToTeamAuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                  | [operations.DocumentMoveDocumentToTeamGlobalAccessAuth](../../models/operations/documentmovedocumenttoteamglobalaccessauth.md)      | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to access the document.                                                       |
| `globalActionAuth`                                                                                                                  | [operations.DocumentMoveDocumentToTeamGlobalActionAuth](../../models/operations/documentmovedocumenttoteamglobalactionauth.md)      | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only. |