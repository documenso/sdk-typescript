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
  userId: 9635.03,
  teamId: 265.31,
  authOptions: {
    globalAccessAuth: [
      "ACCOUNT",
    ],
    globalActionAuth: [
      "PASSWORD",
    ],
  },
  templateDocumentDataId: "<id>",
  createdAt: "1712865818564",
  updatedAt: "1735650192364",
  publicTitle: "<value>",
  publicDescription: "<value>",
  folderId: "<id>",
  useLegacyFieldInsertion: false,
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
| `folderId`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `useLegacyFieldInsertion`                                                                                                  | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |