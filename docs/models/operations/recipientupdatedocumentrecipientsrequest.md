# RecipientUpdateDocumentRecipientsRequest

## Example Usage

```typescript
import { RecipientUpdateDocumentRecipientsRequest } from "@documenso/sdk-typescript/models/operations";

let value: RecipientUpdateDocumentRecipientsRequest = {
  documentId: 7031.89,
  recipients: [
    {
      id: 9492.8,
    },
  ],
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `documentId`                                                                                                                                     | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `recipients`                                                                                                                                     | [operations.RecipientUpdateDocumentRecipientsRequestRecipients](../../models/operations/recipientupdatedocumentrecipientsrequestrecipients.md)[] | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |