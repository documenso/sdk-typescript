# RecipientUpdateTemplateRecipientsTemplatesRecipientsRecipients

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsTemplatesRecipientsRecipients } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsTemplatesRecipientsRecipients = {
  role: "CC",
  readStatus: "NOT_OPENED",
  signingStatus: "SIGNED",
  sendStatus: "SENT",
  id: 264125,
  documentId: 472429,
  templateId: 811380,
  email: "Neoma.Kunze@hotmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "TWO_FACTOR_AUTH",
  },
  signingOrder: 5265.84,
  rejectionReason: "<value>",
  fields: [
    {
      type: "CHECKBOX",
      id: 830909,
      secondaryId: "<id>",
      documentId: 31605,
      templateId: 568419,
      recipientId: 609161,
      page: 9615.76,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "initials",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                     | [operations.RecipientUpdateTemplateRecipientsTemplatesRecipientsRole](../../models/operations/recipientupdatetemplaterecipientstemplatesrecipientsrole.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `readStatus`                                                                                                                                               | [operations.RecipientUpdateTemplateRecipientsReadStatus](../../models/operations/recipientupdatetemplaterecipientsreadstatus.md)                           | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `signingStatus`                                                                                                                                            | [operations.RecipientUpdateTemplateRecipientsSigningStatus](../../models/operations/recipientupdatetemplaterecipientssigningstatus.md)                     | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `sendStatus`                                                                                                                                               | [operations.RecipientUpdateTemplateRecipientsSendStatus](../../models/operations/recipientupdatetemplaterecipientssendstatus.md)                           | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `id`                                                                                                                                                       | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `documentId`                                                                                                                                               | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `templateId`                                                                                                                                               | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `email`                                                                                                                                                    | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `name`                                                                                                                                                     | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `token`                                                                                                                                                    | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `documentDeletedAt`                                                                                                                                        | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `expired`                                                                                                                                                  | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `signedAt`                                                                                                                                                 | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `authOptions`                                                                                                                                              | [operations.RecipientUpdateTemplateRecipientsAuthOptions](../../models/operations/recipientupdatetemplaterecipientsauthoptions.md)                         | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `signingOrder`                                                                                                                                             | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.                                        |
| `rejectionReason`                                                                                                                                          | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `fields`                                                                                                                                                   | [operations.RecipientUpdateTemplateRecipientsFields](../../models/operations/recipientupdatetemplaterecipientsfields.md)[]                                 | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |