# RecipientUpdateTemplateRecipientsRecipientResponse

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsRecipientResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsRecipientResponse = {
  envelopeId: "<id>",
  role: "SIGNER",
  readStatus: "NOT_OPENED",
  signingStatus: "REJECTED",
  sendStatus: "SENT",
  id: 749.51,
  email: "Danny97@yahoo.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  expiresAt: "1749582360303",
  expirationNotifiedAt: "<value>",
  signedAt: "<value>",
  authOptions: {
    accessAuth: [],
    actionAuth: [
      "PASSKEY",
    ],
  },
  signingOrder: 9669.06,
  rejectionReason: "<value>",
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "DATE",
      id: 4748.46,
      secondaryId: "<id>",
      recipientId: 359.84,
      page: 1160.41,
      positionX: "<value>",
      positionY: "<value>",
      width: "<value>",
      height: "<value>",
      customText: "<value>",
      inserted: true,
      fieldMeta: {
        fontSize: 12,
        type: "email",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                                                           | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `role`                                                                                                                                 | [operations.RecipientUpdateTemplateRecipientsRoleResponse](../../models/operations/recipientupdatetemplaterecipientsroleresponse.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `readStatus`                                                                                                                           | [operations.RecipientUpdateTemplateRecipientsReadStatus](../../models/operations/recipientupdatetemplaterecipientsreadstatus.md)       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signingStatus`                                                                                                                        | [operations.RecipientUpdateTemplateRecipientsSigningStatus](../../models/operations/recipientupdatetemplaterecipientssigningstatus.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `sendStatus`                                                                                                                           | [operations.RecipientUpdateTemplateRecipientsSendStatus](../../models/operations/recipientupdatetemplaterecipientssendstatus.md)       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `id`                                                                                                                                   | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `email`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `token`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentDeletedAt`                                                                                                                    | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `expired`                                                                                                                              | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `expiresAt`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `expirationNotifiedAt`                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signedAt`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `authOptions`                                                                                                                          | [operations.RecipientUpdateTemplateRecipientsAuthOptions](../../models/operations/recipientupdatetemplaterecipientsauthoptions.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `signingOrder`                                                                                                                         | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `rejectionReason`                                                                                                                      | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `fields`                                                                                                                               | [operations.RecipientUpdateTemplateRecipientsField](../../models/operations/recipientupdatetemplaterecipientsfield.md)[]               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentId`                                                                                                                           | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |
| `templateId`                                                                                                                           | *number*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |