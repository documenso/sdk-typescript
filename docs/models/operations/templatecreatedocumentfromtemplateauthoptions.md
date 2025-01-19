# TemplateCreateDocumentFromTemplateAuthOptions

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateAuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                             | [operations.TemplateCreateDocumentFromTemplateGlobalAccessAuth](../../models/operations/templatecreatedocumentfromtemplateglobalaccessauth.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to access the document.                                                                  |
| `globalActionAuth`                                                                                                                             | [operations.TemplateCreateDocumentFromTemplateGlobalActionAuth](../../models/operations/templatecreatedocumentfromtemplateglobalactionauth.md) | :heavy_check_mark:                                                                                                                             | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.            |