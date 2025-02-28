# RecipientCreateTemplateRecipientsResponseBody

Successful response

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsResponseBody = {
  recipients: [
    {
      role: "VIEWER",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "SENT",
      id: 877619,
      documentId: 623868,
      templateId: 17029,
      email: "Wilfred.Crooks@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "ACCOUNT",
      },
      signingOrder: 6197.72,
      rejectionReason: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `recipients`                                                                                                                                                             | [operations.RecipientCreateTemplateRecipientsTemplatesRecipientsRecipients](../../models/operations/recipientcreatetemplaterecipientstemplatesrecipientsrecipients.md)[] | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |