# RecipientUpdateTemplateRecipientsResponseBody

Successful response

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsResponseBody = {
  recipients: [
    {
      role: "APPROVER",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "SENT",
      id: 245849,
      documentId: 710506,
      templateId: 505113,
      email: "Dee_Bruen@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "PASSKEY",
      },
      signingOrder: 2864.64,
      rejectionReason: "<value>",
      fields: [
        {
          type: "DATE",
          id: 879418,
          secondaryId: "<id>",
          documentId: 275006,
          templateId: 500537,
          recipientId: 234550,
          page: 3371.49,
          customText: "<value>",
          inserted: false,
          fieldMeta: {
            type: "name",
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