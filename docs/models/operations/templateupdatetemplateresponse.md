# TemplateUpdateTemplateResponse

Successful response

## Example Usage

```typescript
import { TemplateUpdateTemplateResponse } from "@documenso/sdk-typescript/models/operations";

let value: TemplateUpdateTemplateResponse = {
  type: "PUBLIC",
  visibility: "ADMIN",
  id: 3618.86,
  externalId: "<id>",
  title: "<value>",
  userId: 5399.75,
  teamId: 9635.03,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "TWO_FACTOR_AUTH",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1713372499431",
  updatedAt: "1744021610314",
  publicTitle: "<value>",
  publicDescription: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.TemplateUpdateTemplateTypeResponse](../../models/operations/templateupdatetemplatetyperesponse.md)             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `visibility`                                                                                                               | [operations.TemplateUpdateTemplateVisibilityResponse](../../models/operations/templateupdatetemplatevisibilityresponse.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `id`                                                                                                                       | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `externalId`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `title`                                                                                                                    | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `userId`                                                                                                                   | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `teamId`                                                                                                                   | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `authOptions`                                                                                                              | [operations.TemplateUpdateTemplateAuthOptions](../../models/operations/templateupdatetemplateauthoptions.md)               | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `templateDocumentDataId`                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `createdAt`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `updatedAt`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `publicTitle`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `publicDescription`                                                                                                        | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |