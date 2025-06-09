# FieldCreateTemplateFieldsRequest

## Example Usage

```typescript
import { FieldCreateTemplateFieldsRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldsRequest = {
  templateId: 9058.4,
  fields: [
    {
      type: "DATE",
      recipientId: 9761.82,
      pageNumber: 4030.79,
      pageX: 3072.4,
      pageY: 797.43,
      width: 1360.37,
      height: 3308.17,
    },
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `templateId`                                       | *number*                                           | :heavy_check_mark:                                 | N/A                                                |
| `fields`                                           | *operations.FieldCreateTemplateFieldsFieldUnion*[] | :heavy_check_mark:                                 | N/A                                                |