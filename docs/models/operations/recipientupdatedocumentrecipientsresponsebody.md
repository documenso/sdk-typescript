# RecipientUpdateDocumentRecipientsResponseBody

Successful response

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientsResponseBody = {
  recipients: [
    {
      role: "APPROVER",
      readStatus: "NOT_OPENED",
      signingStatus: "REJECTED",
      sendStatus: "NOT_SENT",
      id: 573610,
      documentId: 955047,
      templateId: 979287,
      email: "Flossie3@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 7861.89,
      rejectionReason: "<value>",
      fields: [
        {
          type: "RADIO",
          id: 793568,
          secondaryId: "<id>",
          documentId: 300651,
          templateId: 800799,
          recipientId: 548846,
          page: 4733.26,
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