# EnvelopeAuditLogFindData11

## Example Usage

```typescript
import { EnvelopeAuditLogFindData11 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData11 = {
  recipientEmail: "<value>",
  recipientName: "<value>",
  recipientId: 2032.71,
  recipientRole: "<value>",
  fieldId: "<id>",
  field: {
    type: "RADIO",
    data: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `recipientEmail`                                                       | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `recipientName`                                                        | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `recipientId`                                                          | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `recipientRole`                                                        | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `fieldId`                                                              | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `field`                                                                | *operations.EnvelopeAuditLogFindFieldUnion2*                           | :heavy_check_mark:                                                     | N/A                                                                    |
| `fieldSecurity`                                                        | [operations.FieldSecurity2](../../models/operations/fieldsecurity2.md) | :heavy_minus_sign:                                                     | N/A                                                                    |