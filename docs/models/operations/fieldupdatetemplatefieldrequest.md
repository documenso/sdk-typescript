# FieldUpdateTemplateFieldRequest

## Example Usage

```typescript
import { FieldUpdateTemplateFieldRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldRequest = {
  templateId: 7734.55,
  field: {
    type: "EMAIL",
    id: 9630.94,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `templateId`                               | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `field`                                    | *operations.FieldUpdateTemplateFieldField* | :heavy_check_mark:                         | N/A                                        |