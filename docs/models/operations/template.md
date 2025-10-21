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
  createdAt: "1706149971951",
  updatedAt: "1735654227391",
  publicTitle: "<value>",
  publicDescription: "<value>",
  folderId: null,
  envelopeId: "<id>",
  templateDocumentData: {
    type: "S3_PATH",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
    envelopeItemId: "<id>",
  },
  templateMeta: {
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "America/Anchorage",
    dateFormat: "<value>",
    signingOrder: "PARALLEL",
    typedSignatureEnabled: false,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: false,
    allowDictateNextSigner: false,
    distributionMethod: "EMAIL",
    redirectUrl: "https://awesome-jellyfish.org",
    language: "<value>",
    emailSettings: {},
    emailId: "<id>",
    emailReplyTo: null,
    templateId: 6491.25,
  },
  directLink: {
    id: "<id>",
    envelopeId: "<id>",
    token: "<value>",
    createdAt: "1726866861086",
    enabled: true,
    directTemplateRecipientId: 4976.87,
    templateId: 4407.15,
  },
  user: {
    id: 7492.04,
    name: "<value>",
    email: "Rosina27@hotmail.com",
  },
  recipients: [
    {
      envelopeId: "<id>",
      role: "ASSISTANT",
      readStatus: "OPENED",
      signingStatus: "REJECTED",
      sendStatus: "SENT",
      id: 2297.91,
      email: "Davin_Beahan10@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [],
        actionAuth: [],
      },
      signingOrder: 7528.64,
      rejectionReason: "<value>",
    },
  ],
  fields: [],
  folder: {
    id: "<id>",
    name: "<value>",
    type: "DOCUMENT",
    visibility: "EVERYONE",
    userId: 2470.86,
    teamId: 8054.81,
    pinned: true,
    parentId: "<id>",
    createdAt: "1732915599752",
    updatedAt: "1735652941400",
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
| `createdAt`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `updatedAt`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `publicTitle`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `publicDescription`                                                                                                                              | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `folderId`                                                                                                                                       | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `envelopeId`                                                                                                                                     | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `templateDocumentDataId`                                                                                                                         | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `templateDocumentData`                                                                                                                           | [operations.TemplateCreateTemplateTemporaryTemplateDocumentData](../../models/operations/templatecreatetemplatetemporarytemplatedocumentdata.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `templateMeta`                                                                                                                                   | [operations.TemplateCreateTemplateTemporaryTemplateMeta](../../models/operations/templatecreatetemplatetemporarytemplatemeta.md)                 | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `directLink`                                                                                                                                     | [operations.TemplateCreateTemplateTemporaryDirectLink](../../models/operations/templatecreatetemplatetemporarydirectlink.md)                     | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `user`                                                                                                                                           | [operations.TemplateCreateTemplateTemporaryUser](../../models/operations/templatecreatetemplatetemporaryuser.md)                                 | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `recipients`                                                                                                                                     | [operations.TemplateCreateTemplateTemporaryRecipient](../../models/operations/templatecreatetemplatetemporaryrecipient.md)[]                     | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `fields`                                                                                                                                         | [operations.TemplateCreateTemplateTemporaryField](../../models/operations/templatecreatetemplatetemporaryfield.md)[]                             | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `folder`                                                                                                                                         | [operations.TemplateCreateTemplateTemporaryFolder](../../models/operations/templatecreatetemplatetemporaryfolder.md)                             | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |