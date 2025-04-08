# FieldCreateDocumentFieldsRequest

## Example Usage

```typescript
import { FieldCreateDocumentFieldsRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsRequest = {
  documentId: 4777.18,
  fields: [
    {
      type: "RADIO",
      recipientId: 2220.74,
      pageNumber: 278.03,
      pageX: 2064.32,
      pageY: 3916.74,
      width: 8.36,
      height: 8340.08,
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `documentId`                                       | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `fields`                                           | *operations.FieldCreateDocumentFieldsFieldUnion*[] | :heavy_check_mark:                                 | N/A                                                |