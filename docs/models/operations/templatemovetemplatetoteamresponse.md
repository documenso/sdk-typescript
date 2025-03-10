# TemplateMoveTemplateToTeamResponse

Successful response

## Example Usage

```typescript
import { TemplateMoveTemplateToTeamResponse } from "@documenso/sdk-typescript/models/operations";

let value: TemplateMoveTemplateToTeamResponse = {
  type: "PRIVATE",
  visibility: "EVERYONE",
  id: 1458.41,
  externalId: "<id>",
  title: "<value>",
  userId: 6001.85,
  teamId: 2250.01,
  authOptions: {
    globalAccessAuth: "ACCOUNT",
    globalActionAuth: "TWO_FACTOR_AUTH",
  },
  templateDocumentDataId: "<id>",
  createdAt: "1720340440163",
  updatedAt: "1741488647271",
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