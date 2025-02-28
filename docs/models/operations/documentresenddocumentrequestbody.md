# DocumentResendDocumentRequestBody

## Example Usage

```typescript
import { DocumentResendDocumentRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: DocumentResendDocumentRequestBody = {
  documentId: 299.5,
  recipients: [
    7372.54,
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `documentId`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `recipients`                                               | *number*[]                                                 | :heavy_check_mark:                                         | The IDs of the recipients to redistribute the document to. |