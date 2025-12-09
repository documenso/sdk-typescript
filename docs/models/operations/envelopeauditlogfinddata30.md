# EnvelopeAuditLogFindData30

## Example Usage

```typescript
import { EnvelopeAuditLogFindData30 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData30 = {
  recipientEmail: "<value>",
  recipientName: "<value>",
  recipientId: 4579.34,
  recipientRole: "<value>",
  changes: [
    {
      from: "<value>",
      to: "<value>",
      type: "ROLE",
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