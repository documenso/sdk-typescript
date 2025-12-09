# EnvelopeAuditLogFindRequest

## Example Usage

```typescript
import { EnvelopeAuditLogFindRequest } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindRequest = {
  envelopeId: "<id>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `envelopeId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Envelope ID                                                                                                        |
| `page`                                                                                                             | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The pagination page number, starts at 1.                                                                           |
| `perPage`                                                                                                          | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The number of items per page.                                                                                      |
| `orderByColumn`                                                                                                    | [operations.EnvelopeAuditLogFindOrderByColumn](../../models/operations/envelopeauditlogfindorderbycolumn.md)       | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `orderByDirection`                                                                                                 | [operations.EnvelopeAuditLogFindOrderByDirection](../../models/operations/envelopeauditlogfindorderbydirection.md) | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |