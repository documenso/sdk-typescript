# EnvelopeAuditLogFindData32

## Example Usage

```typescript
import { EnvelopeAuditLogFindData32 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData32 = {
  fieldId: "<id>",
  fieldRecipientEmail: "<value>",
  fieldRecipientId: 3907.49,
  fieldType: "<value>",
  changes: [
    {
      type: "POSITION",
      from: {
        page: 6349.45,
        positionX: 9065.35,
        positionY: 5207.41,
      },
      to: {
        page: 3540.14,
        positionX: 9008.77,
        positionY: 3467.71,
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