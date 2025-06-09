# RecipientUpdateDocumentRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientsResponse = {
  recipients: [
    {
      role: "VIEWER",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 4016.96,
      documentId: 1315.53,
      templateId: 2618.83,
      email: "Misael37@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: null,
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [],
        actionAuth: [
          "PASSKEY",
        ],
      },
      signingOrder: 3524.23,
      rejectionReason: "<value>",
      fields: [],
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                     | [operations.RecipientUpdateDocumentRecipientsRecipientResponse](../../models/operations/recipientupdatedocumentrecipientsrecipientresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |