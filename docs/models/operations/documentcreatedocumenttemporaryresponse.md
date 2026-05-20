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
      reminderSettings: {
        sendAfter: {
          unit: "day",
          amount: 852106,
        },
        repeatEvery: {
          disabled: true,
        },
      },
    },
    envelopeItems: [],
    folder: {
      id: "<id>",
      name: "<value>",
      type: "TEMPLATE",
      visibility: "ADMIN",
      userId: 8500.19,
      teamId: 2164.05,
      pinned: false,
      parentId: "<id>",
      createdAt: "1709269048177",
      updatedAt: "1735686057640",
    },
    recipients: [
      {
        envelopeId: "<id>",
        role: "APPROVER",
        readStatus: "OPENED",
        signingStatus: "SIGNED",
        sendStatus: "SENT",
        id: 2573.19,
        email: "Kimberly83@gmail.com",
        name: "<value>",
        token: "<value>",
        documentDeletedAt: "<value>",
        expired: "<value>",
        expiresAt: "1746622072278",
        expirationNotifiedAt: "<value>",
        signedAt: "<value>",
        authOptions: {
          accessAuth: [],
          actionAuth: [],
        },
        signingOrder: 344.22,
        rejectionReason: "<value>",
      },
    ],
    fields: [
      {
        envelopeId: "<id>",
        envelopeItemId: "<id>",
        type: "FREE_SIGNATURE",
        id: 2106.89,
        secondaryId: "<id>",
        recipientId: 9924.58,
        page: 1848.73,
        positionX: "<value>",
        positionY: "<value>",
        width: "<value>",
        height: "<value>",
        customText: "<value>",
        inserted: false,
        fieldMeta: {
          fontSize: 12,
          type: "initials",
        },
      },
    ],
  },
  uploadUrl: "https://turbulent-plastic.info",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `document`                                                 | [operations.Document](../../models/operations/document.md) | :heavy_check_mark:                                         | N/A                                                        |
| `uploadUrl`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |