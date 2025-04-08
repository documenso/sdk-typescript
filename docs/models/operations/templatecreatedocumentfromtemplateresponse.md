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
  externalId: "<id>",
  userId: 689.95,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "ACCOUNT",
  },
  formValues: {
    "key": "<value>",
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1720708933109",
  updatedAt: "1744013322859",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 6974.94,
  templateId: 5501.18,
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
    timezone: "Asia/Qyzylorda",
    password: "LA_JgFO6uaCuVNS",
    dateFormat: "<value>",
    documentId: 4295.56,
    redirectUrl: "https://subdued-topsail.com/",
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
      readStatus: "NOT_OPENED",
      signingStatus: "REJECTED",
      sendStatus: "NOT_SENT",
      id: 8523.5,
      documentId: 3370.18,
      templateId: 1656.46,
      email: "Gertrude.Predovic36@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 1738.36,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "EMAIL",
      id: 4250.91,
      secondaryId: "<id>",
      documentId: 1267.64,
      templateId: 6947.19,
      recipientId: 6892.94,
      page: 9047.93,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "initials",
      },
    },
  ],
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
| `documentData`                                                                                                                                     | [operations.TemplateCreateDocumentFromTemplateDocumentData](../../models/operations/templatecreatedocumentfromtemplatedocumentdata.md)             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `documentMeta`                                                                                                                                     | [operations.TemplateCreateDocumentFromTemplateDocumentMeta](../../models/operations/templatecreatedocumentfromtemplatedocumentmeta.md)             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `recipients`                                                                                                                                       | [operations.TemplateCreateDocumentFromTemplateRecipientResponse](../../models/operations/templatecreatedocumentfromtemplaterecipientresponse.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `fields`                                                                                                                                           | [operations.TemplateCreateDocumentFromTemplateField](../../models/operations/templatecreatedocumentfromtemplatefield.md)[]                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |