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
    internalVersion: 2750.13,
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
      subject: "<value>",
      message: null,
      timezone: "America/Campo_Grande",
      dateFormat: "<value>",
      redirectUrl: "https://wise-bend.org/",
      typedSignatureEnabled: false,
      uploadSignatureEnabled: false,
      drawSignatureEnabled: true,
      allowDictateNextSigner: false,
      language: "<value>",
      emailSettings: {},
      emailId: "<id>",
      emailReplyTo: "<value>",
    },
    envelopeItems: [],
    folder: {
      id: "<id>",
      name: "<value>",
      type: "TEMPLATE",
      visibility: "MANAGER_AND_ABOVE",
      userId: 3035.37,
      teamId: 7345.79,
      pinned: false,
      parentId: "<id>",
      createdAt: "1710978160956",
      updatedAt: "1735689527348",
    },
    recipients: [
      {
        envelopeId: "<id>",
        role: "CC",
        readStatus: "OPENED",
        signingStatus: "NOT_SIGNED",
        sendStatus: "NOT_SENT",
        id: 7782.87,
        email: "Maximillia_Ankunding@yahoo.com",
        name: "<value>",
        token: "<value>",
        documentDeletedAt: "<value>",
        expired: "<value>",
        signedAt: "<value>",
        authOptions: {
          accessAuth: [],
          actionAuth: [
            "TWO_FACTOR_AUTH",
          ],
        },
        signingOrder: 5482.99,
        rejectionReason: "<value>",
      },
    ],
    fields: [
      {
        envelopeId: "<id>",
        envelopeItemId: "<id>",
        type: "RADIO",
        id: 4449.22,
        secondaryId: "<id>",
        recipientId: 5851.29,
        page: 2573.19,
        positionX: "<value>",
        positionY: "<value>",
        width: "<value>",
        height: "<value>",
        customText: "<value>",
        inserted: true,
        fieldMeta: {
          fontSize: 12,
          type: "radio",
          direction: "vertical",
        },
      },
    ],
  },
  uploadUrl: "https://small-soybean.net/",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `document`                                                 | [operations.Document](../../models/operations/document.md) | :heavy_check_mark:                                         | N/A                                                        |
| `uploadUrl`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |