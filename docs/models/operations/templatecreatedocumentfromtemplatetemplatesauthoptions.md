# TemplateCreateDocumentFromTemplateTemplatesAuthOptions

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateTemplatesAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateTemplatesAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "ACCOUNT",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                                                       | [operations.TemplateCreateDocumentFromTemplateAccessAuth](../../models/operations/templatecreatedocumentfromtemplateaccessauth.md) | :heavy_check_mark:                                                                                                                 | The type of authentication required for the recipient to access the document.                                                      |
| `actionAuth`                                                                                                                       | [operations.TemplateCreateDocumentFromTemplateActionAuth](../../models/operations/templatecreatedocumentfromtemplateactionauth.md) | :heavy_check_mark:                                                                                                                 | The type of authentication required for the recipient to sign the document.                                                        |