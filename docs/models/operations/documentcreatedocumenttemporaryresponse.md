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
      envelopeExpirationPeriod: {
        unit: "day",
        amount: 658704,
      },
    },
    envelopeItems: [],
    folder: {
      id: "<id>",
      name: "<value>",
      type: "DOCUMENT",
      visibility: "ADMIN",
      userId: 9145.72,
      teamId: 8500.19,
      pinned: true,
      parentId: "<id>",
      createdAt: "1721766691836",
      updatedAt: "1735617214764",
    },
    recipients: [
      {
        envelopeId: "<id>",
        role: "SIGNER",
        readStatus: "NOT_OPENED",
        signingStatus: "REJECTED",
        sendStatus: "NOT_SENT",
        id: 6986.77,
        email: "Adrain_Feil34@hotmail.com",
        name: "<value>",
        token: "<value>",
        documentDeletedAt: "<value>",
        expired: "<value>",
        expiresAt: "1752980741485",
        expirationNotifiedAt: "<value>",
        signedAt: "<value>",
        authOptions: {
          accessAuth: [],
          actionAuth: [],
        },
        signingOrder: null,
        rejectionReason: "<value>",
      },
    ],
    fields: [
      {
        envelopeId: "<id>",
        envelopeItemId: "<id>",
        type: "FREE_SIGNATURE",
        id: 9636.63,
        secondaryId: "<id>",
        recipientId: 9386.83,
        page: 7565.1,
        positionX: "<value>",
        positionY: "<value>",
        width: "<value>",
        height: "<value>",
        customText: "<value>",
        inserted: false,
        fieldMeta: {
          fontSize: 12,
          type: "checkbox",
          direction: "vertical",
        },
      },
    ],
  },
  uploadUrl: "https://jumbo-monster.biz",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `document`                                                 | [operations.Document](../../models/operations/document.md) | :heavy_check_mark:                                         | N/A                                                        |
| `uploadUrl`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |