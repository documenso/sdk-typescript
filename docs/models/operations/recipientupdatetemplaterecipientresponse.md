# RecipientUpdateTemplateRecipientResponse

Successful response

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientResponse = {
  role: "ASSISTANT",
  readStatus: "OPENED",
  signingStatus: "SIGNED",
  sendStatus: "SENT",
  id: 2835.57,
  documentId: 2861.47,
  templateId: 3134.2,
  email: "Stephon.Koepp93@gmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "TWO_FACTOR_AUTH",
  },
  signingOrder: 544.98,
  rejectionReason: "<value>",
  fields: [
    {
      type: "INITIALS",
      id: 6040.27,
      secondaryId: "<id>",
      documentId: 6621.84,
      templateId: 5809.96,
      recipientId: 8696.02,
      page: 9934.06,
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                               | [operations.RecipientUpdateTemplateRecipientResponseRole](../../models/operations/recipientupdatetemplaterecipientresponserole.md)   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
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
| `fields`                                                                                                                             | [operations.RecipientUpdateTemplateRecipientFields](../../models/operations/recipientupdatetemplaterecipientfields.md)[]             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |