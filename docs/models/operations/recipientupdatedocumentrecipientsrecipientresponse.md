# RecipientUpdateDocumentRecipientsRecipientResponse

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientsRecipientResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientsRecipientResponse = {
  role: "CC",
  readStatus: "OPENED",
  signingStatus: "SIGNED",
  sendStatus: "NOT_SENT",
  id: 4456.3,
  documentId: 728.66,
  templateId: 3126.79,
  email: "Lera.Mertz@yahoo.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "ACCOUNT",
  },
  signingOrder: 1543.76,
  rejectionReason: "<value>",
  fields: [
    {
      type: "SIGNATURE",
      id: 7870.63,
      secondaryId: "<id>",
      documentId: 6923.45,
      templateId: 3891.43,
      recipientId: 6939.51,
      page: 3347.39,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "initials",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                 | [operations.RecipientUpdateDocumentRecipientsRoleResponse](../../models/operations/recipientupdatedocumentrecipientsroleresponse.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `readStatus`                                                                                                                           | [operations.RecipientUpdateDocumentRecipientsReadStatus](../../models/operations/recipientupdatedocumentrecipientsreadstatus.md)       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signingStatus`                                                                                                                        | [operations.RecipientUpdateDocumentRecipientsSigningStatus](../../models/operations/recipientupdatedocumentrecipientssigningstatus.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `sendStatus`                                                                                                                           | [operations.RecipientUpdateDocumentRecipientsSendStatus](../../models/operations/recipientupdatedocumentrecipientssendstatus.md)       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `id`                                                                                                                                   | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentId`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `templateId`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `email`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `token`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentDeletedAt`                                                                                                                    | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `expired`                                                                                                                              | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signedAt`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `authOptions`                                                                                                                          | [operations.RecipientUpdateDocumentRecipientsAuthOptions](../../models/operations/recipientupdatedocumentrecipientsauthoptions.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signingOrder`                                                                                                                         | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.                    |
| `rejectionReason`                                                                                                                      | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `fields`                                                                                                                               | [operations.RecipientUpdateDocumentRecipientsField](../../models/operations/recipientupdatedocumentrecipientsfield.md)[]               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |