# EnvelopeGetManyRecipient

## Example Usage

```typescript
import { EnvelopeGetManyRecipient } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeGetManyRecipient = {
  envelopeId: "<id>",
  role: "ASSISTANT",
  readStatus: "OPENED",
  signingStatus: "NOT_SIGNED",
  sendStatus: "SENT",
  id: 702.52,
  email: "Rahul68@yahoo.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  expiresAt: "1747274478259",
  expirationNotifiedAt: "<value>",
  signedAt: null,
  authOptions: {
    accessAuth: [],
    actionAuth: [],
  },
  signingOrder: null,
  rejectionReason: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `role`                                                                                                           | [operations.EnvelopeGetManyRole](../../models/operations/envelopegetmanyrole.md)                                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `readStatus`                                                                                                     | [operations.EnvelopeGetManyReadStatus](../../models/operations/envelopegetmanyreadstatus.md)                     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `signingStatus`                                                                                                  | [operations.EnvelopeGetManySigningStatus](../../models/operations/envelopegetmanysigningstatus.md)               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `sendStatus`                                                                                                     | [operations.EnvelopeGetManySendStatus](../../models/operations/envelopegetmanysendstatus.md)                     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `email`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `token`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `documentDeletedAt`                                                                                              | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `expired`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `expiresAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `expirationNotifiedAt`                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `signedAt`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `authOptions`                                                                                                    | [operations.EnvelopeGetManyRecipientAuthOptions](../../models/operations/envelopegetmanyrecipientauthoptions.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `signingOrder`                                                                                                   | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rejectionReason`                                                                                                | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |