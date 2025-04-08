# DocumentMoveDocumentToTeamResponse

Successful response

## Example Usage

```typescript
import { DocumentMoveDocumentToTeamResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentMoveDocumentToTeamResponse = {
  visibility: "MANAGER_AND_ABOVE",
  status: "COMPLETED",
  source: "TEMPLATE",
  id: 5317.34,
  externalId: "<id>",
  userId: 6190.61,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "PASSKEY",
  },
  formValues: {
    "key": false,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1714360484976",
  updatedAt: "1744041325995",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 8022.32,
  templateId: 5805.01,
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