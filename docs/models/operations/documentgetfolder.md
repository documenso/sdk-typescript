# DocumentGetFolder

## Example Usage

```typescript
import { DocumentGetFolder } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetFolder = {
  id: "<id>",
  name: "<value>",
  type: "DOCUMENT",
  visibility: "ADMIN",
  userId: 8372.66,
  teamId: 2090.99,
  pinned: false,
  parentId: "<id>",
  createdAt: "1709433726910",
  updatedAt: "1735685549815",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [operations.DocumentGetFolderType](../../models/operations/documentgetfoldertype.md)             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `visibility`                                                                                     | [operations.DocumentGetFolderVisibility](../../models/operations/documentgetfoldervisibility.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `userId`                                                                                         | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `teamId`                                                                                         | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `pinned`                                                                                         | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `parentId`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updatedAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |