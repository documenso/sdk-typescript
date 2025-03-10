# FieldUpdateDocumentFieldsRequest

## Example Usage

```typescript
import { FieldUpdateDocumentFieldsRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateDocumentFieldsRequest = {
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

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `documentId`                                          | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `fields`                                              | *operations.FieldUpdateDocumentFieldsRequestFields*[] | :heavy_check_mark:                                    | N/A                                                   |