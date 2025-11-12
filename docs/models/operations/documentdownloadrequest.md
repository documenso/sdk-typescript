# DocumentDownloadRequest

## Example Usage

```typescript
import { DocumentDownloadRequest } from "@documenso/sdk-typescript/models/operations";

let value: DocumentDownloadRequest = {
  documentId: 2633.23,
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `documentId`                                                                                                                                         | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The ID of the document to download.                                                                                                                  |
| `version`                                                                                                                                            | [operations.DocumentDownloadVersion](../../models/operations/documentdownloadversion.md)                                                             | :heavy_minus_sign:                                                                                                                                   | The version of the document to download. "signed" returns the completed document with signatures, "original" returns the original uploaded document. |