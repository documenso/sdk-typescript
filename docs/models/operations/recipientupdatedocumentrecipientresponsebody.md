# RecipientUpdateDocumentRecipientResponseBody

Successful response

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientResponseBody = {
  role: "APPROVER",
  readStatus: "NOT_OPENED",
  signingStatus: "REJECTED",
  sendStatus: "SENT",
  id: 569287,
  documentId: 512081,
  templateId: 971764,
  email: "Parker_Hyatt59@yahoo.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "PASSKEY",
  },
  signingOrder: 7815.82,
  rejectionReason: "<value>",
  fields: [
    {
      type: "NUMBER",
      id: 916341,
      secondaryId: "<id>",
      documentId: 259377,
      templateId: 758194,
      recipientId: 459875,
      page: 5736.1,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "dropdown",
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