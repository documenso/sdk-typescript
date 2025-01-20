# FieldCreateTemplateFieldRequestBody

## Example Usage

```typescript
import { FieldCreateTemplateFieldRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldRequestBody = {
  templateId: 7012.57,
  field: {
    type: "SIGNATURE",
    recipientId: 5008.28,
    pageNumber: 2864.86,
    pageX: 2851.75,
    pageY: 3559.27,
    width: 3147.33,
    height: 5786.1,
  },
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `templateId`                               | *number*                                   | :heavy_check_mark:                         | N/A                                        |
| `field`                                    | *operations.FieldCreateTemplateFieldField* | :heavy_check_mark:                         | N/A                                        |