# TemplateCreateDocumentFromTemplateResponse

Successful response

## Example Usage

```typescript
import { TemplateCreateDocumentFromTemplateResponse } from "@documenso/sdk-typescript/models/operations";

let value: TemplateCreateDocumentFromTemplateResponse = {
  visibility: "EVERYONE",
  status: "DRAFT",
  source: "DOCUMENT",
  id: 5025.09,
  externalId: "<id>",
  userId: 283.62,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "PASSKEY",
  },
  formValues: {
    "key": 7047.32,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1729675918063",
  updatedAt: "1741562183792",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 9582.8,
  templateId: 8242.67,
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
    timezone: "Asia/Makassar",
    password: "nAkgtUNQrqYIw2c",
    dateFormat: "<value>",
    documentId: 9703.76,
    redirectUrl: "https://distinct-popularity.net/",
    typedSignatureEnabled: false,
    language: "<value>",
    emailSettings: {},
  },
  recipients: [
    {
      role: "VIEWER",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 1120.71,
      documentId: 3214.22,
      templateId: 2847.79,
      email: "Tom_Jacobs94@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "EXPLICIT_NONE",
      },
      signingOrder: 810.53,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "DATE",
      id: 4545.9,
      secondaryId: "<id>",
      documentId: 2096.02,
      templateId: 3474.6,
      recipientId: 4541.65,
      page: 8652.12,
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

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                                                                         | [operations.TemplateCreateDocumentFromTemplateVisibility](../../models/operations/templatecreatedocumentfromtemplatevisibility.md)                   | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `status`                                                                                                                                             | [operations.TemplateCreateDocumentFromTemplateStatus](../../models/operations/templatecreatedocumentfromtemplatestatus.md)                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `source`                                                                                                                                             | [operations.TemplateCreateDocumentFromTemplateSource](../../models/operations/templatecreatedocumentfromtemplatesource.md)                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `id`                                                                                                                                                 | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `externalId`                                                                                                                                         | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | A custom external ID you can use to identify the document.                                                                                           |
| `userId`                                                                                                                                             | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The ID of the user that created this document.                                                                                                       |
| `authOptions`                                                                                                                                        | [operations.TemplateCreateDocumentFromTemplateAuthOptions](../../models/operations/templatecreatedocumentfromtemplateauthoptions.md)                 | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `formValues`                                                                                                                                         | Record<string, *operations.TemplateCreateDocumentFromTemplateFormValues*>                                                                            | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `title`                                                                                                                                              | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `documentDataId`                                                                                                                                     | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `createdAt`                                                                                                                                          | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `updatedAt`                                                                                                                                          | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `completedAt`                                                                                                                                        | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `deletedAt`                                                                                                                                          | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `teamId`                                                                                                                                             | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `templateId`                                                                                                                                         | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `documentData`                                                                                                                                       | [operations.TemplateCreateDocumentFromTemplateDocumentData](../../models/operations/templatecreatedocumentfromtemplatedocumentdata.md)               | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `documentMeta`                                                                                                                                       | [operations.TemplateCreateDocumentFromTemplateDocumentMeta](../../models/operations/templatecreatedocumentfromtemplatedocumentmeta.md)               | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `recipients`                                                                                                                                         | [operations.TemplateCreateDocumentFromTemplateResponseRecipients](../../models/operations/templatecreatedocumentfromtemplateresponserecipients.md)[] | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `fields`                                                                                                                                             | [operations.TemplateCreateDocumentFromTemplateFields](../../models/operations/templatecreatedocumentfromtemplatefields.md)[]                         | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |