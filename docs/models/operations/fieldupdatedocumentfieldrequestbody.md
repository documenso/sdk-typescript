# FieldUpdateDocumentFieldRequestBody

## Example Usage

```typescript
import { FieldUpdateDocumentFieldRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldRequestBody = {
  documentId: 8483.46,
  field: {
    type: "DATE",
    id: 1853.48,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `documentId`                               | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `field`                                    | *operations.FieldUpdateDocumentFieldField* | :heavy_check_mark:                         | N/A                                        |