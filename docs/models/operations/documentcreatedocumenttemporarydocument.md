# DocumentCreateDocumentTemporaryDocument

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryDocument } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryDocument = {
  visibility: "ADMIN",
  status: "COMPLETED",
  source: "DOCUMENT",
  id: 5977.73,
  externalId: "<id>",
  userId: 1937.77,
  authOptions: {
    globalAccessAuth: [],
    globalActionAuth: [
      "TWO_FACTOR_AUTH",
    ],
  },
  formValues: null,
  title: "<value>",
  createdAt: "1732696542722",
  updatedAt: "1735667263152",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 9581.28,
  folderId: "<id>",
  envelopeId: "<id>",
  internalVersion: 8607.54,
  documentData: {
    type: "BYTES",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
    envelopeItemId: "<id>",
  },
  documentMeta: {
    signingOrder: "PARALLEL",
    distributionMethod: "NONE",
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "Atlantic/Bermuda",
    dateFormat: null,
    redirectUrl: "https://kooky-bourgeoisie.org",
    typedSignatureEnabled: true,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: true,
    allowDictateNextSigner: true,
    language: "<value>",
    emailSettings: {},
    emailId: "<id>",
    emailReplyTo: "<value>",
  },
  envelopeItems: [],
  folder: {
    id: "<id>",
    name: "<value>",
    type: "TEMPLATE",
    visibility: "ADMIN",
    userId: 184.31,
    teamId: 5515.23,
    pinned: false,
    parentId: "<id>",
    createdAt: "1729648504916",
    updatedAt: "1735626792060",
  },
  recipients: [
    {
      envelopeId: "<id>",
      role: "APPROVER",
      readStatus: "NOT_OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 3287.84,
      email: "Raphael22@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: null,
      signingOrder: 6218.85,
      rejectionReason: "<value>",
    },
  ],
  fields: [],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                                                       | [operations.DocumentVisibility](../../models/operations/documentvisibility.md)                                                     | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `status`                                                                                                                           | [operations.DocumentCreateDocumentTemporaryStatus](../../models/operations/documentcreatedocumenttemporarystatus.md)               | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `source`                                                                                                                           | [operations.DocumentCreateDocumentTemporarySource](../../models/operations/documentcreatedocumenttemporarysource.md)               | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `id`                                                                                                                               | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `externalId`                                                                                                                       | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `userId`                                                                                                                           | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `authOptions`                                                                                                                      | [operations.DocumentCreateDocumentTemporaryAuthOptions](../../models/operations/documentcreatedocumenttemporaryauthoptions.md)     | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `formValues`                                                                                                                       | Record<string, *operations.DocumentFormValues*>                                                                                    | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `title`                                                                                                                            | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `createdAt`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `updatedAt`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `completedAt`                                                                                                                      | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `deletedAt`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `teamId`                                                                                                                           | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `folderId`                                                                                                                         | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `envelopeId`                                                                                                                       | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `internalVersion`                                                                                                                  | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `templateId`                                                                                                                       | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `documentDataId`                                                                                                                   | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `documentData`                                                                                                                     | [operations.DocumentCreateDocumentTemporaryDocumentData](../../models/operations/documentcreatedocumenttemporarydocumentdata.md)   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `documentMeta`                                                                                                                     | [operations.DocumentCreateDocumentTemporaryDocumentMeta](../../models/operations/documentcreatedocumenttemporarydocumentmeta.md)   | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `envelopeItems`                                                                                                                    | [operations.DocumentCreateDocumentTemporaryEnvelopeItem](../../models/operations/documentcreatedocumenttemporaryenvelopeitem.md)[] | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `folder`                                                                                                                           | [operations.DocumentCreateDocumentTemporaryFolder](../../models/operations/documentcreatedocumenttemporaryfolder.md)               | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `recipients`                                                                                                                       | [operations.DocumentRecipient](../../models/operations/documentrecipient.md)[]                                                     | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `fields`                                                                                                                           | [operations.DocumentField](../../models/operations/documentfield.md)[]                                                             | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |