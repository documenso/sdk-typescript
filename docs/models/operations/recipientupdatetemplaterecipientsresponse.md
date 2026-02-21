# RecipientUpdateTemplateRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsResponse = {
  recipients: [
    {
      envelopeId: "<id>",
      role: "APPROVER",
      readStatus: "OPENED",
      signingStatus: "REJECTED",
      sendStatus: "NOT_SENT",
      id: 1170.08,
      email: "Onie38@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      expiresAt: "1752306933161",
      expirationNotifiedAt: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [],
        actionAuth: [
          "PASSKEY",
        ],
      },
      signingOrder: 3253.6,
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
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                     | [operations.RecipientUpdateTemplateRecipientsRecipientResponse](../../models/operations/recipientupdatetemplaterecipientsrecipientresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |