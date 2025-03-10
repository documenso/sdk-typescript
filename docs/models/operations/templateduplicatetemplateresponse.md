# TemplateDuplicateTemplateResponse

Successful response

## Example Usage

```typescript
import { TemplateDuplicateTemplateResponse } from "@documenso/sdk-typescript/models/operations";

let value: TemplateDuplicateTemplateResponse = {
  type: "PRIVATE",
  visibility: "MANAGER_AND_ABOVE",
  id: 9829.27,
  externalId: "<id>",
  title: "<value>",
  userId: 1440.58,
  teamId: 8996.52,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "ACCOUNT",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1715176087547",
  updatedAt: "1741539742088",
  publicTitle: "<value>",
  publicDescription: "<value>",
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