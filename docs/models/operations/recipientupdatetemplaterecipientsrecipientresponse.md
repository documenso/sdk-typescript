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
  documentId: 2280.13,
  templateId: 1596.97,
  email: "Walter.Champlin@hotmail.com",
  name: "<value>",
  token: "<value>",
  documentDeletedAt: "<value>",
  expired: "<value>",
  signedAt: "<value>",
  authOptions: null,
  signingOrder: 2795.49,
  rejectionReason: "<value>",
  fields: [
    {
      type: "DATE",
      id: 7418.3,
      secondaryId: "<id>",
      documentId: 4748.46,
      templateId: null,
      recipientId: 1160.41,
      page: 2538.43,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "number",
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