# TemplateCreateDocumentFromTemplateResponseBody

Successful response

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateResponseBody = {
  visibility: "EVERYONE",
  status: "PENDING",
  source: "TEMPLATE_DIRECT_LINK",
  id: 470321,
  externalId: "<id>",
  userId: 9596.96,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "ACCOUNT",
  },
  formValues: {
    "key": 8701.83,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1723477968467",
  updatedAt: "1737241669328",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 596185,
  templateId: 428810,
  documentData: {
    type: "BYTES",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
  },
  documentMeta: {
    signingOrder: "PARALLEL",
    distributionMethod: "EMAIL",
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "Atlantic/Azores",
    password: "0qjDxn6Ior8A2mi",
    dateFormat: "<value>",
    documentId: 516833,
    redirectUrl: "https://courageous-tenant.com",
    typedSignatureEnabled: false,
    language: "<value>",
    emailSettings: {},
  },
  recipients: [
    {
      role: "CC",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "SENT",
      id: 420233,
      documentId: 728474,
      templateId: 900676,
      email: "Ross_Hagenes41@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "PASSKEY",
      },
      signingOrder: 9454.31,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "NAME",
      id: 353904,
      secondaryId: "<id>",
      documentId: 3709,
      templateId: 845078,
      recipientId: 154840,
      page: 2041.44,
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