# TemplateFindTemplatesRecipientsAuthOptions

## Example Usage

```typescript
import { TemplateFindTemplatesRecipientsAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesRecipientsAuthOptions = {
  accessAuth: "ACCOUNT",
  actionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `accessAuth`                                                                                             | [operations.TemplateFindTemplatesAccessAuth](../../models/operations/templatefindtemplatesaccessauth.md) | :heavy_check_mark:                                                                                       | The type of authentication required for the recipient to access the document.                            |
| `actionAuth`                                                                                             | [operations.TemplateFindTemplatesActionAuth](../../models/operations/templatefindtemplatesactionauth.md) | :heavy_check_mark:                                                                                       | The type of authentication required for the recipient to sign the document.                              |