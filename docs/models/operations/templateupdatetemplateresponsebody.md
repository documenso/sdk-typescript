# TemplateUpdateTemplateResponseBody

Successful response

## Example Usage

```typescript
import { TemplateUpdateTemplateResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateUpdateTemplateResponseBody = {
  type: "PRIVATE",
  visibility: "MANAGER_AND_ABOVE",
  id: 221490,
  externalId: "<id>",
  title: "<value>",
  userId: 44252,
  teamId: 431258,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "TWO_FACTOR_AUTH",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1735293084004",
  updatedAt: "1740689395561",
  publicTitle: "<value>",
  publicDescription: "<value>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                       | [operations.TemplateUpdateTemplateTemplatesType](../../models/operations/templateupdatetemplatetemplatestype.md)             | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `visibility`                                                                                                                 | [operations.TemplateUpdateTemplateTemplatesVisibility](../../models/operations/templateupdatetemplatetemplatesvisibility.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `id`                                                                                                                         | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `externalId`                                                                                                                 | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `title`                                                                                                                      | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `userId`                                                                                                                     | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `teamId`                                                                                                                     | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `authOptions`                                                                                                                | [operations.TemplateUpdateTemplateAuthOptions](../../models/operations/templateupdatetemplateauthoptions.md)                 | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `templateDocumentDataId`                                                                                                     | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `createdAt`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `updatedAt`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `publicTitle`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `publicDescription`                                                                                                          | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |