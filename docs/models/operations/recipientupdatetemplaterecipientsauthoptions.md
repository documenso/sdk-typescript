# RecipientUpdateTemplateRecipientsAuthOptions

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accessAuth`                                                                                                                                     | [operations.RecipientUpdateTemplateRecipientsResponseAccessAuth](../../models/operations/recipientupdatetemplaterecipientsresponseaccessauth.md) | :heavy_check_mark:                                                                                                                               | The type of authentication required for the recipient to access the document.                                                                    |
| `actionAuth`                                                                                                                                     | [operations.RecipientUpdateTemplateRecipientsResponseActionAuth](../../models/operations/recipientupdatetemplaterecipientsresponseactionauth.md) | :heavy_check_mark:                                                                                                                               | The type of authentication required for the recipient to sign the document.                                                                      |