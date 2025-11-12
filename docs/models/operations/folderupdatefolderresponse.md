# FolderUpdateFolderResponse

Successful response

## Example Usage

```typescript
import { FolderUpdateFolderResponse } from "@documenso/sdk-typescript/models/operations";

let value: FolderUpdateFolderResponse = {
  id: "<id>",
  name: "<value>",
  userId: 2762.31,
  teamId: 2020.68,
  parentId: null,
  pinned: true,
  createdAt: "1711665295606",
  updatedAt: "1735688990867",
  visibility: "MANAGER_AND_ABOVE",
  type: "DOCUMENT",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `userId`                                                                                                           | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `teamId`                                                                                                           | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `parentId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `pinned`                                                                                                           | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `visibility`                                                                                                       | [operations.FolderUpdateFolderVisibilityResponse](../../models/operations/folderupdatefoldervisibilityresponse.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [operations.FolderUpdateFolderType](../../models/operations/folderupdatefoldertype.md)                             | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |