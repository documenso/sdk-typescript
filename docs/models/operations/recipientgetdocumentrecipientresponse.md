# RecipientGetDocumentRecipientResponse

Successful response

## Example Usage

```typescript
import { RecipientGetDocumentRecipientResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetDocumentRecipientResponse = {
  envelopeId: "<id>",
  role: "VIEWER",
  readStatus: "OPENED",
  signingStatus: "SIGNED",
  sendStatus: "NOT_SENT",
  id: 2726.18,
  email: "Jeanie_Rath@hotmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: null,
  signingOrder: 8092.34,
  rejectionReason: "<value>",
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "TEXT",
      id: 5215.72,
      secondaryId: "<id>",
      recipientId: 5000.26,
      page: 2647.84,
      positionX: "<value>",
      positionY: "<value>",
      width: "<value>",
      height: "<value>",
      customText: "<value>",
      inserted: true,
      fieldMeta: {
        fontSize: 12,
        type: "initials",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `envelopeId`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `role`                                                                                                                         | [operations.RecipientGetDocumentRecipientRole](../../models/operations/recipientgetdocumentrecipientrole.md)                   | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `readStatus`                                                                                                                   | [operations.RecipientGetDocumentRecipientReadStatus](../../models/operations/recipientgetdocumentrecipientreadstatus.md)       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signingStatus`                                                                                                                | [operations.RecipientGetDocumentRecipientSigningStatus](../../models/operations/recipientgetdocumentrecipientsigningstatus.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `sendStatus`                                                                                                                   | [operations.RecipientGetDocumentRecipientSendStatus](../../models/operations/recipientgetdocumentrecipientsendstatus.md)       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `id`                                                                                                                           | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `email`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `token`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `documentDeletedAt`                                                                                                            | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `expired`                                                                                                                      | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signedAt`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `authOptions`                                                                                                                  | [operations.RecipientGetDocumentRecipientAuthOptions](../../models/operations/recipientgetdocumentrecipientauthoptions.md)     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signingOrder`                                                                                                                 | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `rejectionReason`                                                                                                              | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `fields`                                                                                                                       | [operations.RecipientGetDocumentRecipientField](../../models/operations/recipientgetdocumentrecipientfield.md)[]               | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `documentId`                                                                                                                   | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `templateId`                                                                                                                   | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |