# ActionAuth

The type of authentication required for the recipient to sign the document.

## Example Usage

```typescript
import { ActionAuth } from "@documenso/sdk-typescript/models/operations";

let value: ActionAuth = "TWO_FACTOR_AUTH";
```

## Values

```typescript
"ACCOUNT" | "PASSKEY" | "TWO_FACTOR_AUTH" | "EXPLICIT_NONE"
```