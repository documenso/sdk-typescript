# FieldUpdateTemplateFieldsRequestBody

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsRequestBody = {
  templateId: 2482.76,
  fields: [
    {
      type: "NAME",
      id: 3184.03,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `templateId`                                   | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `fields`                                       | *operations.FieldUpdateTemplateFieldsFields*[] | :heavy_check_mark:                             | N/A                                            |