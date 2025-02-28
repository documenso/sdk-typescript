# RecipientCreateDocumentRecipientRequestBody

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientRequestBody } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientRequestBody = {
  documentId: 3085.28,
  recipient: {
    email: "Shyanne54@hotmail.com",
    name: "<value>",
    role: "CC",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `documentId`                                                 | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `recipient`                                                  | [operations.Recipient](../../models/operations/recipient.md) | :heavy_check_mark:                                           | N/A                                                          |