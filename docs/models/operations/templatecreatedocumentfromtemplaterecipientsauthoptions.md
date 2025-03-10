# TemplateCreateDocumentFromTemplateRecipientsAuthOptions

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateRecipientsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateRecipientsAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                       | [operations.TemplateCreateDocumentFromTemplateAccessAuth](../../models/operations/templatecreatedocumentfromtemplateaccessauth.md) | :heavy_check_mark:                                                                                                                 | The type of authentication required for the recipient to access the document.                                                      |
| `actionAuth`                                                                                                                       | [operations.TemplateCreateDocumentFromTemplateActionAuth](../../models/operations/templatecreatedocumentfromtemplateactionauth.md) | :heavy_check_mark:                                                                                                                 | The type of authentication required for the recipient to sign the document.                                                        |