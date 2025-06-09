# DocumentCreateDocumentTemporaryFolder

## Example Usage

```typescript
import { DocumentCreateDocumentTemporaryFolder } from "@documenso/sdk-typescript/models/operations";

let value: DocumentCreateDocumentTemporaryFolder = {
  id: "<id>",
  name: "<value>",
  type: "DOCUMENT",
  visibility: "ADMIN",
  userId: 3738.73,
  teamId: 6520.37,
  pinned: false,
  parentId: "<id>",
  createdAt: "1733877825439",
  updatedAt: "1735661610580",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [operations.DocumentFolderType](../../models/operations/documentfoldertype.md)             | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `visibility`                                                                               | [operations.DocumentFolderVisibility](../../models/operations/documentfoldervisibility.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `userId`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `teamId`                                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pinned`                                                                                   | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `parentId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createdAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updatedAt`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |