# Document

## Example Usage

```typescript
import { Document } from "@documenso/sdk-typescript/models/operations";

let value: Document = {
  visibility: "MANAGER_AND_ABOVE",
  status: "COMPLETED",
  source: "TEMPLATE_DIRECT_LINK",
  id: 5468.85,
  externalId: "<id>",
  userId: 2748.23,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "PASSKEY",
  },
  formValues: {
    "key": 4067.33,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1727440326944",
  updatedAt: "1741503057489",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 4554.44,
  templateId: 4017.13,
  documentData: {
    type: "S3_PATH",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
  },
  documentMeta: {
    signingOrder: "SEQUENTIAL",
    distributionMethod: "EMAIL",
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "America/North_Dakota/Center",
    password: "Rhxr9KBgad4AatT",
    dateFormat: "<value>",
    documentId: 2826.99,
    redirectUrl: "https://scary-accountability.info/",
    typedSignatureEnabled: false,
    language: "<value>",
    emailSettings: {},
  },
  recipients: [
    {
      role: "VIEWER",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 243.13,
      documentId: 3426.11,
      templateId: 6222.31,
      email: "Cornelius67@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "ACCOUNT",
      },
      signingOrder: 6471.97,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "TEXT",
      id: 5887.4,
      secondaryId: "<id>",
      documentId: 9627.71,
      templateId: 168.71,
      recipientId: 6964.83,
      page: 8136.79,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "text",
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
| `documentData`                                                                                                                   | [operations.DocumentCreateDocumentTemporaryDocumentData](../../models/operations/documentcreatedocumenttemporarydocumentdata.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `documentMeta`                                                                                                                   | [operations.DocumentCreateDocumentTemporaryDocumentMeta](../../models/operations/documentcreatedocumenttemporarydocumentmeta.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `recipients`                                                                                                                     | [operations.DocumentRecipients](../../models/operations/documentrecipients.md)[]                                                 | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `fields`                                                                                                                         | [operations.DocumentFields](../../models/operations/documentfields.md)[]                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |