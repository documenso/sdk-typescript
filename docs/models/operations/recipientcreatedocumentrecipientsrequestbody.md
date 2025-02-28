# RecipientCreateDocumentRecipientsRequestBody

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsRequestBody = {
  documentId: 1693.12,
  recipients: [
    {
      email: "Camren51@hotmail.com",
      name: "<value>",
      role: "SIGNER",
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `documentId`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `recipients`                                                                                                                       | [operations.RecipientCreateDocumentRecipientsRecipients](../../models/operations/recipientcreatedocumentrecipientsrecipients.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |