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
  documentId: 4292.95,
  templateId: 8133.14,
  email: "Kianna.Hagenes@yahoo.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: [],
    actionAuth: [],
  },
  signingOrder: 2300.2,
  rejectionReason: "<value>",
  fields: [
    {
      type: "FREE_SIGNATURE",
      id: 1796.09,
      secondaryId: "<id>",
      documentId: null,
      templateId: 1330.56,
      recipientId: 231.9,
      page: 2724.77,
      customText: "<value>",
      inserted: true,
      fieldMeta: {
        type: "dropdown",
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