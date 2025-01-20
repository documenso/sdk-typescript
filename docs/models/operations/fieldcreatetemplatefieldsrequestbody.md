# FieldCreateTemplateFieldsRequestBody

## Example Usage

```typescript
import { FieldCreateTemplateFieldsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsRequestBody = {
  templateId: 6651.83,
  fields: [
    {
      type: "FREE_SIGNATURE",
      recipientId: 271.97,
      pageNumber: 3175.04,
      pageX: 5955.85,
      pageY: 4866.06,
      width: 6925.55,
      height: 8196.9,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `templateId`                                   | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `fields`                                       | *operations.FieldCreateTemplateFieldsFields*[] | :heavy_check_mark:                             | N/A                                            |