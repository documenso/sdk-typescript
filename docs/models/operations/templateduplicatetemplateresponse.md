# TemplateDuplicateTemplateResponse

Successful response

## Example Usage

```typescript
import { TemplateDuplicateTemplateResponse } from "@documenso/sdk-typescript/models/operations";

let value: TemplateDuplicateTemplateResponse = {
  type: "PRIVATE",
  visibility: "EVERYONE",
  id: 1503.76,
  externalId: "<id>",
  title: "<value>",
  userId: 5245.05,
  teamId: 6567.53,
  authOptions: {
    globalAccessAuth: [
      "ACCOUNT",
    ],
    globalActionAuth: [
      "PASSWORD",
    ],
  },
  templateDocumentDataId: "<id>",
  createdAt: "1721178151008",
  updatedAt: "1735648518775",
  publicTitle: "<value>",
  publicDescription: "<value>",
  folderId: "<id>",
  useLegacyFieldInsertion: true,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.TemplateDuplicateTemplateType](../../models/operations/templateduplicatetemplatetype.md)               | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `visibility`                                                                                                       | [operations.TemplateDuplicateTemplateVisibility](../../models/operations/templateduplicatetemplatevisibility.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `id`                                                                                                               | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `externalId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `title`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `userId`                                                                                                           | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `teamId`                                                                                                           | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `authOptions`                                                                                                      | [operations.TemplateDuplicateTemplateAuthOptions](../../models/operations/templateduplicatetemplateauthoptions.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `templateDocumentDataId`                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `createdAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `publicTitle`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `publicDescription`                                                                                                | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `folderId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `useLegacyFieldInsertion`                                                                                          | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |