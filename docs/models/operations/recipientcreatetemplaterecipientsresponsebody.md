# RecipientCreateTemplateRecipientsResponseBody

Successful response

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsResponseBody = {
  recipients: [
    {
      role: "VIEWER",
      readStatus: "OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 67855,
      documentId: 952216,
      templateId: 528082,
      email: "Amber.Gerhold@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "PASSKEY",
      },
      signingOrder: 105.85,
      rejectionReason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                                             | [operations.RecipientCreateTemplateRecipientsTemplatesRecipientsRecipients](../../models/operations/recipientcreatetemplaterecipientstemplatesrecipientsrecipients.md)[] | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |