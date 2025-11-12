# EnvelopeItemDownloadVersion

The version of the envelope item to download. "signed" returns the completed document with signatures, "original" returns the original uploaded document.

## Example Usage

```typescript
import { EnvelopeItemDownloadVersion } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeItemDownloadVersion = "original";
```

## Values

```typescript
"original" | "signed"
```