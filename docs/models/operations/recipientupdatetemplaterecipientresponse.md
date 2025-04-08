# RecipientUpdateTemplateRecipientResponse

Successful response

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientResponse = {
  role: "CC",
  readStatus: "OPENED",
  signingStatus: "REJECTED",
  sendStatus: "SENT",
  id: 7508,
  documentId: 2937.02,
  templateId: 6708.46,
  email: "Daniella.Keeling@yahoo.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "ACCOUNT",
  },
  signingOrder: 4355.91,
  rejectionReason: "<value>",
  fields: [
    {
      type: "EMAIL",
      id: 6422.52,
      secondaryId: "<id>",
      documentId: 9720.03,
      templateId: 9069.27,
      recipientId: 334.66,
      page: 9689.06,
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                               | [operations.RecipientUpdateTemplateRecipientRoleResponse](../../models/operations/recipientupdatetemplaterecipientroleresponse.md)   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `readStatus`                                                                                                                         | [operations.RecipientUpdateTemplateRecipientReadStatus](../../models/operations/recipientupdatetemplaterecipientreadstatus.md)       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `signingStatus`                                                                                                                      | [operations.RecipientUpdateTemplateRecipientSigningStatus](../../models/operations/recipientupdatetemplaterecipientsigningstatus.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `sendStatus`                                                                                                                         | [operations.RecipientUpdateTemplateRecipientSendStatus](../../models/operations/recipientupdatetemplaterecipientsendstatus.md)       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `documentId`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `templateId`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `email`                                                                                                                              | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `name`                                                                                                                               | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `token`                                                                                                                              | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `documentDeletedAt`                                                                                                                  | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `expired`                                                                                                                            | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `signedAt`                                                                                                                           | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `authOptions`                                                                                                                        | [operations.RecipientUpdateTemplateRecipientAuthOptions](../../models/operations/recipientupdatetemplaterecipientauthoptions.md)     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `signingOrder`                                                                                                                       | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.                  |
| `rejectionReason`                                                                                                                    | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fields`                                                                                                                             | [operations.RecipientUpdateTemplateRecipientField](../../models/operations/recipientupdatetemplaterecipientfield.md)[]               | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |