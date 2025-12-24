# EnvelopeAuditLogFindData31

## Example Usage

```typescript
import { EnvelopeAuditLogFindData31 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData31 = {
  recipientEmail: "<value>",
  recipientName: "<value>",
  recipientId: 5995.99,
  recipientRole: "<value>",
  changes: [
    {
      from: "<value>",
      to: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      type: "ACTION_AUTH",
    },
  ],
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `recipientEmail`            | *string*                    | :heavy_check_mark:          | N/A                         |
| `recipientName`             | *string*                    | :heavy_check_mark:          | N/A                         |
| `recipientId`               | *number*                    | :heavy_check_mark:          | N/A                         |
| `recipientRole`             | *string*                    | :heavy_check_mark:          | N/A                         |
| `changes`                   | *operations.ChangeUnion3*[] | :heavy_check_mark:          | N/A                         |