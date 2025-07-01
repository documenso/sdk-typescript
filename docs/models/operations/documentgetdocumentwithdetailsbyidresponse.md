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
  teamId: 4251.56,
  templateId: 8150.94,
  folderId: "<id>",
  documentData: {
    type: "BYTES",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
  },
  documentMeta: {
    signingOrder: "PARALLEL",
    distributionMethod: "EMAIL",
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "America/Matamoros",
    password: "NXZb01HWU66HcVt",
    dateFormat: null,
    documentId: 2448.7,
    redirectUrl: "https://severe-petal.com",
    typedSignatureEnabled: true,
    uploadSignatureEnabled: false,
    drawSignatureEnabled: false,
    allowDictateNextSigner: true,
    language: "<value>",
    emailSettings: {},
  },
  folder: {
    id: "<id>",
    name: "<value>",
    type: "DOCUMENT",
    visibility: "EVERYONE",
    userId: 6847.27,
    teamId: 6703.96,
    pinned: false,
    parentId: "<id>",
    createdAt: "1710392004703",
    updatedAt: "1735643737733",
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