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
  userId: 4992.92,
  teamId: 2772.42,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "PASSKEY",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1730997561685",
  updatedAt: "1744069972056",
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
    timezone: "Antarctica/Casey",
    dateFormat: "<value>",
    signingOrder: "SEQUENTIAL",
    typedSignatureEnabled: false,
    uploadSignatureEnabled: false,
    drawSignatureEnabled: false,
    allowDictateNextSigner: false,
    distributionMethod: "EMAIL",
    templateId: 5821.94,
    redirectUrl: "https://mixed-stool.com",
    language: "<value>",
    emailSettings: {},
  },
  directLink: {
    id: "<id>",
    templateId: 6831.82,
    token: "<value>",
    createdAt: "1725890596089",
    enabled: false,
    directTemplateRecipientId: 5013.71,
  },
  user: {
    id: 3834.62,
    name: "<value>",
    email: "Makenzie11@hotmail.com",
  },
  recipients: [
    {
      role: "SIGNER",
      readStatus: "NOT_OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 1440.48,
      documentId: 6456.18,
      templateId: 1409.25,
      email: "Dawson6@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "EXPLICIT_NONE",
      },
      signingOrder: 1222.15,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "DROPDOWN",
      id: 7713.22,
      secondaryId: "<id>",
      documentId: 4598.21,
      templateId: 8276.07,
      recipientId: 8394.95,
      page: 1896.3,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "dropdown",
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
| `recipients`                                                                                                     | [operations.TemplateGetTemplateByIdRecipient](../../models/operations/templategettemplatebyidrecipient.md)[]     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `fields`                                                                                                         | [operations.TemplateGetTemplateByIdField](../../models/operations/templategettemplatebyidfield.md)[]             | :heavy_check_mark:                                                                                               | N/A                                                                                                              |