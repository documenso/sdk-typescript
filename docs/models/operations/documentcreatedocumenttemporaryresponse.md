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
    teamId: 4107.88,
    templateId: 3914.46,
    folderId: "<id>",
    documentData: {
      type: "S3_PATH",
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
      timezone: "America/Guyana",
      password: "tfBoXYPfETfwq5V",
      dateFormat: "<value>",
      documentId: 9590.12,
      redirectUrl: "https://spanish-hose.net/",
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
      visibility: "MANAGER_AND_ABOVE",
      userId: 5913.3,
      teamId: 5482.99,
      pinned: true,
      parentId: "<id>",
      createdAt: "1712028509965",
      updatedAt: "1735603674999",
    },
    recipients: [
      {
        role: "VIEWER",
        readStatus: "OPENED",
        signingStatus: "NOT_SIGNED",
        sendStatus: "NOT_SENT",
        id: 5747.63,
        documentId: 1712.04,
        templateId: 8347.78,
        email: "Frieda56@hotmail.com",
        name: "<value>",
        token: "<value>",
        documentDeletedAt: "<value>",
        expired: "<value>",
        signedAt: null,
        authOptions: {
          accessAuth: [],
          actionAuth: [
            "TWO_FACTOR_AUTH",
          ],
        },
        signingOrder: 1519.38,
        rejectionReason: "<value>",
      },
    ],
    fields: [
      {
        type: "FREE_SIGNATURE",
        id: 9636.63,
        secondaryId: "<id>",
        documentId: 7565.1,
        templateId: 8257.6,
        recipientId: 8466.34,
        page: 3571.37,
        customText: "<value>",
        inserted: true,
        fieldMeta: {
          type: "checkbox",
        },
      },
    ],
  },
  uploadUrl: "https://scared-substitution.com/",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `document`                                                                           | [operations.Document](../../models/operations/document.md)                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `uploadUrl`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The URL to upload the document PDF to. Use a PUT request with the file via form-data |