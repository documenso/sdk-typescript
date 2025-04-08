# DocumentFindDocumentsData

## Example Usage

```typescript
import { DocumentFindDocumentsData } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindDocumentsData = {
  visibility: "EVERYONE",
  status: "DRAFT",
  source: "DOCUMENT",
  id: 5328.71,
  externalId: "<id>",
  userId: 1048.73,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "TWO_FACTOR_AUTH",
  },
  formValues: {
    "key": false,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1714411546378",
  updatedAt: "1743987562539",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 9009.09,
  templateId: 7399.64,
  user: {
    id: 7230.88,
    name: "<value>",
    email: "Wiley64@hotmail.com",
  },
  recipients: [
    {
      role: "ASSISTANT",
      readStatus: "NOT_OPENED",
      signingStatus: "REJECTED",
      sendStatus: "SENT",
      id: 2710.15,
      documentId: 2113.88,
      templateId: 2199.97,
      email: "Oren.Kiehn@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "ACCOUNT",
      },
      signingOrder: 7776.99,
      rejectionReason: "<value>",
    },
  ],
  team: {
    id: 4462.5,
    url: "https://clear-ruin.biz",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                               | [operations.DocumentFindDocumentsVisibility](../../models/operations/documentfinddocumentsvisibility.md)   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `status`                                                                                                   | [operations.DataStatus](../../models/operations/datastatus.md)                                             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `source`                                                                                                   | [operations.DataSource](../../models/operations/datasource.md)                                             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `externalId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | A custom external ID you can use to identify the document.                                                 |
| `userId`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the user that created this document.                                                             |
| `authOptions`                                                                                              | [operations.DocumentFindDocumentsAuthOptions](../../models/operations/documentfinddocumentsauthoptions.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `formValues`                                                                                               | Record<string, *operations.DocumentFindDocumentsFormValues*>                                               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `title`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `documentDataId`                                                                                           | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `completedAt`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `deletedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `teamId`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `templateId`                                                                                               | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `user`                                                                                                     | [operations.DocumentFindDocumentsUser](../../models/operations/documentfinddocumentsuser.md)               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `recipients`                                                                                               | [operations.DocumentFindDocumentsRecipient](../../models/operations/documentfinddocumentsrecipient.md)[]   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `team`                                                                                                     | [operations.DocumentFindDocumentsTeam](../../models/operations/documentfinddocumentsteam.md)               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |