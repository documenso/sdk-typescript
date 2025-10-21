# DocumentGetResponse

Successful response

## Example Usage

```typescript
import { DocumentGetResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetResponse = {
  visibility: "EVERYONE",
  status: "REJECTED",
  source: "TEMPLATE_DIRECT_LINK",
  id: 7831.48,
  externalId: "<id>",
  userId: 9352.91,
  authOptions: {
    globalAccessAuth: [],
    globalActionAuth: [
      "TWO_FACTOR_AUTH",
    ],
  },
  formValues: {},
  title: "<value>",
  createdAt: "1713009204049",
  updatedAt: "1735633248980",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 9528.55,
  folderId: null,
  envelopeId: "<id>",
  documentData: {
    type: "BYTES_64",
    id: "<id>",
    data: "<value>",
    initialData: "<value>",
    envelopeItemId: "<id>",
  },
  documentMeta: {
    signingOrder: "PARALLEL",
    distributionMethod: "NONE",
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "America/Detroit",
    dateFormat: "<value>",
    redirectUrl: "https://breakable-hose.net/",
    typedSignatureEnabled: true,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: true,
    allowDictateNextSigner: true,
    language: "<value>",
    emailSettings: null,
    emailId: "<id>",
    emailReplyTo: "<value>",
  },
  folder: {
    id: "<id>",
    name: "<value>",
    type: "DOCUMENT",
    visibility: "MANAGER_AND_ABOVE",
    userId: 2056.58,
    teamId: 4008.9,
    pinned: true,
    parentId: null,
    createdAt: "1709913177849",
    updatedAt: "1735650994084",
  },
  recipients: [
    {
      envelopeId: "<id>",
      role: "APPROVER",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 4660.31,
      email: "Elsa.Rosenbaum49@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [],
        actionAuth: [
          "PASSWORD",
        ],
      },
      signingOrder: 9488.58,
      rejectionReason: "<value>",
    },
  ],
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "NAME",
      id: 2613.19,
      secondaryId: "<id>",
      recipientId: 2768.96,
      page: 8964.25,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "name",
      },
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `visibility`                                                                             | [operations.DocumentGetVisibility](../../models/operations/documentgetvisibility.md)     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.DocumentGetStatus](../../models/operations/documentgetstatus.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `source`                                                                                 | [operations.DocumentGetSource](../../models/operations/documentgetsource.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `id`                                                                                     | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `externalId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | A custom external ID you can use to identify the document.                               |
| `userId`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | The ID of the user that created this document.                                           |
| `authOptions`                                                                            | [operations.DocumentGetAuthOptions](../../models/operations/documentgetauthoptions.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `formValues`                                                                             | Record<string, *operations.DocumentGetFormValues*>                                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `title`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `completedAt`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deletedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `teamId`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `folderId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `envelopeId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `templateId`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the template that the document was created from, if any.                       |
| `documentDataId`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `documentData`                                                                           | [operations.DocumentGetDocumentData](../../models/operations/documentgetdocumentdata.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `documentMeta`                                                                           | [operations.DocumentGetDocumentMeta](../../models/operations/documentgetdocumentmeta.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `folder`                                                                                 | [operations.DocumentGetFolder](../../models/operations/documentgetfolder.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `recipients`                                                                             | [operations.DocumentGetRecipient](../../models/operations/documentgetrecipient.md)[]     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `fields`                                                                                 | [operations.DocumentGetField](../../models/operations/documentgetfield.md)[]             | :heavy_check_mark:                                                                       | N/A                                                                                      |