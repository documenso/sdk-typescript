# DocumentFindData

## Example Usage

```typescript
import { DocumentFindData } from "@documenso/sdk-typescript/models/operations";

let value: DocumentFindData = {
  visibility: "ADMIN",
  status: "PENDING",
  source: "TEMPLATE_DIRECT_LINK",
  id: 1577.6,
  externalId: "<id>",
  userId: 200.66,
  authOptions: {
    globalAccessAuth: [
      "ACCOUNT",
    ],
    globalActionAuth: [],
  },
  formValues: {},
  title: "<value>",
  createdAt: "1728001866847",
  updatedAt: "1735618616447",
  completedAt: "<value>",
  deletedAt: null,
  teamId: 4867.45,
  folderId: "<id>",
  useLegacyFieldInsertion: true,
  envelopeId: "<id>",
  user: {
    id: 4968.94,
    name: "<value>",
    email: "Jabari.Gleichner99@yahoo.com",
  },
  recipients: [
    {
      envelopeId: "<id>",
      role: "CC",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "NOT_SENT",
      id: 2972.6,
      email: "Sabryna98@gmail.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: null,
      signedAt: null,
      authOptions: {
        accessAuth: [],
        actionAuth: [],
      },
      signingOrder: 839.49,
      rejectionReason: "<value>",
    },
  ],
  team: {
    id: 5369.77,
    url: "https://blank-fold.net",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `visibility`                                                                             | [operations.DocumentFindVisibility](../../models/operations/documentfindvisibility.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.DataStatus](../../models/operations/datastatus.md)                           | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `source`                                                                                 | [operations.DataSource](../../models/operations/datasource.md)                           | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `id`                                                                                     | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `externalId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | A custom external ID you can use to identify the document.                               |
| `userId`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | The ID of the user that created this document.                                           |
| `authOptions`                                                                            | [operations.DocumentFindAuthOptions](../../models/operations/documentfindauthoptions.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `formValues`                                                                             | Record<string, *operations.DocumentFindFormValues*>                                      | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `title`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `completedAt`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deletedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `teamId`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `folderId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `useLegacyFieldInsertion`                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `envelopeId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `documentDataId`                                                                         | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `templateId`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the template that the document was created from, if any.                       |
| `user`                                                                                   | [operations.DocumentFindUser](../../models/operations/documentfinduser.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `recipients`                                                                             | [operations.DocumentFindRecipient](../../models/operations/documentfindrecipient.md)[]   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `team`                                                                                   | [operations.DocumentFindTeam](../../models/operations/documentfindteam.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |