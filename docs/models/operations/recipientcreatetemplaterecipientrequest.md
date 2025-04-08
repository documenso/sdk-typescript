# RecipientCreateTemplateRecipientRequest

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientRequest } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientRequest = {
  templateId: 8698.19,
  recipient: {
    email: "Ross.Murazik@hotmail.com",
    name: "<value>",
    role: "VIEWER",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `templateId`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `recipient`                                                                                                                  | [operations.RecipientCreateTemplateRecipientRecipient](../../models/operations/recipientcreatetemplaterecipientrecipient.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |