# FieldCreateDocumentFieldsRequest

## Example Usage

```typescript
import { FieldCreateDocumentFieldsRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsRequest = {
  documentId: 4777.18,
  fields: [
    {
      type: "INITIALS",
      recipientId: 278.03,
      pageNumber: 2064.32,
      pageX: 3916.74,
      pageY: 8.36,
      width: 8340.08,
      height: 4669.19,
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `documentId`                                       | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `fields`                                           | *operations.FieldCreateDocumentFieldsFieldUnion*[] | :heavy_check_mark:                                 | N/A                                                |