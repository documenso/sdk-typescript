# RecipientCreateDocumentRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsResponse = {
  recipients: [
    {
      role: "VIEWER",
      readStatus: "OPENED",
      signingStatus: "REJECTED",
      sendStatus: "SENT",
      id: 3006.51,
      documentId: 8007.99,
      templateId: 5488.46,
      email: "Maria.Brakus98@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "PASSKEY",
      },
      signingOrder: 510.53,
      rejectionReason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `recipients`                                                                                                                                       | [operations.RecipientCreateDocumentRecipientsResponseRecipients](../../models/operations/recipientcreatedocumentrecipientsresponserecipients.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |