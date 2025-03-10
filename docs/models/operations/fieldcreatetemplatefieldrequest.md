# FieldCreateTemplateFieldRequest

## Example Usage

```typescript
import { FieldCreateTemplateFieldRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldRequest = {
  templateId: 5774.96,
  field: {
    type: "CHECKBOX",
    recipientId: 3502.02,
    pageNumber: 2679.88,
    pageX: 618.89,
    pageY: 8213.04,
    width: 3796.66,
    height: 5715.5,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `templateId`                               | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `field`                                    | *operations.FieldCreateTemplateFieldField* | :heavy_check_mark:                         | N/A                                        |