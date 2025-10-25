# FolderFindFoldersRequest

## Example Usage

```typescript
import { FolderFindFoldersRequest } from "@documenso/sdk-typescript/models/operations";

let value: FolderFindFoldersRequest = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `query`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The search query.                                                                                        |
| `page`                                                                                                   | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The pagination page number, starts at 1.                                                                 |
| `perPage`                                                                                                | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | The number of items per page.                                                                            |
| `parentId`                                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [operations.FolderFindFoldersQueryParamType](../../models/operations/folderfindfoldersqueryparamtype.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |