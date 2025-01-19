# RecipientCreateDocumentRecipientsRequestBody

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsRequestBody = {
  documentId: 1105.22,
  recipients: [
    {
      email: "Zoe_Mitchell-Champlin0@yahoo.com",
      name: "<value>",
      role: "APPROVER",
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `documentId`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `recipients`                                                                                                                       | [operations.RecipientCreateDocumentRecipientsRecipients](../../models/operations/recipientcreatedocumentrecipientsrecipients.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |