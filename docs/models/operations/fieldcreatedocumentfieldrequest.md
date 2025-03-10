# FieldCreateDocumentFieldRequest

## Example Usage

```typescript
import { FieldCreateDocumentFieldRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldRequest = {
  documentId: 8173.39,
  field: {
    type: "DATE",
    recipientId: 8822.84,
    pageNumber: 7332.89,
    pageX: 4097.26,
    pageY: 3735.11,
    width: 5156.38,
    height: 8890.6,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `documentId`                               | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `field`                                    | *operations.FieldCreateDocumentFieldField* | :heavy_check_mark:                         | N/A                                        |