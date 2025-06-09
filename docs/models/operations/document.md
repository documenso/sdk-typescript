# Document

## Example Usage

```typescript
import { Document } from "@documenso/sdk-typescript/models/operations";

let value: Document = {
  visibility: "MANAGER_AND_ABOVE",
  status: "PENDING",
  source: "TEMPLATE_DIRECT_LINK",
  id: 157.99,
  externalId: "<id>",
  userId: 5382.87,
  authOptions: {
    globalAccessAuth: [],
    globalActionAuth: [],
  },
  formValues: {},
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1722717346634",
  updatedAt: "1735630218593",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 1748.47,
  templateId: 3439.36,
  folderId: "<id>",
  documentData: {
    type: "S3_PATH",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
  },
  documentMeta: {
    signingOrder: "PARALLEL",
    distributionMethod: "NONE",
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "America/Guyana",
    password: "tfBoXYPfETfwq5V",
    dateFormat: "<value>",
    documentId: 9590.12,
    redirectUrl: "https://spanish-hose.net/",
    typedSignatureEnabled: false,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: false,
    allowDictateNextSigner: true,
    language: "<value>",
    emailSettings: {},
  },
  folder: {
    id: "<id>",
    name: "<value>",
    type: "DOCUMENT",
    visibility: "MANAGER_AND_ABOVE",
    userId: 5913.3,
    teamId: 5482.99,
    pinned: true,
    parentId: "<id>",
    createdAt: "1712028509965",
    updatedAt: "1735603674999",
  },
  recipients: [],
  fields: [
    {
      type: "FREE_SIGNATURE",
      id: 9636.63,
      secondaryId: "<id>",
      documentId: 7565.1,
      templateId: 8257.6,
      recipientId: 8466.34,
      page: 3571.37,
      customText: "<value>",
      inserted: true,
      fieldMeta: {
        type: "checkbox",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                                                     | [operations.DocumentVisibility](../../models/operations/documentvisibility.md)                                                   | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `status`                                                                                                                         | [operations.DocumentCreateDocumentTemporaryStatus](../../models/operations/documentcreatedocumenttemporarystatus.md)             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `source`                                                                                                                         | [operations.DocumentCreateDocumentTemporarySource](../../models/operations/documentcreatedocumenttemporarysource.md)             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `id`                                                                                                                             | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `externalId`                                                                                                                     | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | A custom external ID you can use to identify the document.                                                                       |
| `userId`                                                                                                                         | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The ID of the user that created this document.                                                                                   |
| `authOptions`                                                                                                                    | [operations.DocumentCreateDocumentTemporaryAuthOptions](../../models/operations/documentcreatedocumenttemporaryauthoptions.md)   | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `formValues`                                                                                                                     | Record<string, *operations.DocumentFormValues*>                                                                                  | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `title`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `documentDataId`                                                                                                                 | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `createdAt`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `updatedAt`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `completedAt`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `deletedAt`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `teamId`                                                                                                                         | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `templateId`                                                                                                                     | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `folderId`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `documentData`                                                                                                                   | [operations.DocumentCreateDocumentTemporaryDocumentData](../../models/operations/documentcreatedocumenttemporarydocumentdata.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `documentMeta`                                                                                                                   | [operations.DocumentCreateDocumentTemporaryDocumentMeta](../../models/operations/documentcreatedocumenttemporarydocumentmeta.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `folder`                                                                                                                         | [operations.DocumentCreateDocumentTemporaryFolder](../../models/operations/documentcreatedocumenttemporaryfolder.md)             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `recipients`                                                                                                                     | [operations.DocumentRecipient](../../models/operations/documentrecipient.md)[]                                                   | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `fields`                                                                                                                         | [operations.DocumentField](../../models/operations/documentfield.md)[]                                                           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |