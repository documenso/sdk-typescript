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
  internalVersion: 3493.89,
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
    subject: "<value>",
    message: null,
    timezone: "America/Campo_Grande",
    dateFormat: "<value>",
    redirectUrl: "https://wise-bend.org/",
    typedSignatureEnabled: false,
    uploadSignatureEnabled: false,
    drawSignatureEnabled: true,
    allowDictateNextSigner: false,
    language: "<value>",
    emailSettings: {},
    emailId: "<id>",
    emailReplyTo: "<value>",
    envelopeExpirationPeriod: {
      unit: "day",
      amount: 658704,
    },
  },
  envelopeItems: [
    {
      id: "<id>",
      envelopeId: "<id>",
    },
  ],
  folder: {
    id: "<id>",
    name: "<value>",
    type: "DOCUMENT",
    visibility: "ADMIN",
    userId: 9145.72,
    teamId: 8500.19,
    pinned: true,
    parentId: "<id>",
    createdAt: "1721766691836",
    updatedAt: "1735617214764",
  },
  recipients: [
    {
      envelopeId: "<id>",
      role: "SIGNER",
      readStatus: "NOT_OPENED",
      signingStatus: "REJECTED",
      sendStatus: "NOT_SENT",
      id: 6986.77,
      email: "Adrain_Feil34@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      expiresAt: "1752980741485",
      expirationNotifiedAt: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [],
        actionAuth: [],
      },
      signingOrder: null,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "FREE_SIGNATURE",
      id: 9636.63,
      secondaryId: "<id>",
      recipientId: 9386.83,
      page: 7565.1,
      positionX: "<value>",
      positionY: "<value>",
      width: "<value>",
      height: "<value>",
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        fontSize: 12,
        type: "checkbox",
        direction: "vertical",
      },
    },
  ],
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