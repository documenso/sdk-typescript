# DocumentSendDocumentResponseBody

Successful response

## Example Usage

```typescript
import { DocumentSendDocumentResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: DocumentSendDocumentResponseBody = {
  visibility: "MANAGER_AND_ABOVE",
  status: "PENDING",
  source: "TEMPLATE_DIRECT_LINK",
  id: 344718,
  externalId: "<id>",
  userId: 7137.67,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "PASSKEY",
  },
  formValues: {
    "key": false,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1719448627130",
  updatedAt: "1737335334755",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 70042,
  templateId: 822407,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                             | [operations.DocumentSendDocumentVisibility](../../models/operations/documentsenddocumentvisibility.md)   | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `status`                                                                                                 | [operations.DocumentSendDocumentStatus](../../models/operations/documentsenddocumentstatus.md)           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `source`                                                                                                 | [operations.DocumentSendDocumentSource](../../models/operations/documentsenddocumentsource.md)           | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `externalId`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | A custom external ID you can use to identify the document.                                               |
| `userId`                                                                                                 | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The ID of the user that created this document.                                                           |
| `authOptions`                                                                                            | [operations.DocumentSendDocumentAuthOptions](../../models/operations/documentsenddocumentauthoptions.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `formValues`                                                                                             | Record<string, *operations.DocumentSendDocumentFormValues*>                                              | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `title`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `documentDataId`                                                                                         | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `createdAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `updatedAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `completedAt`                                                                                            | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `deletedAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `teamId`                                                                                                 | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `templateId`                                                                                             | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |