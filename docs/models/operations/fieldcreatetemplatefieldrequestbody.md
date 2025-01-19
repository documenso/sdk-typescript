# FieldCreateTemplateFieldRequestBody

## Example Usage

```typescript
import { FieldCreateTemplateFieldRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldRequestBody = {
  templateId: 3474.6,
  field: {
    type: "EMAIL",
    recipientId: 8652.12,
    pageNumber: 9550.65,
    pageX: 5189.26,
    pageY: 8701,
    width: 6081.72,
    height: 3490.87,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `templateId`                               | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `field`                                    | *operations.FieldCreateTemplateFieldField* | :heavy_check_mark:                         | N/A                                        |