# TemplateUpdateTemplateResponse

Successful response

## Example Usage

```typescript
import { TemplateUpdateTemplateResponse } from "@documenso/sdk-typescript/models/operations";

let value: TemplateUpdateTemplateResponse = {
  type: "PRIVATE",
  visibility: "MANAGER_AND_ABOVE",
  id: 2214.9,
  externalId: "<id>",
  title: "<value>",
  userId: 442.52,
  teamId: 4312.58,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "TWO_FACTOR_AUTH",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1736156949345",
  updatedAt: "1741553260902",
  publicTitle: "<value>",
  publicDescription: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                     | [operations.TemplateUpdateTemplateResponseType](../../models/operations/templateupdatetemplateresponsetype.md)             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `visibility`                                                                                                               | [operations.TemplateUpdateTemplateResponseVisibility](../../models/operations/templateupdatetemplateresponsevisibility.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
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