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
    userId: 4465.62,
    authOptions: {
      globalAccessAuth: [],
      globalActionAuth: [],
    },
    formValues: {
      "key": "<value>",
    },
    title: "<value>",
    documentDataId: "<id>",
    createdAt: "1710221001590",
    updatedAt: "1735684112912",
    completedAt: "<value>",
    deletedAt: "<value>",
    teamId: 1389.58,
    templateId: 2750.13,
    folderId: "<id>",
    documentData: {
      type: "BYTES",
      id: "<id>",
      data: "<value>",
      initialData: "<value>",
    },
    documentMeta: {
      signingOrder: "SEQUENTIAL",
      distributionMethod: "NONE",
      id: "<id>",
      subject: "<value>",
      message: "<value>",
      timezone: "America/Grand_Turk",
      password: "Wd1ipeD8AVnAjX5",
      dateFormat: "<value>",
      documentId: 1848.73,
      redirectUrl: "https://clear-cut-patroller.org",
      typedSignatureEnabled: false,
      uploadSignatureEnabled: true,
      drawSignatureEnabled: false,
      allowDictateNextSigner: true,
      language: "<value>",
      emailSettings: {},
    },
    folder: {
      id: "<id>",
      name: "<value>",
      type: "DOCUMENT",
      visibility: "ADMIN",
      userId: 1957.61,
      teamId: 1166.69,
      pinned: false,
      parentId: "<id>",
      createdAt: "1734873840846",
      updatedAt: "1735609619846",
    },
    recipients: [],
    fields: [],
  },
  uploadUrl: "https://leading-prohibition.info/",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `document`                                                                           | [operations.Document](../../models/operations/document.md)                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `uploadUrl`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The URL to upload the document PDF to. Use a PUT request with the file via form-data |