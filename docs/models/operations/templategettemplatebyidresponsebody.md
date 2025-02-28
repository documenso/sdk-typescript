# TemplateGetTemplateByIdResponseBody

Successful response

## Example Usage

```typescript
import { TemplateGetTemplateByIdResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateGetTemplateByIdResponseBody = {
  type: "PUBLIC",
  visibility: "MANAGER_AND_ABOVE",
  id: 589712,
  externalId: "<id>",
  title: "<value>",
  userId: 881568,
  teamId: 929067,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "ACCOUNT",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1714893767677",
  updatedAt: "1740625420089",
  publicTitle: "<value>",
  publicDescription: "<value>",
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
    timezone: "America/Mexico_City",
    dateFormat: "<value>",
    signingOrder: "SEQUENTIAL",
    typedSignatureEnabled: false,
    distributionMethod: "NONE",
    templateId: 732142,
    redirectUrl: "https://wrong-petticoat.org",
    language: "<value>",
    emailSettings: {},
  },
  directLink: {
    id: "<id>",
    templateId: 778039,
    token: "<value>",
    createdAt: "1718864454105",
    enabled: false,
    directTemplateRecipientId: 875693,
  },
  user: {
    id: 42763,
    name: "<value>",
    email: "Dorian67@gmail.com",
  },
  recipients: [
    {
      role: "CC",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "NOT_SENT",
      id: 799830,
      documentId: 960523,
      templateId: 798953,
      email: "Quinn.Feil@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 4703.21,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "DROPDOWN",
      id: 240292,
      secondaryId: "<id>",
      documentId: 763140,
      templateId: 870183,
      recipientId: 562066,
      page: 4562.22,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "number",
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