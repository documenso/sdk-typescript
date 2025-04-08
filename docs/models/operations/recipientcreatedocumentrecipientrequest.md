# RecipientCreateDocumentRecipientRequest

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientRequest } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientRequest = {
  documentId: 5342.63,
  recipient: {
    email: "Carmelo_Rempel@yahoo.com",
    name: "<value>",
    role: "VIEWER",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `documentId`                                                                                                                 | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `recipient`                                                                                                                  | [operations.RecipientCreateDocumentRecipientRecipient](../../models/operations/recipientcreatedocumentrecipientrecipient.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |