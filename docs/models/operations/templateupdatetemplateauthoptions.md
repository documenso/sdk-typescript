# TemplateUpdateTemplateAuthOptions

## Example Usage

```typescript
import { TemplateUpdateTemplateAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: TemplateUpdateTemplateAuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "TWO_FACTOR_AUTH",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                     | [operations.TemplateUpdateTemplateResponseGlobalAccessAuth](../../models/operations/templateupdatetemplateresponseglobalaccessauth.md) | :heavy_check_mark:                                                                                                                     | The type of authentication required for the recipient to access the document.                                                          |
| `globalActionAuth`                                                                                                                     | [operations.TemplateUpdateTemplateResponseGlobalActionAuth](../../models/operations/templateupdatetemplateresponseglobalactionauth.md) | :heavy_check_mark:                                                                                                                     | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.    |