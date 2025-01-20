# TemplateCreateDocumentFromTemplateResponseBody

Successful response

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateResponseBody = {
  visibility: "EVERYONE",
  status: "PENDING",
  source: "TEMPLATE",
  id: 728474,
  externalId: "<id>",
  userId: 9006.76,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "TWO_FACTOR_AUTH",
  },
  formValues: {
    "key": 329.45,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1715614967366",
  updatedAt: "1737326775348",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 415953,
  templateId: 231255,
  documentData: {
    type: "S3_PATH",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
  },
  documentMeta: {
    signingOrder: "SEQUENTIAL",
    distributionMethod: "EMAIL",
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "America/Monterrey",
    password: "q49u4lmy5g301NI",
    dateFormat: "<value>",
    documentId: 24548,
    redirectUrl: "https://burdensome-kettledrum.net/",
    typedSignatureEnabled: false,
    language: "<value>",
    emailSettings: {},
  },
  recipients: [
    {
      role: "APPROVER",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 237972,
      documentId: 761927,
      templateId: 890765,
      email: "Benton.Dicki@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 3530.75,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "FREE_SIGNATURE",
      id: 312690,
      secondaryId: "<id>",
      documentId: 884325,
      templateId: 958533,
      recipientId: 207512,
      page: 7884.69,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "email",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `visibility`                                                                                                                                           | [operations.TemplateCreateDocumentFromTemplateVisibility](../../models/operations/templatecreatedocumentfromtemplatevisibility.md)                     | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `status`                                                                                                                                               | [operations.TemplateCreateDocumentFromTemplateStatus](../../models/operations/templatecreatedocumentfromtemplatestatus.md)                             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `source`                                                                                                                                               | [operations.TemplateCreateDocumentFromTemplateSource](../../models/operations/templatecreatedocumentfromtemplatesource.md)                             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `id`                                                                                                                                                   | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `externalId`                                                                                                                                           | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | A custom external ID you can use to identify the document.                                                                                             |
| `userId`                                                                                                                                               | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | The ID of the user that created this document.                                                                                                         |
| `authOptions`                                                                                                                                          | [operations.TemplateCreateDocumentFromTemplateAuthOptions](../../models/operations/templatecreatedocumentfromtemplateauthoptions.md)                   | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `formValues`                                                                                                                                           | Record<string, *operations.TemplateCreateDocumentFromTemplateFormValues*>                                                                              | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `title`                                                                                                                                                | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `documentDataId`                                                                                                                                       | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `createdAt`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `updatedAt`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `completedAt`                                                                                                                                          | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `deletedAt`                                                                                                                                            | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `teamId`                                                                                                                                               | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `templateId`                                                                                                                                           | *number*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `documentData`                                                                                                                                         | [operations.TemplateCreateDocumentFromTemplateDocumentData](../../models/operations/templatecreatedocumentfromtemplatedocumentdata.md)                 | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `documentMeta`                                                                                                                                         | [operations.TemplateCreateDocumentFromTemplateDocumentMeta](../../models/operations/templatecreatedocumentfromtemplatedocumentmeta.md)                 | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `recipients`                                                                                                                                           | [operations.TemplateCreateDocumentFromTemplateTemplatesRecipients](../../models/operations/templatecreatedocumentfromtemplatetemplatesrecipients.md)[] | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `fields`                                                                                                                                               | [operations.TemplateCreateDocumentFromTemplateFields](../../models/operations/templatecreatedocumentfromtemplatefields.md)[]                           | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |