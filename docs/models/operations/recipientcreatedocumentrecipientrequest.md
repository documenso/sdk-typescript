# RecipientCreateDocumentRecipientRequest

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientRequest } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientRequest = {
  documentId: 3085.28,
  recipient: {
    email: "Shyanne54@hotmail.com",
    name: "<value>",
    role: "CC",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `documentId`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `recipient`                                                                                                                  | [operations.RecipientCreateDocumentRecipientRecipient](../../models/operations/recipientcreatedocumentrecipientrecipient.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |