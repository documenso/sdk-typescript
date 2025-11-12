# DocumentCreateDocumentFormDataDocument

## Example Usage

```typescript
import { DocumentCreateDocumentFormDataDocument } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentFormDataDocument = {
  visibility: "EVERYONE",
  status: "REJECTED",
  source: "DOCUMENT",
  id: 1269.07,
  externalId: "<id>",
  userId: 2035.46,
  authOptions: {
    globalAccessAuth: [
      "TWO_FACTOR_AUTH",
    ],
    globalActionAuth: [
      "PASSKEY",
    ],
  },
  formValues: {
    "key": "<value>",
  },
  title: "<value>",
  createdAt: "1726258711667",
  updatedAt: "1735680538705",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 6851.16,
  folderId: "<id>",
  envelopeId: "<id>",
  internalVersion: 1710.39,
  documentData: {
    type: "BYTES_64",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
    envelopeItemId: "<id>",
  },
  documentMeta: {
    signingOrder: "SEQUENTIAL",
    distributionMethod: "NONE",
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "America/Bahia",
    dateFormat: "<value>",
    redirectUrl: "https://alienated-invite.info/",
    typedSignatureEnabled: true,
    uploadSignatureEnabled: false,
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
    type: "DOCUMENT",
    visibility: "ADMIN",
    userId: 1634.23,
    teamId: 7048.29,
    pinned: false,
    parentId: "<id>",
    createdAt: "1718930655474",
    updatedAt: "1735639525492",
  },
  recipients: [
    {
      envelopeId: "<id>",
      role: "CC",
      readStatus: "OPENED",
      signingStatus: "REJECTED",
      sendStatus: "SENT",
      id: 4690.77,
      email: "Fae34@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
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
      type: "INITIALS",
      id: 1451.22,
      secondaryId: "<id>",
      recipientId: 8804.84,
      page: 1041.87,
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

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `visibility`                                                                                                                               | [operations.DocumentCreateDocumentFormDataVisibilityResponse](../../models/operations/documentcreatedocumentformdatavisibilityresponse.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `status`                                                                                                                                   | [operations.DocumentCreateDocumentFormDataStatus](../../models/operations/documentcreatedocumentformdatastatus.md)                         | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `source`                                                                                                                                   | [operations.DocumentCreateDocumentFormDataSource](../../models/operations/documentcreatedocumentformdatasource.md)                         | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `id`                                                                                                                                       | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `externalId`                                                                                                                               | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `userId`                                                                                                                                   | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `authOptions`                                                                                                                              | [operations.DocumentCreateDocumentFormDataAuthOptions](../../models/operations/documentcreatedocumentformdataauthoptions.md)               | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `formValues`                                                                                                                               | Record<string, *operations.DocumentCreateDocumentFormDataFormValuesResponse*>                                                              | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `title`                                                                                                                                    | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `createdAt`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `updatedAt`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `completedAt`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `deletedAt`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `teamId`                                                                                                                                   | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `folderId`                                                                                                                                 | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `envelopeId`                                                                                                                               | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `internalVersion`                                                                                                                          | *number*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `templateId`                                                                                                                               | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `documentDataId`                                                                                                                           | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `documentData`                                                                                                                             | [operations.DocumentCreateDocumentFormDataDocumentData](../../models/operations/documentcreatedocumentformdatadocumentdata.md)             | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `documentMeta`                                                                                                                             | [operations.DocumentCreateDocumentFormDataDocumentMeta](../../models/operations/documentcreatedocumentformdatadocumentmeta.md)             | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `envelopeItems`                                                                                                                            | [operations.DocumentCreateDocumentFormDataEnvelopeItem](../../models/operations/documentcreatedocumentformdataenvelopeitem.md)[]           | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `folder`                                                                                                                                   | [operations.DocumentCreateDocumentFormDataFolder](../../models/operations/documentcreatedocumentformdatafolder.md)                         | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `recipients`                                                                                                                               | [operations.DocumentCreateDocumentFormDataRecipientResponse](../../models/operations/documentcreatedocumentformdatarecipientresponse.md)[] | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `fields`                                                                                                                                   | [operations.DocumentCreateDocumentFormDataFieldResponse](../../models/operations/documentcreatedocumentformdatafieldresponse.md)[]         | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |