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
  internalVersion: 7752.37,
  documentData: {
    type: "S3_PATH",
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
    timezone: "Pacific/Wake",
    dateFormat: "<value>",
    redirectUrl: "https://intrepid-publication.com/",
    typedSignatureEnabled: true,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: true,
    allowDictateNextSigner: true,
    language: "<value>",
    emailSettings: {},
    emailId: "<id>",
    emailReplyTo: "<value>",
    envelopeExpirationPeriod: {
      unit: "day",
      amount: 936406,
    },
    reminderSettings: {
      sendAfter: {
        disabled: true,
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
    type: "DOCUMENT",
    visibility: "EVERYONE",
    userId: 5531.79,
    teamId: 5650.43,
    pinned: false,
    parentId: "<id>",
    createdAt: "1717150090033",
    updatedAt: "1735675428139",
  },
  recipients: [],
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "NAME",
      id: 4621.08,
      secondaryId: "<id>",
      recipientId: 7577.68,
      page: 508.91,
      positionX: "<value>",
      positionY: "<value>",
      width: "<value>",
      height: "<value>",
      customText: "<value>",
      inserted: true,
      fieldMeta: {
        fontSize: 12,
        type: "number",
      },
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `visibility`                                                                               | [operations.DocumentGetVisibility](../../models/operations/documentgetvisibility.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [operations.DocumentGetStatus](../../models/operations/documentgetstatus.md)               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `source`                                                                                   | [operations.DocumentGetSource](../../models/operations/documentgetsource.md)               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `externalId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `userId`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `authOptions`                                                                              | [operations.DocumentGetAuthOptions](../../models/operations/documentgetauthoptions.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `formValues`                                                                               | Record<string, *operations.DocumentGetFormValues*>                                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `title`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updatedAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `completedAt`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deletedAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `teamId`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `folderId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `envelopeId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `internalVersion`                                                                          | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `templateId`                                                                               | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `documentDataId`                                                                           | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `documentData`                                                                             | [operations.DocumentGetDocumentData](../../models/operations/documentgetdocumentdata.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `documentMeta`                                                                             | [operations.DocumentGetDocumentMeta](../../models/operations/documentgetdocumentmeta.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `envelopeItems`                                                                            | [operations.DocumentGetEnvelopeItem](../../models/operations/documentgetenvelopeitem.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `folder`                                                                                   | [operations.DocumentGetFolder](../../models/operations/documentgetfolder.md)               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `recipients`                                                                               | [operations.DocumentGetRecipient](../../models/operations/documentgetrecipient.md)[]       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `fields`                                                                                   | [operations.DocumentGetField](../../models/operations/documentgetfield.md)[]               | :heavy_check_mark:                                                                         | N/A                                                                                        |