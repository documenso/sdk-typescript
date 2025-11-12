# DocumentDistributeResponse

Successful response

## Example Usage

```typescript
import { DocumentDistributeResponse } from "@documenso/sdk-typescript/models/operations";

let value: DocumentDistributeResponse = {
  visibility: "EVERYONE",
  status: "DRAFT",
  source: "TEMPLATE",
  id: 7596.34,
  externalId: "<id>",
  userId: 7124.75,
  authOptions: {
    globalAccessAuth: [],
    globalActionAuth: [
      "ACCOUNT",
    ],
  },
  formValues: {
    "key": 6982.35,
  },
  title: "<value>",
  createdAt: "1704272449510",
  updatedAt: "1735611513690",
  completedAt: "<value>",
  deletedAt: "<value>",
  teamId: 4166.81,
  folderId: "<id>",
  useLegacyFieldInsertion: true,
  envelopeId: "<id>",
  internalVersion: 7972.5,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `visibility`                                                                                         | [operations.DocumentDistributeVisibility](../../models/operations/documentdistributevisibility.md)   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [operations.DocumentDistributeStatus](../../models/operations/documentdistributestatus.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `source`                                                                                             | [operations.DocumentDistributeSource](../../models/operations/documentdistributesource.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `id`                                                                                                 | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `externalId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `userId`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `authOptions`                                                                                        | [operations.DocumentDistributeAuthOptions](../../models/operations/documentdistributeauthoptions.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `formValues`                                                                                         | Record<string, *operations.DocumentDistributeFormValues*>                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `title`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `completedAt`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `deletedAt`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `teamId`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `folderId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `useLegacyFieldInsertion`                                                                            | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `envelopeId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `internalVersion`                                                                                    | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `documentDataId`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `templateId`                                                                                         | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |