# RecipientCreateDocumentRecipientsRequestBody

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsRequestBody = {
  documentId: 9838.54,
  recipients: [
    {
      email: "Gina72@hotmail.com",
      name: "<value>",
      role: "VIEWER",
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `documentId`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `recipients`                                                                                                                       | [operations.RecipientCreateDocumentRecipientsRecipients](../../models/operations/recipientcreatedocumentrecipientsrecipients.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |