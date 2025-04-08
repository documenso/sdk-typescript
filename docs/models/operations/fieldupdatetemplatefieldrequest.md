# FieldUpdateTemplateFieldRequest

## Example Usage

```typescript
import { FieldUpdateTemplateFieldRequest } from "@documenso/sdk-typescript/models/operations";

let value: FieldUpdateTemplateFieldRequest = {
  templateId: 6885.91,
  field: {
    type: "INITIALS",
    id: 7472.09,
  },
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `templateId`                                    | *number*                                        | :heavy_check_mark:                              | N/A                                             |
| `field`                                         | *operations.FieldUpdateTemplateFieldFieldUnion* | :heavy_check_mark:                              | N/A                                             |