# EnvelopeUsePayload

## Example Usage

```typescript
import { EnvelopeUsePayload } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeUsePayload = {
  envelopeId: "<id>",
  recipients: [],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `externalId`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `recipients`                                                                                             | [operations.EnvelopeUseRecipient](../../models/operations/envelopeuserecipient.md)[]                     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `distributeDocument`                                                                                     | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `customDocumentData`                                                                                     | [operations.EnvelopeUseCustomDocumentDatum](../../models/operations/envelopeusecustomdocumentdatum.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `folderId`                                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `prefillFields`                                                                                          | *operations.EnvelopeUsePrefillFieldUnion*[]                                                              | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `override`                                                                                               | [operations.Override](../../models/operations/override.md)                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `attachments`                                                                                            | [operations.EnvelopeUseAttachment](../../models/operations/envelopeuseattachment.md)[]                   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |