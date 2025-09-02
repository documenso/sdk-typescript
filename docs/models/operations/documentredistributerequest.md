# DocumentRedistributeRequest

## Example Usage

```typescript
import { DocumentRedistributeRequest } from "@documenso/sdk-typescript/models/operations";

let value: DocumentRedistributeRequest = {
  documentId: 1374.92,
  recipients: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `documentId`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `recipients`                                               | *number*[]                                                 | :heavy_check_mark:                                         | The IDs of the recipients to redistribute the document to. |