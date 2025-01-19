# RecipientCreateTemplateRecipientsRequestBody

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsRequestBody = {
  templateId: 6121.81,
  recipients: [
    {
      email: "Edwina.Stokes-Von56@hotmail.com",
      name: "<value>",
      role: "APPROVER",
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `templateId`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `recipients`                                                                                                                       | [operations.RecipientCreateTemplateRecipientsRecipients](../../models/operations/recipientcreatetemplaterecipientsrecipients.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |