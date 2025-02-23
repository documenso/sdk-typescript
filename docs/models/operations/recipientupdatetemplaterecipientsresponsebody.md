# RecipientUpdateTemplateRecipientsResponseBody

Successful response

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsResponseBody = {
  recipients: [
    {
      role: "VIEWER",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 424505,
      documentId: 806952,
      templateId: 718816,
      email: "Kadin.Hand@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "ACCOUNT",
      },
      signingOrder: 5190.99,
      rejectionReason: "<value>",
      fields: [
        {
          type: "FREE_SIGNATURE",
          id: 889763,
          secondaryId: "<id>",
          documentId: 61844,
          templateId: 449694,
          recipientId: 284694,
          page: 1548.69,
          customText: "<value>",
          inserted: false,
          fieldMeta: {
            type: "checkbox",
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
| `recipients`                                                                                                                                                             | [operations.RecipientUpdateTemplateRecipientsTemplatesRecipientsRecipients](../../models/operations/recipientupdatetemplaterecipientstemplatesrecipientsrecipients.md)[] | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |