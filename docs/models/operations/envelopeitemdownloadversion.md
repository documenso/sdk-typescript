# EnvelopeItemDownloadVersion

The version of the envelope item to download. "signed" returns the completed document with all signatures and the audit trail, "original" returns the original uploaded document, "pending" returns the original document with currently-inserted fields burned in (only valid while the envelope is in PENDING status; not a final executed document).

## Example Usage

```typescript
import { EnvelopeItemDownloadVersion } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeItemDownloadVersion = "original";
```

## Values

```typescript
"original" | "signed" | "pending"
```