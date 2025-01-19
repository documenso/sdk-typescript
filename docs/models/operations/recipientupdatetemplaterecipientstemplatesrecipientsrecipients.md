# RecipientUpdateTemplateRecipientsTemplatesRecipientsRecipients

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsTemplatesRecipientsRecipients } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsTemplatesRecipientsRecipients = {
  role: "CC",
  readStatus: "OPENED",
  signingStatus: "SIGNED",
  sendStatus: "NOT_SENT",
  id: 344702,
  documentId: 724334,
  templateId: 488433,
  email: "Heloise68@hotmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "TWO_FACTOR_AUTH",
  },
  signingOrder: 4224.07,
  rejectionReason: "<value>",
  fields: [
    {
      type: "FREE_SIGNATURE",
      id: 580248,
      secondaryId: "<id>",
      documentId: 897434,
      templateId: 418892,
      recipientId: 910726,
      page: 5035.28,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "number",
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