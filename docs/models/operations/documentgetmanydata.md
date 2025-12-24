# DocumentGetManyData

## Example Usage

```typescript
import { DocumentGetManyData } from "@documenso/sdk-typescript/models/operations";

let value: DocumentGetManyData = {
  visibility: "EVERYONE",
  status: "COMPLETED",
  source: "DOCUMENT",
  id: 8040.35,
  externalId: "<id>",
  userId: 526.89,
  authOptions: {
    globalAccessAuth: [],
    globalActionAuth: [],
  },
  formValues: {},
  title: "<value>",
  createdAt: "1712902917204",
  updatedAt: "1735637304095",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 2996.37,
  folderId: "<id>",
  useLegacyFieldInsertion: true,
  envelopeId: "<id>",
  internalVersion: 6750.47,
  user: {
    id: 6226.23,
    name: "<value>",
    email: "Zola.Gutkowski@yahoo.com",
  },
  recipients: [
    {
      envelopeId: "<id>",
      role: "SIGNER",
      readStatus: "OPENED",
      signingStatus: "NOT_SIGNED",
      sendStatus: "SENT",
      id: 3958.79,
      email: "Dalton.Huel61@yahoo.com",
      name: "<value>",
      token: "<value>",
      documentDeletedAt: "<value>",
      expired: "<value>",
      signedAt: "<value>",
      authOptions: {
        accessAuth: [
          "ACCOUNT",
        ],
        actionAuth: [],
      },
      signingOrder: null,
      rejectionReason: "<value>",
    },
  ],
  team: {
    id: 7630.95,
    url: "https://numb-spring.info",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `visibility`                                                                                   | [operations.DocumentGetManyVisibility](../../models/operations/documentgetmanyvisibility.md)   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [operations.DocumentGetManyStatus](../../models/operations/documentgetmanystatus.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `source`                                                                                       | [operations.DocumentGetManySource](../../models/operations/documentgetmanysource.md)           | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `externalId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `userId`                                                                                       | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `authOptions`                                                                                  | [operations.DocumentGetManyAuthOptions](../../models/operations/documentgetmanyauthoptions.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `formValues`                                                                                   | Record<string, *operations.DocumentGetManyFormValues*>                                         | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `title`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `completedAt`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `deletedAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `teamId`                                                                                       | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `folderId`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `useLegacyFieldInsertion`                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `envelopeId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `internalVersion`                                                                              | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `documentDataId`                                                                               | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `templateId`                                                                                   | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `user`                                                                                         | [operations.DocumentGetManyUser](../../models/operations/documentgetmanyuser.md)               | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `recipients`                                                                                   | [operations.DocumentGetManyRecipient](../../models/operations/documentgetmanyrecipient.md)[]   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `team`                                                                                         | [operations.DocumentGetManyTeam](../../models/operations/documentgetmanyteam.md)               | :heavy_check_mark:                                                                             | N/A                                                                                            |