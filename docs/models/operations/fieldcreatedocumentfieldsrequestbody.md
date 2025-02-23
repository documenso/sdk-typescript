# FieldCreateDocumentFieldsRequestBody

## Example Usage

```typescript
import { FieldCreateDocumentFieldsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateDocumentFieldsRequestBody = {
  documentId: 306.61,
  fields: [
    {
      type: "INITIALS",
      recipientId: 9536.76,
      pageNumber: 5823.2,
      pageX: 1074.72,
      pageY: 2875.44,
      width: 4567.04,
      height: 209.5,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `documentId`                                   | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `fields`                                       | *operations.FieldCreateDocumentFieldsFields*[] | :heavy_check_mark:                             | N/A                                            |