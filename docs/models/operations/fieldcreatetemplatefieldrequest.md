# FieldCreateTemplateFieldRequest

## Example Usage

```typescript
import { FieldCreateTemplateFieldRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldCreateTemplateFieldRequest = {
  templateId: 1203.16,
  field: {
    type: "NUMBER",
    recipientId: 6791.88,
    pageNumber: 4826.47,
    pageX: 6051,
    pageY: 5337.36,
    width: 5836.58,
    height: 2214.38,
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `templateId`                                    | *number*                                        | :heavy_check_mark:                              | N/A                                             |
| `field`                                         | *operations.FieldCreateTemplateFieldFieldUnion* | :heavy_check_mark:                              | N/A                                             |