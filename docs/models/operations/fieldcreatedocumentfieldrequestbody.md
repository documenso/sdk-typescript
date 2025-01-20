# FieldCreateDocumentFieldRequestBody

## Example Usage

```typescript
import { FieldCreateDocumentFieldRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldRequestBody = {
  documentId: 2082.53,
  field: {
    type: "DROPDOWN",
    recipientId: 2153.98,
    pageNumber: 8583.38,
    pageX: 8028.94,
    pageY: 1591.46,
    width: 6057.12,
    height: 1156.61,
  },
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `documentId`       | *number*           | :heavy_check_mark: | N/A                |
| `field`            | *operations.Field* | :heavy_check_mark: | N/A                |