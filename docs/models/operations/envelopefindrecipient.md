# EnvelopeFindRecipient

## Example Usage

```typescript
import { EnvelopeFindRecipient } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeFindRecipient = {
  envelopeId: "<id>",
  role: "CC",
  readStatus: "NOT_OPENED",
  signingStatus: "SIGNED",
  sendStatus: "NOT_SENT",
  id: 8010.6,
  email: "Joy28@hotmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  expiresAt: "1764733262610",
  expirationNotifiedAt: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: [
      "ACCOUNT",
    ],
    actionAuth: [
      "EXPLICIT_NONE",
    ],
  },
  signingOrder: 4037.39,
  rejectionReason: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `role`                                                                                                     | [operations.EnvelopeFindRole](../../models/operations/envelopefindrole.md)                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `readStatus`                                                                                               | [operations.EnvelopeFindReadStatus](../../models/operations/envelopefindreadstatus.md)                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `signingStatus`                                                                                            | [operations.EnvelopeFindSigningStatus](../../models/operations/envelopefindsigningstatus.md)               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `sendStatus`                                                                                               | [operations.EnvelopeFindSendStatus](../../models/operations/envelopefindsendstatus.md)                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `email`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `token`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `documentDeletedAt`                                                                                        | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `expired`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `expiresAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `expirationNotifiedAt`                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `signedAt`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `authOptions`                                                                                              | [operations.EnvelopeFindRecipientAuthOptions](../../models/operations/envelopefindrecipientauthoptions.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `signingOrder`                                                                                             | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `rejectionReason`                                                                                          | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |