# EnvelopeUpdateResponse

Successful response

## Example Usage

```typescript
import { EnvelopeUpdateResponse } from "@documenso/sdk-typescript/models/operations";

let value: EnvelopeUpdateResponse = {
  internalVersion: 8446.89,
  type: "TEMPLATE",
  status: "DRAFT",
  source: "TEMPLATE",
  visibility: "MANAGER_AND_ABOVE",
  templateType: "PUBLIC",
  id: "<id>",
  secondaryId: "<id>",
  externalId: null,
  createdAt: "1716579854330",
  updatedAt: "1735687893304",
  completedAt: null,
  deletedAt: "<value>",
  title: "<value>",
  authOptions: {
    globalAccessAuth: [],
    globalActionAuth: [
      "PASSWORD",
    ],
  },
  formValues: {},
  publicTitle: "<value>",
  publicDescription: "<value>",
  userId: 6755.26,
  teamId: 3485.82,
  folderId: "<id>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `internalVersion`                                                                                          | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | [operations.EnvelopeUpdateType](../../models/operations/envelopeupdatetype.md)                             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `status`                                                                                                   | [operations.EnvelopeUpdateStatus](../../models/operations/envelopeupdatestatus.md)                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `source`                                                                                                   | [operations.EnvelopeUpdateSource](../../models/operations/envelopeupdatesource.md)                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `visibility`                                                                                               | [operations.EnvelopeUpdateVisibilityResponse](../../models/operations/envelopeupdatevisibilityresponse.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `templateType`                                                                                             | [operations.EnvelopeUpdateTemplateType](../../models/operations/envelopeupdatetemplatetype.md)             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `secondaryId`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `externalId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `updatedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `completedAt`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `deletedAt`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `title`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `authOptions`                                                                                              | [operations.EnvelopeUpdateAuthOptions](../../models/operations/envelopeupdateauthoptions.md)               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `formValues`                                                                                               | Record<string, *operations.EnvelopeUpdateFormValues*>                                                      | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `publicTitle`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `publicDescription`                                                                                        | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `userId`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `teamId`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `folderId`                                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |