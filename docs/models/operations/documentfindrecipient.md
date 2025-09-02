# DocumentFindRecipient

## Example Usage

```typescript
import { DocumentFindRecipient } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindRecipient = {
  role: "VIEWER",
  readStatus: "OPENED",
  signingStatus: "SIGNED",
  sendStatus: "NOT_SENT",
  id: 7314.5,
  documentId: 7294.15,
  templateId: null,
  email: "Hassan28@gmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: null,
  authOptions: {
    accessAuth: [
      "ACCOUNT",
    ],
    actionAuth: [
      "PASSKEY",
    ],
  },
  signingOrder: 538.83,
  rejectionReason: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                              | [operations.DocumentFindRole](../../models/operations/documentfindrole.md)                                          | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `readStatus`                                                                                                        | [operations.DocumentFindReadStatus](../../models/operations/documentfindreadstatus.md)                              | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `signingStatus`                                                                                                     | [operations.DocumentFindSigningStatus](../../models/operations/documentfindsigningstatus.md)                        | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `sendStatus`                                                                                                        | [operations.DocumentFindSendStatus](../../models/operations/documentfindsendstatus.md)                              | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `id`                                                                                                                | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `documentId`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `templateId`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `email`                                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `name`                                                                                                              | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `token`                                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `documentDeletedAt`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `expired`                                                                                                           | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `signedAt`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `authOptions`                                                                                                       | [operations.DocumentFindRecipientAuthOptions](../../models/operations/documentfindrecipientauthoptions.md)          | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `signingOrder`                                                                                                      | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | The order in which the recipient should sign the document. Only works if the document is set to sequential signing. |
| `rejectionReason`                                                                                                   | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |