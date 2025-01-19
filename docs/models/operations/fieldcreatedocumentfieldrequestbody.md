# FieldCreateDocumentFieldRequestBody

## Example Usage

```typescript
import { FieldCreateDocumentFieldRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldRequestBody = {
  documentId: 8744,
  field: {
    type: "FREE_SIGNATURE",
    recipientId: 2124.34,
    pageNumber: 1830.33,
    pageX: 4030.26,
    pageY: 7452.33,
    width: 5269.07,
    height: 4876.76,
  },
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `documentId`       | *number*           | :heavy_check_mark: | N/A                |
| `field`            | *operations.Field* | :heavy_check_mark: | N/A                |