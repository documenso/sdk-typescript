# RecipientGetTemplateRecipientResponse

Successful response

## Example Usage

```typescript
import { RecipientGetTemplateRecipientResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetTemplateRecipientResponse = {
  role: "VIEWER",
  readStatus: "OPENED",
  signingStatus: "REJECTED",
  sendStatus: "NOT_SENT",
  id: 3534.24,
  documentId: 2628.91,
  templateId: 3611.13,
  email: "Floyd94@gmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "TWO_FACTOR_AUTH",
  },
  signingOrder: 7771.93,
  rejectionReason: "<value>",
  fields: [
    {
      type: "FREE_SIGNATURE",
      id: 4644.9,
      secondaryId: "<id>",
      documentId: 1182.36,
      templateId: 2336.18,
      recipientId: 1418.67,
      page: 3618.01,
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                         | [operations.RecipientGetTemplateRecipientRole](../../models/operations/recipientgettemplaterecipientrole.md)                   | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `readStatus`                                                                                                                   | [operations.RecipientGetTemplateRecipientReadStatus](../../models/operations/recipientgettemplaterecipientreadstatus.md)       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signingStatus`                                                                                                                | [operations.RecipientGetTemplateRecipientSigningStatus](../../models/operations/recipientgettemplaterecipientsigningstatus.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `sendStatus`                                                                                                                   | [operations.RecipientGetTemplateRecipientSendStatus](../../models/operations/recipientgettemplaterecipientsendstatus.md)       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `id`                                                                                                                           | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `documentId`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `templateId`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `email`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `token`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `documentDeletedAt`                                                                                                            | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `expired`                                                                                                                      | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signedAt`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `authOptions`                                                                                                                  | [operations.RecipientGetTemplateRecipientAuthOptions](../../models/operations/recipientgettemplaterecipientauthoptions.md)     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signingOrder`                                                                                                                 | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.            |
| `rejectionReason`                                                                                                              | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `fields`                                                                                                                       | [operations.RecipientGetTemplateRecipientFields](../../models/operations/recipientgettemplaterecipientfields.md)[]             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |