# DocumentGetDocumentWithDetailsByIdResponse

Successful response

## Example Usage

```typescript
import { DocumentGetDocumentWithDetailsByIdResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetDocumentWithDetailsByIdResponse = {
  visibility: "MANAGER_AND_ABOVE",
  status: "REJECTED",
  source: "DOCUMENT",
  id: 4005.96,
  externalId: "<id>",
  userId: 3837.66,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "TWO_FACTOR_AUTH",
  },
  formValues: {
    "key": "<value>",
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1715425741269",
  updatedAt: "1744043002525",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 9273.9,
  templateId: 5066.42,
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
    timezone: "Europe/Mariehamn",
    password: "WYPwINXZb01HWU6",
    dateFormat: "<value>",
    documentId: 2266.53,
    redirectUrl: "https://royal-membership.org/",
    typedSignatureEnabled: false,
    uploadSignatureEnabled: false,
    drawSignatureEnabled: false,
    allowDictateNextSigner: false,
    language: "<value>",
    emailSettings: {},
  },
  recipients: [
    {
      role: "CC",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 7265.62,
      documentId: 6614.32,
      templateId: 1154.9,
      email: "Richard.Funk79@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "ACCOUNT",
      },
      signingOrder: 6847.27,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      type: "NUMBER",
      id: 7186.6,
      secondaryId: "<id>",
      documentId: 5366.86,
      templateId: 1978.18,
      recipientId: 4691.92,
      page: 2543.41,
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
| `recipients`                                                                                                                           | [operations.DocumentGetDocumentWithDetailsByIdRecipient](../../models/operations/documentgetdocumentwithdetailsbyidrecipient.md)[]     | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `fields`                                                                                                                               | [operations.DocumentGetDocumentWithDetailsByIdField](../../models/operations/documentgetdocumentwithdetailsbyidfield.md)[]             | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |