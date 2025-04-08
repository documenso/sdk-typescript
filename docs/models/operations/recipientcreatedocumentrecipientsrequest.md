# RecipientCreateDocumentRecipientsRequest

## Example Usage

```typescript
import { RecipientCreateDocumentRecipientsRequest } from "@documenso/sdk-typescript/models/operations";

let value: RecipientCreateDocumentRecipientsRequest = {
  documentId: 2553.31,
  recipients: [
    {
      email: "Glen.Klein91@gmail.com",
      name: "<value>",
      role: "APPROVER",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `documentId`                                                                                                                                           | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `recipients`                                                                                                                                           | [operations.RecipientCreateDocumentRecipientsRecipientRequestBody](../../models/operations/recipientcreatedocumentrecipientsrecipientrequestbody.md)[] | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |