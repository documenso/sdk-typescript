# FieldUpdateTemplateFieldsRequest

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsRequest = {
  templateId: 9809.8,
  fields: [
    {
      type: "INITIALS",
      id: 7105.06,
    },
  ],
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `templateId`                                          | *number*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `fields`                                              | *operations.FieldUpdateTemplateFieldsRequestFields*[] | :heavy_check_mark:                                    | N/A                                                   |