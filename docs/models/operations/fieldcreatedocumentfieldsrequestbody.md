# FieldCreateDocumentFieldsRequestBody

## Example Usage

```typescript
import { FieldCreateDocumentFieldsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsRequestBody = {
  documentId: 5349.08,
  fields: [
    {
      type: "NAME",
      recipientId: 3041.73,
      pageNumber: 5910.65,
      pageX: 9217.19,
      pageY: 8052.64,
      width: 7239.42,
      height: 5591.74,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `documentId`                                   | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `fields`                                       | *operations.FieldCreateDocumentFieldsFields*[] | :heavy_check_mark:                             | N/A                                            |