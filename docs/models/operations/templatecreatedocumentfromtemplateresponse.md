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
  teamId: 3542.33,
  templateId: 4534.72,
  folderId: "<id>",
  documentData: {
    type: "S3_PATH",
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
    timezone: null,
    password: "O6uaCuVNSI9nx0p",
    dateFormat: "<value>",
    documentId: 8523.5,
    redirectUrl: "https://ruddy-governance.org/",
    typedSignatureEnabled: false,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: true,
    allowDictateNextSigner: true,
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
    userId: 6892.94,
    teamId: 9047.93,
    pinned: true,
    parentId: "<id>",
    createdAt: "1709623896980",
    updatedAt: "1735684166118",
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