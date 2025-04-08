# RecipientCreateDocumentRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsResponse = {
  recipients: [
    {
      role: "APPROVER",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 4432,
      documentId: 3084.15,
      templateId: 7899.45,
      email: "Elmo.Smith40@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "ACCOUNT",
      },
      signingOrder: 9274.7,
      rejectionReason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                     | [operations.RecipientCreateDocumentRecipientsRecipientResponse](../../models/operations/recipientcreatedocumentrecipientsrecipientresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |