# RecipientGetTemplateRecipientResponseBody

Successful response

## Example Usage

```typescript
import { RecipientGetTemplateRecipientResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetTemplateRecipientResponseBody = {
  role: "SIGNER",
  readStatus: "OPENED",
  signingStatus: "REJECTED",
  sendStatus: "NOT_SENT",
  id: 227129,
  documentId: 291666,
  templateId: 776334,
  email: "Geoffrey_Mayer@gmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "PASSKEY",
  },
  signingOrder: 3611.13,
  rejectionReason: "<value>",
  fields: [
    {
      type: "FREE_SIGNATURE",
      id: 359810,
      secondaryId: "<id>",
      documentId: 887865,
      templateId: 298590,
      recipientId: 371935,
      page: 9444.75,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "radio",
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