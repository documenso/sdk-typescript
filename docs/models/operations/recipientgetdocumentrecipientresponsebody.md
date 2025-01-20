# RecipientGetDocumentRecipientResponseBody

Successful response

## Example Usage

```typescript
import { RecipientGetDocumentRecipientResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetDocumentRecipientResponseBody = {
  role: "SIGNER",
  readStatus: "OPENED",
  signingStatus: "NOT_SIGNED",
  sendStatus: "SENT",
  id: 985109,
  documentId: 783397,
  templateId: 518990,
  email: "Jaquan.Douglas35@gmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "PASSKEY",
  },
  signingOrder: 2628,
  rejectionReason: "<value>",
  fields: [
    {
      type: "DATE",
      id: 35160,
      secondaryId: "<id>",
      documentId: 906232,
      templateId: 816365,
      recipientId: 552581,
      page: 8518.09,
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

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                     | [operations.RecipientGetDocumentRecipientRole](../../models/operations/recipientgetdocumentrecipientrole.md)               | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `readStatus`                                                                                                               | [operations.ReadStatus](../../models/operations/readstatus.md)                                                             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `signingStatus`                                                                                                            | [operations.SigningStatus](../../models/operations/signingstatus.md)                                                       | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `sendStatus`                                                                                                               | [operations.SendStatus](../../models/operations/sendstatus.md)                                                             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `id`                                                                                                                       | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `documentId`                                                                                                               | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `templateId`                                                                                                               | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `email`                                                                                                                    | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `token`                                                                                                                    | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `documentDeletedAt`                                                                                                        | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `expired`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `signedAt`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `authOptions`                                                                                                              | [operations.RecipientGetDocumentRecipientAuthOptions](../../models/operations/recipientgetdocumentrecipientauthoptions.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `signingOrder`                                                                                                             | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.        |
| `rejectionReason`                                                                                                          | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `fields`                                                                                                                   | [operations.RecipientGetDocumentRecipientFields](../../models/operations/recipientgetdocumentrecipientfields.md)[]         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |