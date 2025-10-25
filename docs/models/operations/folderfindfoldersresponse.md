# FolderFindFoldersResponse

Successful response

## Example Usage

```typescript
import { FolderFindFoldersResponse } from "@documenso/sdk-typescript/models/operations";

let value: FolderFindFoldersResponse = {
  data: [],
  count: 6996.45,
  currentPage: 3038.57,
  perPage: 1107.9,
  totalPages: 3808.79,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [operations.FolderFindFoldersData](../../models/operations/folderfindfoldersdata.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `count`                                                                                | *number*                                                                               | :heavy_check_mark:                                                                     | The total number of items.                                                             |
| `currentPage`                                                                          | *number*                                                                               | :heavy_check_mark:                                                                     | The current page number, starts at 1.                                                  |
| `perPage`                                                                              | *number*                                                                               | :heavy_check_mark:                                                                     | The number of items per page.                                                          |
| `totalPages`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | The total number of pages.                                                             |