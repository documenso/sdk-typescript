# DocumentCreateDocumentTemporaryResponseBody

Successful response

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryResponseBody = {
  document: {
    visibility: "ADMIN",
    status: "COMPLETED",
    source: "DOCUMENT",
    id: 647197,
    externalId: "<id>",
    userId: 6003.92,
    authOptions: {
      globalAccessAuth: "ACCOUNT",
      globalActionAuth: "PASSKEY",
    },
    formValues: {
      "key": 168.71,
    },
    title: "<value>",
    documentDataId: "<id>",
    createdAt: "1727847124050",
    updatedAt: "1737402755834",
    completedAt: "<value>",
    deletedAt: "<value>",
    teamId: 509807,
    templateId: 333965,
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
      timezone: "Asia/Bahrain",
      password: "b6GusPxTxox1E0u",
      dateFormat: "<value>",
      documentId: 446394,
      redirectUrl: "https://cute-petal.info",
      typedSignatureEnabled: false,
      language: "<value>",
      emailSettings: {},
    },
    recipients: [
      {
        role: "CC",
        readStatus: "OPENED",
        signingStatus: "NOT_SIGNED",
        sendStatus: "NOT_SENT",
        id: 59944,
        documentId: 61078,
        templateId: 907733,
        email: "Stan.Lehner@hotmail.com",
        name: "<value>",
        token: "<value>",
        documentDeletedAt: "<value>",
        expired: "<value>",
        signedAt: "<value>",
        authOptions: {
          accessAuth: "ACCOUNT",
          actionAuth: "PASSKEY",
        },
        signingOrder: 3782.45,
        rejectionReason: "<value>",
      },
    ],
    fields: [
      {
        type: "DROPDOWN",
        id: 174658,
        secondaryId: "<id>",
        documentId: 327988,
        templateId: 680349,
        recipientId: 63207,
        page: 6072.49,
        customText: "<value>",
        inserted: false,
        fieldMeta: {
          type: "text",
        },
      },
    ],
  },
  uploadUrl: "https://every-lawmaker.info/",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `document`                                                                           | [operations.Document](../../models/operations/document.md)                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `uploadUrl`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The URL to upload the document PDF to. Use a PUT request with the file via form-data |