# TemplateFindTemplatesData

## Example Usage

```typescript
import { TemplateFindTemplatesData } from "@documenso/sdk-typescript/models/operations";

let value: TemplateFindTemplatesData = {
  type: "PUBLIC",
  visibility: "MANAGER_AND_ABOVE",
  id: 703189,
  externalId: "<id>",
  title: "<value>",
  userId: 949280,
  teamId: 694088,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "TWO_FACTOR_AUTH",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1711079905665",
  updatedAt: "1737234570481",
  publicTitle: "<value>",
  publicDescription: "<value>",
  team: {
    id: 413780,
    url: "https://french-event.info",
  },
  fields: [
    {
      type: "RADIO",
      id: 577590,
      secondaryId: "<id>",
      documentId: 75277,
      templateId: 78246,
      recipientId: 371287,
      page: 7665.91,
      customText: "<value>",
      inserted: false,
      fieldMeta: {
        type: "radio",
      },
    },
  ],
  recipients: [
    {
      role: "VIEWER",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "SENT",
      id: 543353,
      documentId: 739633,
      templateId: 956871,
      email: "Pearline_McClure94@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "ACCOUNT",
      },
      signingOrder: 7562.87,
      rejectionReason: "<value>",
    },
  ],
  templateMeta: {
    signingOrder: "PARALLEL",
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