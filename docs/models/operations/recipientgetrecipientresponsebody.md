# RecipientGetRecipientResponseBody

Successful response

## Example Usage

```typescript
import { RecipientGetRecipientResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientGetRecipientResponseBody = {
  role: "APPROVER",
  readStatus: "NOT_OPENED",
  signingStatus: "SIGNED",
  sendStatus: "NOT_SENT",
  id: 575111,
  documentId: 996101,
  templateId: 232209,
  email: "Dewitt.Bradtke88@yahoo.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "PASSKEY",
  },
  signingOrder: 9444.75,
  rejectionReason: "<value>",
  fields: [
    {
      type: "RADIO",
      id: 516739,
      secondaryId: "<id>",
      documentId: 777193,
      templateId: 123179,
      recipientId: 464490,
      page: 1182.36,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "email",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                              | [operations.RecipientGetRecipientRole](../../models/operations/recipientgetrecipientrole.md)                        | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `readStatus`                                                                                                        | [operations.ReadStatus](../../models/operations/readstatus.md)                                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `signingStatus`                                                                                                     | [operations.SigningStatus](../../models/operations/signingstatus.md)                                                | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `sendStatus`                                                                                                        | [operations.SendStatus](../../models/operations/sendstatus.md)                                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `id`                                                                                                                | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `documentId`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `templateId`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `email`                                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `name`                                                                                                              | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `token`                                                                                                             | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `documentDeletedAt`                                                                                                 | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `expired`                                                                                                           | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `signedAt`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `authOptions`                                                                                                       | [operations.RecipientGetRecipientAuthOptions](../../models/operations/recipientgetrecipientauthoptions.md)          | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `signingOrder`                                                                                                      | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | The order in which the recipient should sign the document. Only works if the document is set to sequential signing. |
| `rejectionReason`                                                                                                   | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `fields`                                                                                                            | [operations.RecipientGetRecipientFields](../../models/operations/recipientgetrecipientfields.md)[]                  | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |