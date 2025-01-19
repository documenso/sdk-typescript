# RecipientUpdateDocumentRecipientResponseBody

Successful response

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientResponseBody = {
  role: "SIGNER",
  readStatus: "NOT_OPENED",
  signingStatus: "SIGNED",
  sendStatus: "SENT",
  id: 668218,
  documentId: 286716,
  templateId: 19462,
  email: "Eloy_Towne@yahoo.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "TWO_FACTOR_AUTH",
  },
  signingOrder: 8152.25,
  rejectionReason: "<value>",
  fields: [
    {
      type: "FREE_SIGNATURE",
      id: 801075,
      secondaryId: "<id>",
      documentId: 41179,
      templateId: 816421,
      recipientId: 807564,
      page: 510.07,
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