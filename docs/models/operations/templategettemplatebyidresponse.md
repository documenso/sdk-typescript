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
  teamId: 5854.19,
  authOptions: {
    globalAccessAuth: [
      "ACCOUNT",
    ],
    globalActionAuth: [],
  },
  templateDocumentDataId: "<id>",
  createdAt: "1723877045893",
  updatedAt: "1735638161284",
  publicTitle: "<value>",
  publicDescription: "<value>",
  folderId: "<id>",
  templateDocumentData: {
    type: "BYTES_64",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
  },
  templateMeta: {
    id: "<id>",
    subject: "<value>",
    message: null,
    timezone: "America/Scoresbysund",
    dateFormat: "<value>",
    signingOrder: "SEQUENTIAL",
    typedSignatureEnabled: false,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: false,
    allowDictateNextSigner: false,
    distributionMethod: "EMAIL",
    templateId: 8228.41,
    redirectUrl: "https://descriptive-grandson.com/",
    language: "<value>",
    emailSettings: {},
  },
  directLink: {
    id: "<id>",
    templateId: 7563.15,
    token: "<value>",
    createdAt: "1711716853951",
    enabled: false,
    directTemplateRecipientId: 794.92,
  },
  user: {
    id: 1979.33,
    name: null,
    email: "Roselyn45@hotmail.com",
  },
  recipients: [
    {
      role: "CC",
      readStatus: "OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 8719,
      documentId: 7854.52,
      templateId: 3886.16,
      email: "Alfred.Spencer45@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [],
        actionAuth: [
          "EXPLICIT_NONE",
        ],
      },
      signingOrder: 2969.33,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "EMAIL",
      id: 431.51,
      secondaryId: "<id>",
      documentId: 5817.8,
      templateId: 604.34,
      recipientId: 5592.12,
      page: 9367.23,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "date",
      },
    },
  ],
  folder: {
    id: "<id>",
    name: "<value>",
    type: "TEMPLATE",
    visibility: "EVERYONE",
    userId: 4548.88,
    teamId: 4887.61,
    pinned: false,
    parentId: "<id>",
    createdAt: "1729993871876",
    updatedAt: "1735638805008",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.TemplateGetTemplateByIdType](../../models/operations/templategettemplatebyidtype.md)                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `visibility`                                                                                                     | [operations.TemplateGetTemplateByIdVisibility](../../models/operations/templategettemplatebyidvisibility.md)     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `id`                                                                                                             | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `externalId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `title`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `userId`                                                                                                         | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `teamId`                                                                                                         | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `authOptions`                                                                                                    | [operations.TemplateGetTemplateByIdAuthOptions](../../models/operations/templategettemplatebyidauthoptions.md)   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `templateDocumentDataId`                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `updatedAt`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `publicTitle`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `publicDescription`                                                                                              | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `folderId`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `templateDocumentData`                                                                                           | [operations.TemplateDocumentData](../../models/operations/templatedocumentdata.md)                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `templateMeta`                                                                                                   | [operations.TemplateGetTemplateByIdTemplateMeta](../../models/operations/templategettemplatebyidtemplatemeta.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `directLink`                                                                                                     | [operations.TemplateGetTemplateByIdDirectLink](../../models/operations/templategettemplatebyiddirectlink.md)     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `user`                                                                                                           | [operations.TemplateGetTemplateByIdUser](../../models/operations/templategettemplatebyiduser.md)                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `recipients`                                                                                                     | [operations.TemplateGetTemplateByIdRecipient](../../models/operations/templategettemplatebyidrecipient.md)[]     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `fields`                                                                                                         | [operations.TemplateGetTemplateByIdField](../../models/operations/templategettemplatebyidfield.md)[]             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `folder`                                                                                                         | [operations.TemplateGetTemplateByIdFolder](../../models/operations/templategettemplatebyidfolder.md)             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |