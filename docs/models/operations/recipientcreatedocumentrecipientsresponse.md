# RecipientCreateDocumentRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsResponse = {
  recipients: [
    {
      role: "SIGNER",
      readStatus: "OPENED",
      signingStatus: "SIGNED",
      sendStatus: "NOT_SENT",
      id: 3084.15,
      documentId: 855.15,
      templateId: 4355.39,
      email: "Eduardo.Dicki@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [],
        actionAuth: [],
      },
      signingOrder: 6259.51,
      rejectionReason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                     | [operations.RecipientCreateDocumentRecipientsRecipientResponse](../../models/operations/recipientcreatedocumentrecipientsrecipientresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |