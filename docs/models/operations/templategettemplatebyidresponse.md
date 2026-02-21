# TemplateGetTemplateByIdResponse

Successful response

## Example Usage

```typescript
import { TemplateGetTemplateByIdResponse } from "@documenso/sdk-typescript/models/operations";

let value: TemplateGetTemplateByIdResponse = {
  type: "PRIVATE",
  visibility: "MANAGER_AND_ABOVE",
  id: 483.1,
  externalId: "<id>",
  title: "<value>",
  userId: 2772.42,
  teamId: 5309.8,
  authOptions: {
    globalAccessAuth: [
      "TWO_FACTOR_AUTH",
    ],
    globalActionAuth: [],
  },
  createdAt: "1723877045893",
  updatedAt: "1735638161284",
  publicTitle: "<value>",
  publicDescription: "<value>",
  folderId: "<id>",
  envelopeId: "<id>",
  templateDocumentData: {
    type: "BYTES_64",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
    envelopeItemId: "<id>",
  },
  templateMeta: {
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: null,
    dateFormat: "<value>",
    signingOrder: "PARALLEL",
    typedSignatureEnabled: false,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: false,
    allowDictateNextSigner: false,
    distributionMethod: "EMAIL",
    redirectUrl: "https://clean-slipper.info",
    language: "<value>",
    emailSettings: null,
    emailId: "<id>",
    emailReplyTo: "<value>",
    templateId: 6456.18,
  },
  directLink: {
    id: "<id>",
    envelopeId: "<id>",
    token: "<value>",
    createdAt: "1728004754117",
    enabled: true,
    directTemplateRecipientId: 9058.72,
    templateId: 794.92,
  },
  user: {
    id: 1979.33,
    name: null,
    email: "Roselyn45@hotmail.com",
  },
  recipients: [
    {
      envelopeId: "<id>",
      role: "CC",
      readStatus: "OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 8719,
      email: "Pablo3@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      expiresAt: "1738311232456",
      expirationNotifiedAt: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [
          "ACCOUNT",
        ],
        actionAuth: [
          "EXPLICIT_NONE",
        ],
      },
      signingOrder: 8177.94,
      rejectionReason: "<value>",
    },
  ],
  fields: [],
  folder: {
    id: "<id>",
    name: "<value>",
    type: "DOCUMENT",
    visibility: "EVERYONE",
    userId: 5245.21,
    teamId: 5817.8,
    pinned: false,
    parentId: null,
    createdAt: "1721788921344",
    updatedAt: "1735684131878",
  },
  envelopeItems: [
    {
      id: "<id>",
      envelopeId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [operations.TemplateGetTemplateByIdTypeEnum](../../models/operations/templategettemplatebyidtypeenum.md)                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `visibility`                                                                                                                     | [operations.TemplateGetTemplateByIdVisibility](../../models/operations/templategettemplatebyidvisibility.md)                     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `id`                                                                                                                             | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `externalId`                                                                                                                     | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `title`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `userId`                                                                                                                         | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `teamId`                                                                                                                         | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `authOptions`                                                                                                                    | [operations.TemplateGetTemplateByIdAuthOptions](../../models/operations/templategettemplatebyidauthoptions.md)                   | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `createdAt`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `updatedAt`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `publicTitle`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `publicDescription`                                                                                                              | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `folderId`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `envelopeId`                                                                                                                     | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `templateDocumentDataId`                                                                                                         | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `templateDocumentData`                                                                                                           | [operations.TemplateGetTemplateByIdTemplateDocumentData](../../models/operations/templategettemplatebyidtemplatedocumentdata.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `templateMeta`                                                                                                                   | [operations.TemplateGetTemplateByIdTemplateMeta](../../models/operations/templategettemplatebyidtemplatemeta.md)                 | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `directLink`                                                                                                                     | [operations.TemplateGetTemplateByIdDirectLink](../../models/operations/templategettemplatebyiddirectlink.md)                     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `user`                                                                                                                           | [operations.TemplateGetTemplateByIdUser](../../models/operations/templategettemplatebyiduser.md)                                 | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `recipients`                                                                                                                     | [operations.TemplateGetTemplateByIdRecipient](../../models/operations/templategettemplatebyidrecipient.md)[]                     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `fields`                                                                                                                         | [operations.TemplateGetTemplateByIdField](../../models/operations/templategettemplatebyidfield.md)[]                             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `folder`                                                                                                                         | [operations.TemplateGetTemplateByIdFolder](../../models/operations/templategettemplatebyidfolder.md)                             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `envelopeItems`                                                                                                                  | [operations.TemplateGetTemplateByIdEnvelopeItem](../../models/operations/templategettemplatebyidenvelopeitem.md)[]               | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |