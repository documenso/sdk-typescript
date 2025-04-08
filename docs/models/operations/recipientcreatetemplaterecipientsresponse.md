# RecipientCreateTemplateRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsResponse = {
  recipients: [
    {
      role: "VIEWER",
      readStatus: "NOT_OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 4633.83,
      documentId: 6134.75,
      templateId: 1733.11,
      email: "Jeanie_Rice@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "EXPLICIT_NONE",
      },
      signingOrder: 6654.99,
      rejectionReason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                     | [operations.RecipientCreateTemplateRecipientsRecipientResponse](../../models/operations/recipientcreatetemplaterecipientsrecipientresponse.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |