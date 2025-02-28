# FieldUpdateTemplateFieldsRequestBody

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsRequestBody = {
  templateId: 5802.48,
  fields: [
    {
      type: "CHECKBOX",
      id: 4188.92,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `templateId`                                   | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `fields`                                       | *operations.FieldUpdateTemplateFieldsFields*[] | :heavy_check_mark:                             | N/A                                            |