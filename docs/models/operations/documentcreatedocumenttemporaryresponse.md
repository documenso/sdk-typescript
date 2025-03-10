# DocumentCreateDocumentTemporaryResponse

Successful response

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryResponse = {
  document: {
    visibility: "MANAGER_AND_ABOVE",
    status: "COMPLETED",
    source: "DOCUMENT",
    id: 4420.36,
    externalId: "<id>",
    userId: 5199.52,
    authOptions: {
      globalAccessAuth: "ACCOUNT",
      globalActionAuth: "TWO_FACTOR_AUTH",
    },
    formValues: {
      "key": "<value>",
    },
    title: "<value>",
    documentDataId: "<id>",
    createdAt: "1717212610393",
    updatedAt: "1741515036626",
    completedAt: "<value>",
    deletedAt: "<value>",
    teamId: 6232.95,
    templateId: 8869.61,
    documentData: {
      type: "BYTES",
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
      timezone: "Europe/Vilnius",
      password: "PxTxox1E0uKw0_J",
      dateFormat: "<value>",
      documentId: 764.86,
      redirectUrl: "https://experienced-antelope.com",
      typedSignatureEnabled: false,
      language: "<value>",
      emailSettings: {},
    },
    recipients: [
      {
        role: "CC",
        readStatus: "OPENED",
        signingStatus: "REJECTED",
        sendStatus: "SENT",
        id: 6725.82,
        documentId: 5289.4,
        templateId: 3044.46,
        email: "Francesco_Hodkiewicz17@hotmail.com",
        name: "<value>",
        token: "<value>",
        documentDeletedAt: "<value>",
        expired: "<value>",
        signedAt: "<value>",
        authOptions: {
          accessAuth: "ACCOUNT",
          actionAuth: "TWO_FACTOR_AUTH",
        },
        signingOrder: 632.07,
        rejectionReason: "<value>",
      },
    ],
    fields: [
      {
        type: "TEXT",
        id: 4776.46,
        secondaryId: "<id>",
        documentId: 2840,
        templateId: 2384.13,
        recipientId: 5145.13,
        page: 3679.27,
        customText: "<value>",
        inserted: false,
        fieldMeta: {
          type: "text",
        },
      },
    ],
  },
  uploadUrl: "https://wilted-certification.com/",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `document`                                                                           | [operations.Document](../../models/operations/document.md)                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `uploadUrl`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The URL to upload the document PDF to. Use a PUT request with the file via form-data |