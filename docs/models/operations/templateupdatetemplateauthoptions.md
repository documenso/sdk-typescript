# TemplateUpdateTemplateAuthOptions

## Example Usage

```typescript
import { TemplateUpdateTemplateAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: TemplateUpdateTemplateAuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "ACCOUNT",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                       | [operations.TemplateUpdateTemplateTemplatesGlobalAccessAuth](../../models/operations/templateupdatetemplatetemplatesglobalaccessauth.md) | :heavy_check_mark:                                                                                                                       | The type of authentication required for the recipient to access the document.                                                            |
| `globalActionAuth`                                                                                                                       | [operations.TemplateUpdateTemplateTemplatesGlobalActionAuth](../../models/operations/templateupdatetemplatetemplatesglobalactionauth.md) | :heavy_check_mark:                                                                                                                       | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.      |