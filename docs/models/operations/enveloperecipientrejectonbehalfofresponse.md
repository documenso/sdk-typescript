# EnvelopeRecipientRejectOnBehalfOfResponse

Successful response

## Example Usage

```typescript
import { EnvelopeRecipientRejectOnBehalfOfResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeRecipientRejectOnBehalfOfResponse = {
  envelopeId: "<id>",
  role: "SIGNER",
  readStatus: "OPENED",
  signingStatus: "SIGNED",
  sendStatus: "NOT_SENT",
  id: 6202.23,
  email: "Jaren46@gmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  expiresAt: "1746009589034",
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
  signingOrder: 7286.43,
  rejectionReason: "<value>",
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "FREE_SIGNATURE",
      id: 4839.98,
      secondaryId: "<id>",
      recipientId: 3801.76,
      page: 7556.2,
      positionX: "<value>",
      positionY: "<value>",
      width: "<value>",
      height: "<value>",
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        fontSize: 12,
        type: "initials",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                                                           | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `role`                                                                                                                                 | [operations.EnvelopeRecipientRejectOnBehalfOfRole](../../models/operations/enveloperecipientrejectonbehalfofrole.md)                   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `readStatus`                                                                                                                           | [operations.EnvelopeRecipientRejectOnBehalfOfReadStatus](../../models/operations/enveloperecipientrejectonbehalfofreadstatus.md)       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signingStatus`                                                                                                                        | [operations.EnvelopeRecipientRejectOnBehalfOfSigningStatus](../../models/operations/enveloperecipientrejectonbehalfofsigningstatus.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `sendStatus`                                                                                                                           | [operations.EnvelopeRecipientRejectOnBehalfOfSendStatus](../../models/operations/enveloperecipientrejectonbehalfofsendstatus.md)       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `id`                                                                                                                                   | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `email`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `token`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentDeletedAt`                                                                                                                    | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `expired`                                                                                                                              | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `expiresAt`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `expirationNotifiedAt`                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signedAt`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `authOptions`                                                                                                                          | [operations.EnvelopeRecipientRejectOnBehalfOfAuthOptions](../../models/operations/enveloperecipientrejectonbehalfofauthoptions.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signingOrder`                                                                                                                         | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `rejectionReason`                                                                                                                      | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `fields`                                                                                                                               | [operations.EnvelopeRecipientRejectOnBehalfOfField](../../models/operations/enveloperecipientrejectonbehalfoffield.md)[]               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |