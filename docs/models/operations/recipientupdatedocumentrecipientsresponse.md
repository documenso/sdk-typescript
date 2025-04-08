# RecipientUpdateDocumentRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientsResponse = {
  recipients: [
    {
      role: "ASSISTANT",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "NOT_SENT",
      id: 3143.87,
      documentId: 4016.96,
      templateId: 4008.74,
      email: "Jean11@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 3734.17,
      rejectionReason: "<value>",
      fields: [
        {
          type: "RADIO",
          id: 269.95,
          secondaryId: "<id>",
          documentId: 8071.39,
          templateId: 2174,
          recipientId: 3542.02,
          page: 1673.23,
          customText: "<value>",
          inserted: false,
          fieldMeta: {
            type: "date",
          },
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                     | [operations.RecipientUpdateDocumentRecipientsRecipientResponse](../../models/operations/recipientupdatedocumentrecipientsrecipientresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |