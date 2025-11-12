# DocumentCreateDocumentFormDataResponse

Successful response

## Example Usage

```typescript
import { DocumentCreateDocumentFormDataResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentFormDataResponse = {
  document: {
    visibility: "MANAGER_AND_ABOVE",
    status: "REJECTED",
    source: "TEMPLATE",
    id: 4151.71,
    externalId: "<id>",
    userId: 9208.45,
    authOptions: {
      globalAccessAuth: [
        "TWO_FACTOR_AUTH",
      ],
      globalActionAuth: [
        "PASSKEY",
      ],
    },
    formValues: {
      "key": true,
    },
    title: "<value>",
    createdAt: "1735256995118",
    updatedAt: "1735689175221",
    completedAt: "<value>",
    deletedAt: "<value>",
    teamId: 2718.02,
    folderId: "<id>",
    envelopeId: "<id>",
    internalVersion: 7830.9,
    documentData: {
      type: "BYTES_64",
      id: "<id>",
      data: "<value>",
      initialData: "<value>",
      envelopeItemId: "<id>",
    },
    documentMeta: {
      signingOrder: "SEQUENTIAL",
      distributionMethod: "NONE",
      id: "<id>",
      subject: "<value>",
      message: "<value>",
      timezone: "America/Bahia",
      dateFormat: "<value>",
      redirectUrl: "https://alienated-invite.info/",
      typedSignatureEnabled: true,
      uploadSignatureEnabled: false,
      drawSignatureEnabled: true,
      allowDictateNextSigner: true,
      language: "<value>",
      emailSettings: {},
      emailId: "<id>",
      emailReplyTo: "<value>",
    },
    envelopeItems: [
      {
        id: "<id>",
        envelopeId: "<id>",
      },
    ],
    folder: {
      id: "<id>",
      name: "<value>",
      type: "DOCUMENT",
      visibility: "ADMIN",
      userId: 1634.23,
      teamId: 7048.29,
      pinned: false,
      parentId: "<id>",
      createdAt: "1718930655474",
      updatedAt: "1735639525492",
    },
    recipients: [],
    fields: [],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `document`                                                                                                             | [operations.DocumentCreateDocumentFormDataDocument](../../models/operations/documentcreatedocumentformdatadocument.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |