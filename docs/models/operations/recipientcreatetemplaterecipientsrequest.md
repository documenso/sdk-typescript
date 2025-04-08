# RecipientCreateTemplateRecipientsRequest

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsRequest } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsRequest = {
  templateId: 9773.67,
  recipients: [
    {
      email: "Bailey61@hotmail.com",
      name: "<value>",
      role: "SIGNER",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `templateId`                                                                                                                                           | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `recipients`                                                                                                                                           | [operations.RecipientCreateTemplateRecipientsRecipientRequestBody](../../models/operations/recipientcreatetemplaterecipientsrecipientrequestbody.md)[] | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |