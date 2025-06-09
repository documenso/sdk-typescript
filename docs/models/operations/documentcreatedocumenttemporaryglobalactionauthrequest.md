# DocumentCreateDocumentTemporaryGlobalActionAuthRequest

The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryGlobalActionAuthRequest } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryGlobalActionAuthRequest = "PASSWORD";
```

## Values

```typescript
"ACCOUNT" | "PASSKEY" | "TWO_FACTOR_AUTH" | "PASSWORD"
```