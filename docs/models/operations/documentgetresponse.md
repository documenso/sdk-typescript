# DocumentGetResponse

Successful response

## Example Usage

```typescript
import { DocumentGetResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetResponse = {
  visibility: "EVERYONE",
  status: "REJECTED",
  source: "TEMPLATE_DIRECT_LINK",
  id: 7831.48,
  externalId: "<id>",
  userId: 9352.91,
  authOptions: {
    globalAccessAuth: [],
    globalActionAuth: [
      "TWO_FACTOR_AUTH",
    ],
  },
  formValues: {},
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1713009204049",
  updatedAt: "1735633248980",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 9528.55,
  templateId: null,
  folderId: "<id>",
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
    timezone: "Asia/Novokuznetsk",
    password: "IeIRJCC4GL2UVi5",
    dateFormat: "<value>",
    documentId: 8359.84,
    redirectUrl: "https://fuzzy-individual.net",
    typedSignatureEnabled: true,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: true,
    allowDictateNextSigner: false,
    language: "<value>",
    emailSettings: {},
    emailId: "<id>",
    emailReplyTo: "<value>",
  },
  folder: {
    id: "<id>",
    name: "<value>",
    type: "TEMPLATE",
    visibility: "MANAGER_AND_ABOVE",
    userId: 6907.24,
    teamId: 3554.34,
    pinned: true,
    parentId: "<id>",
    createdAt: "1732423256945",
    updatedAt: "1735668877318",
  },
  recipients: [],
  fields: [],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `visibility`                                                                             | [operations.DocumentGetVisibility](../../models/operations/documentgetvisibility.md)     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.DocumentGetStatus](../../models/operations/documentgetstatus.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `source`                                                                                 | [operations.DocumentGetSource](../../models/operations/documentgetsource.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `id`                                                                                     | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `externalId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | A custom external ID you can use to identify the document.                               |
| `userId`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | The ID of the user that created this document.                                           |
| `authOptions`                                                                            | [operations.DocumentGetAuthOptions](../../models/operations/documentgetauthoptions.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `formValues`                                                                             | Record<string, *operations.DocumentGetFormValues*>                                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `title`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `documentDataId`                                                                         | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `completedAt`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deletedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `teamId`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `templateId`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `folderId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `documentData`                                                                           | [operations.DocumentGetDocumentData](../../models/operations/documentgetdocumentdata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `documentMeta`                                                                           | [operations.DocumentGetDocumentMeta](../../models/operations/documentgetdocumentmeta.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `folder`                                                                                 | [operations.DocumentGetFolder](../../models/operations/documentgetfolder.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `recipients`                                                                             | [operations.DocumentGetRecipient](../../models/operations/documentgetrecipient.md)[]     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `fields`                                                                                 | [operations.DocumentGetField](../../models/operations/documentgetfield.md)[]             | :heavy_check_mark:                                                                       | N/A                                                                                      |