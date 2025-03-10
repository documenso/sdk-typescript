# DocumentSendDocumentResponse

Successful response

## Example Usage

```typescript
import { DocumentSendDocumentResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentSendDocumentResponse = {
  visibility: "MANAGER_AND_ABOVE",
  status: "PENDING",
  source: "TEMPLATE",
  id: 700.42,
  externalId: "<id>",
  userId: 8224.07,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "PASSKEY",
  },
  formValues: {
    "key": 5369.23,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1713513993178",
  updatedAt: "1741514581789",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 4053.73,
  templateId: 3210.43,
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