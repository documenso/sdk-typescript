# FieldUpdateDocumentFieldsRequestBody

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsRequestBody = {
  documentId: 53.1,
  fields: [
    {
      type: "SIGNATURE",
      id: 5112.22,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `documentId`                                   | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `fields`                                       | *operations.FieldUpdateDocumentFieldsFields*[] | :heavy_check_mark:                             | N/A                                            |