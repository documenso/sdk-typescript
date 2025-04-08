# DocumentSendDocumentGlobalActionAuth

The type of authentication required for the recipient to sign the document. This field is restricted to Enterprise plan users only.

## Example Usage

```typescript
import { DocumentSendDocumentGlobalActionAuth } from "@documenso/sdk-typescript/models/operations";

let value: DocumentSendDocumentGlobalActionAuth = "ACCOUNT";
```

## Values

```typescript
"ACCOUNT" | "PASSKEY" | "TWO_FACTOR_AUTH"
```