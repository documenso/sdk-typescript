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
    createdAt: "1710221001590",
    updatedAt: "1735684112912",
    completedAt: "<value>",
    deletedAt: "<value>",
    teamId: 1389.58,
    folderId: "<id>",
    envelopeId: "<id>",
    documentData: {
      type: "BYTES",
      id: "<id>",
      data: "<value>",
      initialData: "<value>",
      envelopeItemId: "<id>",
    },
    documentMeta: {
      signingOrder: "PARALLEL",
      distributionMethod: "EMAIL",
      id: "<id>",
      subject: null,
      message: "<value>",
      timezone: null,
      dateFormat: "<value>",
      redirectUrl: "https://scornful-doubter.org/",
      typedSignatureEnabled: true,
      uploadSignatureEnabled: false,
      drawSignatureEnabled: false,
      allowDictateNextSigner: false,
      language: "<value>",
      emailSettings: {},
      emailId: "<id>",
      emailReplyTo: "<value>",
    },
    folder: {
      id: "<id>",
      name: "<value>",
      type: "DOCUMENT",
      visibility: "ADMIN",
      userId: 3810.18,
      teamId: 9987.45,
      pinned: false,
      parentId: "<id>",
      createdAt: "1727319290753",
      updatedAt: "1735682218085",
    },
    recipients: [],
    fields: [],
  },
  uploadUrl: "https://reasonable-receptor.info",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `document`                                                                           | [operations.Document](../../models/operations/document.md)                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `uploadUrl`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The URL to upload the document PDF to. Use a PUT request with the file via form-data |