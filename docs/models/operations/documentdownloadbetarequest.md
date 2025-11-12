# DocumentDownloadBetaRequest

## Example Usage

```typescript
import { DocumentDownloadBetaRequest } from "@documenso/sdk-typescript/models/operations";

let value: DocumentDownloadBetaRequest = {
  documentId: 1417.21,
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `documentId`                                                                                                                                         | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The ID of the document to download.                                                                                                                  |
| `version`                                                                                                                                            | [operations.DocumentDownloadBetaVersion](../../models/operations/documentdownloadbetaversion.md)                                                     | :heavy_minus_sign:                                                                                                                                   | The version of the document to download. "signed" returns the completed document with signatures, "original" returns the original uploaded document. |