# EnvelopeAuditLogFindData15

## Example Usage

```typescript
import { EnvelopeAuditLogFindData15 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData15 = {
  recipientEmail: "<value>",
  recipientName: "<value>",
  recipientId: 739.2,
  recipientRole: "<value>",
  fieldId: "<id>",
  field: {
    type: "NAME",
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