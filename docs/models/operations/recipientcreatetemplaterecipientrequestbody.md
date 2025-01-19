# RecipientCreateTemplateRecipientRequestBody

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientRequestBody = {
  templateId: 2172.75,
  recipient: {
    email: "Mittie.Dare@gmail.com",
    name: "<value>",
    role: "CC",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `templateId`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `recipient`                                                                                                                  | [operations.RecipientCreateTemplateRecipientRecipient](../../models/operations/recipientcreatetemplaterecipientrecipient.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |