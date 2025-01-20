# TemplateCreateDocumentFromTemplateGlobalActionAuth

The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateGlobalActionAuth } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateGlobalActionAuth =
  "TWO_FACTOR_AUTH";
```

## Values

```typescript
"ACCOUNT" | "PASSKEY" | "TWO_FACTOR_AUTH"
```