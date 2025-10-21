# TemplateCreateDocumentFromTemplateRecipientAuthOptions

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateRecipientAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateRecipientAuthOptions = {
  accessAuth: [
    "TWO_FACTOR_AUTH",
  ],
  actionAuth: [
    "ACCOUNT",
  ],
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `accessAuth`                                                                                                                         | [operations.TemplateCreateDocumentFromTemplateAccessAuth](../../models/operations/templatecreatedocumentfromtemplateaccessauth.md)[] | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `actionAuth`                                                                                                                         | [operations.TemplateCreateDocumentFromTemplateActionAuth](../../models/operations/templatecreatedocumentfromtemplateactionauth.md)[] | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |