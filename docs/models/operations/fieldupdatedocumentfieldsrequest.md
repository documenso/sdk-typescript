# FieldUpdateDocumentFieldsRequest

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsRequest = {
  documentId: 5395.11,
  fields: [
    {
      type: "TEXT",
      id: 3793.34,
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `documentId`                                       | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `fields`                                           | *operations.FieldUpdateDocumentFieldsFieldUnion*[] | :heavy_check_mark:                                 | N/A                                                |