# RecipientGetDocumentRecipientResponseBody

Successful response

## Example Usage

```typescript
import { RecipientGetDocumentRecipientResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetDocumentRecipientResponseBody = {
  role: "VIEWER",
  readStatus: "OPENED",
  signingStatus: "REJECTED",
  sendStatus: "NOT_SENT",
  id: 388404,
  documentId: 486272,
  templateId: 588152,
  email: "Max13@hotmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "EXPLICIT_NONE",
  },
  signingOrder: 6646.66,
  rejectionReason: "<value>",
  fields: [
    {
      type: "EMAIL",
      id: 198991,
      secondaryId: "<id>",
      documentId: 367475,
      templateId: 706872,
      recipientId: 649534,
      page: 9279.77,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "checkbox",
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