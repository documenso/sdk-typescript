# TemplateMoveTemplateToTeamResponseBody

Successful response

## Example Usage

```typescript
import { TemplateMoveTemplateToTeamResponseBody } from "@documenso/sdk-typescript/models/operations";

let value: TemplateMoveTemplateToTeamResponseBody = {
  type: "PUBLIC",
  visibility: "ADMIN",
  id: 196000,
  externalId: "<id>",
  title: "<value>",
  userId: 286329,
  teamId: 166741,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "ACCOUNT",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1720938918287",
  updatedAt: "1737211728683",
  publicTitle: "<value>",
  publicDescription: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.TemplateMoveTemplateToTeamType](../../models/operations/templatemovetemplatetoteamtype.md)               | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `visibility`                                                                                                         | [operations.TemplateMoveTemplateToTeamVisibility](../../models/operations/templatemovetemplatetoteamvisibility.md)   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `id`                                                                                                                 | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `externalId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `title`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `userId`                                                                                                             | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `teamId`                                                                                                             | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `authOptions`                                                                                                        | [operations.TemplateMoveTemplateToTeamAuthOptions](../../models/operations/templatemovetemplatetoteamauthoptions.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `templateDocumentDataId`                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `updatedAt`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `publicTitle`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `publicDescription`                                                                                                  | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |