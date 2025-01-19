# RecipientUpdateTemplateRecipientResponseBody

Successful response

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientResponseBody = {
  role: "SIGNER",
  readStatus: "NOT_OPENED",
  signingStatus: "REJECTED",
  sendStatus: "SENT",
  id: 387567,
  documentId: 686690,
  templateId: 994902,
  email: "Lou20@hotmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "TWO_FACTOR_AUTH",
  },
  signingOrder: 3663.24,
  rejectionReason: "<value>",
  fields: [
    {
      type: "DATE",
      id: 542807,
      secondaryId: "<id>",
      documentId: 714054,
      templateId: 516556,
      recipientId: 133076,
      page: 7734.55,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "date",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                   | [operations.RecipientUpdateTemplateRecipientTemplatesRecipientsRole](../../models/operations/recipientupdatetemplaterecipienttemplatesrecipientsrole.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `readStatus`                                                                                                                                             | [operations.RecipientUpdateTemplateRecipientReadStatus](../../models/operations/recipientupdatetemplaterecipientreadstatus.md)                           | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `signingStatus`                                                                                                                                          | [operations.RecipientUpdateTemplateRecipientSigningStatus](../../models/operations/recipientupdatetemplaterecipientsigningstatus.md)                     | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `sendStatus`                                                                                                                                             | [operations.RecipientUpdateTemplateRecipientSendStatus](../../models/operations/recipientupdatetemplaterecipientsendstatus.md)                           | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `id`                                                                                                                                                     | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `documentId`                                                                                                                                             | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `templateId`                                                                                                                                             | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `email`                                                                                                                                                  | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `name`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `token`                                                                                                                                                  | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `documentDeletedAt`                                                                                                                                      | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `expired`                                                                                                                                                | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `signedAt`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `authOptions`                                                                                                                                            | [operations.RecipientUpdateTemplateRecipientAuthOptions](../../models/operations/recipientupdatetemplaterecipientauthoptions.md)                         | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `signingOrder`                                                                                                                                           | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.                                      |
| `rejectionReason`                                                                                                                                        | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `fields`                                                                                                                                                 | [operations.RecipientUpdateTemplateRecipientFields](../../models/operations/recipientupdatetemplaterecipientfields.md)[]                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |