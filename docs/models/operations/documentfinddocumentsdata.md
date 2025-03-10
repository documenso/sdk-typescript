# DocumentFindDocumentsData

## Example Usage

```typescript
import { DocumentFindDocumentsData } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindDocumentsData = {
  visibility: "ADMIN",
  status: "COMPLETED",
  source: "DOCUMENT",
  id: 1289.26,
  externalId: "<id>",
  userId: 3154.28,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "PASSKEY",
  },
  formValues: {
    "key": false,
  },
  title: "<value>",
  documentDataId: "<id>",
  createdAt: "1723861723224",
  updatedAt: "1741564980846",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 1020.44,
  templateId: 2088.76,
  user: {
    id: 1613.09,
    name: "<value>",
    email: "Deon.Frami@yahoo.com",
  },
  recipients: [
    {
      role: "CC",
      readStatus: "NOT_OPENED",
      signingStatus: "SIGNED",
      sendStatus: "SENT",
      id: 971.01,
      documentId: 8379.45,
      templateId: 960.98,
      email: "Jane.Moen-Ritchie28@hotmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: "ACCOUNT",
        actionAuth: "PASSKEY",
      },
      signingOrder: 1187.27,
      rejectionReason: "<value>",
    },
  ],
  team: {
    id: 3179.83,
    url: "https://better-poppy.name/",
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
| `recipients`                                                                                               | [operations.DocumentFindDocumentsRecipients](../../models/operations/documentfinddocumentsrecipients.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `team`                                                                                                     | [operations.DocumentFindDocumentsTeam](../../models/operations/documentfinddocumentsteam.md)               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |