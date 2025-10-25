# FolderUpdateFolderData

## Example Usage

```typescript
import { FolderUpdateFolderData } from "@documenso/sdk-typescript/models/operations";

let value: FolderUpdateFolderData = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The name of the folder                                                                                           |
| `parentId`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The folder ID to place this folder within. Leave empty to place folder at the root level.                        |
| `visibility`                                                                                                     | [operations.FolderUpdateFolderVisibilityRequest](../../models/operations/folderupdatefoldervisibilityrequest.md) | :heavy_minus_sign:                                                                                               | The visibility of the folder                                                                                     |
| `pinned`                                                                                                         | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | Whether the folder should be pinned                                                                              |