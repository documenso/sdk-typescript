# RecipientUpdateTemplateRecipientsTemplatesRecipientsRecipients

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsTemplatesRecipientsRecipients } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsTemplatesRecipientsRecipients = {
  role: "ASSISTANT",
  readStatus: "NOT_OPENED",
  signingStatus: "REJECTED",
  sendStatus: "SENT",
  id: 526322,
  documentId: 470732,
  templateId: 14665,
  email: "Ryann_Halvorson7@hotmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "PASSKEY",
  },
  signingOrder: 2612.19,
  rejectionReason: "<value>",
  fields: [
    {
      type: "EMAIL",
      id: 454386,
      secondaryId: "<id>",
      documentId: 976274,
      templateId: 944260,
      recipientId: 139730,
      page: 8825.86,
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