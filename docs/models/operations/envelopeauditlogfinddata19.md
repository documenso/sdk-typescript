# EnvelopeAuditLogFindData19

## Example Usage

```typescript
import { EnvelopeAuditLogFindData19 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData19 = {
  recipientEmail: "<value>",
  recipientName: "<value>",
  recipientId: 5188.56,
  recipientRole: "<value>",
  actionAuth: [
    "TWO_FACTOR_AUTH",
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `recipientEmail`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `recipientName`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `recipientId`                                                                                              | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `recipientRole`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `actionAuth`                                                                                               | [operations.EnvelopeAuditLogFindActionAuth1](../../models/operations/envelopeauditlogfindactionauth1.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |