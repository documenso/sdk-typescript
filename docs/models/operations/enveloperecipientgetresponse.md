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
  signedAt: "<value>",
  authOptions: {
    accessAuth: [],
    actionAuth: [],
  },
  signingOrder: 1454.39,
  rejectionReason: "<value>",
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "INITIALS",
      id: 4298.75,
      secondaryId: "<id>",
      recipientId: 8601.07,
      page: 4023.38,
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
| `signedAt`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `authOptions`                                                                                                | [operations.EnvelopeRecipientGetAuthOptions](../../models/operations/enveloperecipientgetauthoptions.md)     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `signingOrder`                                                                                               | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `rejectionReason`                                                                                            | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `fields`                                                                                                     | [operations.EnvelopeRecipientGetField](../../models/operations/enveloperecipientgetfield.md)[]               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |