# DocumentFindRecipient

## Example Usage

```typescript
import { DocumentFindRecipient } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindRecipient = {
  envelopeId: "<id>",
  role: "VIEWER",
  readStatus: "OPENED",
  signingStatus: "SIGNED",
  sendStatus: "NOT_SENT",
  id: 7314.5,
  email: "Monte88@yahoo.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: [],
    actionAuth: [],
  },
  signingOrder: 5139.37,
  rejectionReason: "<value>",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                                        | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `role`                                                                                                              | [operations.DocumentFindRole](../../models/operations/documentfindrole.md)                                          | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `readStatus`                                                                                                        | [operations.DocumentFindReadStatus](../../models/operations/documentfindreadstatus.md)                              | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `signingStatus`                                                                                                     | [operations.DocumentFindSigningStatus](../../models/operations/documentfindsigningstatus.md)                        | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `sendStatus`                                                                                                        | [operations.DocumentFindSendStatus](../../models/operations/documentfindsendstatus.md)                              | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `id`                                                                                                                | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `email`                                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `name`                                                                                                              | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `token`                                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `documentDeletedAt`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `expired`                                                                                                           | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `signedAt`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `authOptions`                                                                                                       | [operations.DocumentFindRecipientAuthOptions](../../models/operations/documentfindrecipientauthoptions.md)          | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `signingOrder`                                                                                                      | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | The order in which the recipient should sign the document. Only works if the document is set to sequential signing. |
| `rejectionReason`                                                                                                   | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `documentId`                                                                                                        | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |
| `templateId`                                                                                                        | *number*                                                                                                            | :heavy_minus_sign:                                                                                                  | N/A                                                                                                                 |