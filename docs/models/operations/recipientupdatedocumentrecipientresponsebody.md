# RecipientUpdateDocumentRecipientResponseBody

Successful response

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientResponseBody = {
  role: "ASSISTANT",
  readStatus: "OPENED",
  signingStatus: "REJECTED",
  sendStatus: "SENT",
  id: 614770,
  documentId: 37129,
  templateId: 14251,
  email: "Ressie4@yahoo.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "PASSKEY",
  },
  signingOrder: 5579.87,
  rejectionReason: "<value>",
  fields: [
    {
      type: "DROPDOWN",
      id: 400448,
      secondaryId: "<id>",
      documentId: 665872,
      templateId: 400879,
      recipientId: 768195,
      page: 5277.15,
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

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                   | [operations.RecipientUpdateDocumentRecipientDocumentsRecipientsRole](../../models/operations/recipientupdatedocumentrecipientdocumentsrecipientsrole.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `readStatus`                                                                                                                                             | [operations.RecipientUpdateDocumentRecipientReadStatus](../../models/operations/recipientupdatedocumentrecipientreadstatus.md)                           | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `signingStatus`                                                                                                                                          | [operations.RecipientUpdateDocumentRecipientSigningStatus](../../models/operations/recipientupdatedocumentrecipientsigningstatus.md)                     | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `sendStatus`                                                                                                                                             | [operations.RecipientUpdateDocumentRecipientSendStatus](../../models/operations/recipientupdatedocumentrecipientsendstatus.md)                           | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `id`                                                                                                                                                     | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `documentId`                                                                                                                                             | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `templateId`                                                                                                                                             | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `email`                                                                                                                                                  | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `name`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `token`                                                                                                                                                  | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `documentDeletedAt`                                                                                                                                      | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `expired`                                                                                                                                                | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `signedAt`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `authOptions`                                                                                                                                            | [operations.RecipientUpdateDocumentRecipientAuthOptions](../../models/operations/recipientupdatedocumentrecipientauthoptions.md)                         | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `signingOrder`                                                                                                                                           | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.                                      |
| `rejectionReason`                                                                                                                                        | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `fields`                                                                                                                                                 | [operations.RecipientUpdateDocumentRecipientFields](../../models/operations/recipientupdatedocumentrecipientfields.md)[]                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |