# TemplateDuplicateTemplateResponseBody

Successful response

## Example Usage

```typescript
import { TemplateDuplicateTemplateResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateDuplicateTemplateResponseBody = {
  type: "PRIVATE",
  visibility: "MANAGER_AND_ABOVE",
  id: 713718,
  externalId: "<id>",
  title: "<value>",
  userId: 915408,
  teamId: 146583,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "TWO_FACTOR_AUTH",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1718863908718",
  updatedAt: "1737358831867",
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