# TemplateDuplicateTemplateAuthOptions

## Example Usage

```typescript
import { TemplateDuplicateTemplateAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: TemplateDuplicateTemplateAuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                  | [operations.TemplateDuplicateTemplateGlobalAccessAuth](../../models/operations/templateduplicatetemplateglobalaccessauth.md)        | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to access the document.                                                       |
| `globalActionAuth`                                                                                                                  | [operations.TemplateDuplicateTemplateGlobalActionAuth](../../models/operations/templateduplicatetemplateglobalactionauth.md)        | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only. |