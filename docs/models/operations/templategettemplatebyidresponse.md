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
      "ACCOUNT",
    ],
    globalActionAuth: [
      "PASSKEY",
    ],
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
    emailId: "<id>",
    emailReplyTo: "<value>",
  },
  directLink: {
    id: "<id>",
    templateId: 9058.72,
    token: "<value>",
    createdAt: "1706660459834",
    enabled: true,
    directTemplateRecipientId: 691.67,
  },
  user: {
    id: 6866.29,
    name: "<value>",
    email: "Wilton_Koelpin83@gmail.com",
  },
  recipients: [
    {
      role: "APPROVER",
      readStatus: "OPENED",
      signingStatus: "REJECTED",
      sendStatus: "NOT_SENT",
      id: 7854.52,
      documentId: 3886.16,
      templateId: 359.79,
      email: "Roman.Koelpin@hotmail.com",
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
      signingOrder: 7521.2,
      rejectionReason: "<value>",
    },
  ],
  fields: [],
  folder: {
    id: "<id>",
    name: "<value>",
    type: "TEMPLATE",
    visibility: "MANAGER_AND_ABOVE",
    userId: 604.34,
    teamId: 5592.12,
    pinned: false,
    parentId: "<id>",
    createdAt: "1712996151462",
    updatedAt: "1735637856379",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [operations.TemplateGetTemplateByIdType](../../models/operations/templategettemplatebyidtype.md)                                 | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `visibility`                                                                                                                     | [operations.TemplateGetTemplateByIdVisibility](../../models/operations/templategettemplatebyidvisibility.md)                     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `id`                                                                                                                             | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `externalId`                                                                                                                     | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `title`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `userId`                                                                                                                         | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `teamId`                                                                                                                         | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `authOptions`                                                                                                                    | [operations.TemplateGetTemplateByIdAuthOptions](../../models/operations/templategettemplatebyidauthoptions.md)                   | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `templateDocumentDataId`                                                                                                         | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `createdAt`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `updatedAt`                                                                                                                      | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `publicTitle`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `publicDescription`                                                                                                              | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `folderId`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `templateDocumentData`                                                                                                           | [operations.TemplateGetTemplateByIdTemplateDocumentData](../../models/operations/templategettemplatebyidtemplatedocumentdata.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `templateMeta`                                                                                                                   | [operations.TemplateGetTemplateByIdTemplateMeta](../../models/operations/templategettemplatebyidtemplatemeta.md)                 | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `directLink`                                                                                                                     | [operations.TemplateGetTemplateByIdDirectLink](../../models/operations/templategettemplatebyiddirectlink.md)                     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `user`                                                                                                                           | [operations.TemplateGetTemplateByIdUser](../../models/operations/templategettemplatebyiduser.md)                                 | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `recipients`                                                                                                                     | [operations.TemplateGetTemplateByIdRecipient](../../models/operations/templategettemplatebyidrecipient.md)[]                     | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `fields`                                                                                                                         | [operations.TemplateGetTemplateByIdField](../../models/operations/templategettemplatebyidfield.md)[]                             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `folder`                                                                                                                         | [operations.TemplateGetTemplateByIdFolder](../../models/operations/templategettemplatebyidfolder.md)                             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |