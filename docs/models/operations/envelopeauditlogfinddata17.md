# EnvelopeAuditLogFindData17

## Example Usage

```typescript
import { EnvelopeAuditLogFindData17 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData17 = {
  recipientEmail: "<value>",
  recipientName: "<value>",
  recipientId: 3302.37,
  recipientRole: "<value>",
  accessAuth: [
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
| `accessAuth`                                                                                               | [operations.EnvelopeAuditLogFindAccessAuth2](../../models/operations/envelopeauditlogfindaccessauth2.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |