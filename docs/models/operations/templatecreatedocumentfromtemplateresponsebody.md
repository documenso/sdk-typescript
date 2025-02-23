# TemplateCreateDocumentFromTemplateResponseBody

Successful response

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateResponseBody = {
  visibility: "EVERYONE",
  status: "COMPLETED",
  source: "TEMPLATE",
  id: 904983,
  externalId: "<id>",
  userId: 7487.23,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "PASSKEY",
  },
  formValues: {
    "key": 2780.5,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1725982838611",
  updatedAt: "1740209190207",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 968205,
  templateId: 226196,
  documentData: {
    type: "S3_PATH",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
  },
  documentMeta: {
    signingOrder: "PARALLEL",
    distributionMethod: "NONE",
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "Africa/Bujumbura",
    password: "VtcoZOZnAkgtUNQ",
    dateFormat: "<value>",
    documentId: 301701,
    redirectUrl: "https://tepid-eyebrow.name",
    typedSignatureEnabled: false,
    language: "<value>",
    emailSettings: {},
  },
  recipients: [
    {
      role: "VIEWER",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "SENT",
      id: 970376,
      documentId: 175275,
      templateId: 201966,
      email: "Orrin.Monahan47@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "PASSKEY",
      },
      signingOrder: 2847.79,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "EMAIL",
      id: 930127,
      secondaryId: "<id>",
      documentId: 181267,
      templateId: 401388,
      recipientId: 615597,
      page: 9465.58,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "name",
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