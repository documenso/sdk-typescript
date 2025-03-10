# RecipientUpdateDocumentRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientsResponse = {
  recipients: [
    {
      role: "SIGNER",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "NOT_SENT",
      id: 9580.68,
      documentId: 9657.35,
      templateId: 6201.26,
      email: "Winona.Runolfsdottir36@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "PASSKEY",
      },
      signingOrder: 9903.69,
      rejectionReason: "<value>",
      fields: [
        {
          type: "DROPDOWN",
          id: 1183.49,
          secondaryId: "<id>",
          documentId: 251.9,
          templateId: 8986.38,
          recipientId: 5371.7,
          page: 2001.9,
          customText: "<value>",
          inserted: false,
          fieldMeta: {
            type: "radio",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `recipients`                                                                                                                                       | [operations.RecipientUpdateDocumentRecipientsResponseRecipients](../../models/operations/recipientupdatedocumentrecipientsresponserecipients.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |