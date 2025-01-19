# TemplateUpdateTemplateResponseBody

Successful response

## Example Usage

```typescript
import { TemplateUpdateTemplateResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateUpdateTemplateResponseBody = {
  type: "PUBLIC",
  visibility: "MANAGER_AND_ABOVE",
  id: 298246,
  externalId: "<id>",
  title: "<value>",
  userId: 862560,
  teamId: 586277,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "PASSKEY",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1732521449445",
  updatedAt: "1737271792691",
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