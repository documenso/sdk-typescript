# EnvelopeAuditLogFindData30

## Example Usage

```typescript
import { EnvelopeAuditLogFindData30 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData30 = {
  recipientEmail: "<value>",
  recipientName: "<value>",
  recipientId: 4579.34,
  recipientRole: "<value>",
  accessAuth: [
    "TWO_FACTOR_AUTH",
  ],
  actionAuth: [],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `recipientEmail`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `recipientName`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `recipientId`                                                                                              | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `recipientRole`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `accessAuth`                                                                                               | [operations.EnvelopeAuditLogFindAccessAuth3](../../models/operations/envelopeauditlogfindaccessauth3.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `actionAuth`                                                                                               | [operations.EnvelopeAuditLogFindActionAuth2](../../models/operations/envelopeauditlogfindactionauth2.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |