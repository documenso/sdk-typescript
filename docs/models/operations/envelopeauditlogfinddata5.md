# EnvelopeAuditLogFindData5

## Example Usage

```typescript
import { EnvelopeAuditLogFindData5 } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindData5 = {
  recipientEmail: "<value>",
  recipientName: "<value>",
  recipientId: 5412.26,
  recipientRole: "<value>",
  emailType: "ASSISTING_REQUEST",
  isResending: true,
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