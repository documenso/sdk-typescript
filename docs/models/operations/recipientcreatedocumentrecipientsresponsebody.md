# RecipientCreateDocumentRecipientsResponseBody

Successful response

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsResponseBody = {
  recipients: [
    {
      role: "SIGNER",
      readStatus: "OPENED",
      signingStatus: "REJECTED",
      sendStatus: "NOT_SENT",
      id: 801075,
      documentId: 41179,
      templateId: 816421,
      email: "Amelia14@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 9830,
      rejectionReason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                                             | [operations.RecipientCreateDocumentRecipientsDocumentsRecipientsRecipients](../../models/operations/recipientcreatedocumentrecipientsdocumentsrecipientsrecipients.md)[] | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |