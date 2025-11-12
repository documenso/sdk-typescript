# RecipientGetTemplateRecipientResponse

Successful response

## Example Usage

```typescript
import { RecipientGetTemplateRecipientResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetTemplateRecipientResponse = {
  envelopeId: "<id>",
  role: "APPROVER",
  readStatus: "NOT_OPENED",
  signingStatus: "NOT_SIGNED",
  sendStatus: "NOT_SENT",
  id: 3337.61,
  email: "Monroe.Schmeler25@yahoo.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: null,
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: [],
    actionAuth: [],
  },
  signingOrder: 405.35,
  rejectionReason: "<value>",
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "FREE_SIGNATURE",
      id: 2531.29,
      secondaryId: "<id>",
      recipientId: 580.24,
      page: 3455.3,
      positionX: "<value>",
      positionY: "<value>",
      width: "<value>",
      height: "<value>",
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        fontSize: 12,
        type: "number",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `envelopeId`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `role`                                                                                                                         | [operations.RecipientGetTemplateRecipientRole](../../models/operations/recipientgettemplaterecipientrole.md)                   | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `readStatus`                                                                                                                   | [operations.RecipientGetTemplateRecipientReadStatus](../../models/operations/recipientgettemplaterecipientreadstatus.md)       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signingStatus`                                                                                                                | [operations.RecipientGetTemplateRecipientSigningStatus](../../models/operations/recipientgettemplaterecipientsigningstatus.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `sendStatus`                                                                                                                   | [operations.RecipientGetTemplateRecipientSendStatus](../../models/operations/recipientgettemplaterecipientsendstatus.md)       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `id`                                                                                                                           | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `email`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `token`                                                                                                                        | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `documentDeletedAt`                                                                                                            | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `expired`                                                                                                                      | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signedAt`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `authOptions`                                                                                                                  | [operations.RecipientGetTemplateRecipientAuthOptions](../../models/operations/recipientgettemplaterecipientauthoptions.md)     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `signingOrder`                                                                                                                 | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `rejectionReason`                                                                                                              | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `fields`                                                                                                                       | [operations.RecipientGetTemplateRecipientField](../../models/operations/recipientgettemplaterecipientfield.md)[]               | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `documentId`                                                                                                                   | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `templateId`                                                                                                                   | *number*                                                                                                                       | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |