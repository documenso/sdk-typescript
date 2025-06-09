# DocumentUpdateDocumentGlobalActionAuthRequest

The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.

## Example Usage

```typescript
import { DocumentUpdateDocumentGlobalActionAuthRequest } from "@documenso/sdk-typescript/models/operations";

let value: DocumentUpdateDocumentGlobalActionAuthRequest = "PASSWORD";
```

## Values

```typescript
"ACCOUNT" | "PASSKEY" | "TWO_FACTOR_AUTH" | "PASSWORD"
```