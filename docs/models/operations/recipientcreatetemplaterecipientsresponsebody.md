# RecipientCreateTemplateRecipientsResponseBody

Successful response

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsResponseBody = {
  recipients: [
    {
      role: "SIGNER",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 418892,
      documentId: 910726,
      templateId: 503528,
      email: "River24@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 4787.73,
      rejectionReason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                                             | [operations.RecipientCreateTemplateRecipientsTemplatesRecipientsRecipients](../../models/operations/recipientcreatetemplaterecipientstemplatesrecipientsrecipients.md)[] | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |