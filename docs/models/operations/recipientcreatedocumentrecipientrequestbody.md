# RecipientCreateDocumentRecipientRequestBody

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientRequestBody = {
  documentId: 3304.4,
  recipient: {
    email: "Dylan.Rempel79@yahoo.com",
    name: "<value>",
    role: "SIGNER",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `documentId`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `recipient`                                                  | [operations.Recipient](../../models/operations/recipient.md) | :heavy_check_mark:                                           | N/A                                                          |