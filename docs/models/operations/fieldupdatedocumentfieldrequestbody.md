# FieldUpdateDocumentFieldRequestBody

## Example Usage

```typescript
import { FieldUpdateDocumentFieldRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldRequestBody = {
  documentId: 209.5,
  field: {
    type: "EMAIL",
    id: 4894.59,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `documentId`                               | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `field`                                    | *operations.FieldUpdateDocumentFieldField* | :heavy_check_mark:                         | N/A                                        |