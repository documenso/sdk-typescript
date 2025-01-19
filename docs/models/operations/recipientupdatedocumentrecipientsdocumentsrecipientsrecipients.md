# RecipientUpdateDocumentRecipientsDocumentsRecipientsRecipients

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientsDocumentsRecipientsRecipients } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientsDocumentsRecipientsRecipients = {
  role: "VIEWER",
  readStatus: "NOT_OPENED",
  signingStatus: "NOT_SIGNED",
  sendStatus: "NOT_SENT",
  id: 278116,
  documentId: 169312,
  templateId: 965095,
  email: "Quinton_Marks@gmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "EXPLICIT_NONE",
  },
  signingOrder: 5552.94,
  rejectionReason: "<value>",
  fields: [
    {
      type: "EMAIL",
      id: 955466,
      secondaryId: "<id>",
      documentId: 598316,
      templateId: 118917,
      recipientId: 417539,
      page: 7815.82,
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

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                     | [operations.RecipientUpdateDocumentRecipientsDocumentsRecipientsRole](../../models/operations/recipientupdatedocumentrecipientsdocumentsrecipientsrole.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `readStatus`                                                                                                                                               | [operations.RecipientUpdateDocumentRecipientsReadStatus](../../models/operations/recipientupdatedocumentrecipientsreadstatus.md)                           | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `signingStatus`                                                                                                                                            | [operations.RecipientUpdateDocumentRecipientsSigningStatus](../../models/operations/recipientupdatedocumentrecipientssigningstatus.md)                     | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `sendStatus`                                                                                                                                               | [operations.RecipientUpdateDocumentRecipientsSendStatus](../../models/operations/recipientupdatedocumentrecipientssendstatus.md)                           | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `id`                                                                                                                                                       | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `documentId`                                                                                                                                               | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `templateId`                                                                                                                                               | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `email`                                                                                                                                                    | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `name`                                                                                                                                                     | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `token`                                                                                                                                                    | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `documentDeletedAt`                                                                                                                                        | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `expired`                                                                                                                                                  | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `signedAt`                                                                                                                                                 | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `authOptions`                                                                                                                                              | [operations.RecipientUpdateDocumentRecipientsAuthOptions](../../models/operations/recipientupdatedocumentrecipientsauthoptions.md)                         | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `signingOrder`                                                                                                                                             | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.                                        |
| `rejectionReason`                                                                                                                                          | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `fields`                                                                                                                                                   | [operations.RecipientUpdateDocumentRecipientsFields](../../models/operations/recipientupdatedocumentrecipientsfields.md)[]                                 | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |