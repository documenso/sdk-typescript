# DocumentFindData

## Example Usage

```typescript
import { DocumentFindData } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindData = {
  visibility: "ADMIN",
  status: "PENDING",
  source: "TEMPLATE_DIRECT_LINK",
  id: 1577.6,
  externalId: "<id>",
  userId: 200.66,
  authOptions: {
    globalAccessAuth: [
      "ACCOUNT",
    ],
    globalActionAuth: [],
  },
  formValues: null,
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1707865978611",
  updatedAt: "1735616330381",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 1387.13,
  templateId: null,
  folderId: "<id>",
  useLegacyFieldInsertion: true,
  user: {
    id: 4875.96,
    name: "<value>",
    email: "Jessica33@yahoo.com",
  },
  recipients: [],
  team: {
    id: 721.66,
    url: "https://enraged-advancement.biz",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `visibility`                                                                             | [operations.DocumentFindVisibility](../../models/operations/documentfindvisibility.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.DataStatus](../../models/operations/datastatus.md)                           | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `source`                                                                                 | [operations.DataSource](../../models/operations/datasource.md)                           | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `id`                                                                                     | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `externalId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | A custom external ID you can use to identify the document.                               |
| `userId`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | The ID of the user that created this document.                                           |
| `authOptions`                                                                            | [operations.DocumentFindAuthOptions](../../models/operations/documentfindauthoptions.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `formValues`                                                                             | Record<string, *operations.DocumentFindFormValues*>                                      | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `title`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `documentDataId`                                                                         | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `completedAt`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deletedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `teamId`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `templateId`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `folderId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `useLegacyFieldInsertion`                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `user`                                                                                   | [operations.DocumentFindUser](../../models/operations/documentfinduser.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `recipients`                                                                             | [operations.DocumentFindRecipient](../../models/operations/documentfindrecipient.md)[]   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [operations.DocumentFindTeam](../../models/operations/documentfindteam.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |