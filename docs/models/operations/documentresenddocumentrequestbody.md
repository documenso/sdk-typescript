# DocumentResendDocumentRequestBody

## Example Usage

```typescript
import { DocumentResendDocumentRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: DocumentResendDocumentRequestBody = {
  documentId: 6534.21,
  recipients: [
    7263.43,
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `documentId`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `recipients`                                               | *number*[]                                                 | :heavy_check_mark:                                         | The IDs of the recipients to redistribute the document to. |