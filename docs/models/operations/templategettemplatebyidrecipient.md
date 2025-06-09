# TemplateGetTemplateByIdRecipient

## Example Usage

```typescript
import { TemplateGetTemplateByIdRecipient } from "@documenso/sdk-typescript/models/operations";

let value: TemplateGetTemplateByIdRecipient = {
  role: "CC",
  readStatus: "NOT_OPENED",
  signingStatus: "NOT_SIGNED",
  sendStatus: "SENT",
  id: 9979.58,
  documentId: 9567.96,
  templateId: 1045.43,
  email: "Dannie.Kuhn@gmail.com",
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
  signingOrder: 6573.86,
  rejectionReason: "<value>",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                           | [operations.TemplateGetTemplateByIdRole](../../models/operations/templategettemplatebyidrole.md)                                 | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `readStatus`                                                                                                                     | [operations.TemplateGetTemplateByIdReadStatus](../../models/operations/templategettemplatebyidreadstatus.md)                     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `signingStatus`                                                                                                                  | [operations.TemplateGetTemplateByIdSigningStatus](../../models/operations/templategettemplatebyidsigningstatus.md)               | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `sendStatus`                                                                                                                     | [operations.TemplateGetTemplateByIdSendStatus](../../models/operations/templategettemplatebyidsendstatus.md)                     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `id`                                                                                                                             | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `documentId`                                                                                                                     | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `templateId`                                                                                                                     | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `email`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `token`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `documentDeletedAt`                                                                                                              | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `expired`                                                                                                                        | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `signedAt`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `authOptions`                                                                                                                    | [operations.TemplateGetTemplateByIdRecipientAuthOptions](../../models/operations/templategettemplatebyidrecipientauthoptions.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `signingOrder`                                                                                                                   | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.              |
| `rejectionReason`                                                                                                                | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |