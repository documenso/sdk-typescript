# TemplateGetTemplateByIdResponseBody

Successful response

## Example Usage

```typescript
import { TemplateGetTemplateByIdResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateGetTemplateByIdResponseBody = {
  type: "PUBLIC",
  visibility: "EVERYONE",
  id: 38044,
  externalId: "<id>",
  title: "<value>",
  userId: 956545,
  teamId: 667169,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "TWO_FACTOR_AUTH",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1722513854995",
  updatedAt: "1737271549884",
  publicTitle: "<value>",
  publicDescription: "<value>",
  templateDocumentData: {
    type: "BYTES",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
  },
  templateMeta: {
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "America/Monterrey",
    dateFormat: "<value>",
    signingOrder: "PARALLEL",
    typedSignatureEnabled: false,
    distributionMethod: "NONE",
    templateId: 359453,
    redirectUrl: "https://worthless-alliance.biz",
    language: "<value>",
    emailSettings: {},
  },
  directLink: {
    id: "<id>",
    templateId: 112250,
    token: "<value>",
    createdAt: "1707088644512",
    enabled: false,
    directTemplateRecipientId: 227741,
  },
  user: {
    id: 446793,
    name: "<value>",
    email: "Dalton_Ward@hotmail.com",
  },
  recipients: [
    {
      role: "APPROVER",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 404774,
      documentId: 601277,
      templateId: 771931,
      email: "Melyssa64@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 7416.03,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "RADIO",
      id: 908249,
      secondaryId: "<id>",
      documentId: 150349,
      templateId: 558283,
      recipientId: 428378,
      page: 9231.59,
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.TemplateGetTemplateByIdType](../../models/operations/templategettemplatebyidtype.md)               | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `visibility`                                                                                                   | [operations.TemplateGetTemplateByIdVisibility](../../models/operations/templategettemplatebyidvisibility.md)   | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `id`                                                                                                           | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `externalId`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `title`                                                                                                        | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `userId`                                                                                                       | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `teamId`                                                                                                       | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `authOptions`                                                                                                  | [operations.TemplateGetTemplateByIdAuthOptions](../../models/operations/templategettemplatebyidauthoptions.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `templateDocumentDataId`                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `publicTitle`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `publicDescription`                                                                                            | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `templateDocumentData`                                                                                         | [operations.TemplateDocumentData](../../models/operations/templatedocumentdata.md)                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `templateMeta`                                                                                                 | [operations.TemplateMeta](../../models/operations/templatemeta.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `directLink`                                                                                                   | [operations.DirectLink](../../models/operations/directlink.md)                                                 | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `user`                                                                                                         | [operations.User](../../models/operations/user.md)                                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `recipients`                                                                                                   | [operations.TemplateGetTemplateByIdRecipients](../../models/operations/templategettemplatebyidrecipients.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `fields`                                                                                                       | [operations.TemplateGetTemplateByIdFields](../../models/operations/templategettemplatebyidfields.md)[]         | :heavy_check_mark:                                                                                             | N/A                                                                                                            |