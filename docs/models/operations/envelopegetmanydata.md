# EnvelopeGetManyData

## Example Usage

```typescript
import { EnvelopeGetManyData } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeGetManyData = {
  internalVersion: 9714.62,
  type: "DOCUMENT",
  status: "PENDING",
  source: "TEMPLATE_DIRECT_LINK",
  visibility: "MANAGER_AND_ABOVE",
  templateType: "PRIVATE",
  id: "<id>",
  secondaryId: "<id>",
  externalId: "<id>",
  createdAt: "1707388539526",
  updatedAt: "1735612442642",
  completedAt: "<value>",
  deletedAt: "<value>",
  title: "<value>",
  authOptions: {
    globalAccessAuth: [
      "TWO_FACTOR_AUTH",
    ],
    globalActionAuth: [
      "PASSWORD",
    ],
  },
  formValues: {
    "key": "<value>",
  },
  publicTitle: "<value>",
  publicDescription: "<value>",
  userId: 3499.45,
  teamId: 5517.35,
  folderId: null,
  templateId: 3552.33,
  documentMeta: {
    signingOrder: "SEQUENTIAL",
    distributionMethod: "NONE",
    id: "<id>",
    subject: "<value>",
    message: "<value>",
    timezone: "America/St_Vincent",
    dateFormat: "<value>",
    redirectUrl: "https://stale-legend.info",
    typedSignatureEnabled: false,
    uploadSignatureEnabled: true,
    drawSignatureEnabled: true,
    allowDictateNextSigner: true,
    language: "<value>",
    emailSettings: null,
    emailId: "<id>",
    emailReplyTo: null,
  },
  recipients: [
    {
      envelopeId: "<id>",
      role: "VIEWER",
      readStatus: "OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 1021.01,
      email: "Misael_Lesch@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [
          "ACCOUNT",
        ],
        actionAuth: [],
      },
      signingOrder: 3437.09,
      rejectionReason: "<value>",
    },
  ],
  fields: [],
  envelopeItems: [
    {
      envelopeId: "<id>",
      id: "<id>",
      title: "<value>",
      order: 1326.04,
    },
  ],
  directLink: {
    directTemplateRecipientId: 6361.57,
    enabled: false,
    id: "<id>",
    token: "<value>",
  },
  team: {
    id: 799.31,
    url: "https://excitable-suitcase.info/",
  },
  user: {
    id: 5073.96,
    name: "<value>",
    email: "Lucious.VonRueden@hotmail.com",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `internalVersion`                                                                                  | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [operations.EnvelopeGetManyTypeEnum](../../models/operations/envelopegetmanytypeenum.md)           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [operations.EnvelopeGetManyStatus](../../models/operations/envelopegetmanystatus.md)               | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `source`                                                                                           | [operations.EnvelopeGetManySource](../../models/operations/envelopegetmanysource.md)               | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `visibility`                                                                                       | [operations.EnvelopeGetManyVisibility](../../models/operations/envelopegetmanyvisibility.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `templateType`                                                                                     | [operations.EnvelopeGetManyTemplateType](../../models/operations/envelopegetmanytemplatetype.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `secondaryId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `externalId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `completedAt`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `deletedAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `title`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `authOptions`                                                                                      | [operations.EnvelopeGetManyAuthOptions](../../models/operations/envelopegetmanyauthoptions.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `formValues`                                                                                       | Record<string, *operations.EnvelopeGetManyFormValues*>                                             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `publicTitle`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `publicDescription`                                                                                | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `userId`                                                                                           | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `teamId`                                                                                           | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `folderId`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `templateId`                                                                                       | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `documentMeta`                                                                                     | [operations.EnvelopeGetManyDocumentMeta](../../models/operations/envelopegetmanydocumentmeta.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `recipients`                                                                                       | [operations.EnvelopeGetManyRecipient](../../models/operations/envelopegetmanyrecipient.md)[]       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `fields`                                                                                           | [operations.EnvelopeGetManyField](../../models/operations/envelopegetmanyfield.md)[]               | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `envelopeItems`                                                                                    | [operations.EnvelopeGetManyEnvelopeItem](../../models/operations/envelopegetmanyenvelopeitem.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `directLink`                                                                                       | [operations.EnvelopeGetManyDirectLink](../../models/operations/envelopegetmanydirectlink.md)       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `team`                                                                                             | [operations.EnvelopeGetManyTeam](../../models/operations/envelopegetmanyteam.md)                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `user`                                                                                             | [operations.EnvelopeGetManyUser](../../models/operations/envelopegetmanyuser.md)                   | :heavy_check_mark:                                                                                 | N/A                                                                                                |