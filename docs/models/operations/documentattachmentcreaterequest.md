# DocumentAttachmentCreateRequest

## Example Usage

```typescript
import { DocumentAttachmentCreateRequest } from "@documenso/sdk-typescript/models/operations";

let value: DocumentAttachmentCreateRequest = {
  documentId: 6850.99,
  data: {
    label: "<value>",
    data: "https://damp-perp.org/",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `documentId`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [operations.DocumentAttachmentCreateData](../../models/operations/documentattachmentcreatedata.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |