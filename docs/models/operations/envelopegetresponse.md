# EnvelopeGetResponse

Successful response

## Example Usage

```typescript
import { EnvelopeGetResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeGetResponse = {
  internalVersion: 4042.29,
  type: "TEMPLATE",
  status: "PENDING",
  source: "DOCUMENT",
  visibility: "EVERYONE",
  templateType: "PUBLIC",
  id: "<id>",
  secondaryId: "<id>",
  externalId: "<id>",
  createdAt: "1719391654079",
  updatedAt: "1735620141093",
  completedAt: "<value>",
  deletedAt: null,
  title: "<value>",
  authOptions: {
    globalAccessAuth: [
      "TWO_FACTOR_AUTH",
    ],
    globalActionAuth: [
      "TWO_FACTOR_AUTH",
    ],
  },
  formValues: {},
  publicTitle: "<value>",
  publicDescription: "<value>",
  userId: 5185.73,
  teamId: 2295.93,
  folderId: null,
  templateId: 278.8,
  documentMeta: {
    signingOrder: "PARALLEL",
    distributionMethod: "EMAIL",
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "America/Phoenix",
    dateFormat: "<value>",
    redirectUrl: "https://haunting-fork.biz/",
    typedSignatureEnabled: false,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: false,
    allowDictateNextSigner: true,
    language: "<value>",
    emailSettings: {},
    emailId: null,
    emailReplyTo: "<value>",
  },
  recipients: [],
  fields: [],
  envelopeItems: [],
  directLink: null,
  team: {
    id: 3530.25,
    url: "https://junior-lounge.biz/",
  },
  user: {
    id: 8051.74,
    name: "<value>",
    email: "Gerry90@gmail.com",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `internalVersion`                                                                          | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [operations.EnvelopeGetType](../../models/operations/envelopegettype.md)                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [operations.EnvelopeGetStatus](../../models/operations/envelopegetstatus.md)               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `source`                                                                                   | [operations.EnvelopeGetSource](../../models/operations/envelopegetsource.md)               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `visibility`                                                                               | [operations.EnvelopeGetVisibility](../../models/operations/envelopegetvisibility.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `templateType`                                                                             | [operations.EnvelopeGetTemplateType](../../models/operations/envelopegettemplatetype.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `secondaryId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `externalId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updatedAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `completedAt`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deletedAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `title`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `authOptions`                                                                              | [operations.EnvelopeGetAuthOptions](../../models/operations/envelopegetauthoptions.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `formValues`                                                                               | Record<string, *operations.EnvelopeGetFormValues*>                                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `publicTitle`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `publicDescription`                                                                        | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `userId`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `teamId`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `folderId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `templateId`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `documentMeta`                                                                             | [operations.EnvelopeGetDocumentMeta](../../models/operations/envelopegetdocumentmeta.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `recipients`                                                                               | [operations.EnvelopeGetRecipient](../../models/operations/envelopegetrecipient.md)[]       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `fields`                                                                                   | [operations.EnvelopeGetField](../../models/operations/envelopegetfield.md)[]               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `envelopeItems`                                                                            | [operations.EnvelopeGetEnvelopeItem](../../models/operations/envelopegetenvelopeitem.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `directLink`                                                                               | [operations.EnvelopeGetDirectLink](../../models/operations/envelopegetdirectlink.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `team`                                                                                     | [operations.EnvelopeGetTeam](../../models/operations/envelopegetteam.md)                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `user`                                                                                     | [operations.EnvelopeGetUser](../../models/operations/envelopegetuser.md)                   | :heavy_check_mark:                                                                         | N/A                                                                                        |