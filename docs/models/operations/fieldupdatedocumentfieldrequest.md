# FieldUpdateDocumentFieldRequest

## Example Usage

```typescript
import { FieldUpdateDocumentFieldRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldRequest = {
  documentId: 5724.71,
  field: {
    type: "DATE",
    id: 2640.91,
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `documentId`                                    | *number*                                        | :heavy_check_mark:                              | N/A                                             |
| `field`                                         | *operations.FieldUpdateDocumentFieldFieldUnion* | :heavy_check_mark:                              | N/A                                             |