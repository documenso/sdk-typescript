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
      signingStatus: "NOT_SIGNED",
      sendStatus: "SENT",
      id: 772604,
      documentId: 774866,
      templateId: 30288,
      email: "Alvah.Dickinson33@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "EXPLICIT_NONE",
      },
      signingOrder: 3524.07,
      rejectionReason: "<value>",
      fields: [
        {
          type: "CHECKBOX",
          id: 181041,
          secondaryId: "<id>",
          documentId: 763747,
          templateId: 61345,
          recipientId: 462761,
          page: 55.1,
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