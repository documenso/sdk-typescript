# DocumentDownloadVersion

The version of the document to download. "signed" returns the completed document with signatures, "original" returns the original uploaded document.

## Example Usage

```typescript
import { DocumentDownloadVersion } from "@documenso/sdk-typescript/models/operations";

let value: DocumentDownloadVersion = "signed";
```

## Values

```typescript
"original" | "signed"
```