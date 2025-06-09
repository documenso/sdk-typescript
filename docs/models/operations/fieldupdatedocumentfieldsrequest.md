# FieldUpdateDocumentFieldsRequest

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsRequest = {
  documentId: 5395.11,
  fields: [
    {
      type: "EMAIL",
      id: 8801.1,
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `documentId`                                       | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `fields`                                           | *operations.FieldUpdateDocumentFieldsFieldUnion*[] | :heavy_check_mark:                                 | N/A                                                |