# EnvelopeAttachmentFindResponse

Successful response

## Example Usage

```typescript
import { EnvelopeAttachmentFindResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAttachmentFindResponse = {
  data: [
    {
      id: "<id>",
      type: "link",
      label: "<value>",
      data: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `data`                                                                                           | [operations.EnvelopeAttachmentFindData](../../models/operations/envelopeattachmentfinddata.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |