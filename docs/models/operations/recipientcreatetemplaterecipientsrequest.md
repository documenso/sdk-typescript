# RecipientCreateTemplateRecipientsRequest

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsRequest } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsRequest = {
  templateId: 9773.67,
  recipients: [
    {
      email: "Mallie_Daniel87@gmail.com",
      name: "<value>",
      role: "APPROVER",
    },
  ],
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `templateId`                                                                                                                                   | *number*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `recipients`                                                                                                                                   | [operations.RecipientCreateTemplateRecipientsRecipientRequest](../../models/operations/recipientcreatetemplaterecipientsrecipientrequest.md)[] | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |