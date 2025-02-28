# RecipientCreateTemplateRecipientsRequestBody

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsRequestBody = {
  templateId: 8102.91,
  recipients: [
    {
      email: "Alfonso.Ryan90@hotmail.com",
      name: "<value>",
      role: "VIEWER",
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `templateId`                                                                                                                       | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `recipients`                                                                                                                       | [operations.RecipientCreateTemplateRecipientsRecipients](../../models/operations/recipientcreatetemplaterecipientsrecipients.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |