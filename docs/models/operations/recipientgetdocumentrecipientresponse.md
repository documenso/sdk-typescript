# RecipientGetDocumentRecipientResponse

Successful response

## Example Usage

```typescript
import { RecipientGetDocumentRecipientResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetDocumentRecipientResponse = {
  role: "VIEWER",
  readStatus: "OPENED",
  signingStatus: "REJECTED",
  sendStatus: "NOT_SENT",
  id: 3884.04,
  documentId: 4862.72,
  templateId: 5881.52,
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
      id: 1989.91,
      secondaryId: "<id>",
      documentId: 3674.75,
      templateId: 7068.72,
      recipientId: 6495.34,
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                         | [operations.RecipientGetDocumentRecipientRole](../../models/operations/recipientgetdocumentrecipientrole.md)                   | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `readStatus`                                                                                                                   | [operations.RecipientGetDocumentRecipientReadStatus](../../models/operations/recipientgetdocumentrecipientreadstatus.md)       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signingStatus`                                                                                                                | [operations.RecipientGetDocumentRecipientSigningStatus](../../models/operations/recipientgetdocumentrecipientsigningstatus.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `sendStatus`                                                                                                                   | [operations.RecipientGetDocumentRecipientSendStatus](../../models/operations/recipientgetdocumentrecipientsendstatus.md)       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `id`                                                                                                                           | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `documentId`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `templateId`                                                                                                                   | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `email`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `token`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `documentDeletedAt`                                                                                                            | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `expired`                                                                                                                      | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signedAt`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `authOptions`                                                                                                                  | [operations.RecipientGetDocumentRecipientAuthOptions](../../models/operations/recipientgetdocumentrecipientauthoptions.md)     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signingOrder`                                                                                                                 | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.            |
| `rejectionReason`                                                                                                              | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `fields`                                                                                                                       | [operations.RecipientGetDocumentRecipientFields](../../models/operations/recipientgetdocumentrecipientfields.md)[]             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |