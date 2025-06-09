# DocumentFindDocumentsData

## Example Usage

```typescript
import { DocumentFindDocumentsData } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindDocumentsData = {
  visibility: "EVERYONE",
  status: "DRAFT",
  source: "DOCUMENT",
  id: 5328.71,
  externalId: "<id>",
  userId: 6767.02,
  authOptions: {
    globalAccessAuth: [],
    globalActionAuth: [],
  },
  formValues: {
    "key": 7453.35,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1735005842618",
  updatedAt: "1735658574172",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 8341.79,
  templateId: 171.68,
  folderId: "<id>",
  useLegacyFieldInsertion: false,
  user: {
    id: 2710.15,
    name: "<value>",
    email: "Maci33@gmail.com",
  },
  recipients: [],
  team: {
    id: 7776.99,
    url: "https://metallic-caption.net/",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                               | [operations.DocumentFindDocumentsVisibility](../../models/operations/documentfinddocumentsvisibility.md)   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `status`                                                                                                   | [operations.DataStatus](../../models/operations/datastatus.md)                                             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `source`                                                                                                   | [operations.DataSource](../../models/operations/datasource.md)                                             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `externalId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | A custom external ID you can use to identify the document.                                                 |
| `userId`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the user that created this document.                                                             |
| `authOptions`                                                                                              | [operations.DocumentFindDocumentsAuthOptions](../../models/operations/documentfinddocumentsauthoptions.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `formValues`                                                                                               | Record<string, *operations.DocumentFindDocumentsFormValues*>                                               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `title`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `documentDataId`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `completedAt`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `deletedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `teamId`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `templateId`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `folderId`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `useLegacyFieldInsertion`                                                                                  | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `user`                                                                                                     | [operations.DocumentFindDocumentsUser](../../models/operations/documentfinddocumentsuser.md)               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `recipients`                                                                                               | [operations.DocumentFindDocumentsRecipient](../../models/operations/documentfinddocumentsrecipient.md)[]   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `team`                                                                                                     | [operations.DocumentFindDocumentsTeam](../../models/operations/documentfinddocumentsteam.md)               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |