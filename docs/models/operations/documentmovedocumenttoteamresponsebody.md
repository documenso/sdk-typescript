# DocumentMoveDocumentToTeamResponseBody

Successful response

## Example Usage

```typescript
import { DocumentMoveDocumentToTeamResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: DocumentMoveDocumentToTeamResponseBody = {
  visibility: "EVERYONE",
  status: "PENDING",
  source: "TEMPLATE",
  id: 241557,
  externalId: "<id>",
  userId: 1690.25,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "TWO_FACTOR_AUTH",
  },
  formValues: {
    "key": "<value>",
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1724007622072",
  updatedAt: "1740625729658",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 457059,
  templateId: 979963,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                                         | [operations.DocumentMoveDocumentToTeamVisibility](../../models/operations/documentmovedocumenttoteamvisibility.md)   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `status`                                                                                                             | [operations.DocumentMoveDocumentToTeamStatus](../../models/operations/documentmovedocumenttoteamstatus.md)           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `source`                                                                                                             | [operations.DocumentMoveDocumentToTeamSource](../../models/operations/documentmovedocumenttoteamsource.md)           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `id`                                                                                                                 | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `externalId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | A custom external ID you can use to identify the document.                                                           |
| `userId`                                                                                                             | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | The ID of the user that created this document.                                                                       |
| `authOptions`                                                                                                        | [operations.DocumentMoveDocumentToTeamAuthOptions](../../models/operations/documentmovedocumenttoteamauthoptions.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `formValues`                                                                                                         | Record<string, *operations.DocumentMoveDocumentToTeamFormValues*>                                                    | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `title`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `documentDataId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `updatedAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `completedAt`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `deletedAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `teamId`                                                                                                             | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `templateId`                                                                                                         | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |