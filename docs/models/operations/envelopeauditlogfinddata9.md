# EnvelopeAuditLogFindData9

## Example Usage

```typescript
import { EnvelopeAuditLogFindData9 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData9 = {
  recipientEmail: "<value>",
  recipientName: "<value>",
  recipientId: 371.6,
  recipientRole: "<value>",
  fieldId: "<id>",
  field: {
    type: "DATE",
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
| `field`                                                                | *operations.EnvelopeAuditLogFindFieldUnion1*                           | :heavy_check_mark:                                                     | N/A                                                                    |
| `fieldSecurity`                                                        | [operations.FieldSecurity1](../../models/operations/fieldsecurity1.md) | :heavy_minus_sign:                                                     | N/A                                                                    |