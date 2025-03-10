# RecipientCreateDocumentRecipientsRequest

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsRequest } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsRequest = {
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

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `documentId`                                                                                                                                     | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `recipients`                                                                                                                                     | [operations.RecipientCreateDocumentRecipientsRequestRecipients](../../models/operations/recipientcreatedocumentrecipientsrequestrecipients.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |