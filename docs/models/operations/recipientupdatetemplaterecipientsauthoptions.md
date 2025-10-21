# RecipientUpdateTemplateRecipientsAuthOptions

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsAuthOptions = {
  accessAuth: [
    "TWO_FACTOR_AUTH",
  ],
  actionAuth: [
    "PASSKEY",
  ],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                       | [operations.RecipientUpdateTemplateRecipientsAccessAuthResponse](../../models/operations/recipientupdatetemplaterecipientsaccessauthresponse.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `actionAuth`                                                                                                                                       | [operations.RecipientUpdateTemplateRecipientsActionAuthResponse](../../models/operations/recipientupdatetemplaterecipientsactionauthresponse.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |