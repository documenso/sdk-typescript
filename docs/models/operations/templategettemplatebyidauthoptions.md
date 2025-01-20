# TemplateGetTemplateByIdAuthOptions

## Example Usage

```typescript
import { TemplateGetTemplateByIdAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: TemplateGetTemplateByIdAuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                  | [operations.TemplateGetTemplateByIdGlobalAccessAuth](../../models/operations/templategettemplatebyidglobalaccessauth.md)            | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to access the document.                                                       |
| `globalActionAuth`                                                                                                                  | [operations.TemplateGetTemplateByIdGlobalActionAuth](../../models/operations/templategettemplatebyidglobalactionauth.md)            | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only. |