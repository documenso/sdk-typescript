# TemplateFindTemplatesData

## Example Usage

```typescript
import { TemplateFindTemplatesData } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesData = {
  type: "PUBLIC",
  visibility: "ADMIN",
  id: 30192,
  externalId: "<id>",
  title: "<value>",
  userId: 873320,
  teamId: 444479,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "PASSKEY",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1722862173160",
  updatedAt: "1737336595499",
  publicTitle: "<value>",
  publicDescription: "<value>",
  team: {
    id: 344856,
    url: "https://glass-colonialism.name/",
  },
  fields: [
    {
      type: "NAME",
      id: 958068,
      secondaryId: "<id>",
      documentId: 965735,
      templateId: 620126,
      recipientId: 617497,
      page: 9853.79,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "checkbox",
      },
    },
  ],
  recipients: [
    {
      role: "APPROVER",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "NOT_SENT",
      id: 487148,
      documentId: 990369,
      templateId: 912151,
      email: "Albina.Lind@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "ACCOUNT",
      },
      signingOrder: 2596,
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
| `type`                                                                                                       | [operations.TemplateFindTemplatesType](../../models/operations/templatefindtemplatestype.md)                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
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