# RecipientCreateTemplateRecipientsRequest

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsRequest } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsRequest = {
  templateId: 6569.39,
  recipients: [
    {
      email: "Jazmyne75@gmail.com",
      name: "<value>",
      role: "VIEWER",
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `templateId`                                                                                                                                     | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `recipients`                                                                                                                                     | [operations.RecipientCreateTemplateRecipientsRequestRecipients](../../models/operations/recipientcreatetemplaterecipientsrequestrecipients.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |