# RecipientCreateTemplateRecipientRequest

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientRequest } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientRequest = {
  templateId: 4358.41,
  recipient: {
    email: "Julianne.Sipes@hotmail.com",
    name: "<value>",
    role: "ASSISTANT",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `templateId`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `recipient`                                                                                                                  | [operations.RecipientCreateTemplateRecipientRecipient](../../models/operations/recipientcreatetemplaterecipientrecipient.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |