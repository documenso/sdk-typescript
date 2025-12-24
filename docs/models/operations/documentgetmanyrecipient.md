# DocumentGetManyRecipient

## Example Usage

```typescript
import { DocumentGetManyRecipient } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetManyRecipient = {
  envelopeId: "<id>",
  role: "ASSISTANT",
  readStatus: "OPENED",
  signingStatus: "REJECTED",
  sendStatus: "SENT",
  id: 6030.06,
  email: "Loraine.Cartwright71@gmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: null,
  signedAt: "<value>",
  authOptions: {
    accessAuth: [
      "ACCOUNT",
    ],
    actionAuth: [],
  },
  signingOrder: 7092.25,
  rejectionReason: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `role`                                                                                                           | [operations.DocumentGetManyRole](../../models/operations/documentgetmanyrole.md)                                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `readStatus`                                                                                                     | [operations.DocumentGetManyReadStatus](../../models/operations/documentgetmanyreadstatus.md)                     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `signingStatus`                                                                                                  | [operations.DocumentGetManySigningStatus](../../models/operations/documentgetmanysigningstatus.md)               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `sendStatus`                                                                                                     | [operations.DocumentGetManySendStatus](../../models/operations/documentgetmanysendstatus.md)                     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `email`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `token`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `documentDeletedAt`                                                                                              | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `expired`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `signedAt`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `authOptions`                                                                                                    | [operations.DocumentGetManyRecipientAuthOptions](../../models/operations/documentgetmanyrecipientauthoptions.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `signingOrder`                                                                                                   | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rejectionReason`                                                                                                | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `documentId`                                                                                                     | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `templateId`                                                                                                     | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |