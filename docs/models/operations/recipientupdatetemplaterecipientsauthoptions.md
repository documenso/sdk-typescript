# RecipientUpdateTemplateRecipientsAuthOptions

## Example Usage

```typescript
import { RecipientUpdateTemplateRecipientsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateTemplateRecipientsAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "EXPLICIT_NONE",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                                           | [operations.RecipientUpdateTemplateRecipientsTemplatesRecipientsAccessAuth](../../models/operations/recipientupdatetemplaterecipientstemplatesrecipientsaccessauth.md) | :heavy_check_mark:                                                                                                                                                     | The type of authentication required for the recipient to access the document.                                                                                          |
| `actionAuth`                                                                                                                                                           | [operations.RecipientUpdateTemplateRecipientsTemplatesRecipientsActionAuth](../../models/operations/recipientupdatetemplaterecipientstemplatesrecipientsactionauth.md) | :heavy_check_mark:                                                                                                                                                     | The type of authentication required for the recipient to sign the document.                                                                                            |