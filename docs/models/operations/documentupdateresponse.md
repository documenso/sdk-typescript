# DocumentUpdateResponse

Successful response

## Example Usage

```typescript
import { DocumentUpdateResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentUpdateResponse = {
  visibility: "MANAGER_AND_ABOVE",
  status: "DRAFT",
  source: "TEMPLATE_DIRECT_LINK",
  id: 575.9,
  externalId: "<id>",
  userId: 4183.07,
  authOptions: {
    globalAccessAuth: [],
    globalActionAuth: [
      "PASSKEY",
    ],
  },
  formValues: {
    "key": true,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1727576894467",
  updatedAt: "1735615198185",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 5403.09,
  templateId: null,
  folderId: "<id>",
  useLegacyFieldInsertion: false,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                               | [operations.DocumentUpdateVisibilityResponse](../../models/operations/documentupdatevisibilityresponse.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `status`                                                                                                   | [operations.DocumentUpdateStatus](../../models/operations/documentupdatestatus.md)                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `source`                                                                                                   | [operations.DocumentUpdateSource](../../models/operations/documentupdatesource.md)                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `externalId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | A custom external ID you can use to identify the document.                                                 |
| `userId`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the user that created this document.                                                             |
| `authOptions`                                                                                              | [operations.DocumentUpdateAuthOptions](../../models/operations/documentupdateauthoptions.md)               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `formValues`                                                                                               | Record<string, *operations.DocumentUpdateFormValues*>                                                      | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
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