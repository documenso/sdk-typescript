# FolderCreateFolderRequest

## Example Usage

```typescript
import { FolderCreateFolderRequest } from "@documenso/sdk-typescript/models/operations";

let value: FolderCreateFolderRequest = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `parentId`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The folder ID to place this folder within. Leave empty to place folder at the root level.            |
| `type`                                                                                               | [operations.FolderCreateFolderTypeRequest](../../models/operations/foldercreatefoldertyperequest.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |