# FieldCreateTemplateFieldsRequest

## Example Usage

```typescript
import { FieldCreateTemplateFieldsRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsRequest = {
  templateId: 9058.4,
  fields: [
    {
      type: "RADIO",
      recipientId: 4725.18,
      pageNumber: 9761.82,
      pageX: 4030.79,
      pageY: 3072.4,
      width: 797.43,
      height: 1360.37,
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `templateId`                                       | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `fields`                                           | *operations.FieldCreateTemplateFieldsFieldUnion*[] | :heavy_check_mark:                                 | N/A                                                |