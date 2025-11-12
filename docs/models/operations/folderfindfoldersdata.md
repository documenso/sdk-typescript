# FolderFindFoldersData

## Example Usage

```typescript
import { FolderFindFoldersData } from "@documenso/sdk-typescript/models/operations";

let value: FolderFindFoldersData = {
  id: "<id>",
  name: "<value>",
  userId: 7204.3,
  teamId: 5998.29,
  parentId: "<id>",
  pinned: false,
  createdAt: "1716139820975",
  updatedAt: "1735641066835",
  visibility: "ADMIN",
  type: "DOCUMENT",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `userId`                                                                                         | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `teamId`                                                                                         | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `parentId`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `pinned`                                                                                         | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updatedAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `visibility`                                                                                     | [operations.FolderFindFoldersVisibility](../../models/operations/folderfindfoldersvisibility.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [operations.FolderFindFoldersDataType](../../models/operations/folderfindfoldersdatatype.md)     | :heavy_check_mark:                                                                               | N/A                                                                                              |