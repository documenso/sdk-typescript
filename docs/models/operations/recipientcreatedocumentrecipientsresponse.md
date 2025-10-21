# RecipientCreateDocumentRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsResponse = {
  recipients: [
    {
      envelopeId: "<id>",
      role: "SIGNER",
      readStatus: "OPENED",
      signingStatus: "SIGNED",
      sendStatus: "NOT_SENT",
      id: 3084.15,
      email: "Arvid_Kertzmann@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: null,
      signedAt: "<value>",
      authOptions: {
        accessAuth: [],
        actionAuth: [],
      },
      signingOrder: 3063.65,
      rejectionReason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                     | [operations.RecipientCreateDocumentRecipientsRecipientResponse](../../models/operations/recipientcreatedocumentrecipientsrecipientresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |