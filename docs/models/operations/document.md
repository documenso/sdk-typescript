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
  createdAt: "1722717346634",
  updatedAt: "1735630218593",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 4947.13,
  folderId: "<id>",
  envelopeId: "<id>",
  documentData: {
    type: "BYTES",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
    envelopeItemId: "<id>",
  },
  documentMeta: {
    signingOrder: "PARALLEL",
    distributionMethod: "EMAIL",
    id: "<id>",
    subject: null,
    message: "<value>",
    timezone: null,
    dateFormat: "<value>",
    redirectUrl: "https://scornful-doubter.org/",
    typedSignatureEnabled: true,
    uploadSignatureEnabled: false,
    drawSignatureEnabled: false,
    allowDictateNextSigner: false,
    language: "<value>",
    emailSettings: {},
    emailId: "<id>",
    emailReplyTo: "<value>",
  },
  folder: {
    id: "<id>",
    name: "<value>",
    type: "DOCUMENT",
    visibility: "ADMIN",
    userId: 3810.18,
    teamId: 9987.45,
    pinned: false,
    parentId: "<id>",
    createdAt: "1727319290753",
    updatedAt: "1735682218085",
  },
  recipients: [
    {
      envelopeId: "<id>",
      role: "SIGNER",
      readStatus: "OPENED",
      signingStatus: "SIGNED",
      sendStatus: "NOT_SENT",
      id: 9590.12,
      email: "Carmen_Keeling70@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [],
        actionAuth: [
          "TWO_FACTOR_AUTH",
        ],
      },
      signingOrder: 5424.29,
      rejectionReason: "<value>",
    },
  ],
  fields: [],
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
| `createdAt`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `updatedAt`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `completedAt`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `deletedAt`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `teamId`                                                                                                                         | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `folderId`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `envelopeId`                                                                                                                     | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `templateId`                                                                                                                     | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The ID of the template that the document was created from, if any.                                                               |
| `documentDataId`                                                                                                                 | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `documentData`                                                                                                                   | [operations.DocumentCreateDocumentTemporaryDocumentData](../../models/operations/documentcreatedocumenttemporarydocumentdata.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `documentMeta`                                                                                                                   | [operations.DocumentCreateDocumentTemporaryDocumentMeta](../../models/operations/documentcreatedocumenttemporarydocumentmeta.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `folder`                                                                                                                         | [operations.DocumentCreateDocumentTemporaryFolder](../../models/operations/documentcreatedocumenttemporaryfolder.md)             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `recipients`                                                                                                                     | [operations.DocumentRecipient](../../models/operations/documentrecipient.md)[]                                                   | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `fields`                                                                                                                         | [operations.DocumentField](../../models/operations/documentfield.md)[]                                                           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |