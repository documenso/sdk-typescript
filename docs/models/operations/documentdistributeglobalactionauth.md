# DocumentDistributeGlobalActionAuth

The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.

## Example Usage

```typescript
import { DocumentDistributeGlobalActionAuth } from "@documenso/sdk-typescript/models/operations";

let value: DocumentDistributeGlobalActionAuth = "PASSWORD";
```

## Values

```typescript
"ACCOUNT" | "PASSKEY" | "TWO_FACTOR_AUTH" | "PASSWORD"
```