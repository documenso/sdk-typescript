# RecipientUpdateDocumentRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientsResponse = {
  recipients: [
    {
      envelopeId: "<id>",
      role: "VIEWER",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 4016.96,
      email: "Brenden.Gibson72@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      expiresAt: "1759450223424",
      expirationNotifiedAt: null,
      signedAt: "<value>",
      authOptions: {
        accessAuth: [],
        actionAuth: [
          "PASSKEY",
        ],
      },
      signingOrder: 1673.23,
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