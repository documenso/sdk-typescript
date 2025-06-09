# DocumentResendDocumentRequest

## Example Usage

```typescript
import { DocumentResendDocumentRequest } from "@documenso/sdk-typescript/models/operations";

let value: DocumentResendDocumentRequest = {
  documentId: 6209.79,
  recipients: [
    5345.93,
    7940.74,
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `documentId`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `recipients`                                               | *number*[]                                                 | :heavy_check_mark:                                         | The IDs of the recipients to redistribute the document to. |