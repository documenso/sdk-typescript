# Template

## Example Usage

```typescript
import { Template } from "@documenso/sdk-typescript/models/operations";

let value: Template = {
  type: "PUBLIC",
  visibility: "EVERYONE",
  id: 284.99,
  externalId: "<id>",
  title: "<value>",
  userId: 9079.13,
  teamId: 6126.29,
  authOptions: {
    globalAccessAuth: [],
    globalActionAuth: [],
  },
  templateDocumentDataId: "<id>",
  createdAt: "1706149971951",
  updatedAt: "1735654227391",
  publicTitle: "<value>",
  publicDescription: "<value>",
  folderId: null,
  templateDocumentData: {
    type: "S3_PATH",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
  },
  templateMeta: {
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "Europe/Skopje",
    dateFormat: null,
    signingOrder: "PARALLEL",
    typedSignatureEnabled: false,
    uploadSignatureEnabled: false,
    drawSignatureEnabled: true,
    allowDictateNextSigner: true,
    distributionMethod: "NONE",
    templateId: 535.07,
    redirectUrl: "https://pitiful-extent.com",
    language: "<value>",
    emailSettings: {},
    emailId: "<id>",
    emailReplyTo: "<value>",
  },
  directLink: {
    id: "<id>",
    templateId: 2906.33,
    token: "<value>",
    createdAt: "1719848666818",
    enabled: true,
    directTemplateRecipientId: 7492.04,
  },
  user: {
    id: 2012.56,
    name: "<value>",
    email: "Domenica.DuBuque@hotmail.com",
  },
  recipients: [
    {
      role: "ASSISTANT",
      readStatus: "OPENED",
      signingStatus: "SIGNED",
      sendStatus: "NOT_SENT",
      id: 1921.91,
      documentId: 8540.85,
      templateId: null,
      email: "Bernard_Sipes@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [],
        actionAuth: [
          "PASSKEY",
        ],
      },
      signingOrder: 135.48,
      rejectionReason: null,
    },
  ],
  fields: [],
  folder: {
    id: "<id>",
    name: "<value>",
    type: "DOCUMENT",
    visibility: "ADMIN",
    userId: 9120.37,
    teamId: 5757.17,
    pinned: true,
    parentId: null,
    createdAt: "1729360187536",
    updatedAt: "1735634686334",
  },
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                           | [operations.TemplateCreateTemplateTemporaryTypeResponse](../../models/operations/templatecreatetemplatetemporarytyperesponse.md)                 | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `visibility`                                                                                                                                     | [operations.TemplateCreateTemplateTemporaryVisibilityResponse](../../models/operations/templatecreatetemplatetemporaryvisibilityresponse.md)     | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `id`                                                                                                                                             | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `externalId`                                                                                                                                     | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `title`                                                                                                                                          | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `userId`                                                                                                                                         | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `teamId`                                                                                                                                         | *number*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `authOptions`                                                                                                                                    | [operations.TemplateCreateTemplateTemporaryAuthOptions](../../models/operations/templatecreatetemplatetemporaryauthoptions.md)                   | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `templateDocumentDataId`                                                                                                                         | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `createdAt`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `updatedAt`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `publicTitle`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `publicDescription`                                                                                                                              | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `folderId`                                                                                                                                       | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `templateDocumentData`                                                                                                                           | [operations.TemplateCreateTemplateTemporaryTemplateDocumentData](../../models/operations/templatecreatetemplatetemporarytemplatedocumentdata.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `templateMeta`                                                                                                                                   | [operations.TemplateCreateTemplateTemporaryTemplateMeta](../../models/operations/templatecreatetemplatetemporarytemplatemeta.md)                 | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `directLink`                                                                                                                                     | [operations.TemplateCreateTemplateTemporaryDirectLink](../../models/operations/templatecreatetemplatetemporarydirectlink.md)                     | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `user`                                                                                                                                           | [operations.TemplateCreateTemplateTemporaryUser](../../models/operations/templatecreatetemplatetemporaryuser.md)                                 | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `recipients`                                                                                                                                     | [operations.TemplateCreateTemplateTemporaryRecipient](../../models/operations/templatecreatetemplatetemporaryrecipient.md)[]                     | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `fields`                                                                                                                                         | [operations.TemplateCreateTemplateTemporaryField](../../models/operations/templatecreatetemplatetemporaryfield.md)[]                             | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `folder`                                                                                                                                         | [operations.TemplateCreateTemplateTemporaryFolder](../../models/operations/templatecreatetemplatetemporaryfolder.md)                             | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |