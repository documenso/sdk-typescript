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
  formValues: {},
  title: "<value>",
  createdAt: "1728001866847",
  updatedAt: "1735618616447",
  completedAt: "<value>",
  deletedAt: null,
  teamId: 4867.45,
  folderId: "<id>",
  useLegacyFieldInsertion: true,
  envelopeId: "<id>",
  internalVersion: 4968.94,
  user: {
    id: 6143.21,
    name: "<value>",
    email: "Lizeth_Harvey@yahoo.com",
  },
  recipients: [],
  team: {
    id: 2316.39,
    url: "https://friendly-designation.org/",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `visibility`                                                                             | [operations.DocumentFindVisibility](../../models/operations/documentfindvisibility.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.DocumentFindDataStatus](../../models/operations/documentfinddatastatus.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `source`                                                                                 | [operations.DocumentFindDataSource](../../models/operations/documentfinddatasource.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `id`                                                                                     | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `externalId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `userId`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `authOptions`                                                                            | [operations.DocumentFindAuthOptions](../../models/operations/documentfindauthoptions.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `formValues`                                                                             | Record<string, *operations.DocumentFindFormValues*>                                      | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `title`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `completedAt`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deletedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `teamId`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `folderId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `useLegacyFieldInsertion`                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `envelopeId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `internalVersion`                                                                        | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `documentDataId`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `templateId`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `user`                                                                                   | [operations.DocumentFindUser](../../models/operations/documentfinduser.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `recipients`                                                                             | [operations.DocumentFindRecipient](../../models/operations/documentfindrecipient.md)[]   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [operations.DocumentFindTeam](../../models/operations/documentfindteam.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |