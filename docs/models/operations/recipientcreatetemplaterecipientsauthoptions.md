# RecipientCreateTemplateRecipientsAuthOptions

## Example Usage

```typescript
import { RecipientCreateTemplateRecipientsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateTemplateRecipientsAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "EXPLICIT_NONE",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                                                           | [operations.RecipientCreateTemplateRecipientsTemplatesRecipientsAccessAuth](../../models/operations/recipientcreatetemplaterecipientstemplatesrecipientsaccessauth.md) | :heavy_check_mark:                                                                                                                                                     | The type of authentication required for the recipient to access the document.                                                                                          |
| `actionAuth`                                                                                                                                                           | [operations.RecipientCreateTemplateRecipientsTemplatesRecipientsActionAuth](../../models/operations/recipientcreatetemplaterecipientstemplatesrecipientsactionauth.md) | :heavy_check_mark:                                                                                                                                                     | The type of authentication required for the recipient to sign the document.                                                                                            |