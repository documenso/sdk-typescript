# RecipientCreateTemplateRecipientsResponse

Successful response

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsResponse } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsResponse = {
  recipients: [
    {
      role: "VIEWER",
      readStatus: "OPENED",
      signingStatus: "SIGNED",
      sendStatus: "NOT_SENT",
      id: 6197.72,
      documentId: 2712.16,
      templateId: 988.46,
      email: "Keegan_Macejkovic@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 7420.1,
      rejectionReason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `recipients`                                                                                                                                       | [operations.RecipientCreateTemplateRecipientsResponseRecipients](../../models/operations/recipientcreatetemplaterecipientsresponserecipients.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |