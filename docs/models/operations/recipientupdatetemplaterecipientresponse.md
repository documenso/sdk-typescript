# RecipientUpdateTemplateRecipientResponse

Successful response

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientResponse = {
  envelopeId: "<id>",
  role: "CC",
  readStatus: "OPENED",
  signingStatus: "REJECTED",
  sendStatus: "SENT",
  id: 7508,
  email: "Marcos.Farrell42@gmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: [],
    actionAuth: [
      "EXPLICIT_NONE",
    ],
  },
  signingOrder: 334.66,
  rejectionReason: "<value>",
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "NUMBER",
      id: 8779.58,
      secondaryId: "<id>",
      recipientId: 9184.11,
      page: 1870.47,
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
| `envelopeId`                                                                                                                         | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `role`                                                                                                                               | [operations.RecipientUpdateTemplateRecipientRoleResponse](../../models/operations/recipientupdatetemplaterecipientroleresponse.md)   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `readStatus`                                                                                                                         | [operations.RecipientUpdateTemplateRecipientReadStatus](../../models/operations/recipientupdatetemplaterecipientreadstatus.md)       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `signingStatus`                                                                                                                      | [operations.RecipientUpdateTemplateRecipientSigningStatus](../../models/operations/recipientupdatetemplaterecipientsigningstatus.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `sendStatus`                                                                                                                         | [operations.RecipientUpdateTemplateRecipientSendStatus](../../models/operations/recipientupdatetemplaterecipientsendstatus.md)       | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
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
| `documentId`                                                                                                                         | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `templateId`                                                                                                                         | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |