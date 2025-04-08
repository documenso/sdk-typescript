# TemplateFindTemplatesData

## Example Usage

```typescript
import { TemplateFindTemplatesData } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesData = {
  type: "PUBLIC",
  visibility: "EVERYONE",
  id: 5475.93,
  externalId: "<id>",
  title: "<value>",
  userId: 5177.26,
  teamId: 3295.89,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "PASSKEY",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1714073444849",
  updatedAt: "1744010024842",
  publicTitle: "<value>",
  publicDescription: "<value>",
  team: {
    id: 8235.06,
    url: "https://powerful-shadowbox.biz",
  },
  fields: [
    {
      type: "DATE",
      id: 4216.08,
      secondaryId: "<id>",
      documentId: 6636.72,
      templateId: 5544.41,
      recipientId: 4567.91,
      page: 1276.31,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "radio",
      },
    },
  ],
  recipients: [
    {
      role: "SIGNER",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 3096.12,
      documentId: 237.95,
      templateId: 5324.57,
      email: "Deanna_White@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "TWO_FACTOR_AUTH",
      },
      signingOrder: 1789.53,
      rejectionReason: "<value>",
    },
  ],
  templateMeta: {
    signingOrder: "SEQUENTIAL",
    distributionMethod: "NONE",
  },
  directLink: {
    token: "<value>",
    enabled: false,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [operations.TemplateFindTemplatesDataType](../../models/operations/templatefindtemplatesdatatype.md)         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `visibility`                                                                                                 | [operations.TemplateFindTemplatesVisibility](../../models/operations/templatefindtemplatesvisibility.md)     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `externalId`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `title`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `userId`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `teamId`                                                                                                     | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `authOptions`                                                                                                | [operations.TemplateFindTemplatesAuthOptions](../../models/operations/templatefindtemplatesauthoptions.md)   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `templateDocumentDataId`                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `publicTitle`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `publicDescription`                                                                                          | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `team`                                                                                                       | [operations.TemplateFindTemplatesTeam](../../models/operations/templatefindtemplatesteam.md)                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `fields`                                                                                                     | [operations.TemplateFindTemplatesField](../../models/operations/templatefindtemplatesfield.md)[]             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `recipients`                                                                                                 | [operations.TemplateFindTemplatesRecipient](../../models/operations/templatefindtemplatesrecipient.md)[]     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `templateMeta`                                                                                               | [operations.TemplateFindTemplatesTemplateMeta](../../models/operations/templatefindtemplatestemplatemeta.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `directLink`                                                                                                 | [operations.TemplateFindTemplatesDirectLink](../../models/operations/templatefindtemplatesdirectlink.md)     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |