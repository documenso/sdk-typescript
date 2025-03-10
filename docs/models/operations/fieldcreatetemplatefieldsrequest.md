# FieldCreateTemplateFieldsRequest

## Example Usage

```typescript
import { FieldCreateTemplateFieldsRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsRequest = {
  templateId: 6037.83,
  fields: [
    {
      type: "EMAIL",
      recipientId: 5315.68,
      pageNumber: 6451.39,
      pageX: 9409.51,
      pageY: 5756.34,
      width: 6143.68,
      height: 678.55,
    },
  ],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `templateId`                                          | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `fields`                                              | *operations.FieldCreateTemplateFieldsRequestFields*[] | :heavy_check_mark:                                    | N/A                                                   |