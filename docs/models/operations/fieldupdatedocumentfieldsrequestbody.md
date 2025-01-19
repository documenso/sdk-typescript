# FieldUpdateDocumentFieldsRequestBody

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsRequestBody = {
  documentId: 135.08,
  fields: [
    {
      type: "DATE",
      id: 2561.14,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `documentId`                                   | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `fields`                                       | *operations.FieldUpdateDocumentFieldsFields*[] | :heavy_check_mark:                             | N/A                                            |