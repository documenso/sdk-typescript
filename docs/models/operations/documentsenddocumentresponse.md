# DocumentSendDocumentResponse

Successful response

## Example Usage

```typescript
import { DocumentSendDocumentResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentSendDocumentResponse = {
  visibility: "MANAGER_AND_ABOVE",
  status: "REJECTED",
  source: "TEMPLATE_DIRECT_LINK",
  id: 5679.36,
  externalId: "<id>",
  userId: 7111.24,
  authOptions: {
    globalAccessAuth: [
      "ACCOUNT",
    ],
    globalActionAuth: [],
  },
  formValues: {
    "key": "<value>",
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1716412991895",
  updatedAt: "1735650761340",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 9351.66,
  templateId: null,
  folderId: "<id>",
  useLegacyFieldInsertion: true,
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
| `folderId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `useLegacyFieldInsertion`                                                                                | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | N/A                                                                                                      |