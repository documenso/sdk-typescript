# EnvelopeAuditLogFindResponse

Successful response

## Example Usage

```typescript
import { EnvelopeAuditLogFindResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeAuditLogFindResponse = {
  data: [
    {
      type: "DOCUMENT_RECIPIENT_EXPIRED",
      data: {
        recipientEmail: "<value>",
        recipientName: "<value>",
        recipientId: 8760.58,
      },
      id: "<id>",
      createdAt: "1730695663303",
      envelopeId: "<id>",
    },
  ],
  count: 8711.63,
  currentPage: 564.47,
  perPage: 1024.48,
  totalPages: 3793.55,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `data`                                       | *operations.EnvelopeAuditLogFindDataUnion*[] | :heavy_check_mark:                           | N/A                                          |
| `count`                                      | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `currentPage`                                | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `perPage`                                    | *number*                                     | :heavy_check_mark:                           | N/A                                          |
| `totalPages`                                 | *number*                                     | :heavy_check_mark:                           | N/A                                          |