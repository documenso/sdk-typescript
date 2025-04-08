# RecipientUpdateTemplateRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsResponse = {
  recipients: [
    {
      role: "VIEWER",
      readStatus: "OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 577.46,
      documentId: 1170.08,
      templateId: 2465.02,
      email: "Madge99@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 4669.97,
      rejectionReason: "<value>",
      fields: [
        {
          type: "DATE",
          id: 7279.47,
          secondaryId: "<id>",
          documentId: 4661.45,
          templateId: 5624.14,
          recipientId: 6010.16,
          page: 3253.6,
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
| `recipients`                                                                                                                                     | [operations.RecipientUpdateTemplateRecipientsRecipientResponse](../../models/operations/recipientupdatetemplaterecipientsrecipientresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |