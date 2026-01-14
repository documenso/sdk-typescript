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
  createdAt: "1726149769095",
  updatedAt: "1735650729634",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 3542.33,
  folderId: "<id>",
  envelopeId: "<id>",
  internalVersion: 4534.72,
  documentData: {
    type: "S3_PATH",
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
    message: "<value>",
    timezone: "Australia/Melbourne",
    dateFormat: null,
    redirectUrl: "https://energetic-swordfish.net/",
    typedSignatureEnabled: true,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: false,
    allowDictateNextSigner: false,
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
    visibility: "EVERYONE",
    userId: 3285.16,
    teamId: 1418.4,
    pinned: false,
    parentId: "<id>",
    createdAt: "1731033307570",
    updatedAt: "1735632318003",
  },
  recipients: [],
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "EMAIL",
      id: 9041.88,
      secondaryId: "<id>",
      recipientId: 6966.32,
      page: 998.89,
      positionX: "<value>",
      positionY: "<value>",
      width: "<value>",
      height: "<value>",
      customText: "<value>",
      inserted: true,
      fieldMeta: {
        fontSize: 12,
        type: "number",
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
| `externalId`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `userId`                                                                                                                                           | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `authOptions`                                                                                                                                      | [operations.TemplateCreateDocumentFromTemplateAuthOptions](../../models/operations/templatecreatedocumentfromtemplateauthoptions.md)               | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `formValues`                                                                                                                                       | Record<string, *operations.TemplateCreateDocumentFromTemplateFormValuesResponse*>                                                                  | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `title`                                                                                                                                            | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `createdAt`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `updatedAt`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `completedAt`                                                                                                                                      | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `deletedAt`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `teamId`                                                                                                                                           | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `folderId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `envelopeId`                                                                                                                                       | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `internalVersion`                                                                                                                                  | *number*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `templateId`                                                                                                                                       | *number*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `documentDataId`                                                                                                                                   | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `documentData`                                                                                                                                     | [operations.TemplateCreateDocumentFromTemplateDocumentData](../../models/operations/templatecreatedocumentfromtemplatedocumentdata.md)             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `documentMeta`                                                                                                                                     | [operations.TemplateCreateDocumentFromTemplateDocumentMeta](../../models/operations/templatecreatedocumentfromtemplatedocumentmeta.md)             | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `envelopeItems`                                                                                                                                    | [operations.TemplateCreateDocumentFromTemplateEnvelopeItem](../../models/operations/templatecreatedocumentfromtemplateenvelopeitem.md)[]           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `folder`                                                                                                                                           | [operations.TemplateCreateDocumentFromTemplateFolder](../../models/operations/templatecreatedocumentfromtemplatefolder.md)                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `recipients`                                                                                                                                       | [operations.TemplateCreateDocumentFromTemplateRecipientResponse](../../models/operations/templatecreatedocumentfromtemplaterecipientresponse.md)[] | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `fields`                                                                                                                                           | [operations.TemplateCreateDocumentFromTemplateField](../../models/operations/templatecreatedocumentfromtemplatefield.md)[]                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |