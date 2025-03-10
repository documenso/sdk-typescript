# FieldUpdateDocumentFieldRequest

## Example Usage

```typescript
import { FieldUpdateDocumentFieldRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldRequest = {
  documentId: 8590.03,
  field: {
    type: "FREE_SIGNATURE",
    id: 6.64,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `documentId`                               | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `field`                                    | *operations.FieldUpdateDocumentFieldField* | :heavy_check_mark:                         | N/A                                        |