# RecipientUpdateTemplateRecipientResponseBody

Successful response

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientResponseBody = {
  role: "CC",
  readStatus: "NOT_OPENED",
  signingStatus: "SIGNED",
  sendStatus: "SENT",
  id: 838227,
  documentId: 935493,
  templateId: 141986,
  email: "Hettie.Bernier48@gmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "EXPLICIT_NONE",
  },
  signingOrder: 3242.73,
  rejectionReason: "<value>",
  fields: [
    {
      type: "DROPDOWN",
      id: 974788,
      secondaryId: "<id>",
      documentId: 449861,
      templateId: 227129,
      recipientId: 291666,
      page: 7763.34,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "email",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                   | [operations.RecipientUpdateTemplateRecipientTemplatesRecipientsRole](../../models/operations/recipientupdatetemplaterecipienttemplatesrecipientsrole.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `readStatus`                                                                                                                                             | [operations.RecipientUpdateTemplateRecipientReadStatus](../../models/operations/recipientupdatetemplaterecipientreadstatus.md)                           | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `signingStatus`                                                                                                                                          | [operations.RecipientUpdateTemplateRecipientSigningStatus](../../models/operations/recipientupdatetemplaterecipientsigningstatus.md)                     | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `sendStatus`                                                                                                                                             | [operations.RecipientUpdateTemplateRecipientSendStatus](../../models/operations/recipientupdatetemplaterecipientsendstatus.md)                           | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `id`                                                                                                                                                     | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `documentId`                                                                                                                                             | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `templateId`                                                                                                                                             | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `email`                                                                                                                                                  | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `name`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `token`                                                                                                                                                  | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `documentDeletedAt`                                                                                                                                      | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `expired`                                                                                                                                                | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `signedAt`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `authOptions`                                                                                                                                            | [operations.RecipientUpdateTemplateRecipientAuthOptions](../../models/operations/recipientupdatetemplaterecipientauthoptions.md)                         | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `signingOrder`                                                                                                                                           | *number*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.                                      |
| `rejectionReason`                                                                                                                                        | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `fields`                                                                                                                                                 | [operations.RecipientUpdateTemplateRecipientFields](../../models/operations/recipientupdatetemplaterecipientfields.md)[]                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |