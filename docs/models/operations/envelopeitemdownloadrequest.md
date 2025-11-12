# EnvelopeItemDownloadRequest

## Example Usage

```typescript
import { EnvelopeItemDownloadRequest } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeItemDownloadRequest = {
  envelopeItemId: "<id>",
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `envelopeItemId`                                                                                                                                          | *string*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                        | The ID of the envelope item to download.                                                                                                                  |
| `version`                                                                                                                                                 | [operations.EnvelopeItemDownloadVersion](../../models/operations/envelopeitemdownloadversion.md)                                                          | :heavy_minus_sign:                                                                                                                                        | The version of the envelope item to download. "signed" returns the completed document with signatures, "original" returns the original uploaded document. |