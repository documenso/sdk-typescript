# RecipientUpdateDocumentRecipientsRequest

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientsRequest } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientsRequest = {
  documentId: 6421.05,
  recipients: [
    {
      id: 4871.96,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `documentId`                                                                                                                                           | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `recipients`                                                                                                                                           | [operations.RecipientUpdateDocumentRecipientsRecipientRequestBody](../../models/operations/recipientupdatedocumentrecipientsrecipientrequestbody.md)[] | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |