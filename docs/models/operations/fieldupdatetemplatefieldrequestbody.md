# FieldUpdateTemplateFieldRequestBody

## Example Usage

```typescript
import { FieldUpdateTemplateFieldRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldRequestBody = {
  templateId: 2010.05,
  field: {
    type: "CHECKBOX",
    id: 6963.24,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `templateId`                               | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `field`                                    | *operations.FieldUpdateTemplateFieldField* | :heavy_check_mark:                         | N/A                                        |