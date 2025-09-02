# DocumentDistributeRequest

## Example Usage

```typescript
import { DocumentDistributeRequest } from "@documenso/sdk-typescript/models/operations";

let value: DocumentDistributeRequest = {
  documentId: 6551.02,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `documentId`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | The ID of the document to send.                                                        |
| `meta`                                                                                 | [operations.DocumentDistributeMeta](../../models/operations/documentdistributemeta.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |