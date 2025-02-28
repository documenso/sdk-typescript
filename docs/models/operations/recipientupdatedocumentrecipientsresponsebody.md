# RecipientUpdateDocumentRecipientsResponseBody

Successful response

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientsResponseBody = {
  recipients: [
    {
      role: "SIGNER",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "NOT_SENT",
      id: 958068,
      documentId: 965735,
      templateId: 620126,
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
          id: 118349,
          secondaryId: "<id>",
          documentId: 25190,
          templateId: 898638,
          recipientId: 537170,
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

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                                             | [operations.RecipientUpdateDocumentRecipientsDocumentsRecipientsRecipients](../../models/operations/recipientupdatedocumentrecipientsdocumentsrecipientsrecipients.md)[] | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |