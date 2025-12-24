# EnvelopeAuditLogFindData29

## Example Usage

```typescript
import { EnvelopeAuditLogFindData29 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData29 = {
  fieldId: "<id>",
  fieldRecipientEmail: "<value>",
  fieldRecipientId: 9129.22,
  fieldType: "<value>",
  changes: [
    {
      type: "DIMENSION",
      from: {
        width: 3148.09,
        height: 626.91,
      },
      to: {
        width: 76.63,
        height: 9050.09,
      },
    },
  ],
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `fieldId`                   | *string*                    | :heavy_check_mark:          | N/A                         |
| `fieldRecipientEmail`       | *string*                    | :heavy_check_mark:          | N/A                         |
| `fieldRecipientId`          | *number*                    | :heavy_check_mark:          | N/A                         |
| `fieldType`                 | *string*                    | :heavy_check_mark:          | N/A                         |
| `changes`                   | *operations.ChangeUnion2*[] | :heavy_check_mark:          | N/A                         |