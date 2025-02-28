# FieldCreateTemplateFieldsRequestBody

## Example Usage

```typescript
import { FieldCreateTemplateFieldsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsRequestBody = {
  templateId: 5059.08,
  fields: [
    {
      type: "DATE",
      recipientId: 8903.79,
      pageNumber: 282.56,
      pageX: 1138.08,
      pageY: 1020.71,
      width: 7569.36,
      height: 3396.51,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `templateId`                                   | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `fields`                                       | *operations.FieldCreateTemplateFieldsFields*[] | :heavy_check_mark:                             | N/A                                            |