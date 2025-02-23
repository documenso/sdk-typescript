# FieldUpdateDocumentFieldsRequestBody

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsRequestBody = {
  documentId: 351.6,
  fields: [
    {
      type: "CHECKBOX",
      id: 8163.65,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `documentId`                                   | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `fields`                                       | *operations.FieldUpdateDocumentFieldsFields*[] | :heavy_check_mark:                             | N/A                                            |