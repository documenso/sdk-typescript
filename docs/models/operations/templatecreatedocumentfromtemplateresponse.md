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
    envelopeExpirationPeriod: {
      disabled: false,
    },
  },
  envelopeItems: [],
  folder: {
    id: "<id>",
    name: "<value>",
    type: "DOCUMENT",
    visibility: "ADMIN",
    userId: 1830.45,
    teamId: 8523.5,
    pinned: true,
    parentId: "<id>",
    createdAt: "1726136462856",
    updatedAt: "1735636595492",
  },
  recipients: [
    {
      envelopeId: "<id>",
      role: "APPROVER",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "NOT_SENT",
      id: 6414.88,
      email: "Irwin68@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: null,
      expired: "<value>",
      expiresAt: "1765242575183",
      expirationNotifiedAt: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [],
        actionAuth: [
          "EXPLICIT_NONE",
        ],
      },
      signingOrder: 3886.11,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "INITIALS",
      id: 3379.66,
      secondaryId: "<id>",
      recipientId: 330.4,
      page: 1790.72,
      positionX: "<value>",
      positionY: "<value>",
      width: "<value>",
      height: "<value>",
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        fontSize: 12,
        type: "text",
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