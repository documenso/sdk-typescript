# EnvelopeAuditLogFindData33

## Example Usage

```typescript
import { EnvelopeAuditLogFindData33 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData33 = {
  recipientEmail: "<value>",
  recipientName: "<value>",
  recipientId: 8752.32,
  recipientRole: "<value>",
  accessAuth: [],
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
| `accessAuth`                                                                                               | [operations.EnvelopeAuditLogFindAccessAuth3](../../models/operations/envelopeauditlogfindaccessauth3.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `actionAuth`                                                                                               | [operations.EnvelopeAuditLogFindActionAuth2](../../models/operations/envelopeauditlogfindactionauth2.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |