# FieldCreateTemplateFieldsRequestBody

## Example Usage

```typescript
import { FieldCreateTemplateFieldsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsRequestBody = {
  templateId: 7262.44,
  fields: [
    {
      type: "DATE",
      recipientId: 9040.51,
      pageNumber: 352.19,
      pageX: 1806.6,
      pageY: 3385.14,
      width: 5774.96,
      height: 8527.37,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `templateId`                                   | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `fields`                                       | *operations.FieldCreateTemplateFieldsFields*[] | :heavy_check_mark:                             | N/A                                            |