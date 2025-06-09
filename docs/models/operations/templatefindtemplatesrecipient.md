# TemplateFindTemplatesRecipient

## Example Usage

```typescript
import { TemplateFindTemplatesRecipient } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesRecipient = {
  role: "VIEWER",
  readStatus: "OPENED",
  signingStatus: "REJECTED",
  sendStatus: "SENT",
  id: 1377.33,
  documentId: 8929.31,
  templateId: 1915.13,
  email: "Haylie_Mante80@yahoo.com",
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
  signingOrder: 1069.41,
  rejectionReason: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | [operations.TemplateFindTemplatesRole](../../models/operations/templatefindtemplatesrole.md)                                 | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `readStatus`                                                                                                                 | [operations.TemplateFindTemplatesReadStatus](../../models/operations/templatefindtemplatesreadstatus.md)                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `signingStatus`                                                                                                              | [operations.TemplateFindTemplatesSigningStatus](../../models/operations/templatefindtemplatessigningstatus.md)               | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `sendStatus`                                                                                                                 | [operations.TemplateFindTemplatesSendStatus](../../models/operations/templatefindtemplatessendstatus.md)                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `id`                                                                                                                         | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `documentId`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `templateId`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `email`                                                                                                                      | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `token`                                                                                                                      | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `documentDeletedAt`                                                                                                          | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `expired`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `signedAt`                                                                                                                   | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `authOptions`                                                                                                                | [operations.TemplateFindTemplatesRecipientAuthOptions](../../models/operations/templatefindtemplatesrecipientauthoptions.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `signingOrder`                                                                                                               | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.          |
| `rejectionReason`                                                                                                            | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |