# TemplateMoveTemplateToTeamAuthOptions

## Example Usage

```typescript
import { TemplateMoveTemplateToTeamAuthOptions } from "@documenso/sdk-typescript/models/operations";

let value: TemplateMoveTemplateToTeamAuthOptions = {
  globalAccessAuth: "ACCOUNT",
  globalActionAuth: "PASSKEY",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `globalAccessAuth`                                                                                                                  | [operations.TemplateMoveTemplateToTeamGlobalAccessAuth](../../models/operations/templatemovetemplatetoteamglobalaccessauth.md)      | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to access the document.                                                       |
| `globalActionAuth`                                                                                                                  | [operations.TemplateMoveTemplateToTeamGlobalActionAuth](../../models/operations/templatemovetemplatetoteamglobalactionauth.md)      | :heavy_check_mark:                                                                                                                  | The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only. |