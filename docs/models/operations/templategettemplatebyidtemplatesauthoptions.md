# TemplateGetTemplateByIdTemplatesAuthOptions

## Example Usage

```typescript
import { TemplateGetTemplateByIdTemplatesAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: TemplateGetTemplateByIdTemplatesAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `accessAuth`                                                                                                 | [operations.TemplateGetTemplateByIdAccessAuth](../../models/operations/templategettemplatebyidaccessauth.md) | :heavy_check_mark:                                                                                           | The type of authentication required for the recipient to access the document.                                |
| `actionAuth`                                                                                                 | [operations.TemplateGetTemplateByIdActionAuth](../../models/operations/templategettemplatebyidactionauth.md) | :heavy_check_mark:                                                                                           | The type of authentication required for the recipient to sign the document.                                  |