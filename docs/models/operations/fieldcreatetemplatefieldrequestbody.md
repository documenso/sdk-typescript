# FieldCreateTemplateFieldRequestBody

## Example Usage

```typescript
import { FieldCreateTemplateFieldRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldRequestBody = {
  templateId: 252.31,
  field: {
    type: "INITIALS",
    recipientId: 4618.53,
    pageNumber: 7262.44,
    pageX: 4748.72,
    pageY: 9040.51,
    width: 352.19,
    height: 1806.6,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `templateId`                               | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `field`                                    | *operations.FieldCreateTemplateFieldField* | :heavy_check_mark:                         | N/A                                        |