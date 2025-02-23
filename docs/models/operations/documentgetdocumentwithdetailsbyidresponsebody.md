# DocumentGetDocumentWithDetailsByIdResponseBody

Successful response

## Example Usage

```typescript
import { DocumentGetDocumentWithDetailsByIdResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetDocumentWithDetailsByIdResponseBody = {
  visibility: "ADMIN",
  status: "COMPLETED",
  source: "DOCUMENT",
  id: 663078,
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
  createdAt: "1720827135853",
  updatedAt: "1740234648880",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 831049,
  templateId: 628982,
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
    documentId: 565421,
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
      id: 83422,
      documentId: 552193,
      templateId: 584476,
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
      id: 63955,
      secondaryId: "<id>",
      documentId: 485628,
      templateId: 977496,
      recipientId: 876506,
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `visibility`                                                                                                                         | [operations.DocumentGetDocumentWithDetailsByIdVisibility](../../models/operations/documentgetdocumentwithdetailsbyidvisibility.md)   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `status`                                                                                                                             | [operations.DocumentGetDocumentWithDetailsByIdStatus](../../models/operations/documentgetdocumentwithdetailsbyidstatus.md)           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `source`                                                                                                                             | [operations.DocumentGetDocumentWithDetailsByIdSource](../../models/operations/documentgetdocumentwithdetailsbyidsource.md)           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `id`                                                                                                                                 | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `externalId`                                                                                                                         | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | A custom external ID you can use to identify the document.                                                                           |
| `userId`                                                                                                                             | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The ID of the user that created this document.                                                                                       |
| `authOptions`                                                                                                                        | [operations.AuthOptions](../../models/operations/authoptions.md)                                                                     | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `formValues`                                                                                                                         | Record<string, *operations.DocumentGetDocumentWithDetailsByIdFormValues*>                                                            | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `title`                                                                                                                              | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `documentDataId`                                                                                                                     | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `createdAt`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `updatedAt`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `completedAt`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `deletedAt`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `teamId`                                                                                                                             | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `templateId`                                                                                                                         | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `documentData`                                                                                                                       | [operations.DocumentData](../../models/operations/documentdata.md)                                                                   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `documentMeta`                                                                                                                       | [operations.DocumentMeta](../../models/operations/documentmeta.md)                                                                   | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `recipients`                                                                                                                         | [operations.DocumentGetDocumentWithDetailsByIdRecipients](../../models/operations/documentgetdocumentwithdetailsbyidrecipients.md)[] | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `fields`                                                                                                                             | [operations.DocumentGetDocumentWithDetailsByIdFields](../../models/operations/documentgetdocumentwithdetailsbyidfields.md)[]         | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |