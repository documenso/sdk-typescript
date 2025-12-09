# EnvelopeAuditLogFindData16

## Example Usage

```typescript
import { EnvelopeAuditLogFindData16 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData16 = {
  recipientEmail: "<value>",
  recipientName: "<value>",
  recipientId: 7598.39,
  recipientRole: "<value>",
  accessAuth: [
    "ACCOUNT",
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
| `accessAuth`                                                                                               | [operations.EnvelopeAuditLogFindAccessAuth1](../../models/operations/envelopeauditlogfindaccessauth1.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |