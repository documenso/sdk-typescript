# TemplateCreateDocumentFromTemplateResponse

Successful response

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateResponse } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateResponse = {
  visibility: "MANAGER_AND_ABOVE",
  status: "DRAFT",
  source: "DOCUMENT",
  id: 6352.39,
  externalId: null,
  userId: 604.67,
  authOptions: null,
  formValues: {},
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1726149769095",
  updatedAt: "1735650729634",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 6381.97,
  templateId: 2962.33,
  folderId: "<id>",
  documentData: {
    type: "BYTES",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
  },
  documentMeta: {
    signingOrder: "SEQUENTIAL",
    distributionMethod: "EMAIL",
    id: "<id>",
    subject: "<value>",
    message: null,
    timezone: "Antarctica/Rothera",
    password: "uaCuVNSI9nx0p2q",
    dateFormat: "<value>",
    documentId: 1656.46,
    redirectUrl: "https://unsung-possession.com/",
    typedSignatureEnabled: true,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: false,
    allowDictateNextSigner: true,
    language: "<value>",
    emailSettings: {},
  },
  folder: {
    id: "<id>",
    name: "<value>",
    type: "DOCUMENT",
    visibility: "ADMIN",
    userId: 6892.94,
    teamId: 110.29,
    pinned: false,
    parentId: "<id>",
    createdAt: "1733706574183",
    updatedAt: "1735620682763",
  },
  recipients: [],
  fields: [],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                                                                       | [operations.TemplateCreateDocumentFromTemplateVisibility](../../models/operations/templatecreatedocumentfromtemplatevisibility.md)                 | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `status`                                                                                                                                           | [operations.TemplateCreateDocumentFromTemplateStatus](../../models/operations/templatecreatedocumentfromtemplatestatus.md)                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `source`                                                                                                                                           | [operations.TemplateCreateDocumentFromTemplateSource](../../models/operations/templatecreatedocumentfromtemplatesource.md)                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `id`                                                                                                                                               | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `externalId`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | A custom external ID you can use to identify the document.                                                                                         |
| `userId`                                                                                                                                           | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The ID of the user that created this document.                                                                                                     |
| `authOptions`                                                                                                                                      | [operations.TemplateCreateDocumentFromTemplateAuthOptions](../../models/operations/templatecreatedocumentfromtemplateauthoptions.md)               | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `formValues`                                                                                                                                       | Record<string, *operations.TemplateCreateDocumentFromTemplateFormValues*>                                                                          | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `title`                                                                                                                                            | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `documentDataId`                                                                                                                                   | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `createdAt`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `updatedAt`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `completedAt`                                                                                                                                      | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `deletedAt`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `teamId`                                                                                                                                           | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `templateId`                                                                                                                                       | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `folderId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `documentData`                                                                                                                                     | [operations.TemplateCreateDocumentFromTemplateDocumentData](../../models/operations/templatecreatedocumentfromtemplatedocumentdata.md)             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `documentMeta`                                                                                                                                     | [operations.TemplateCreateDocumentFromTemplateDocumentMeta](../../models/operations/templatecreatedocumentfromtemplatedocumentmeta.md)             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `folder`                                                                                                                                           | [operations.TemplateCreateDocumentFromTemplateFolder](../../models/operations/templatecreatedocumentfromtemplatefolder.md)                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `recipients`                                                                                                                                       | [operations.TemplateCreateDocumentFromTemplateRecipientResponse](../../models/operations/templatecreatedocumentfromtemplaterecipientresponse.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `fields`                                                                                                                                           | [operations.TemplateCreateDocumentFromTemplateField](../../models/operations/templatecreatedocumentfromtemplatefield.md)[]                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |