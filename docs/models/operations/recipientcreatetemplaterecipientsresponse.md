# RecipientCreateTemplateRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsResponse = {
  recipients: [
    {
      role: "SIGNER",
      readStatus: "NOT_OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 6134.75,
      documentId: 9304.9,
      templateId: 8591.06,
      email: "Rylan_Mills@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: null,
      signedAt: "<value>",
      authOptions: {
        accessAuth: [
          "ACCOUNT",
        ],
        actionAuth: [
          "PASSKEY",
        ],
      },
      signingOrder: null,
      rejectionReason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                     | [operations.RecipientCreateTemplateRecipientsRecipientResponse](../../models/operations/recipientcreatetemplaterecipientsrecipientresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |