# RecipientUpdateTemplateRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsResponse = {
  recipients: [
    {
      role: "SIGNER",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "NOT_SENT",
      id: 5190.99,
      documentId: 968.03,
      templateId: 8897.63,
      email: "Israel_Crist71@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 7925.55,
      rejectionReason: "<value>",
      fields: [
        {
          type: "RADIO",
          id: 922.79,
          secondaryId: "<id>",
          documentId: 6855.13,
          templateId: 7160.24,
          recipientId: 8621.67,
          page: 5080.44,
          customText: "<value>",
          inserted: false,
          fieldMeta: {
            type: "text",
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
| `recipients`                                                                                                                                       | [operations.RecipientUpdateTemplateRecipientsResponseRecipients](../../models/operations/recipientupdatetemplaterecipientsresponserecipients.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |