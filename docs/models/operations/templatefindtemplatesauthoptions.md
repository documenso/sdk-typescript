# TemplateFindTemplatesAuthOptions

## Example Usage

```typescript
import { TemplateFindTemplatesAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesAuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                  | [operations.TemplateFindTemplatesGlobalAccessAuth](../../models/operations/templatefindtemplatesglobalaccessauth.md)                | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to access the document.                                                       |
| `globalActionAuth`                                                                                                                  | [operations.TemplateFindTemplatesGlobalActionAuth](../../models/operations/templatefindtemplatesglobalactionauth.md)                | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only. |