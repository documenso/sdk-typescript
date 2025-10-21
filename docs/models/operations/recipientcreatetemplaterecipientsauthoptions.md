# RecipientCreateTemplateRecipientsAuthOptions

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsAuthOptions = {
  accessAuth: [
    "TWO_FACTOR_AUTH",
  ],
  actionAuth: [
    "ACCOUNT",
  ],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                       | [operations.RecipientCreateTemplateRecipientsAccessAuthResponse](../../models/operations/recipientcreatetemplaterecipientsaccessauthresponse.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `actionAuth`                                                                                                                                       | [operations.RecipientCreateTemplateRecipientsActionAuthResponse](../../models/operations/recipientcreatetemplaterecipientsactionauthresponse.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |