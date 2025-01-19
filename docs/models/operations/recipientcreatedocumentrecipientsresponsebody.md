# RecipientCreateDocumentRecipientsResponseBody

Successful response

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsResponseBody = {
  recipients: [
    {
      role: "APPROVER",
      readStatus: "NOT_OPENED",
      signingStatus: "REJECTED",
      sendStatus: "NOT_SENT",
      id: 633982,
      documentId: 751033,
      templateId: 155978,
      email: "Sincere43@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "EXPLICIT_NONE",
      },
      signingOrder: 2991.53,
      rejectionReason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                                             | [operations.RecipientCreateDocumentRecipientsDocumentsRecipientsRecipients](../../models/operations/recipientcreatedocumentrecipientsdocumentsrecipientsrecipients.md)[] | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |