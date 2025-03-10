# TemplateGetTemplateByIdResponse

Successful response

## Example Usage

```typescript
import { TemplateGetTemplateByIdResponse } from "@documenso/sdk-typescript/models/operations";

let value: TemplateGetTemplateByIdResponse = {
  type: "PUBLIC",
  visibility: "MANAGER_AND_ABOVE",
  id: 5897.12,
  externalId: "<id>",
  title: "<value>",
  userId: 8815.68,
  teamId: 9290.67,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "ACCOUNT",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1715757632977",
  updatedAt: "1741489285389",
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
    templateId: 7321.42,
    redirectUrl: "https://wrong-petticoat.org",
    language: "<value>",
    emailSettings: {},
  },
  directLink: {
    id: "<id>",
    templateId: 7780.39,
    token: "<value>",
    createdAt: "1719728319405",
    enabled: false,
    directTemplateRecipientId: 8756.93,
  },
  user: {
    id: 427.63,
    name: "<value>",
    email: "Dorian67@gmail.com",
  },
  recipients: [
    {
      role: "CC",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "NOT_SENT",
      id: 7998.3,
      documentId: 9605.23,
      templateId: 7989.53,
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
      id: 2402.92,
      secondaryId: "<id>",
      documentId: 7631.4,
      templateId: 8701.83,
      recipientId: 5620.66,
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
| `templateDocumentData`                                                                                           | [operations.TemplateDocumentData](../../models/operations/templatedocumentdata.md)                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `templateMeta`                                                                                                   | [operations.TemplateGetTemplateByIdTemplateMeta](../../models/operations/templategettemplatebyidtemplatemeta.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `directLink`                                                                                                     | [operations.TemplateGetTemplateByIdDirectLink](../../models/operations/templategettemplatebyiddirectlink.md)     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `user`                                                                                                           | [operations.TemplateGetTemplateByIdUser](../../models/operations/templategettemplatebyiduser.md)                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `recipients`                                                                                                     | [operations.TemplateGetTemplateByIdRecipients](../../models/operations/templategettemplatebyidrecipients.md)[]   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `fields`                                                                                                         | [operations.TemplateGetTemplateByIdFields](../../models/operations/templategettemplatebyidfields.md)[]           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |