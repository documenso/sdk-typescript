# EnvelopeGetRecipient

## Example Usage

```typescript
import { EnvelopeGetRecipient } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeGetRecipient = {
  envelopeId: "<id>",
  role: "APPROVER",
  readStatus: "NOT_OPENED",
  signingStatus: "NOT_SIGNED",
  sendStatus: "NOT_SENT",
  id: 8428.22,
  email: "Lea96@gmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  expiresAt: "1766978330473",
  expirationNotifiedAt: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: [
      "ACCOUNT",
    ],
    actionAuth: [
      "PASSKEY",
    ],
  },
  signingOrder: 2091.82,
  rejectionReason: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `role`                                                                                                   | [operations.EnvelopeGetRole](../../models/operations/envelopegetrole.md)                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `readStatus`                                                                                             | [operations.EnvelopeGetReadStatus](../../models/operations/envelopegetreadstatus.md)                     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `signingStatus`                                                                                          | [operations.EnvelopeGetSigningStatus](../../models/operations/envelopegetsigningstatus.md)               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `sendStatus`                                                                                             | [operations.EnvelopeGetSendStatus](../../models/operations/envelopegetsendstatus.md)                     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `email`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `token`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `documentDeletedAt`                                                                                      | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `expired`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `expiresAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `expirationNotifiedAt`                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `signedAt`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `authOptions`                                                                                            | [operations.EnvelopeGetRecipientAuthOptions](../../models/operations/envelopegetrecipientauthoptions.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `signingOrder`                                                                                           | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `rejectionReason`                                                                                        | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |