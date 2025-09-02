# DocumentGetRecipient

## Example Usage

```typescript
import { DocumentGetRecipient } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetRecipient = {
  role: "APPROVER",
  readStatus: "OPENED",
  signingStatus: "REJECTED",
  sendStatus: "NOT_SENT",
  id: 1962.21,
  documentId: 9105.73,
  templateId: 9490.38,
  email: "Newton_Larkin@yahoo.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: [
      "ACCOUNT",
    ],
    actionAuth: [
      "EXPLICIT_NONE",
    ],
  },
  signingOrder: 5254.4,
  rejectionReason: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                              | [operations.DocumentGetRole](../../models/operations/documentgetrole.md)                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `readStatus`                                                                                                        | [operations.DocumentGetReadStatus](../../models/operations/documentgetreadstatus.md)                                | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `signingStatus`                                                                                                     | [operations.DocumentGetSigningStatus](../../models/operations/documentgetsigningstatus.md)                          | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `sendStatus`                                                                                                        | [operations.DocumentGetSendStatus](../../models/operations/documentgetsendstatus.md)                                | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `id`                                                                                                                | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `documentId`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `templateId`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `email`                                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `name`                                                                                                              | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `token`                                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `documentDeletedAt`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `expired`                                                                                                           | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `signedAt`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `authOptions`                                                                                                       | [operations.DocumentGetRecipientAuthOptions](../../models/operations/documentgetrecipientauthoptions.md)            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `signingOrder`                                                                                                      | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | The order in which the recipient should sign the document. Only works if the document is set to sequential signing. |
| `rejectionReason`                                                                                                   | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |