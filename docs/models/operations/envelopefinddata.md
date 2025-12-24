# EnvelopeFindData

## Example Usage

```typescript
import { EnvelopeFindData } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeFindData = {
  internalVersion: 6602.77,
  type: "DOCUMENT",
  status: "COMPLETED",
  source: "TEMPLATE",
  visibility: "EVERYONE",
  templateType: "PRIVATE",
  id: "<id>",
  secondaryId: "<id>",
  externalId: "<id>",
  createdAt: "1727211033798",
  updatedAt: "1735669121764",
  completedAt: "<value>",
  deletedAt: "<value>",
  title: "<value>",
  authOptions: {
    globalAccessAuth: [
      "TWO_FACTOR_AUTH",
    ],
    globalActionAuth: [
      "PASSKEY",
    ],
  },
  formValues: {},
  publicTitle: "<value>",
  publicDescription: "<value>",
  userId: 9187.83,
  teamId: 7133.97,
  folderId: "<id>",
  templateId: 5420.65,
  user: {
    id: 5528.02,
    name: "<value>",
    email: "Ursula_Okuneva@gmail.com",
  },
  recipients: [],
  team: {
    id: 54.61,
    url: "https://cuddly-bin.com/",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `internalVersion`                                                                          | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [operations.EnvelopeFindDataType](../../models/operations/envelopefinddatatype.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [operations.EnvelopeFindDataStatus](../../models/operations/envelopefinddatastatus.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `source`                                                                                   | [operations.EnvelopeFindDataSource](../../models/operations/envelopefinddatasource.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `visibility`                                                                               | [operations.EnvelopeFindVisibility](../../models/operations/envelopefindvisibility.md)     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `templateType`                                                                             | [operations.EnvelopeFindTemplateType](../../models/operations/envelopefindtemplatetype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `secondaryId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `externalId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updatedAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `completedAt`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `deletedAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `title`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `authOptions`                                                                              | [operations.EnvelopeFindAuthOptions](../../models/operations/envelopefindauthoptions.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `formValues`                                                                               | Record<string, *operations.EnvelopeFindFormValues*>                                        | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `publicTitle`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `publicDescription`                                                                        | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `userId`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `teamId`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `folderId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `templateId`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `user`                                                                                     | [operations.EnvelopeFindUser](../../models/operations/envelopefinduser.md)                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `recipients`                                                                               | [operations.EnvelopeFindRecipient](../../models/operations/envelopefindrecipient.md)[]     | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `team`                                                                                     | [operations.EnvelopeFindTeam](../../models/operations/envelopefindteam.md)                 | :heavy_check_mark:                                                                         | N/A                                                                                        |