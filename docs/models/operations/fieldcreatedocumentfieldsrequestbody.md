# FieldCreateDocumentFieldsRequestBody

## Example Usage

```typescript
import { FieldCreateDocumentFieldsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsRequestBody = {
  documentId: 3165.01,
  fields: [
    {
      type: "DATE",
      recipientId: 7298.28,
      pageNumber: 691.82,
      pageX: 8791.74,
      pageY: 7348.14,
      width: 1764.99,
      height: 9391.61,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `documentId`                                   | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `fields`                                       | *operations.FieldCreateDocumentFieldsFields*[] | :heavy_check_mark:                             | N/A                                            |