# RecipientUpdateDocumentRecipientResponse

Successful response

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientResponse = {
  role: "CC",
  readStatus: "OPENED",
  signingStatus: "REJECTED",
  sendStatus: "SENT",
  id: 3861.76,
  documentId: 4558.74,
  templateId: 4292.95,
  email: "Raphaelle.Marquardt30@gmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "TWO_FACTOR_AUTH",
  },
  signingOrder: 4163.35,
  rejectionReason: "<value>",
  fields: [
    {
      type: "TEXT",
      id: 8008.63,
      secondaryId: "<id>",
      documentId: 9309.48,
      templateId: 6940.86,
      recipientId: 528.84,
      page: 3058.32,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "name",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                               | [operations.RecipientUpdateDocumentRecipientRoleResponse](../../models/operations/recipientupdatedocumentrecipientroleresponse.md)   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `readStatus`                                                                                                                         | [operations.RecipientUpdateDocumentRecipientReadStatus](../../models/operations/recipientupdatedocumentrecipientreadstatus.md)       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `signingStatus`                                                                                                                      | [operations.RecipientUpdateDocumentRecipientSigningStatus](../../models/operations/recipientupdatedocumentrecipientsigningstatus.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `sendStatus`                                                                                                                         | [operations.RecipientUpdateDocumentRecipientSendStatus](../../models/operations/recipientupdatedocumentrecipientsendstatus.md)       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `documentId`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `templateId`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `email`                                                                                                                              | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `name`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `token`                                                                                                                              | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `documentDeletedAt`                                                                                                                  | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `expired`                                                                                                                            | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `signedAt`                                                                                                                           | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `authOptions`                                                                                                                        | [operations.RecipientUpdateDocumentRecipientAuthOptions](../../models/operations/recipientupdatedocumentrecipientauthoptions.md)     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `signingOrder`                                                                                                                       | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.                  |
| `rejectionReason`                                                                                                                    | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fields`                                                                                                                             | [operations.RecipientUpdateDocumentRecipientField](../../models/operations/recipientupdatedocumentrecipientfield.md)[]               | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |