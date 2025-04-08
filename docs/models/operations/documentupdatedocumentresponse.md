# DocumentUpdateDocumentResponse

Successful response

## Example Usage

```typescript
import { DocumentUpdateDocumentResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentUpdateDocumentResponse = {
  visibility: "MANAGER_AND_ABOVE",
  status: "DRAFT",
  source: "TEMPLATE_DIRECT_LINK",
  id: 6952.37,
  externalId: "<id>",
  userId: 4918.15,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "TWO_FACTOR_AUTH",
  },
  formValues: {
    "key": 7173.77,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1719529127846",
  updatedAt: "1744046959438",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 8913.64,
  templateId: 9922.73,
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                                               | [operations.DocumentUpdateDocumentVisibilityResponse](../../models/operations/documentupdatedocumentvisibilityresponse.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `status`                                                                                                                   | [operations.DocumentUpdateDocumentStatus](../../models/operations/documentupdatedocumentstatus.md)                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `source`                                                                                                                   | [operations.DocumentUpdateDocumentSource](../../models/operations/documentupdatedocumentsource.md)                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `id`                                                                                                                       | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `externalId`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | A custom external ID you can use to identify the document.                                                                 |
| `userId`                                                                                                                   | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the user that created this document.                                                                             |
| `authOptions`                                                                                                              | [operations.DocumentUpdateDocumentAuthOptions](../../models/operations/documentupdatedocumentauthoptions.md)               | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `formValues`                                                                                                               | Record<string, *operations.DocumentUpdateDocumentFormValues*>                                                              | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `title`                                                                                                                    | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `documentDataId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `createdAt`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `updatedAt`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `completedAt`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `deletedAt`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `teamId`                                                                                                                   | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `templateId`                                                                                                               | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |