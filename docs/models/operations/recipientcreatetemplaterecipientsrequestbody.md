# RecipientCreateTemplateRecipientsRequestBody

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsRequestBody = {
  templateId: 5723.17,
  recipients: [
    {
      email: "Charlene44@hotmail.com",
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