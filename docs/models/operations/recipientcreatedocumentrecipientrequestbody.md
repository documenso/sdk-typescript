# RecipientCreateDocumentRecipientRequestBody

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientRequestBody = {
  documentId: 1409.57,
  recipient: {
    email: "Sabryna_Baumbach@hotmail.com",
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