# EnvelopeAuditLogFindData3

## Example Usage

```typescript
import { EnvelopeAuditLogFindData3 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData3 = {
  recipientEmail: "<value>",
  recipientName: "<value>",
  recipientId: 4734.66,
  recipientRole: "<value>",
  emailType: "CC",
  isResending: false,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `recipientEmail`                                             | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `recipientName`                                              | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `recipientId`                                                | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `recipientRole`                                              | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `emailType`                                                  | [operations.EmailType](../../models/operations/emailtype.md) | :heavy_check_mark:                                           | N/A                                                          |
| `isResending`                                                | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |