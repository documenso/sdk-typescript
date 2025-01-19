# FieldUpdateTemplateFieldsRequestBody

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsRequestBody = {
  templateId: 5456.29,
  fields: [
    {
      type: "DROPDOWN",
      id: 6803.7,
    },
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `templateId`                                   | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `fields`                                       | *operations.FieldUpdateTemplateFieldsFields*[] | :heavy_check_mark:                             | N/A                                            |