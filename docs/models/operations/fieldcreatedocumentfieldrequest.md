# FieldCreateDocumentFieldRequest

## Example Usage

```typescript
import { FieldCreateDocumentFieldRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldRequest = {
  documentId: 3108.67,
  field: {
    type: "TEXT",
    recipientId: 2366.63,
    pageNumber: 9085.83,
    pageX: 9710.11,
    pageY: 4696.19,
    width: 4133.73,
    height: 9360.79,
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `documentId`                                    | *number*                                        | :heavy_check_mark:                              | N/A                                             |
| `field`                                         | *operations.FieldCreateDocumentFieldFieldUnion* | :heavy_check_mark:                              | N/A                                             |