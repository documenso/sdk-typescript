# TemplateCreateDocumentFromTemplateRecipientAuthOptions

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateRecipientAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "EXPLICIT_NONE",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                       | [operations.TemplateCreateDocumentFromTemplateAccessAuth](../../models/operations/templatecreatedocumentfromtemplateaccessauth.md) | :heavy_check_mark:                                                                                                                 | The type of authentication required for the recipient to access the document.                                                      |
| `actionAuth`                                                                                                                       | [operations.TemplateCreateDocumentFromTemplateActionAuth](../../models/operations/templatecreatedocumentfromtemplateactionauth.md) | :heavy_check_mark:                                                                                                                 | The type of authentication required for the recipient to sign the document.                                                        |