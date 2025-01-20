# TemplateGetTemplateByIdResponseBody

Successful response

## Example Usage

```typescript
import { TemplateGetTemplateByIdResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateGetTemplateByIdResponseBody = {
  type: "PRIVATE",
  visibility: "MANAGER_AND_ABOVE",
  id: 880998,
  externalId: "<id>",
  title: "<value>",
  userId: 555938,
  teamId: 741603,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "TWO_FACTOR_AUTH",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1734475162147",
  updatedAt: "1737295232235",
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
    timezone: "America/St_Barthelemy",
    dateFormat: "<value>",
    signingOrder: "SEQUENTIAL",
    typedSignatureEnabled: false,
    distributionMethod: "EMAIL",
    templateId: 982574,
    redirectUrl: "https://blind-jungle.net",
    language: "<value>",
    emailSettings: {},
  },
  directLink: {
    id: "<id>",
    templateId: 738152,
    token: "<value>",
    createdAt: "1734419839998",
    enabled: false,
    directTemplateRecipientId: 799866,
  },
  user: {
    id: 310930,
    name: "<value>",
    email: "Maybelle29@yahoo.com",
  },
  recipients: [
    {
      role: "VIEWER",
      readStatus: "NOT_OPENED",
      signingStatus: "REJECTED",
      sendStatus: "SENT",
      id: 998355,
      documentId: 847308,
      templateId: 414456,
      email: "Romaine_Heller@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 424.54,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "DATE",
      id: 546868,
      secondaryId: "<id>",
      documentId: 340101,
      templateId: 68596,
      recipientId: 228907,
      page: 3579.84,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "date",
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