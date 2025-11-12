# FolderCreateFolderResponse

Successful response

## Example Usage

```typescript
import { FolderCreateFolderResponse } from "@documenso/sdk-typescript/models/operations";

let value: FolderCreateFolderResponse = {
  id: "<id>",
  name: "<value>",
  userId: 8266.42,
  teamId: 7001.69,
  parentId: "<id>",
  pinned: false,
  createdAt: "1727587956790",
  updatedAt: "1735654905648",
  visibility: "ADMIN",
  type: "DOCUMENT",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `userId`                                                                                               | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `teamId`                                                                                               | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `parentId`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pinned`                                                                                               | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `createdAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `updatedAt`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `visibility`                                                                                           | [operations.FolderCreateFolderVisibility](../../models/operations/foldercreatefoldervisibility.md)     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.FolderCreateFolderTypeResponse](../../models/operations/foldercreatefoldertyperesponse.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |