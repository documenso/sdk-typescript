# RecipientUpdateTemplateRecipientsResponseRecipients

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsResponseRecipients } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsResponseRecipients = {
  role: "VIEWER",
  readStatus: "NOT_OPENED",
  signingStatus: "NOT_SIGNED",
  sendStatus: "NOT_SENT",
  id: 2612.19,
  documentId: 4060.37,
  templateId: 4543.86,
  email: "Tyreek.Tillman50@hotmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "PASSKEY",
  },
  signingOrder: 7433.4,
  rejectionReason: "<value>",
  fields: [
    {
      type: "EMAIL",
      id: 8069.52,
      secondaryId: "<id>",
      documentId: 7188.16,
      templateId: 9428.4,
      recipientId: 5341.56,
      page: 8021.48,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "email",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                 | [operations.RecipientUpdateTemplateRecipientsResponseRole](../../models/operations/recipientupdatetemplaterecipientsresponserole.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `readStatus`                                                                                                                           | [operations.RecipientUpdateTemplateRecipientsReadStatus](../../models/operations/recipientupdatetemplaterecipientsreadstatus.md)       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signingStatus`                                                                                                                        | [operations.RecipientUpdateTemplateRecipientsSigningStatus](../../models/operations/recipientupdatetemplaterecipientssigningstatus.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `sendStatus`                                                                                                                           | [operations.RecipientUpdateTemplateRecipientsSendStatus](../../models/operations/recipientupdatetemplaterecipientssendstatus.md)       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `id`                                                                                                                                   | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentId`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `templateId`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `email`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `token`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentDeletedAt`                                                                                                                    | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `expired`                                                                                                                              | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signedAt`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `authOptions`                                                                                                                          | [operations.RecipientUpdateTemplateRecipientsAuthOptions](../../models/operations/recipientupdatetemplaterecipientsauthoptions.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signingOrder`                                                                                                                         | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.                    |
| `rejectionReason`                                                                                                                      | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `fields`                                                                                                                               | [operations.RecipientUpdateTemplateRecipientsFields](../../models/operations/recipientupdatetemplaterecipientsfields.md)[]             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |