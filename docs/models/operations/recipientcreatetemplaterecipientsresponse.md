# RecipientCreateTemplateRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsResponse = {
  recipients: [
    {
      envelopeId: "<id>",
      role: "SIGNER",
      readStatus: "NOT_OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 6134.75,
      email: "Tomas_Stokes@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [
          "ACCOUNT",
        ],
        actionAuth: [
          "EXPLICIT_NONE",
        ],
      },
      signingOrder: 325.59,
      rejectionReason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                     | [operations.RecipientCreateTemplateRecipientsRecipientResponse](../../models/operations/recipientcreatetemplaterecipientsrecipientresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |