# RecipientUpdateDocumentRecipientsResponseBody

Successful response

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientsResponseBody = {
  recipients: [
    {
      role: "APPROVER",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 167435,
      documentId: 821904,
      templateId: 700529,
      email: "Vita_Ziemann3@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "PASSKEY",
      },
      signingOrder: 8234.72,
      rejectionReason: "<value>",
      fields: [
        {
          type: "CHECKBOX",
          id: 960813,
          secondaryId: "<id>",
          documentId: 65121,
          templateId: 44571,
          recipientId: 913284,
          page: 3050.47,
          customText: "<value>",
          inserted: false,
          fieldMeta: {
            type: "number",
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