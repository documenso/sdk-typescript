# TemplateGetManyData

## Example Usage

```typescript
import { TemplateGetManyData } from "@documenso/sdk-typescript/models/operations";

let value: TemplateGetManyData = {
  type: "PRIVATE",
  visibility: "MANAGER_AND_ABOVE",
  id: 8013.26,
  externalId: "<id>",
  title: "<value>",
  userId: 8573.79,
  teamId: 2752.26,
  authOptions: null,
  createdAt: "1730139147348",
  updatedAt: "1735616977882",
  publicTitle: "<value>",
  publicDescription: "<value>",
  folderId: "<id>",
  useLegacyFieldInsertion: false,
  envelopeId: "<id>",
  team: null,
  fields: [
    {
      envelopeId: "<id>",
      envelopeItemId: "<id>",
      type: "INITIALS",
      id: 2221.65,
      secondaryId: "<id>",
      recipientId: 7465.42,
      page: 4848.18,
      positionX: "<value>",
      positionY: "<value>",
      width: "<value>",
      height: "<value>",
      customText: "<value>",
      inserted: true,
      fieldMeta: null,
    },
  ],
  recipients: [
    {
      envelopeId: "<id>",
      role: "VIEWER",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 2834.44,
      email: "Sadye_Stanton63@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      expiresAt: "1743380590559",
      expirationNotifiedAt: "<value>",
      signedAt: null,
      authOptions: {
        accessAuth: [
          "TWO_FACTOR_AUTH",
        ],
        actionAuth: [],
      },
      signingOrder: 7250.14,
      rejectionReason: "<value>",
    },
  ],
  templateMeta: {
    signingOrder: "SEQUENTIAL",
    distributionMethod: "EMAIL",
  },
  directLink: {
    token: "<value>",
    enabled: false,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | [operations.TemplateGetManyTypeEnum](../../models/operations/templategetmanytypeenum.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `visibility`                                                                                     | [operations.TemplateGetManyVisibility](../../models/operations/templategetmanyvisibility.md)     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `id`                                                                                             | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `externalId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `title`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `userId`                                                                                         | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `teamId`                                                                                         | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `authOptions`                                                                                    | [operations.TemplateGetManyAuthOptions](../../models/operations/templategetmanyauthoptions.md)   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updatedAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `publicTitle`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `publicDescription`                                                                              | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `folderId`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `useLegacyFieldInsertion`                                                                        | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `envelopeId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `team`                                                                                           | [operations.TemplateGetManyTeam](../../models/operations/templategetmanyteam.md)                 | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `fields`                                                                                         | [operations.TemplateGetManyField](../../models/operations/templategetmanyfield.md)[]             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `recipients`                                                                                     | [operations.TemplateGetManyRecipient](../../models/operations/templategetmanyrecipient.md)[]     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `templateMeta`                                                                                   | [operations.TemplateGetManyTemplateMeta](../../models/operations/templategetmanytemplatemeta.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `directLink`                                                                                     | [operations.TemplateGetManyDirectLink](../../models/operations/templategetmanydirectlink.md)     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `templateDocumentDataId`                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |