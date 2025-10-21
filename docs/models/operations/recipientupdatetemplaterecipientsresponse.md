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
      signedAt: "<value>",
      authOptions: {
        accessAuth: [
          "ACCOUNT",
        ],
        actionAuth: [
          "ACCOUNT",
        ],
      },
      signingOrder: 4661.45,
      rejectionReason: "<value>",
      fields: [
        {
          envelopeId: "<id>",
          envelopeItemId: "<id>",
          type: "DATE",
          id: 7418.3,
          secondaryId: "<id>",
          recipientId: 5371.46,
          page: 4748.46,
          customText: "<value>",
          inserted: true,
          fieldMeta: {
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