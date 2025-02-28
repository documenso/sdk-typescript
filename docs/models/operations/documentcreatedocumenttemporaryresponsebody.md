# DocumentCreateDocumentTemporaryResponseBody

Successful response

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryResponseBody = {
  document: {
    visibility: "MANAGER_AND_ABOVE",
    status: "COMPLETED",
    source: "DOCUMENT",
    id: 442036,
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
    createdAt: "1716348745001",
    updatedAt: "1740651171234",
    completedAt: "<value>",
    deletedAt: "<value>",
    teamId: 623295,
    templateId: 886961,
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
      documentId: 76486,
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
        id: 672582,
        documentId: 528940,
        templateId: 304446,
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
        id: 477646,
        secondaryId: "<id>",
        documentId: 284000,
        templateId: 238413,
        recipientId: 514513,
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