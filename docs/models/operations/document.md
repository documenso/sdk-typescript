# Document

## Example Usage

```typescript
import { Document } from "@documenso/sdk-typescript/models/operations";

let value: Document = {
  visibility: "ADMIN",
  status: "COMPLETED",
  source: "TEMPLATE_DIRECT_LINK",
  id: 451822,
  externalId: "<id>",
  userId: 708.69,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "ACCOUNT",
  },
  formValues: {
    "key": "<value>",
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1719221516703",
  updatedAt: "1737516610071",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 604118,
  templateId: 382808,
  documentData: {
    type: "BYTES_64",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
  },
  documentMeta: {
    signingOrder: "SEQUENTIAL",
    distributionMethod: "NONE",
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "America/Hermosillo",
    password: "YvGULG8QDRhxr9K",
    dateFormat: "<value>",
    documentId: 104627,
    redirectUrl: "https://shrill-platypus.name/",
    typedSignatureEnabled: false,
    language: "<value>",
    emailSettings: {},
  },
  recipients: [
    {
      role: "VIEWER",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 879235,
      documentId: 543678,
      templateId: 282699,
      email: "Mercedes_Hintz92@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "PASSKEY",
      },
      signingOrder: 243.13,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "NAME",
      id: 622231,
      secondaryId: "<id>",
      documentId: 279068,
      templateId: 209750,
      recipientId: 115703,
      page: 5771.4,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "radio",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                                                     | [operations.DocumentCreateDocumentTemporaryVisibility](../../models/operations/documentcreatedocumenttemporaryvisibility.md)     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `status`                                                                                                                         | [operations.DocumentCreateDocumentTemporaryStatus](../../models/operations/documentcreatedocumenttemporarystatus.md)             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `source`                                                                                                                         | [operations.DocumentCreateDocumentTemporarySource](../../models/operations/documentcreatedocumenttemporarysource.md)             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `id`                                                                                                                             | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `externalId`                                                                                                                     | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | A custom external ID you can use to identify the document.                                                                       |
| `userId`                                                                                                                         | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The ID of the user that created this document.                                                                                   |
| `authOptions`                                                                                                                    | [operations.DocumentCreateDocumentTemporaryAuthOptions](../../models/operations/documentcreatedocumenttemporaryauthoptions.md)   | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `formValues`                                                                                                                     | Record<string, *operations.DocumentCreateDocumentTemporaryFormValues*>                                                           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
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
| `recipients`                                                                                                                     | [operations.DocumentCreateDocumentTemporaryRecipients](../../models/operations/documentcreatedocumenttemporaryrecipients.md)[]   | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `fields`                                                                                                                         | [operations.DocumentCreateDocumentTemporaryFields](../../models/operations/documentcreatedocumenttemporaryfields.md)[]           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |