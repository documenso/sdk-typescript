# TemplateFindTemplatesData

## Example Usage

```typescript
import { TemplateFindTemplatesData } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesData = {
  type: "PRIVATE",
  visibility: "EVERYONE",
  id: 1964.51,
  externalId: "<id>",
  title: "<value>",
  userId: 6715.28,
  teamId: 8429.74,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "ACCOUNT",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1730301435733",
  updatedAt: "1741517852918",
  publicTitle: "<value>",
  publicDescription: "<value>",
  team: {
    id: 8980.88,
    url: "https://liquid-lawmaker.com/",
  },
  fields: [
    {
      type: "NUMBER",
      id: 8304.77,
      secondaryId: "<id>",
      documentId: 579.09,
      templateId: 2913.89,
      recipientId: 380.44,
      page: 9565.45,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "radio",
      },
    },
  ],
  recipients: [
    {
      role: "ASSISTANT",
      readStatus: "OPENED",
      signingStatus: "REJECTED",
      sendStatus: "NOT_SENT",
      id: 3538.19,
      documentId: 3782.68,
      templateId: 6578.62,
      email: "Stephan.Bartell-Dickinson4@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "PASSKEY",
      },
      signingOrder: 8369.91,
      rejectionReason: "<value>",
    },
  ],
  templateMeta: {
    signingOrder: "PARALLEL",
    distributionMethod: "EMAIL",
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
| `fields`                                                                                                     | [operations.TemplateFindTemplatesFields](../../models/operations/templatefindtemplatesfields.md)[]           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `recipients`                                                                                                 | [operations.TemplateFindTemplatesRecipients](../../models/operations/templatefindtemplatesrecipients.md)[]   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `templateMeta`                                                                                               | [operations.TemplateFindTemplatesTemplateMeta](../../models/operations/templatefindtemplatestemplatemeta.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `directLink`                                                                                                 | [operations.TemplateFindTemplatesDirectLink](../../models/operations/templatefindtemplatesdirectlink.md)     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |