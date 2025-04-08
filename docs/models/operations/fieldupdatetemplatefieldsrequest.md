# FieldUpdateTemplateFieldsRequest

## Example Usage

```typescript
import { FieldUpdateTemplateFieldsRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldsRequest = {
  templateId: 4213.74,
  fields: [
    {
      type: "NAME",
      id: 1756.93,
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `templateId`                                       | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `fields`                                           | *operations.FieldUpdateTemplateFieldsFieldUnion*[] | :heavy_check_mark:                                 | N/A                                                |