# DocumentGetDocumentWithDetailsByIdResponse

Successful response

## Example Usage

```typescript
import { DocumentGetDocumentWithDetailsByIdResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetDocumentWithDetailsByIdResponse = {
  visibility: "ADMIN",
  status: "COMPLETED",
  source: "DOCUMENT",
  id: 6630.78,
  externalId: "<id>",
  userId: 2633.22,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "ACCOUNT",
  },
  formValues: {
    "key": 3200.17,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1722122903534",
  updatedAt: "1741530416561",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 8310.49,
  templateId: 6289.82,
  documentData: {
    type: "BYTES_64",
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
    timezone: "America/Blanc-Sablon",
    password: "b5f95R4IDMXsReF",
    dateFormat: "<value>",
    documentId: 5654.21,
    redirectUrl: "https://courageous-juggernaut.info/",
    typedSignatureEnabled: false,
    language: "<value>",
    emailSettings: {},
  },
  recipients: [
    {
      role: "ASSISTANT",
      readStatus: "OPENED",
      signingStatus: "REJECTED",
      sendStatus: "SENT",
      id: 834.22,
      documentId: 5521.93,
      templateId: 5844.76,
      email: "Eladio92@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "EXPLICIT_NONE",
      },
      signingOrder: 2817.3,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "TEXT",
      id: 639.55,
      secondaryId: "<id>",
      documentId: 4856.28,
      templateId: 9774.96,
      recipientId: 8765.06,
      page: 3381.59,
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

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                                                           | [operations.DocumentGetDocumentWithDetailsByIdVisibility](../../models/operations/documentgetdocumentwithdetailsbyidvisibility.md)     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `status`                                                                                                                               | [operations.DocumentGetDocumentWithDetailsByIdStatus](../../models/operations/documentgetdocumentwithdetailsbyidstatus.md)             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `source`                                                                                                                               | [operations.DocumentGetDocumentWithDetailsByIdSource](../../models/operations/documentgetdocumentwithdetailsbyidsource.md)             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `id`                                                                                                                                   | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `externalId`                                                                                                                           | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | A custom external ID you can use to identify the document.                                                                             |
| `userId`                                                                                                                               | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | The ID of the user that created this document.                                                                                         |
| `authOptions`                                                                                                                          | [operations.DocumentGetDocumentWithDetailsByIdAuthOptions](../../models/operations/documentgetdocumentwithdetailsbyidauthoptions.md)   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `formValues`                                                                                                                           | Record<string, *operations.DocumentGetDocumentWithDetailsByIdFormValues*>                                                              | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `title`                                                                                                                                | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentDataId`                                                                                                                       | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `createdAt`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `updatedAt`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `completedAt`                                                                                                                          | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `deletedAt`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `teamId`                                                                                                                               | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `templateId`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentData`                                                                                                                         | [operations.DocumentGetDocumentWithDetailsByIdDocumentData](../../models/operations/documentgetdocumentwithdetailsbyiddocumentdata.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `documentMeta`                                                                                                                         | [operations.DocumentGetDocumentWithDetailsByIdDocumentMeta](../../models/operations/documentgetdocumentwithdetailsbyiddocumentmeta.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `recipients`                                                                                                                           | [operations.DocumentGetDocumentWithDetailsByIdRecipients](../../models/operations/documentgetdocumentwithdetailsbyidrecipients.md)[]   | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `fields`                                                                                                                               | [operations.DocumentGetDocumentWithDetailsByIdFields](../../models/operations/documentgetdocumentwithdetailsbyidfields.md)[]           | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |