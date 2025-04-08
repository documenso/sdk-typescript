# RecipientUpdateTemplateRecipientsRecipientResponse

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsRecipientResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsRecipientResponse = {
  role: "SIGNER",
  readStatus: "NOT_OPENED",
  signingStatus: "REJECTED",
  sendStatus: "SENT",
  id: 749.51,
  documentId: 6575.11,
  templateId: 2280.13,
  email: "Carmine_Witting@hotmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: "ACCOUNT",
    actionAuth: "TWO_FACTOR_AUTH",
  },
  signingOrder: 4405.36,
  rejectionReason: "<value>",
  fields: [
    {
      type: "CHECKBOX",
      id: 2381.13,
      secondaryId: "<id>",
      documentId: 9743.86,
      templateId: 828.08,
      recipientId: 8942.01,
      page: 2795.49,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "name",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                 | [operations.RecipientUpdateTemplateRecipientsRoleResponse](../../models/operations/recipientupdatetemplaterecipientsroleresponse.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `readStatus`                                                                                                                           | [operations.RecipientUpdateTemplateRecipientsReadStatus](../../models/operations/recipientupdatetemplaterecipientsreadstatus.md)       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signingStatus`                                                                                                                        | [operations.RecipientUpdateTemplateRecipientsSigningStatus](../../models/operations/recipientupdatetemplaterecipientssigningstatus.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `sendStatus`                                                                                                                           | [operations.RecipientUpdateTemplateRecipientsSendStatus](../../models/operations/recipientupdatetemplaterecipientssendstatus.md)       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `id`                                                                                                                                   | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentId`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `templateId`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `email`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `token`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentDeletedAt`                                                                                                                    | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `expired`                                                                                                                              | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signedAt`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `authOptions`                                                                                                                          | [operations.RecipientUpdateTemplateRecipientsAuthOptions](../../models/operations/recipientupdatetemplaterecipientsauthoptions.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signingOrder`                                                                                                                         | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The order in which the recipient should sign the document. Only works if the document is set to sequential signing.                    |
| `rejectionReason`                                                                                                                      | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `fields`                                                                                                                               | [operations.RecipientUpdateTemplateRecipientsField](../../models/operations/recipientupdatetemplaterecipientsfield.md)[]               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |