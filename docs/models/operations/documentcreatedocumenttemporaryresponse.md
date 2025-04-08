# DocumentCreateDocumentTemporaryResponse

Successful response

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryResponse = {
  document: {
    visibility: "ADMIN",
    status: "DRAFT",
    source: "TEMPLATE",
    id: 2068.59,
    externalId: "<id>",
    userId: 2471.21,
    authOptions: {
      globalAccessAuth: "ACCOUNT",
      globalActionAuth: "PASSKEY",
    },
    formValues: {
      "key": false,
    },
    title: "<value>",
    documentDataId: "<id>",
    createdAt: "1736755356702",
    updatedAt: "1744059121860",
    completedAt: "<value>",
    deletedAt: "<value>",
    teamId: 1489.17,
    templateId: 1923.96,
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
      timezone: "America/Argentina/Catamarca",
      password: "HFGfKX91Wd1ipeD",
      dateFormat: "<value>",
      documentId: 6651.71,
      redirectUrl: "https://gruesome-mechanic.net/",
      typedSignatureEnabled: false,
      uploadSignatureEnabled: false,
      drawSignatureEnabled: false,
      allowDictateNextSigner: false,
      language: "<value>",
      emailSettings: {},
    },
    recipients: [
      {
        role: "SIGNER",
        readStatus: "NOT_OPENED",
        signingStatus: "NOT_SIGNED",
        sendStatus: "SENT",
        id: 5872.35,
        documentId: 1519.38,
        templateId: 2106.89,
        email: "Christine64@hotmail.com",
        name: "<value>",
        token: "<value>",
        documentDeletedAt: "<value>",
        expired: "<value>",
        signedAt: "<value>",
        authOptions: {
          accessAuth: "ACCOUNT",
          actionAuth: "TWO_FACTOR_AUTH",
        },
        signingOrder: 4871.42,
        rejectionReason: "<value>",
      },
    ],
    fields: [
      {
        type: "DROPDOWN",
        id: 4352.01,
        secondaryId: "<id>",
        documentId: 8230.22,
        templateId: 8882.43,
        recipientId: 3502.76,
        page: 3136.7,
        customText: "<value>",
        inserted: false,
        fieldMeta: {
          type: "date",
        },
      },
    ],
  },
  uploadUrl: "https://scented-hutch.net/",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `document`                                                                           | [operations.Document](../../models/operations/document.md)                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `uploadUrl`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The URL to upload the document PDF to. Use a PUT request with the file via form-data |