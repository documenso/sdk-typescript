# DocumentGetDocumentWithDetailsByIdResponseBody

Successful response

## Example Usage

```typescript
import { DocumentGetDocumentWithDetailsByIdResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetDocumentWithDetailsByIdResponseBody = {
  visibility: "EVERYONE",
  status: "DRAFT",
  source: "DOCUMENT",
  id: 679393,
  externalId: "<id>",
  userId: 4536.97,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "PASSKEY",
  },
  formValues: {
    "key": 9903.39,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1712722917486",
  updatedAt: "1737389743698",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 263322,
  templateId: 20651,
  documentData: {
    type: "BYTES_64",
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
    timezone: "Asia/Khandyga",
    password: "osl2b5f95R4IDMX",
    dateFormat: "<value>",
    documentId: 863856,
    redirectUrl: "https://minor-ceramics.net/",
    typedSignatureEnabled: false,
    language: "<value>",
    emailSettings: {},
  },
  recipients: [
    {
      role: "SIGNER",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 488056,
      documentId: 355613,
      templateId: 940432,
      email: "Nella58@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "PASSKEY",
      },
      signingOrder: 2408.29,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "FREE_SIGNATURE",
      id: 16429,
      secondaryId: "<id>",
      documentId: 929530,
      templateId: 669917,
      recipientId: 785153,
      page: 2817.3,
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