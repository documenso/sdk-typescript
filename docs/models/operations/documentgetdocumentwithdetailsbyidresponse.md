# DocumentGetDocumentWithDetailsByIdResponse

Successful response

## Example Usage

```typescript
import { DocumentGetDocumentWithDetailsByIdResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetDocumentWithDetailsByIdResponse = {
  visibility: "MANAGER_AND_ABOVE",
  status: "REJECTED",
  source: "DOCUMENT",
  id: 4005.96,
  externalId: "<id>",
  userId: 8523.51,
  authOptions: null,
  formValues: null,
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1725184332583",
  updatedAt: "1735683325552",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 2723.6,
  templateId: 5754.41,
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
    timezone: "America/St_Johns",
    password: "XZb01HWU66HcVt8",
    dateFormat: "<value>",
    documentId: 6741.58,
    redirectUrl: "https://clean-graffiti.net",
    typedSignatureEnabled: false,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: true,
    allowDictateNextSigner: false,
    language: "<value>",
    emailSettings: null,
  },
  folder: {
    id: "<id>",
    name: "<value>",
    type: "TEMPLATE",
    visibility: "ADMIN",
    userId: 7186.6,
    teamId: 1978.18,
    pinned: true,
    parentId: "<id>",
    createdAt: "1710005150648",
    updatedAt: "1735614433029",
  },
  recipients: [],
  fields: [],
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                                                           | [operations.DocumentGetDocumentWithDetailsByIdVisibility](../../models/operations/documentgetdocumentwithdetailsbyidvisibility.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `status`                                                                                                                               | [operations.DocumentGetDocumentWithDetailsByIdStatus](../../models/operations/documentgetdocumentwithdetailsbyidstatus.md)             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `source`                                                                                                                               | [operations.DocumentGetDocumentWithDetailsByIdSource](../../models/operations/documentgetdocumentwithdetailsbyidsource.md)             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `id`                                                                                                                                   | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `externalId`                                                                                                                           | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | A custom external ID you can use to identify the document.                                                                             |
| `userId`                                                                                                                               | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The ID of the user that created this document.                                                                                         |
| `authOptions`                                                                                                                          | [operations.DocumentGetDocumentWithDetailsByIdAuthOptions](../../models/operations/documentgetdocumentwithdetailsbyidauthoptions.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `formValues`                                                                                                                           | Record<string, *operations.DocumentGetDocumentWithDetailsByIdFormValues*>                                                              | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `title`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentDataId`                                                                                                                       | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `createdAt`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `updatedAt`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `completedAt`                                                                                                                          | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `deletedAt`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `teamId`                                                                                                                               | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `templateId`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `folderId`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentData`                                                                                                                         | [operations.DocumentGetDocumentWithDetailsByIdDocumentData](../../models/operations/documentgetdocumentwithdetailsbyiddocumentdata.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentMeta`                                                                                                                         | [operations.DocumentGetDocumentWithDetailsByIdDocumentMeta](../../models/operations/documentgetdocumentwithdetailsbyiddocumentmeta.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `folder`                                                                                                                               | [operations.DocumentGetDocumentWithDetailsByIdFolder](../../models/operations/documentgetdocumentwithdetailsbyidfolder.md)             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `recipients`                                                                                                                           | [operations.DocumentGetDocumentWithDetailsByIdRecipient](../../models/operations/documentgetdocumentwithdetailsbyidrecipient.md)[]     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `fields`                                                                                                                               | [operations.DocumentGetDocumentWithDetailsByIdField](../../models/operations/documentgetdocumentwithdetailsbyidfield.md)[]             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |