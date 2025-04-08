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
  userId: 3316.06,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "PASSKEY",
  },
  formValues: {
    "key": "<value>",
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1715705047832",
  updatedAt: "1743998956756",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 5924.72,
  templateId: 4759.67,
  documentData: {
    type: "BYTES",
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
    timezone: "Asia/Chita",
    password: "O1BALXj3dtfBoXY",
    dateFormat: "<value>",
    documentId: 4967.71,
    redirectUrl: "https://husky-zebra.name",
    typedSignatureEnabled: false,
    uploadSignatureEnabled: false,
    drawSignatureEnabled: false,
    allowDictateNextSigner: false,
    language: "<value>",
    emailSettings: {},
  },
  recipients: [
    {
      role: "SIGNER",
      readStatus: "OPENED",
      signingStatus: "REJECTED",
      sendStatus: "SENT",
      id: 2164.05,
      documentId: 9991.71,
      templateId: 5585.08,
      email: "Veronica43@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 135.53,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "CHECKBOX",
      id: 2367.45,
      secondaryId: "<id>",
      documentId: 6218.47,
      templateId: 3434.3,
      recipientId: 2415.1,
      page: 5424.29,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "number",
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
| `recipients`                                                                                                                     | [operations.DocumentRecipient](../../models/operations/documentrecipient.md)[]                                                   | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `fields`                                                                                                                         | [operations.DocumentField](../../models/operations/documentfield.md)[]                                                           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |