# EnvelopeAttachmentCreateRequest

## Example Usage

```typescript
import { EnvelopeAttachmentCreateRequest } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAttachmentCreateRequest = {
  envelopeId: "<id>",
  data: {
    label: "<value>",
    data: "https://supportive-guide.name",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `envelopeId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [operations.EnvelopeAttachmentCreateData](../../models/operations/envelopeattachmentcreatedata.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |