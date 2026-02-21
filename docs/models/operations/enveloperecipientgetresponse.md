# EnvelopeRecipientGetResponse

Successful response

## Example Usage

```typescript
import { EnvelopeRecipientGetResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeRecipientGetResponse = {
  envelopeId: "<id>",
  role: "SIGNER",
  readStatus: "OPENED",
  signingStatus: "SIGNED",
  sendStatus: "NOT_SENT",
  id: 8957.89,
  email: "Molly_Langosh@gmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  expiresAt: "1749909465953",
  expirationNotifiedAt: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: [],
    actionAuth: [
      "TWO_FACTOR_AUTH",
    ],
  },
  signingOrder: 4298.75,
  rejectionReason: "<value>",
  fields: [],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `envelopeId`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `role`                                                                                                       | [operations.EnvelopeRecipientGetRole](../../models/operations/enveloperecipientgetrole.md)                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `readStatus`                                                                                                 | [operations.EnvelopeRecipientGetReadStatus](../../models/operations/enveloperecipientgetreadstatus.md)       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `signingStatus`                                                                                              | [operations.EnvelopeRecipientGetSigningStatus](../../models/operations/enveloperecipientgetsigningstatus.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `sendStatus`                                                                                                 | [operations.EnvelopeRecipientGetSendStatus](../../models/operations/enveloperecipientgetsendstatus.md)       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `email`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `token`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `documentDeletedAt`                                                                                          | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `expired`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `expiresAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `expirationNotifiedAt`                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `signedAt`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `authOptions`                                                                                                | [operations.EnvelopeRecipientGetAuthOptions](../../models/operations/enveloperecipientgetauthoptions.md)     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `signingOrder`                                                                                               | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `rejectionReason`                                                                                            | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `fields`                                                                                                     | [operations.EnvelopeRecipientGetField](../../models/operations/enveloperecipientgetfield.md)[]               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |